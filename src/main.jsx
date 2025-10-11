import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { useTranslation } from 'react-i18next'
import './index.css'
import './i18n/config' // Initialize i18n BEFORE App
import App from './App.jsx'

// Loading fallback component
const LoadingFallback = () => {
  const { t } = useTranslation(['common']);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-4">
          <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
        <h1 className="text-3xl font-bold text-white mb-2">{t('common:app.name')}</h1>
        <p className="text-blue-100">{t('common:labels.loadingTranslations')}</p>
      </div>
    </div>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<LoadingFallback />}>
      <App />
    </Suspense>
  </StrictMode>,
)
