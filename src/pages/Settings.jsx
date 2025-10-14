import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useProgressStore } from '../store/useProgressStore';
import { storageService } from '../services/storage';
import { ChevronLeft, Download, Upload, AlertCircle, CheckCircle, Trash2 } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import LanguageSwitcher from '../components/LanguageSwitcher';

export default function Settings() {
  const { t } = useTranslation(['settings', 'common']);
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [exportStatus, setExportStatus] = useState(null);
  const [importStatus, setImportStatus] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const { getAllProgress, totalXP, streak, achievements, statistics } = useProgressStore();

  // Export all progress data
  const handleExport = async () => {
    try {
      setExportStatus({ type: 'loading', message: t('settings:dataManagement.export.preparingMessage') });

      // Gather all data
      const allProgress = await storageService.getAllCardProgress();
      const allSessions = await storageService.getAllSessions();
      const progressData = await getAllProgress();

      const exportData = {
        version: '1.0.0',
        exportDate: new Date().toISOString(),
        data: {
          cardProgress: allProgress,
          sessions: allSessions,
          progress: progressData,
          statistics: {
            totalXP,
            streak,
            achievements,
            statistics
          }
        }
      };

      // Create blob and download
      const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `javamaster-backup-${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      setExportStatus({ type: 'success', message: t('settings:dataManagement.export.successMessage') });
      setTimeout(() => setExportStatus(null), 5000);
    } catch (error) {
      console.error('Export failed:', error);
      setExportStatus({ type: 'error', message: t('settings:dataManagement.export.errorMessage') });
      setTimeout(() => setExportStatus(null), 5000);
    }
  };

  // Import progress data
  const handleImport = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    try {
      setImportStatus({ type: 'loading', message: t('settings:dataManagement.import.readingMessage') });

      const text = await file.text();
      const importData = JSON.parse(text);

      // Validate data structure
      if (!importData.version || !importData.data) {
        throw new Error(t('settings:dataManagement.import.invalidFileError'));
      }

      setImportStatus({ type: 'loading', message: t('settings:dataManagement.import.restoringMessage') });

      // Import card progress
      if (importData.data.cardProgress) {
        for (const progress of importData.data.cardProgress) {
          await storageService.saveCardProgress(progress);
        }
      }

      // Import sessions
      if (importData.data.sessions) {
        for (const session of importData.data.sessions) {
          await storageService.saveSession(session);
        }
      }

      setImportStatus({
        type: 'success',
        message: t('settings:dataManagement.import.successMessage', {
          cards: importData.data.cardProgress?.length || 0,
          sessions: importData.data.sessions?.length || 0
        })
      });

      // Reload the page to refresh all stores
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.error('Import failed:', error);
      setImportStatus({
        type: 'error',
        message: t('settings:dataManagement.import.errorMessage', { error: error.message })
      });
      setTimeout(() => setImportStatus(null), 5000);
    }

    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Delete all data
  const handleDeleteAllData = async () => {
    try {
      await storageService.clearAllData();
      setShowDeleteConfirm(false);

      // Reload the page
      window.location.reload();
    } catch (error) {
      console.error('Failed to delete data:', error);
      alert(t('settings:dataManagement.delete.errorMessage'));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/')}
            >
              <ChevronLeft size={20} />
              {t('common:buttons.back')}
            </Button>
            <LanguageSwitcher />
          </div>

          <h1 className="text-4xl font-bold text-gray-800 mb-2">{t('settings:header.title')}</h1>
          <p className="text-gray-600">{t('settings:header.subtitle')}</p>
        </div>

        {/* Export/Import Section */}
        <Card className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('settings:dataManagement.title')}</h2>

          <div className="space-y-6">
            {/* Export */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">{t('settings:dataManagement.export.title')}</h3>
              <p className="text-gray-600 mb-4">
                {t('settings:dataManagement.export.description')}
              </p>
              <Button
                variant="primary"
                size="md"
                onClick={handleExport}
                disabled={exportStatus?.type === 'loading'}
              >
                <Download size={18} className="mr-2" />
                {exportStatus?.type === 'loading' ? t('settings:dataManagement.export.buttonLoading') : t('settings:dataManagement.export.button')}
              </Button>

              {exportStatus && exportStatus.type !== 'loading' && (
                <div className={`mt-3 p-3 rounded-lg flex items-center gap-2 ${
                  exportStatus.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                }`}>
                  {exportStatus.type === 'success' ? (
                    <CheckCircle size={18} />
                  ) : (
                    <AlertCircle size={18} />
                  )}
                  <span>{exportStatus.message}</span>
                </div>
              )}
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200"></div>

            {/* Import */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">{t('settings:dataManagement.import.title')}</h3>
              <p className="text-gray-600 mb-4">
                {t('settings:dataManagement.import.description')}
              </p>

              <input
                ref={fileInputRef}
                type="file"
                accept=".json"
                onChange={handleImport}
                className="hidden"
              />

              <Button
                variant="outline"
                size="md"
                onClick={() => fileInputRef.current?.click()}
                disabled={importStatus?.type === 'loading'}
              >
                <Upload size={18} className="mr-2" />
                {importStatus?.type === 'loading' ? t('settings:dataManagement.import.buttonLoading') : t('settings:dataManagement.import.button')}
              </Button>

              {importStatus && importStatus.type !== 'loading' && (
                <div className={`mt-3 p-3 rounded-lg flex items-center gap-2 ${
                  importStatus.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                }`}>
                  {importStatus.type === 'success' ? (
                    <CheckCircle size={18} />
                  ) : (
                    <AlertCircle size={18} />
                  )}
                  <span>{importStatus.message}</span>
                </div>
              )}
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200"></div>

            {/* Delete All Data */}
            <div>
              <h3 className="text-lg font-semibold text-red-700 mb-2">{t('settings:dataManagement.delete.title')}</h3>
              <p className="text-gray-600 mb-4">
                {t('settings:dataManagement.delete.description')}
              </p>

              {!showDeleteConfirm ? (
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => setShowDeleteConfirm(true)}
                  className="border-red-300 text-red-600 hover:bg-red-50"
                >
                  <Trash2 size={18} className="mr-2" />
                  {t('settings:dataManagement.delete.button')}
                </Button>
              ) : (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-800 font-semibold mb-3">
                    {t('settings:dataManagement.delete.confirmTitle')}
                  </p>
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setShowDeleteConfirm(false)}
                    >
                      {t('settings:dataManagement.delete.cancelButton')}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleDeleteAllData}
                      className="bg-red-600 text-white hover:bg-red-700 border-red-600"
                    >
                      {t('settings:dataManagement.delete.confirmButton')}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Card>

        {/* Current Stats */}
        <Card>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('settings:statistics.title')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">{totalXP}</div>
              <div className="text-sm text-gray-600">{t('settings:statistics.totalXP')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">{streak.current}</div>
              <div className="text-sm text-gray-600">{t('settings:statistics.dayStreak')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">{achievements.length}</div>
              <div className="text-sm text-gray-600">{t('settings:statistics.achievements')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">{statistics.totalCardsReviewed}</div>
              <div className="text-sm text-gray-600">{t('settings:statistics.cardsReviewed')}</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
