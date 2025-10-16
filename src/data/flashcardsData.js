// Comprehensive Java Interview Flashcards with Detailed Answers

export const flashcardsData = [
  // OOP & Classes
  {
    id: 'oop-001',
    question: "What is a class in Java?",
    answer: "A class is a blueprint or template for creating objects. It defines the structure (fields/variables) and behavior (methods) that objects of that class will have.",
    explanation: "Classes are the foundation of OOP in Java. They encapsulate data and methods that operate on that data.",
    translations: {
      tr: {
        question: "Java'da sınıf (class) nedir?",
        answer: "Sınıf, nesneleri oluşturmak için kullanılan bir taslak veya şablondur. O sınıftan oluşturulacak nesnelerin yapısını (alanlar/değişkenler) ve davranışını (metodlar) tanımlar.",
        explanation: "Sınıflar Java'da OOP'nin temelidir. Veriyi ve o veri üzerinde işlem yapan metodları kapsüllerler."
      }
    },
    codeExample: {
      code: `public class Car {
    // Fields (data)
    private String brand;
    private int year;

    // Constructor
    public Car(String brand, int year) {
        this.brand = brand;
        this.year = year;
    }

    // Method (behavior)
    public void displayInfo() {
        System.out.println(brand + " " + year);
    }
}`,
      language: 'java'
    },
    topic: 'oop',
    difficulty: 'junior',
    tags: ['class', 'oop', 'basics'],    realWorldUse: 'Classes model real-world entities like User, Product, Order in applications.'
  },
  {
    id: 'oop-002',
    question: "What is an object in Java?",
    answer: "An object is an instance of a class. It is a concrete entity created from a class blueprint, with its own state (values of fields) and can invoke the methods defined in its class.",
    explanation: "Objects are created using the \"new\" keyword and represent specific instances with actual data.",
    translations: {
      tr: {
        question: "Java'da nesne (object) nedir?",
        answer: "Nesne, bir sınıfın örneğidir. Sınıf taslağından oluşturulan, kendi durumuna (alan değerleri) sahip ve sınıfında tanımlı metodları çağırabilen somut bir varlıktır.",
        explanation: "Nesneler \"new\" anahtar kelimesi kullanılarak oluşturulur ve gerçek verilerle belirli örnekleri temsil ederler."
      }
    },
    codeExample: {
      code: `// Creating objects from Car class
Car myCar = new Car("Toyota", 2023);
Car yourCar = new Car("Honda", 2022);

// Each object has its own state
myCar.displayInfo();  // Toyota 2023
yourCar.displayInfo(); // Honda 2022`,
      language: 'java'
    },
    topic: 'oop',
    difficulty: 'junior',
    tags: ['object', 'oop', 'instance'],  },
  {
    id: 'oop-003',
    question: "What is a method in Java?",
    answer: "A method is a block of code that performs a specific task. It contains a set of statements that execute when the method is called. Methods define the behavior of objects.",
    explanation: "Methods have a return type, name, parameters (optional), and body. They promote code reusability.",
    translations: {
      tr: {
        question: "Java'da metod (method) nedir?",
        answer: "Metod, belirli bir görevi yerine getiren bir kod bloğudur. Metod çağrıldığında çalışan bir dizi ifade içerir. Metodlar nesnelerin davranışını tanımlar.",
        explanation: "Metodlar bir dönüş tipi, isim, parametreler (opsiyonel) ve gövdeye sahiptir. Kod yeniden kullanılabilirliğini artırırlar."
      }
    },
    codeExample: {
      code: `public class Calculator {
    // Method with return type and parameters
    public int add(int a, int b) {
        return a + b;
    }

    // Method with no return (void)
    public void printResult(int result) {
        System.out.println("Result: " + result);
    }
}`,
      language: 'java'
    },
    topic: 'oop',
    difficulty: 'junior',
    tags: ['method', 'oop'],  },
  {
    id: 'oop-004',
    question: "What is encapsulation in Java?",
    answer: "Encapsulation is the bundling of data (fields) and methods that operate on that data within a single unit (class), and restricting direct access to some components using access modifiers.",
    explanation: "It hides internal implementation details and exposes only necessary parts through public methods (getters/setters).",
    translations: {
      tr: {
        question: "Java'da kapsülleme (encapsulation) nedir?",
        answer: "Kapsülleme, veriyi (alanlar) ve o veri üzerinde işlem yapan metodları tek bir birim (sınıf) içinde bir araya getirme ve erişim belirleyicilerini kullanarak bazı bileşenlere doğrudan erişimi kısıtlamadır.",
        explanation: "İç uygulama detaylarını gizler ve yalnızca gerekli kısımları public metodlar (getter/setter) aracılığıyla açığa çıkarır."
      }
    },
    codeExample: {
      code: `public class BankAccount {
    // Private fields - hidden from outside
    private double balance;
    private String accountNumber;

    // Public methods - controlled access
    public double getBalance() {
        return balance;
    }

    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }

    public boolean withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            return true;
        }
        return false;
    }
}`,
      language: 'java'
    },
    topic: 'oop',
    difficulty: 'junior',
    tags: ['encapsulation', 'oop', 'access-modifiers'],    realWorldUse: 'Protects sensitive data like passwords, account balances, and enforces business rules.'
  },
  {
    id: 'oop-005',
    question: "What is method overloading in Java?",
    answer: "Method overloading is when multiple methods in the same class have the same name but different parameters (different number, type, or order of parameters). The return type alone is not sufficient.",
    explanation: "Overloading provides flexibility to call methods with different arguments. It is resolved at compile-time (static polymorphism).",
    translations: {
      tr: {
        question: "Java'da metod aşırı yüklemesi (method overloading) nedir?",
        answer: "Metod aşırı yüklemesi, aynı sınıfta aynı isme sahip ancak farklı parametrelere (farklı sayı, tip veya sırada parametreler) sahip birden fazla metod olmasıdır. Sadece dönüş tipi yeterli değildir.",
        explanation: "Aşırı yükleme, metodları farklı argümanlarla çağırma esnekliği sağlar. Derleme zamanında çözümlenir (statik polimorfizm)."
      }
    },
    codeExample: {
      code: `public class Printer {
    // Same method name, different parameters
    public void print(String message) {
        System.out.println(message);
    }

    public void print(int number) {
        System.out.println(number);
    }

    public void print(String message, int times) {
        for (int i = 0; i < times; i++) {
            System.out.println(message);
        }
    }
}`,
      language: 'java'
    },
    topic: 'oop',
    difficulty: 'junior',
    tags: ['overloading', 'polymorphism', 'methods'],    commonPitfalls: ['Cannot overload by return type only', 'Ambiguous calls with similar parameter types']
  },
  {
    id: 'oop-006',
    question: "What is method overriding in Java?",
    answer: "Method overriding is when a subclass provides a specific implementation of a method that is already defined in its superclass. The method must have the same signature (name, parameters) and same or covariant return type (subtype of original return type).",
    explanation: "Overriding enables runtime polymorphism. Use @Override annotation to ensure correctness. Since Java 5, overriding methods can return a subtype of the original return type (covariant return).",
    translations: {
      tr: {
        question: "Java'da metod geçersiz kılma (method overriding) nedir?",
        answer: "Metod geçersiz kılma, bir alt sınıfın üst sınıfında zaten tanımlı olan bir metodun özel bir implementasyonunu sağlamasıdır. Metod aynı imzaya (isim, parametreler) ve aynı veya kovaryan dönüş tipine (orijinal dönüş tipinin alt tipi) sahip olmalıdır.",
        explanation: "Geçersiz kılma, çalışma zamanı polimorfizmi sağlar. Doğruluğu garanti etmek için @Override anotasyonunu kullanın. Java 5'ten beri, geçersiz kılan metodlar orijinal dönüş tipinin bir alt tipini döndürebilir (kovaryan dönüş)."
      }
    },
    codeExample: {
      code: `class Animal {
    public void makeSound() {
        System.out.println("Some sound");
    }

    // Method with return type
    public Animal getOffspring() {
        return new Animal();
    }
}

class Dog extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Bark");
    }

    // Covariant return type (Java 5+)
    @Override
    public Dog getOffspring() {  // Dog is subtype of Animal
        return new Dog();  // More specific than Animal
    }
}

// Runtime polymorphism
Animal animal = new Dog();
animal.makeSound(); // Output: Bark
Animal offspring = animal.getOffspring();  // Returns Dog`,
      language: 'java'
    },
    topic: 'oop',
    difficulty: 'mid',
    tags: ['overriding', 'polymorphism', 'inheritance', 'covariant-return'],    realWorldUse: 'Payment processing systems override processPayment() for different payment types (Credit, Debit, PayPal). Clone methods return specific type instead of Object.'
  },
  {
    id: 'oop-007',
    question: "What is the difference between method overloading and method overriding in Java?",
    answer: "Overloading: same class, same method name, different parameters, compile-time. Overriding: inheritance required, same signature, subclass provides new implementation, runtime.",
    explanation: "Overloading is static polymorphism (resolved at compile-time). Overriding is dynamic polymorphism (resolved at runtime).",
    translations: {
      tr: {
        question: "Java'da metod aşırı yüklemesi (overloading) ile metod geçersiz kılma (overriding) arasındaki fark nedir?",
        answer: "Aşırı yükleme: aynı sınıf, aynı metod ismi, farklı parametreler, derleme zamanı. Geçersiz kılma: kalıtım gerekir, aynı imza, alt sınıf yeni implementasyon sağlar, çalışma zamanı.",
        explanation: "Aşırı yükleme statik polimorfizmdir (derleme zamanında çözümlenir). Geçersiz kılma dinamik polimorfizmdir (çalışma zamanında çözümlenir)."
      }
    },
    codeExample: {
      code: `// OVERLOADING - Same class
class Calculator {
    int add(int a, int b) { return a + b; }
    double add(double a, double b) { return a + b; }
}

// OVERRIDING - Parent-child relationship
class Parent {
    void display() { System.out.println("Parent"); }
}
class Child extends Parent {
    @Override
    void display() { System.out.println("Child"); }
}`,
      language: 'java'
    },
    topic: 'oop',
    difficulty: 'mid',
    tags: ['overloading', 'overriding', 'polymorphism'],  },
  {
    id: 'oop-008',
    question: "What is the `super` keyword in Java?",
    answer: "The super keyword refers to the parent class. It is used to: 1) Call parent class constructor, 2) Access parent class methods, 3) Access parent class fields (if not private).",
    explanation: "super() must be the first statement in a constructor. Use super.method() to call parent methods.",
    translations: {
      tr: {
        question: "Java'da `super` anahtar kelimesi nedir?",
        answer: "super anahtar kelimesi üst sınıfı işaret eder. Şu amaçlarla kullanılır: 1) Üst sınıf yapıcısını çağırmak, 2) Üst sınıf metodlarına erişmek, 3) Üst sınıf alanlarına erişmek (private değilse).",
        explanation: "super() bir yapıcıda ilk ifade olmalıdır. Üst sınıf metodlarını çağırmak için super.metod() kullanın."
      }
    },
    codeExample: {
      code: `class Vehicle {
    String type;

    Vehicle(String type) {
        this.type = type;
    }

    void start() {
        System.out.println("Vehicle starting");
    }
}

class Car extends Vehicle {
    String brand;

    Car(String type, String brand) {
        super(type);  // Call parent constructor
        this.brand = brand;
    }

    @Override
    void start() {
        super.start();  // Call parent method
        System.out.println("Car engine starting");
    }
}`,
      language: 'java'
    },
    topic: 'oop',
    difficulty: 'mid',
    tags: ['super', 'inheritance', 'constructor'],  },
  {
    id: 'oop-009',
    question: "What is the difference between `this()` and `super()` in Java?",
    answer: "this() calls another constructor in the same class (constructor chaining). super() calls the parent class constructor. Both must be the first statement in a constructor.",
    explanation: "You cannot use both this() and super() in the same constructor.",
    translations: {
      tr: {
        question: "Java'da `this()` ve `super()` arasındaki fark nedir?",
        answer: "this() aynı sınıftaki başka bir yapıcıyı çağırır (yapıcı zincirleme). super() üst sınıf yapıcısını çağırır. Her ikisi de bir yapıcıda ilk ifade olmalıdır.",
        explanation: "Aynı yapıcıda hem this() hem de super() kullanamazsınız."
      }
    },
    codeExample: {
      code: `class Employee {
    String name;
    int id;

    // Constructor 1
    Employee(String name) {
        this(name, 0);  // Calls constructor 2
    }

    // Constructor 2
    Employee(String name, int id) {
        this.name = name;
        this.id = id;
    }
}

class Manager extends Employee {
    String department;

    Manager(String name, String dept) {
        super(name);  // Calls parent constructor
        this.department = dept;
    }
}`,
      language: 'java'
    },
    topic: 'oop',
    difficulty: 'mid',
    tags: ['this', 'super', 'constructor'],  },
  {
    id: 'oop-010',
    question: "What is an abstract class in Java?",
    answer: "An abstract class is a class declared with the \"abstract\" keyword that cannot be instantiated. It can have abstract methods (without body) and concrete methods (with body).",
    explanation: "Abstract classes provide partial implementation and force subclasses to implement abstract methods.",
    translations: {
      tr: {
        question: "Java'da soyut sınıf (abstract class) nedir?",
        answer: "Soyut sınıf, \"abstract\" anahtar kelimesiyle tanımlanan ve örneklendirilemez bir sınıftır. Soyut metodlar (gövdesiz) ve somut metodlar (gövdeli) içerebilir.",
        explanation: "Soyut sınıflar kısmi implementasyon sağlar ve alt sınıfları soyut metodları uygulamaya zorlar."
      }
    },
    codeExample: {
      code: `abstract class Shape {
    String color;

    // Constructor in abstract class
    Shape(String color) {
        this.color = color;
    }

    // Abstract method - no body
    abstract double calculateArea();

    // Concrete method
    void display() {
        System.out.println("Color: " + color);
    }
}

class Circle extends Shape {
    double radius;

    Circle(String color, double radius) {
        super(color);
        this.radius = radius;
    }

    @Override
    double calculateArea() {
        return Math.PI * radius * radius;
    }
}

// Shape s = new Shape("Red"); // ERROR: Cannot instantiate
Shape s = new Circle("Red", 5.0); // OK`,
      language: 'java'
    },
    topic: 'oop',
    difficulty: 'mid',
    tags: ['abstract', 'class', 'inheritance'],  },
  {
    id: 'oop-011',
    question: "What is an abstract method in Java?",
    answer: "An abstract method is a method declared with the \"abstract\" keyword that has no implementation (no body). It must be implemented by non-abstract subclasses.",
    explanation: "Abstract methods define a contract that subclasses must fulfill. They can only exist in abstract classes or interfaces.",
    translations: {
      tr: {
        question: "Java'da soyut metod (abstract method) nedir?",
        answer: "Soyut metod, \"abstract\" anahtar kelimesiyle tanımlanan ve implementasyonu olmayan (gövdesiz) bir metoddur. Soyut olmayan alt sınıflar tarafından uygulanmalıdır.",
        explanation: "Soyut metodlar alt sınıfların yerine getirmesi gereken bir sözleşme tanımlar. Yalnızca soyut sınıflarda veya arayüzlerde bulunabilirler."
      }
    },
    codeExample: {
      code: `abstract class Animal {
    // Abstract method - must be implemented
    abstract void makeSound();

    // Concrete method
    void sleep() {
        System.out.println("Sleeping...");
    }
}

class Dog extends Animal {
    // Must implement abstract method
    @Override
    void makeSound() {
        System.out.println("Bark");
    }
}`,
      language: 'java'
    },
    topic: 'oop',
    difficulty: 'mid',
    tags: ['abstract', 'method'],  },
  {
    id: 'oop-012',
    question: "Can we create a constructor in an abstract class in Java?",
    answer: "Yes, abstract classes can have constructors. They are called when a concrete subclass is instantiated, used to initialize fields in the abstract class.",
    explanation: "Abstract class constructors cannot be called directly but are invoked through subclass constructors using super().",
    translations: {
      tr: {
        question: "Java'da soyut sınıfta yapıcı (constructor) oluşturabilir miyiz?",
        answer: "Evet, soyut sınıfların yapıcıları olabilir. Somut bir alt sınıf örneklendirildiğinde çağrılırlar ve soyut sınıftaki alanları başlatmak için kullanılırlar.",
        explanation: "Soyut sınıf yapıcıları doğrudan çağrılamaz ancak super() kullanılarak alt sınıf yapıcıları aracılığıyla çağrılır."
      }
    },
    codeExample: {
      code: `abstract class Vehicle {
    String brand;

    // Constructor in abstract class
    Vehicle(String brand) {
        this.brand = brand;
        System.out.println("Vehicle constructor called");
    }

    abstract void start();
}

class Car extends Vehicle {
    Car(String brand) {
        super(brand);  // Calls abstract class constructor
        System.out.println("Car constructor called");
    }

    @Override
    void start() {
        System.out.println(brand + " car starting");
    }
}`,
      language: 'java'
    },
    topic: 'oop',
    difficulty: 'mid',
    tags: ['abstract', 'constructor'],  },
  {
    id: 'oop-013',
    question: "What is the difference between an abstract class and an interface?",
    answer: "Abstract class: can have concrete methods, constructors, instance variables, single inheritance. Interface (Java 8+): can have abstract, default, and static methods, no constructors, only constants (public static final), multiple inheritance. Pre-Java 8 interfaces only had abstract methods.",
    explanation: "Use abstract class for \"is-a\" relationship with shared code and state. Use interface for \"can-do\" capability that unrelated classes can implement. Java 8+ interfaces with default methods blur this distinction but interfaces still cannot have instance variables or constructors.",
    translations: {
      tr: {
        question: "Soyut sınıf (abstract class) ile arayüz (interface) arasındaki fark nedir?",
        answer: "Soyut sınıf: somut metodlar, yapıcılar, örnek değişkenler içerebilir, tekli kalıtım. Arayüz (Java 8+): soyut, default ve statik metodlar içerebilir, yapıcı yok, sadece sabitler (public static final), çoklu kalıtım. Java 8 öncesi arayüzler sadece soyut metodlara sahipti.",
        explanation: "Paylaşılan kod ve durum ile \"is-a\" ilişkisi için soyut sınıf kullanın. İlgisiz sınıfların uygulayabileceği \"can-do\" yetenek için arayüz kullanın. Java 8+ default metodlu arayüzler bu ayrımı bulanıklaştırır ancak arayüzlerin hala örnek değişkenleri veya yapıcıları olamaz."
      }
    },
    codeExample: {
      code: `// Abstract Class
abstract class Animal {
    String name;  // Instance variable

    Animal(String name) {  // Constructor
        this.name = name;
    }

    abstract void makeSound();

    void eat() {  // Concrete method
        System.out.println(name + " is eating");
    }
}

// Interface (Java 8+)
interface Flyable {
    // Constants (public static final)
    int MAX_HEIGHT = 10000;

    // Abstract method (public abstract)
    void fly();

    // Default method (Java 8+)
    default void glide() {
        System.out.println("Gliding...");
    }

    // Static method (Java 8+)
    static void checkAltitude(int altitude) {
        System.out.println("Altitude: " + altitude);
    }
}

// Class can extend ONE abstract class
// but implement MULTIPLE interfaces
class Bird extends Animal implements Flyable {
    Bird(String name) {
        super(name);
    }

    @Override
    void makeSound() {
        System.out.println("Chirp");
    }

    @Override
    public void fly() {
        System.out.println("Flying at " + MAX_HEIGHT);
    }

    // Can optionally override default method
    @Override
    public void glide() {
        System.out.println(name + " is gliding gracefully");
    }
}`,
      language: 'java'
    },
    topic: 'oop',
    difficulty: 'mid',
    tags: ['abstract', 'interface', 'inheritance', 'java8', 'default-methods'],  },
  {
    id: 'oop-014',
    question: "What is a constructor in Java?",
    answer: "A constructor is a special method with the same name as the class, used to initialize objects. It has no return type and is automatically called when an object is created using \"new\".",
    explanation: "If no constructor is defined, Java provides a default no-argument constructor.",
    translations: {
      tr: {
        question: "Java'da yapıcı (constructor) nedir?",
        answer: "Yapıcı, sınıfla aynı isme sahip, nesneleri başlatmak için kullanılan özel bir metoddur. Dönüş tipi yoktur ve \"new\" kullanılarak bir nesne oluşturulduğunda otomatik olarak çağrılır.",
        explanation: "Eğer hiçbir yapıcı tanımlanmazsa, Java argümansız varsayılan bir yapıcı sağlar."
      }
    },
    codeExample: {
      code: `public class Student {
    String name;
    int age;

    // No-arg constructor
    public Student() {
        name = "Unknown";
        age = 0;
    }

    // Parameterized constructor
    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
}

// Usage
Student s1 = new Student();  // Calls no-arg constructor
Student s2 = new Student("John", 20);  // Calls parameterized`,
      language: 'java'
    },
    topic: 'oop',
    difficulty: 'junior',
    tags: ['constructor', 'initialization'],  },
  {
    id: 'oop-015',
    question: "How do you call one constructor from another constructor in Java?",
    answer: "Use this() to call another constructor in the same class. It must be the first statement in the constructor. This is called constructor chaining.",
    explanation: "Constructor chaining reduces code duplication and ensures consistent initialization.",
    translations: {
      tr: {
        question: "Java'da bir yapıcıdan başka bir yapıcıyı nasıl çağırırsınız?",
        answer: "Aynı sınıftaki başka bir yapıcıyı çağırmak için this() kullanın. Yapıcıda ilk ifade olmalıdır. Buna yapıcı zincirleme denir.",
        explanation: "Yapıcı zincirleme kod tekrarını azaltır ve tutarlı başlatma sağlar."
      }
    },
    codeExample: {
      code: `public class Rectangle {
    int width, height;

    // Constructor 1
    public Rectangle() {
        this(10, 10);  // Calls constructor 2
    }

    // Constructor 2
    public Rectangle(int side) {
        this(side, side);  // Calls constructor 3
    }

    // Constructor 3
    public Rectangle(int width, int height) {
        this.width = width;
        this.height = height;
    }
}`,
      language: 'java'
    },
    topic: 'oop',
    difficulty: 'mid',
    tags: ['constructor', 'this'],  },
  {
    id: 'oop-016',
    question: "What is the \"IS-A\" relationship in Java?",
    answer: "IS-A represents inheritance relationship where a subclass \"is a\" type of its superclass. Implemented using \"extends\" keyword. Example: Dog IS-A Animal.",
    explanation: "IS-A relationship enables polymorphism and code reuse through inheritance.",
    translations: {
      tr: {
        question: "Java'da \"IS-A\" ilişkisi nedir?",
        answer: "IS-A, bir alt sınıfın üst sınıfının bir türü \"olduğu\" kalıtım ilişkisini temsil eder. \"extends\" anahtar kelimesi ile uygulanır. Örnek: Köpek IS-A Hayvan.",
        explanation: "IS-A ilişkisi kalıtım yoluyla polimorfizm ve kod yeniden kullanımını sağlar."
      }
    },
    codeExample: {
      code: `class Animal {
    void eat() {
        System.out.println("Eating");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("Barking");
    }
}

// Dog IS-A Animal
Dog dog = new Dog();
dog.eat();   // Inherited from Animal
dog.bark();  // Own method

// Polymorphism
Animal animal = new Dog();  // Valid: Dog IS-A Animal
animal.eat();  // Works`,
      language: 'java'
    },
    topic: 'oop',
    difficulty: 'mid',
    tags: ['inheritance', 'is-a', 'relationship'],  },
  {
    id: 'oop-017',
    question: "What is the \"HAS-A\" relationship in Java?",
    answer: "HAS-A represents composition/aggregation where a class contains an object of another class as a member. Example: Car HAS-A Engine.",
    explanation: "HAS-A promotes code reuse through composition instead of inheritance.",
    translations: {
      tr: {
        question: "Java'da \"HAS-A\" ilişkisi nedir?",
        answer: "HAS-A, bir sınıfın başka bir sınıfın nesnesini üye olarak içerdiği kompozisyon/agregasyon ilişkisini temsil eder. Örnek: Araba HAS-A Motor.",
        explanation: "HAS-A, kalıtım yerine kompozisyon yoluyla kod yeniden kullanımını teşvik eder."
      }
    },
    codeExample: {
      code: `class Engine {
    void start() {
        System.out.println("Engine starting");
    }
}

class Car {
    // Car HAS-A Engine
    private Engine engine;

    public Car() {
        engine = new Engine();
    }

    public void startCar() {
        engine.start();
        System.out.println("Car started");
    }
}`,
      language: 'java'
    },
    topic: 'oop',
    difficulty: 'mid',
    tags: ['composition', 'has-a', 'relationship'],  },
  {
    id: 'oop-018',
    question: "What is the `instanceof` operator in Java?",
    answer: "instanceof is a binary operator that tests whether an object is an instance of a specific class or implements an interface. Returns boolean true/false.",
    explanation: "Used for type checking before casting to avoid ClassCastException.",
    translations: {
      tr: {
        question: "Java'da `instanceof` operatörü nedir?",
        answer: "instanceof, bir nesnenin belirli bir sınıfın örneği olup olmadığını veya bir arayüzü uygulayıp uygulamadığını test eden ikili bir operatördür. Boolean true/false döndürür.",
        explanation: "ClassCastException'dan kaçınmak için dönüştürmeden önce tip kontrolü için kullanılır."
      }
    },
    codeExample: {
      code: `class Animal {}
class Dog extends Animal {}
class Cat extends Animal {}

Animal animal = new Dog();

// Type checking
if (animal instanceof Dog) {
    Dog dog = (Dog) animal;  // Safe cast
    System.out.println("It's a dog");
}

System.out.println(animal instanceof Animal);  // true
System.out.println(animal instanceof Dog);     // true
System.out.println(animal instanceof Cat);     // false`,
      language: 'java'
    },
    topic: 'oop',
    difficulty: 'mid',
    tags: ['instanceof', 'type-checking'],  },

  // Java Basics
  {
    id: 'basics-001',
    question: "Why is Java platform-independent?",
    answer: "Java is platform-independent because Java code is compiled into bytecode, which can run on any platform with a JVM (Java Virtual Machine). The JVM interprets the bytecode for the specific operating system.",
    explanation: "This \"Write Once, Run Anywhere\" (WORA) principle makes Java highly portable across different systems.",
    translations: {
      tr: {
        question: "Java neden platform bağımsızdır?",
        answer: "Java platform bağımsızdır çünkü Java kodu, JVM (Java Virtual Machine) olan herhangi bir platformda çalışabilen bytecode'a derlenir. JVM, bytecode'u spesifik işletim sistemi için yorumlar.",
        explanation: "Bu \"Bir Kere Yaz, Her Yerde Çalıştır\" (WORA) prensibi, Java'yı farklı sistemler arasında son derece taşınabilir yapar."
      }
    },
    codeExample: {
      code: `// Java Source Code (.java)
public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello");
    }
}

// Compilation:
// javac Hello.java → Hello.class (bytecode)
//
// Execution on any OS:
// java Hello (JVM interprets bytecode)`,
      language: 'java'
    },
    topic: 'basics',
    difficulty: 'junior',
    tags: ['jvm', 'bytecode', 'platform-independence'],  },
  {
    id: 'basics-002',
    question: "What is the JIT compiler in Java?",
    answer: "JIT (Just-In-Time) compiler is part of the JVM that compiles bytecode into native machine code at runtime. It improves performance by converting frequently executed bytecode into optimized native code.",
    explanation: "JIT compilation happens during execution, allowing for dynamic optimization based on runtime behavior and profiling. Hot code paths are compiled first.",
    translations: {
      tr: {
        question: "Java'da JIT derleyicisi nedir?",
        answer: "JIT (Just-In-Time) derleyicisi, çalışma zamanında bytecode'u yerel makine koduna derleyen JVM'nin bir parçasıdır. Sık çalıştırılan bytecode'u optimize edilmiş yerel koda dönüştürerek performansı artırır.",
        explanation: "JIT derleme, çalışma sırasında gerçekleşir ve çalışma zamanı davranışı ve profillemeye dayalı dinamik optimizasyona izin verir. Sıcak kod yolları önce derlenir."
      }
    },
    topic: 'jvm',
    difficulty: 'mid',
    tags: ['jit', 'performance', 'compilation'],  },
  {
    id: 'basics-003',
    question: "What is bytecode in Java?",
    answer: "Bytecode is the intermediate representation of Java code after compilation. It is platform-independent and stored in .class files. The JVM interprets or compiles bytecode into machine-specific instructions.",
    explanation: "Bytecode is the key to Java's portability - the same bytecode can run on any system with a compatible JVM.",
    translations: {
      tr: {
        question: "Java'da bytecode nedir?",
        answer: "Bytecode, derleme sonrasında Java kodunun ara temsilidir. Platform bağımsızdır ve .class dosyalarında saklanır. JVM, bytecode'u makineye özgü talimatlara yorumlar veya derler.",
        explanation: "Bytecode, Java'nın taşınabilirliğinin anahtarıdır - aynı bytecode uyumlu bir JVM olan herhangi bir sistemde çalışabilir."
      }
    },
    topic: 'jvm',
    difficulty: 'junior',
    tags: ['bytecode', 'compilation', 'jvm'],  },
  {
    id: 'basics-004',
    question: "What is the difference between C++ and Java?",
    answer: "Key differences: Java is platform-independent, C++ is platform-dependent. Java has automatic garbage collection, C++ has manual memory management. Java supports single inheritance (classes), C++ supports multiple. Java has no pointers, C++ has pointers.",
    explanation: "Java prioritizes safety and portability, while C++ offers more control and performance.",
    translations: {
      tr: {
        question: "C++ ve Java arasındaki fark nedir?",
        answer: "Temel farklar: Java platform bağımsız, C++ platform bağımlıdır. Java otomatik çöp toplamaya sahip, C++ manuel bellek yönetimine sahiptir. Java tekli kalıtımı (sınıflar) destekler, C++ çokluyu destekler. Java'da pointer yok, C++'ta pointer var.",
        explanation: "Java güvenlik ve taşınabilirliğe öncelik verirken, C++ daha fazla kontrol ve performans sunar."
      }
    },
    topic: 'basics',
    difficulty: 'mid',
    tags: ['comparison', 'languages'],  },
  {
    id: 'basics-005',
    question: "Why is the `main()` method public, static, and void in Java?",
    answer: "Public: JVM can access it from anywhere. Static: JVM can call it without creating an object. Void: main() doesn't return anything to the JVM.",
    explanation: "This signature is a contract between the programmer and JVM for program entry point.",
    translations: {
      tr: {
        question: "Java'da `main()` metodu neden public, static ve void'dir?",
        answer: "Public: JVM'nin her yerden erişebilmesi için. Static: JVM'nin nesne oluşturmadan çağırabilmesi için. Void: main() JVM'ye hiçbir şey döndürmediği için.",
        explanation: "Bu imza, programcı ile JVM arasında program giriş noktası için bir sözleşmedir."
      }
    },
    codeExample: {
      code: `public class MyApp {
    // public - accessible by JVM
    // static - no object needed
    // void - no return value
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}`,
      language: 'java'
    },
    topic: 'basics',
    difficulty: 'junior',
    tags: ['main', 'method', 'modifiers'],  },
  {
    id: 'basics-006',
    question: "What is the difference between `length` and `length()` in Java?",
    answer: "length is a property of arrays that returns the number of elements. length() is a method of String class that returns the number of characters.",
    explanation: "Arrays use property (length), Strings use method (length()) due to their different implementations.",
    translations: {
      tr: {
        question: "Java'da `length` ve `length()` arasındaki fark nedir?",
        answer: "length, dizilerin eleman sayısını döndüren bir özelliğidir. length(), String sınıfının karakter sayısını döndüren bir metodudur.",
        explanation: "Diziler özellik kullanır (length), String'ler metod kullanır (length()) çünkü farklı şekilde implemente edilmişlerdir."
      }
    },
    codeExample: {
      code: `// Array - property
int[] numbers = {1, 2, 3, 4, 5};
System.out.println(numbers.length);  // 5

// String - method
String text = "Hello";
System.out.println(text.length());   // 5`,
      language: 'java'
    },
    topic: 'basics',
    difficulty: 'junior',
    tags: ['array', 'string', 'length'],  },
  {
    id: 'basics-007',
    question: "What is ASCII code?",
    answer: "ASCII (American Standard Code for Information Interchange) is a character encoding standard that represents text using 7-bit integers (0-127). Each character has a unique numeric code.",
    explanation: "ASCII includes letters (A-Z, a-z), digits (0-9), punctuation, and control characters.",
    translations: {
      tr: {
        question: "ASCII kodu nedir?",
        answer: "ASCII (American Standard Code for Information Interchange), metni 7-bit tam sayılar (0-127) kullanarak temsil eden bir karakter kodlama standardıdır. Her karakterin benzersiz bir sayısal kodu vardır.",
        explanation: "ASCII harfleri (A-Z, a-z), rakamları (0-9), noktalama işaretlerini ve kontrol karakterlerini içerir."
      }
    },
    codeExample: {
      code: `// ASCII values
char ch = 'A';
int ascii = ch;  // 65

System.out.println((int)'A');  // 65
System.out.println((int)'a');  // 97
System.out.println((int)'0');  // 48
System.out.println((char)65);  // A`,
      language: 'java'
    },
    topic: 'basics',
    difficulty: 'junior',
    tags: ['ascii', 'encoding', 'characters']
  },
  {
    id: 'basics-008',
    question: "What is Unicode?",
    answer: "Unicode is a universal character encoding standard that supports characters from all writing systems worldwide. Java uses Unicode (UTF-16) to represent characters, supporting up to 1,114,112 characters.",
    explanation: "Unicode extends beyond ASCII to include international characters, emojis, and symbols.",
    translations: {
      tr: {
        question: "Unicode nedir?",
        answer: "Unicode, dünya çapındaki tüm yazı sistemlerinden karakterleri destekleyen evrensel bir karakter kodlama standardıdır. Java, karakterleri temsil etmek için Unicode (UTF-16) kullanır ve 1.114.112 karaktere kadar destek sağlar.",
        explanation: "Unicode, uluslararası karakterleri, emojileri ve sembolleri içerecek şekilde ASCII'nin ötesine uzanır."
      }
    },
    codeExample: {
      code: `// Unicode characters
char ch1 = 'A';           // ASCII
char ch2 = '\u0041';      // Unicode for 'A"
char ch3 = '€';           // Euro symbol
char ch4 = '\u20AC';      // Unicode for €
char ch5 = '你';          // Chinese character

System.out.println(ch2);  // A
System.out.println(ch4);  // €`,
      language: 'java'
    },
    topic: 'basics',
    difficulty: 'junior',
    tags: ['unicode', 'encoding', 'characters']
  },
  {
    id: 'basics-009',
    question: "What is the difference between a character constant and a string constant in Java?",
    answer: "Character constant: single character enclosed in single quotes ('A'), primitive type char. String constant: sequence of characters in double quotes (\"Hello\"), String object (reference type).",
    explanation: "Character is 2 bytes, String is an object with multiple characters.",
    translations: {
      tr: {
        question: "Java'da karakter sabiti (character constant) ile string sabiti arasındaki fark nedir?",
        answer: "Karakter sabiti: tek tırnak içinde tek karakter ('A'), primitive tip char. String sabiti: çift tırnak içinde karakter dizisi (\"Hello\"), String nesnesi (referans tipi).",
        explanation: "Karakter 2 byte'tır, String ise birden fazla karaktere sahip bir nesnedir."
      }
    },
    codeExample: {
      code: `// Character constant - single quotes
char ch = 'A';        // Primitive type
// char invalid = 'AB';  // ERROR

// String constant - double quotes
String str = "Hello"; // Reference type
String single = "A";  // Valid

System.out.println(ch);   // A
System.out.println(str);  // Hello`,
      language: 'java'
    },
    topic: 'basics',
    difficulty: 'junior',
    tags: ['char', 'string', 'literals']
  },
  {
    id: 'basics-010',
    question: "What are constants and how do you create constants in Java?",
    answer: "Constants are variables whose values cannot be changed once assigned. Create using \"final\" keyword. Convention: use UPPER_CASE names for constants.",
    explanation: "Constants provide immutability and make code more maintainable by avoiding magic numbers.",
    translations: {
      tr: {
        question: "Sabitler nedir ve Java'da sabitleri nasıl oluşturursunuz?",
        answer: "Sabitler, bir kez atandıktan sonra değerleri değiştirilemeyen değişkenlerdir. \"final\" anahtar kelimesi kullanılarak oluşturulur. Kural: sabitler için BUYUK_HARF isimleri kullanın.",
        explanation: "Sabitler değişmezlik sağlar ve sihirli sayılardan kaçınarak kodu daha sürdürülebilir yapar."
      }
    },
    codeExample: {
      code: `public class Constants {
    // Class constant
    public static final double PI = 3.14159;
    public static final int MAX_SIZE = 100;

    public void example() {
        // Local constant
        final int DAYS_IN_WEEK = 7;

        // PI = 3.14; // ERROR: Cannot reassign

        System.out.println(PI * 2);
    }
}`,
      language: 'java'
    },
    topic: 'basics',
    difficulty: 'junior',
    tags: ['final', 'constants', 'variables']
  },
  {
    id: 'basics-011',
    question: "What is the difference between `>>` and `>>>` operators in Java?",
    answer: ">> is signed right shift (preserves sign bit, fills with MSB). >>> is unsigned right shift (fills with zeros). Both shift bits to the right.",
    explanation: ">> keeps negative numbers negative. >>> treats number as unsigned.",
    translations: {
      tr: {
        question: "Java'da `>>` ve `>>>` operatörleri arasındaki fark nedir?",
        answer: ">> işaretli sağa kaydırma'dır (işaret bitini korur, MSB ile doldurur). >>> işaretsiz sağa kaydırma'dır (sıfırlarla doldurur). Her ikisi de bitleri sağa kaydırır.",
        explanation: ">> negatif sayıları negatif tutar. >>> sayıyı işaretsiz olarak ele alır."
      }
    },
    codeExample: {
      code: `int num = -8;  // Binary: 11111111...11111000

// Signed right shift (>>)
int result1 = num >> 2;
// Result: -2 (sign preserved)

// Unsigned right shift (>>>)
int result2 = num >>> 2;
// Result: large positive number

System.out.println(result1);  // -2
System.out.println(result2);  // 1073741822`,
      language: 'java'
    },
    topic: 'basics',
    difficulty: 'mid',
    tags: ['bitwise', 'operators', 'shift']
  },

  // Static & Initializers
  {
    id: 'static-001',
    question: "What are static blocks and static initializers in Java?",
    answer: "Static blocks are used to initialize static variables or execute code when the class is loaded. They execute once when the class is first loaded into memory, before any object creation or static method calls.",
    explanation: "Static blocks run in the order they appear in the class. Useful for complex static initialization.",
    translations: {
      tr: {
        question: "Java'da statik bloklar (static blocks) ve statik başlatıcılar nedir?",
        answer: "Statik bloklar, statik değişkenleri başlatmak veya sınıf yüklendiğinde kod çalıştırmak için kullanılır. Sınıf belleğe ilk kez yüklendiğinde, nesne oluşturma veya statik metod çağrılarından önce bir kez çalışırlar.",
        explanation: "Statik bloklar sınıfta göründükleri sırayla çalışırlar. Karmaşık statik başlatma için yararlıdır."
      }
    },
    codeExample: {
      code: `public class Database {
    static Connection conn;
    static String url;

    // Static block - runs once when class loads
    static {
        System.out.println("Static block executed");
        url = "jdbc:mysql://localhost:3306";
        conn = createConnection(url);
    }

    // Multiple static blocks possible
    static {
        System.out.println("Second static block");
    }

    static Connection createConnection(String url) {
        // Connection logic
        return null;
    }
}`,
      language: 'java'
    },
    topic: 'basics',
    difficulty: 'mid',
    tags: ['static', 'initialization', 'block'],  },

  // Access Modifiers & Packages
  {
    id: 'access-001',
    question: "What are identifiers in Java?",
    answer: "Identifiers are names given to variables, methods, classes, packages, and interfaces. They must start with a letter, $, or _, and can contain letters, digits, $, or _.",
    explanation: "Identifiers are case-sensitive and cannot be Java keywords.",
    translations: {
      tr: {
        question: "Java'da tanımlayıcılar (identifiers) nedir?",
        answer: "Tanımlayıcılar, değişkenlere, metodlara, sınıflara, paketlere ve arayüzlere verilen isimlerdir. Bir harf, $, veya _ ile başlamalı ve harf, rakam, $, veya _ içerebilirler.",
        explanation: "Tanımlayıcılar büyük-küçük harf duyarlıdır ve Java anahtar kelimeleri olamazlar."
      }
    },
    codeExample: {
      code: `// Valid identifiers
int age;
String userName;
double _salary;
int $price;
String myVariable123;

// Invalid identifiers
// int 123abc;     // Cannot start with digit
// int my-var;     // Hyphen not allowed
// int class;      // Keyword cannot be used`,
      language: 'java'
    },
    topic: 'basics',
    difficulty: 'junior',
    tags: ['identifiers', 'naming', 'syntax']
  },
  {
    id: 'access-002',
    question: "What are access modifiers in Java?",
    answer: "Access modifiers control the visibility/accessibility of classes, methods, and variables. Four types: public (accessible everywhere), private (same class only), protected (same package + subclasses), default (same package).",
    explanation: "Access modifiers enforce encapsulation and control how code components interact.",
    translations: {
      tr: {
        question: "Java'da erişim belirleyicileri (access modifiers) nedir?",
        answer: "Erişim belirleyicileri, sınıfların, metodların ve değişkenlerin görünürlüğünü/erişilebilirliğini kontrol eder. Dört tip: public (her yerden erişilebilir), private (sadece aynı sınıf), protected (aynı paket + alt sınıflar), default (aynı paket).",
        explanation: "Erişim belirleyicileri kapsüllemeyi uygular ve kod bileşenlerinin nasıl etkileşime girdiğini kontrol eder."
      }
    },
    codeExample: {
      code: `public class AccessDemo {
    public int publicVar;       // Accessible everywhere
    private int privateVar;     // Same class only
    protected int protectedVar; // Package + subclasses
    int defaultVar;             // Package only (default)

    private void privateMethod() {
        // Only accessible within this class
    }

    public void publicMethod() {
        privateMethod(); // OK: same class
    }
}`,
      language: 'java'
    },
    topic: 'basics',
    difficulty: 'mid',
    tags: ['access-modifiers', 'visibility', 'encapsulation'],  },
  {
    id: 'access-003',
    question: "What is the `final` access modifier in Java?",
    answer: "final prevents modification. For variables: cannot reassign. For methods: cannot override. For classes: cannot extend (inherit from).",
    explanation: "final ensures immutability and prevents inheritance/overriding when needed.",
    translations: {
      tr: {
        question: "Java'da `final` erişim belirleyicisi nedir?",
        answer: "final değişikliği önler. Değişkenler için: yeniden atama yapılamaz. Metodlar için: geçersiz kılınamaz (override). Sınıflar için: genişletilemez (kalıtım alınamaz).",
        explanation: "final değişmezliği sağlar ve gerektiğinde kalıtım/geçersiz kılmayı önler."
      }
    },
    codeExample: {
      code: `// Final variable
final int MAX = 100;
// MAX = 200; // ERROR

// Final method
class Parent {
    final void display() {
        System.out.println("Cannot override");
    }
}

// Final class
final class Utility {
    // Cannot be extended
}

// class Sub extends Utility {} // ERROR`,
      language: 'java'
    },
    topic: 'basics',
    difficulty: 'mid',
    tags: ['final', 'modifier', 'immutability']
  },
  {
    id: 'access-004',
    question: "What are packages in Java?",
    answer: "Packages are namespaces that organize related classes and interfaces. They prevent name conflicts and control access. Use \"package\" keyword at top of file.",
    explanation: "Packages create a hierarchical structure (e.g., java.util, java.io) and enable access control.",
    translations: {
      tr: {
        question: "Java'da paketler (packages) nedir?",
        answer: "Paketler, ilişkili sınıfları ve arayüzleri organize eden isim alanlarıdır. İsim çakışmalarını önler ve erişimi kontrol ederler. Dosyanın başında \"package\" anahtar kelimesi kullanılır.",
        explanation: "Paketler hiyerarşik bir yapı oluşturur (ör. java.util, java.io) ve erişim kontrolü sağlar."
      }
    },
    codeExample: {
      code: `// File: com/myapp/models/User.java
package com.myapp.models;

public class User {
    private String name;
}

// File: com/myapp/Main.java
package com.myapp;

import com.myapp.models.User;  // Import from package

public class Main {
    public static void main(String[] args) {
        User user = new User();
    }
}`,
      language: 'java'
    },
    topic: 'basics',
    difficulty: 'junior',
    tags: ['package', 'namespace', 'organization']
  },
  {
    id: 'access-005',
    question: "Can we have multiple classes in a single file in Java?",
    answer: "Yes, but only ONE public class per file, and the filename must match the public class name. You can have multiple non-public (default) classes in the same file.",
    explanation: "This rule helps maintain code organization and predictable file structure.",
    translations: {
      tr: {
        question: "Java'da `import` ifadesi nedir?",
        answer: "import, başka paketlerden sınıfları ve arayüzleri kullanmak için getirir. Tam nitelikli isimleri kullanmaktan kaçınır. İki tip: spesifik import (tek sınıf) ve wildcard import (paket içindeki tümü).",
        explanation: "import kodu daha temiz ve okunabilir yapar. java.lang paketi otomatik olarak import edilir."
      }
    },
    codeExample: {
      code: `// File: MyApp.java
public class MyApp {
    public static void main(String[] args) {
        Helper h = new Helper();
        h.help();
    }
}

class Helper {  // Not public - allowed
    void help() {
        System.out.println("Helping");
    }
}

class Utility {  // Another non-public class - allowed
    void doSomething() {}
}`,
      language: 'java'
    },
    topic: 'basics',
    difficulty: 'mid',
    tags: ['class', 'file', 'structure']
  },
  {
    id: 'access-006',
    question: "What access modifiers are allowed for a top-level class in Java?",
    answer: "Only \"public\" or default (no modifier) are allowed for top-level classes. Cannot use private or protected for top-level classes (only for nested classes).",
    explanation: "Top-level classes need to be accessible at package level minimum.",
    translations: {
      tr: {
        question: "Java'da static import nedir?",
        answer: "static import, başka sınıflardan statik üyelere (metodlar, değişkenler) sınıf adı öneki olmadan erişim sağlar. İmport edilir ve doğrudan kullanılır.",
        explanation: "static import Math.PI veya System.out gibi statik üyelerle çalışırken kodu basitleştirir."
      }
    },
    codeExample: {
      code: `// File: MyClass.java

// Valid: public class
public class MyClass {
}

// Valid: default (package-private) class
class AnotherClass {
}

// Invalid: cannot use private or protected
// private class InvalidClass {}
// protected class InvalidClass2 {}`,
      language: 'java'
    },
    topic: 'basics',
    difficulty: 'mid',
    tags: ['access-modifiers', 'class', 'visibility']
  },
  {
    id: 'access-007',
    question: "Can we have more than one package statement in a source file in Java?",
    answer: "No, only ONE package statement is allowed per source file, and it must be the first statement (before imports and class declarations).",
    explanation: "A class can only belong to one package to avoid ambiguity.",
    translations: {
      tr: {
        question: "Java'da varsayılan (default) erişim belirleyicisi nedir?",
        answer: "Varsayılan (paket-private): hiçbir erişim belirleyici belirtilmediğinde. Sadece aynı paket içinden erişilebilir. Farklı paketlerden erişilemez.",
        explanation: "Varsayılan erişim pakete-özgü sınıflar ve metodlar için kullanışlıdır."
      }
    },
    codeExample: {
      code: `// Valid
package com.myapp.models;  // First statement

import java.util.List;

public class User {}

// Invalid
// package com.myapp.models;
// package com.other.pkg;  // ERROR: Duplicate package`,
      language: 'java'
    },
    topic: 'basics',
    difficulty: 'junior',
    tags: ['package', 'syntax']
  },
  {
    id: 'access-008',
    question: "Can we define a package statement after an import statement in Java?",
    answer: "No, the package statement must be the FIRST statement in a Java file, before any import statements.",
    explanation: "Package declaration establishes namespace before importing other classes.",
    translations: {
      tr: {
        question: "Bir sınıf public veya default (paket-private) olarak bildirilebilir mi?",
        answer: "Evet. Üst seviye sınıflar sadece public veya default olabilir. private ve protected üst seviye sınıflar için geçerli değildir (ancak iç sınıflar için kullanılabilir).",
        explanation: "Dosya başına bir public sınıf, ve dosya adı public sınıf adıyla eşleşmelidir."
      }
    },
    codeExample: {
      code: `// Correct order
package com.myapp;           // 1. Package first
import java.util.ArrayList;  // 2. Then imports
                             // 3. Then class
public class MyClass {}

// Wrong order - Compilation error
// import java.util.ArrayList;
// package com.myapp;  // ERROR`,
      language: 'java'
    },
    topic: 'basics',
    difficulty: 'junior',
    tags: ['package', 'import', 'syntax']
  },
  {
    id: 'access-009',
    question: "What does `null` mean in Java?",
    answer: "null is a special literal that represents the absence of a value (no object). It is the default value for reference type variables. Attempting to call methods on null causes NullPointerException.",
    explanation: "null can be assigned to any reference type but not primitive types.",
    translations: {
      tr: {
        question: "protected erişim belirleyicisi nedir?",
        answer: "protected üyeler: aynı paket içinde erişilebilir + farklı paketlerdeki alt sınıflar. private'dan daha az kısıtlayıcı ancak public'ten daha kısıtlayıcı.",
        explanation: "protected, alt sınıfların üst sınıf üyelerine erişmesi gereken kalıtım için kullanışlıdır."
      }
    },
    codeExample: {
      code: `String str = null;  // Valid
Integer num = null;  // Valid
// int x = null;     // ERROR: primitives cannot be null

if (str == null) {
    str = "Default";  // Avoid NullPointerException
}

// str.length();  // NullPointerException if str is null

// Safe navigation
if (str != null) {
    System.out.println(str.length());
}`,
      language: 'java'
    },
    topic: 'basics',
    difficulty: 'junior',
    tags: ['null', 'reference', 'exceptions'],
    commonPitfalls: ['Forgetting null checks leads to NullPointerException', 'Cannot call methods on null']
  },

  // Coding Standards
  {
    id: 'standards-001',
    question: "What are the Java coding standards for classes?",
    answer: "Class names should be nouns in PascalCase (UpperCamelCase). First letter of each word capitalized. Descriptive and meaningful names. Example: Student, BankAccount, HttpServletRequest.",
    explanation: "Consistent naming improves code readability and maintainability.",
    translations: {
      tr: {
        question: "Java'da adlandırma kuralları nelerdir?",
        answer: "Sınıflar: PascalCase (MyClass). Metodlar/değişkenler: camelCase (myMethod). Sabitler: UPPER_SNAKE_CASE (MAX_VALUE). Paketler: küçük harf (com.myapp). Tanımlayıcı ve anlamlı isimler kullanın.",
        explanation: "Tutarlı adlandırma kuralları kodu okunabilir ve sürdürülebilir yapar."
      }
    },
    codeExample: {
      code: `// Good class names
public class Student {}
public class BankAccount {}
public class OrderProcessor {}
public class DatabaseConnection {}

// Poor class names
public class student {}  // Should be PascalCase
public class Abc {}      // Not descriptive
public class data1 {}    // Not meaningful`,
      language: 'java'
    },
    topic: 'basics',
    difficulty: 'junior',
    tags: ['coding-standards', 'naming']
  },
  {
    id: 'standards-002',
    question: "What are the Java coding standards for interfaces?",
    answer: "Interface names should be adjectives in PascalCase, often ending with \"able\" or \"ible\". Examples: Runnable, Serializable, Comparable. Or nouns like List, Map.",
    explanation: "Interfaces describe capabilities or contracts that classes can implement.",
    translations: {
      tr: {
        question: "camelCase ve PascalCase arasındaki fark nedir?",
        answer: "camelCase: ilk kelime küçük harfle başlar (myVariableName). PascalCase: tüm kelimeler büyük harfle başlar (MyClassName). Java metodlar/değişkenler için camelCase, sınıflar/arayüzler için PascalCase kullanır.",
        explanation: "Bu kurallar Java kodunda standart kurallardır ve tutarlılık sağlar."
      }
    },
    codeExample: {
      code: `// Adjective interfaces (capabilities)
public interface Runnable {}
public interface Serializable {}
public interface Comparable {}
public interface Cloneable {}

// Noun interfaces (types)
public interface List {}
public interface Map {}
public interface Connection {}`,
      language: 'java'
    },
    topic: 'basics',
    difficulty: 'junior',
    tags: ['coding-standards', 'naming', 'interface']
  },
  {
    id: 'standards-003',
    question: "What are the Java coding standards for methods?",
    answer: "Method names should be verbs in camelCase. First word lowercase, subsequent words capitalized. Descriptive of action. Examples: getName(), calculateTotal(), processOrder().",
    explanation: "Method names should clearly indicate what action they perform.",
    translations: {
      tr: {
        question: "Java'da hangi adlandırma kuralları en iyi uygulamalardır?",
        answer: "Anlamlı isimler kullanın. Kısaltmadan kaçının. Boolean'lar için is/has öneki. Getter'lar için get, setter'lar için set. Sabitler için UPPER_CASE. Tek karakterli değişkenlerden kaçının (döngü sayaçları hariç).",
        explanation: "İyi adlandırma kendini-açıklayan kod sağlar ve yorumlara olan ihtiyacı azaltır."
      }
    },
    codeExample: {
      code: `public class User {
    // Good method names
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public boolean isActive() { return active; }
    public void processPayment() { /* ... */ }
    public double calculateTotal() { return 0.0; }

    // Poor method names
    public String n() {}  // Not descriptive
    public void DoSomething() {}  // Should be camelCase
    public void Method1() {}  // Not meaningful
}`,
      language: 'java'
    },
    topic: 'basics',
    difficulty: 'junior',
    tags: ['coding-standards', 'naming', 'methods']
  },
  {
    id: 'standards-004',
    question: "What are the Java coding standards for variables?",
    answer: "Variable names should be nouns in camelCase. First word lowercase, subsequent words capitalized. Descriptive and meaningful. Examples: firstName, totalAmount, studentList.",
    explanation: "Clear variable names make code self-documenting.",
    translations: {
      tr: {
        question: "Java'da interface adlandırma kuralları nelerdir?",
        answer: "Arayüzler PascalCase kullanır, sıklıkla sıfatlar veya yetenekleri tanımlayan isimler (Serializable, Runnable, Comparable). \"I\" önekinden veya \"Interface\" son ekinden kaçının (yeni kuralda).",
        explanation: "Modern Java arayüzleri, implementasyon detaylarını açığa çıkarmadan yeteneği temsil eder."
      }
    },
    codeExample: {
      code: `public class Example {
    // Good variable names
    private String firstName;
    private int totalAmount;
    private List<Student> studentList;
    private boolean isActive;

    // Poor variable names
    private String s;      // Not descriptive
    private int Num;       // Should be camelCase
    private String var1;   // Not meaningful
}`,
      language: 'java'
    },
    topic: 'basics',
    difficulty: 'junior',
    tags: ['coding-standards', 'naming', 'variables']
  },
  {
    id: 'standards-005',
    question: "What are the Java coding standards for constants?",
    answer: "Constants should be in UPPER_SNAKE_CASE (all uppercase with underscores). Declared as \"static final\". Examples: MAX_SIZE, DEFAULT_COLOR, PI.",
    explanation: "Uppercase with underscores clearly identifies constants in code.",
    translations: {
      tr: {
        question: "Java package adlandırma kuralları nelerdir?",
        answer: "Paketler tamamen küçük harf kullanır. Ters alan adı kuralı (com.company.project). Noktalar hiyerarşiyi ayırır. Alt çizgi veya özel karakterlerden kaçının. Kısa, anlamlı isimler.",
        explanation: "Paket adları evrensel olarak benzersiz olmalı ve kuruluş yapısını yansıtmalıdır."
      }
    },
    codeExample: {
      code: `public class Constants {
    // Good constant names
    public static final int MAX_SIZE = 100;
    public static final double PI = 3.14159;
    public static final String DEFAULT_COLOR = "Blue";
    public static final long TIMEOUT_MS = 5000L;

    // Poor constant names
    public static final int maxSize = 100;  // Should be uppercase
    public static final double pi = 3.14;   // Should be uppercase
}`,
      language: 'java'
    },
    topic: 'basics',
    difficulty: 'junior',
    tags: ['coding-standards', 'naming', 'constants']
  },

  // Exception Handling
  {
    id: 'exception-001',
    question: "What is an exception in Java?",
    answer: "An exception is an event that disrupts the normal flow of program execution. It is an object representing an error or unexpected condition that occurs during runtime.",
    explanation: "Exceptions help handle errors gracefully without crashing the program.",
    translations: {
      tr: {
        question: "Java'da exception (istisna) nedir?",
        answer: "Exception, program çalışması sırasında oluşan ve normal program akışını bozan bir olaydır. Java exception'ları işlemek için try-catch-finally mekanizmasını sağlar.",
        explanation: "Exception'lar checked (kontrollü) veya unchecked (kontrolsüz) olabilir."
      }
    },
    codeExample: {
      code: `public class ExceptionExample {
    public static void main(String[] args) {
        try {
            int result = 10 / 0;  // ArithmeticException
        } catch (ArithmeticException e) {
            System.out.println("Error: " + e.getMessage());
        }

        System.out.println("Program continues");
    }
}`,
      language: 'java'
    },
    topic: 'exception_handling',
    difficulty: 'junior',
    tags: ['exception', 'error-handling'],  },
  {
    id: 'exception-002',
    question: "What are some situations where exceptions may arise in Java?",
    answer: "Common situations: Division by zero (ArithmeticException), accessing null object (NullPointerException), array index out of bounds (ArrayIndexOutOfBoundsException), file not found (FileNotFoundException), invalid casting (ClassCastException).",
    explanation: "Understanding common exception scenarios helps write defensive code.",
    translations: {
      tr: {
        question: "Checked ve Unchecked exception'lar arasındaki fark nedir?",
        answer: "Checked: derleme zamanında kontrol edilir, işlenmeli veya bildirilmelidir (IOException). Unchecked: çalışma zamanı exception'ları, işlenmesi zorunlu değil (NullPointerException, ArrayIndexOutOfBoundsException).",
        explanation: "Checked exception'lar Exception sınıfını, unchecked exception'lar RuntimeException sınıfını extend eder."
      }
    },
    codeExample: {
      code: `// Common exception scenarios
int x = 10 / 0;  // ArithmeticException

String s = null;
s.length();  // NullPointerException

int[] arr = {1, 2, 3};
arr[5] = 10;  // ArrayIndexOutOfBoundsException

Object obj = "String";
Integer num = (Integer) obj;  // ClassCastException`,
      language: 'java'
    },
    topic: 'exception_handling',
    difficulty: 'junior',
    tags: ['exception', 'types']
  },
  {
    id: 'exception-003',
    question: "What is exception handling in Java?",
    answer: "Exception handling is a mechanism to handle runtime errors using try-catch-finally blocks. It allows the program to continue execution or fail gracefully instead of crashing abruptly.",
    explanation: "Exception handling separates error-handling code from normal code, improving readability.",
    translations: {
      tr: {
        question: "try-catch-finally bloğu nasıl çalışır?",
        answer: "try: exception fırlatabilecek kodu içerir. catch: exception'ı yakalar ve işler. finally: exception olsa da olmasa da her zaman çalışır. Kaynakları temizlemek için kullanılır.",
        explanation: "Birden fazla catch bloğu olabilir. finally opsiyoneldir ancak önerilir."
      }
    },
    codeExample: {
      code: `public class ExceptionHandling {
    public static void main(String[] args) {
        try {
            // Code that might throw exception
            int[] arr = {1, 2, 3};
            System.out.println(arr[5]);
        } catch (ArrayIndexOutOfBoundsException e) {
            // Handle specific exception
            System.out.println("Index out of bounds");
        } finally {
            // Always executes
            System.out.println("Finally block");
        }

        System.out.println("Program continues");
    }
}`,
      language: 'java'
    },
    topic: 'exception_handling',
    difficulty: 'junior',
    tags: ['exception', 'try-catch', 'handling']
  },
  {
    id: 'exception-004',
    question: "What is an error in Java?",
    answer: "An Error is a serious problem that a program should not try to catch. Errors represent abnormal conditions external to the application (OutOfMemoryError, StackOverflowError). Unlike exceptions, errors are usually not recoverable.",
    explanation: "Errors indicate severe problems at JVM level, while Exceptions are recoverable at application level.",
    translations: {
      tr: {
        question: "`throw` ve `throws` arasındaki fark nedir?",
        answer: "throw: exception'ı açıkça fırlatmak için kullanılır (metod gövdesinde). throws: metodun hangi exception'ları fırlatabileceğini bildirmek için kullanılır (metod imzasında).",
        explanation: "throw bir exception örneği alır, throws bir veya daha fazla exception sınıfı alır."
      }
    },
    topic: 'exception_handling',
    difficulty: 'mid',
    tags: ['error', 'exception', 'jvm']
  },
  {
    id: 'exception-005',
    question: "What are five keywords related to exception handling in Java?",
    answer: "try: defines block where exception might occur. catch: handles exceptions. finally: executes regardless of exception. throw: explicitly throws exception. throws: declares exceptions a method might throw.",
    explanation: "These keywords provide complete exception handling mechanism in Java.",
    translations: {
      tr: {
        question: "Java'da özel exception (custom exception) nasıl oluşturulur?",
        answer: "Exception veya RuntimeException sınıfını extend edin. Checked exception için Exception, unchecked için RuntimeException kullanın. Parametre alan yapıcılar ekleyin.",
        explanation: "Özel exception'lar uygulamaya özgü hata koşullarını modeller."
      }
    },
    codeExample: {
      code: `public class Keywords {
    // throws - declares exception
    public void readFile(String path) throws IOException {
        // try - code that might throw
        try {
            FileReader fr = new FileReader(path);
        } catch (FileNotFoundException e) {
            // catch - handle exception
            System.out.println("File not found");
            // throw - explicitly throw
            throw new RuntimeException("Cannot proceed");
        } finally {
            // finally - always executes
            System.out.println("Cleanup");
        }
    }
}`,
      language: 'java'
    },
    topic: 'exception_handling',
    difficulty: 'mid',
    tags: ['try', 'catch', 'throw', 'throws', 'finally']
  },
  {
    id: 'exception-006',
    question: "Can we have a `try` block without a `catch` block in Java?",
    answer: "Yes, try can exist without catch if it has a finally block: try-finally. Also valid with try-with-resources (automatic resource management) without catch.",
    explanation: "try-finally is used when you don't want to handle exception but need cleanup code.",
    translations: {
      tr: {
        question: "Java'da finally bloğu ne zaman çalışmaz?",
        answer: "Finally bloğu çalışmaz eğer: 1) System.exit() çağrılırsa, 2) JVM çökerse, 3) try/catch bloğunda sonsuz döngü varsa, 4) Thread öldürülürse.",
        explanation: "Normal koşullarda, finally her zaman çalışır - exception olsa bile."
      }
    },
    codeExample: {
      code: `// Valid: try-finally
public void example1() {
    try {
        // Some code
    } finally {
        // Cleanup
    }
}

// Valid: try-with-resources (no catch)
public void example2() throws IOException {
    try (FileReader fr = new FileReader("file.txt")) {
        // Use resource
    }
    // Resource auto-closed
}

// Invalid: try alone
// try {
//     // code
// }  // ERROR: needs catch or finally`,
      language: 'java'
    },
    topic: 'exception_handling',
    difficulty: 'mid',
    tags: ['try', 'finally', 'syntax']
  },
  {
    id: 'exception-007',
    question: "Can we have multiple `catch` blocks for a `try` block in Java?",
    answer: "Yes, multiple catch blocks can follow a single try block to handle different exception types. Order matters: specific exceptions first, then general exceptions.",
    explanation: "Multiple catch blocks allow handling different exceptions differently.",
    translations: {
      tr: {
        question: "try-with-resources nedir?",
        answer: "Try-with-resources (Java 7+) AutoCloseable kaynakları otomatik olarak kapatır. Kaynak try parantezi içinde bildirilir. Try bloğu bittiğinde otomatik olarak kapatılır.",
        explanation: "Finally bloğunda manuel kapatmaya gerek kalmaz. Birden fazla kaynak desteklenir."
      }
    },
    codeExample: {
      code: `try {
    int[] arr = {1, 2, 3};
    System.out.println(arr[5]);
    int x = 10 / 0;
} catch (ArrayIndexOutOfBoundsException e) {
    System.out.println("Array error");
} catch (ArithmeticException e) {
    System.out.println("Math error");
} catch (Exception e) {
    System.out.println("General error");
}

// Wrong order (won't compile):
// catch (Exception e) {}  // Catches everything
// catch (ArithmeticException e) {}  // Unreachable`,
      language: 'java'
    },
    topic: 'exception_handling',
    difficulty: 'mid',
    tags: ['try', 'catch', 'multiple']
  },
  {
    id: 'exception-008',
    question: "What is the importance of the `finally` block in Java?",
    answer: "finally block always executes regardless of whether an exception occurs or not. Used for cleanup operations. Modern Java (7+) uses try-with-resources for AutoCloseable resources, but finally is still useful for other cleanup tasks.",
    explanation: "finally ensures critical cleanup code runs even if exception is thrown or caught, and even when return statements are present in try or catch blocks.",
    translations: {
      tr: {
        question: "Exception handling en iyi uygulamaları nelerdir?",
        answer: "Spesifik exception'ları yakalayın. Boş catch bloklarından kaçının. Exception'ları logla. Meaningful mesajlar kullanın. Kaynakları düzgün temizleyin. Generic exception yakalamayın.",
        explanation: "İyi exception handling kodun güvenilirliğini ve hata ayıklanabilirliğini artırır."
      }
    },
    codeExample: {
      code: `// Modern approach (Java 7+) - try-with-resources
public void processFile() {
    try (FileReader fr = new FileReader("data.txt");
         BufferedReader br = new BufferedReader(fr)) {
        // Process file
        String line = br.readLine();
        // Resources auto-closed
    } catch (IOException e) {
        System.out.println("Error: " + e);
    } finally {
        // Optional: for non-resource cleanup
        System.out.println("Finally executed");
    }
}

// Demonstrates finally ALWAYS executes
public int demonstrateFinally() {
    try {
        System.out.println("Try block");
        return 1;  // finally executes before return
    } catch (Exception e) {
        System.out.println("Catch block");
        return 2;  // finally executes before return
    } finally {
        System.out.println("Finally executed");  // ALWAYS runs
        // Don't return here - overrides try/catch return!
    }
}`,
      language: 'java'
    },
    topic: 'exception_handling',
    difficulty: 'mid',
    tags: ['finally', 'cleanup', 'resources', 'try-with-resources'],
    commonPitfalls: ['Returning from finally block overrides try/catch returns', 'Using old try-finally instead of try-with-resources']
  },
  {
    id: 'exception-009',
    question: "Can we have any code between the `try` and `catch` blocks in Java?",
    answer: "No, you cannot have any code between try and catch blocks. The catch block must immediately follow the try block.",
    explanation: "This is a syntax rule to maintain clear exception handling structure.",
    translations: {
      tr: {
        question: "Birden fazla exception aynı catch bloğunda yakalanabilir mi?",
        answer: "Evet, Java 7+ multi-catch kullanarak birden fazla exception'ı tek catch bloğunda yakalayabilir. Pipe (|) ile ayrılır: catch (IOException | SQLException ex)",
        explanation: "Multi-catch kod tekrarını azaltır ancak exception'lar aynı hiyerarşide olamaz."
      }
    },
    codeExample: {
      code: `// Valid
try {
    // code
} catch (Exception e) {
    // handle
}

// Invalid
try {
    // code
}
// System.out.println("Invalid");  // ERROR
catch (Exception e) {
    // handle
}`,
      language: 'java'
    },
    topic: 'exception_handling',
    difficulty: 'junior',
    tags: ['try', 'catch', 'syntax']
  },
  {
    id: 'exception-010',
    question: "Can we have any code between the `try` and `finally` blocks in Java?",
    answer: "No, you cannot have code between try and finally blocks. If using catch, it must come between try and finally. Otherwise, finally must immediately follow try.",
    explanation: "Proper order is: try -> catch (optional) -> finally (optional).",
    translations: {
      tr: {
        question: "Exception chain (zincirleme) nedir?",
        answer: "Exception chaining bir exception'ı başka bir exception'ın nedeni olarak kullanır. Orijinal exception'ı korur. Throwable yapıcısında cause parametresi veya initCause() metodu kullanılır.",
        explanation: "Chaining tam hata geçmişini korur ve hata ayıklamaya yardımcı olur."
      }
    },
    codeExample: {
      code: `// Valid: try-catch-finally
try {
    // code
} catch (Exception e) {
    // handle
} finally {
    // cleanup
}

// Valid: try-finally
try {
    // code
} finally {
    // cleanup
}

// Invalid
try {
    // code
}
// System.out.println("Invalid");  // ERROR
finally {
    // cleanup
}`,
      language: 'java'
    },
    topic: 'exception_handling',
    difficulty: 'junior',
    tags: ['try', 'finally', 'syntax']
  },
  {
    id: 'exception-011',
    question: "Can we catch more than one exception in a single `catch` block in Java?",
    answer: "Yes (Java 7+), using multi-catch. Separate exception types with pipe (|). Useful when handling multiple exceptions the same way.",
    explanation: "Multi-catch reduces code duplication when handling exceptions identically.",
    translations: {
      tr: {
        question: "NullPointerException nedir ve nasıl önlenir?",
        answer: "NullPointerException, null referans üzerinde metod çağrıldığında veya alana erişildiğinde oluşur. Önlemek için: null kontrolleri yapın, Optional kullanın, Objects.requireNonNull() kullanın.",
        explanation: "NPE Java'da en yaygın runtime exception'dır."
      }
    },
    codeExample: {
      code: `// Java 7+ multi-catch
try {
    // code that might throw exceptions
    int x = Integer.parseInt("abc");
    int y = 10 / 0;
} catch (NumberFormatException | ArithmeticException e) {
    // Handle both exceptions same way
    System.out.println("Error: " + e.getMessage());
}

// Before Java 7 (verbose)
try {
    // code
} catch (NumberFormatException e) {
    System.out.println("Error: " + e.getMessage());
} catch (ArithmeticException e) {
    System.out.println("Error: " + e.getMessage());
}`,
      language: 'java'
    },
    topic: 'exception_handling',
    difficulty: 'mid',
    tags: ['multi-catch', 'exception', 'java7']
  },
  {
    id: 'exception-012',
    question: "What are checked exceptions in Java?",
    answer: "Checked exceptions are exceptions that must be either caught or declared using throws clause. Compiler enforces handling. Examples: IOException, SQLException, ClassNotFoundException.",
    explanation: "Checked exceptions represent recoverable conditions that a well-written application should anticipate. Always use try-with-resources for AutoCloseable resources.",
    translations: {
      tr: {
        question: "Error ve Exception arasındaki fark nedir?",
        answer: "Error: JVM tarafından fırlatılan ciddi sorunlar, kurtarılamaz (OutOfMemoryError, StackOverflowError). Exception: uygulama tarafından ele alınabilir sorunlar, kurtarılabilir.",
        explanation: "Error'ları yakalamaya çalışmayın, Exception'ları işleyin."
      }
    },
    codeExample: {
      code: `// Modern approach with try-with-resources (Java 7+)
public void readFile() {
    try (FileReader fr = new FileReader("file.txt");
         BufferedReader br = new BufferedReader(fr)) {
        String line = br.readLine();
        // Resources auto-closed
    } catch (FileNotFoundException e) {
        // Must catch or declare throws
        System.out.println("File not found: " + e.getMessage());
    } catch (IOException e) {
        System.out.println("I/O error: " + e.getMessage());
    }
}

// Or declare throws (still use try-with-resources)
public void readFile() throws IOException {
    try (FileReader fr = new FileReader("file.txt")) {
        // Use file reader
        // Auto-closed even if exception thrown
    }
    // Caller must handle IOException
}`,
      language: 'java'
    },
    topic: 'exception_handling',
    difficulty: 'mid',
    tags: ['checked', 'exception', 'handling', 'try-with-resources']
  },
  {
    id: 'exception-013',
    question: "What are unchecked exceptions in Java?",
    answer: "Unchecked exceptions are runtime exceptions that do not need to be explicitly caught or declared. Examples: NullPointerException, ArrayIndexOutOfBoundsException, ArithmeticException.",
    explanation: "Unchecked exceptions usually indicate programming errors that could have been prevented.",
    translations: {
      tr: {
        question: "Checked exception kullanmanın avantajları ve dezavantajları nelerdir?",
        answer: "Avantajlar: derleme zamanı güvenliği, zorunlu hata işleme, açık API. Dezavantajlar: ayrıntılı kod, esnek olmayan, boilerplate kod.",
        explanation: "Modern Java unchecked exception'ları tercih eder ancak her ikisinin de yeri vardır."
      }
    },
    codeExample: {
      code: `// Unchecked exceptions - no forced handling
public void example() {
    // May throw NullPointerException
    String s = null;
    s.length();  // No compile error, crashes at runtime

    // May throw ArithmeticException
    int x = 10 / 0;  // No compile error

    // May throw ArrayIndexOutOfBoundsException
    int[] arr = {1, 2, 3};
    arr[10] = 5;  // No compile error
}

// Optional to handle
public void betterExample() {
    try {
        // Handle if you want
    } catch (RuntimeException e) {
        // Optional handling
    }
}`,
      language: 'java'
    },
    topic: 'exception_handling',
    difficulty: 'mid',
    tags: ['unchecked', 'runtime', 'exception']
  },
  {
    id: 'exception-014',
    question: "What is the difference between checked and unchecked exceptions in Java?",
    answer: "Checked: Must be caught/declared, compile-time checking, extend Exception. Unchecked: Optional handling, runtime checking, extend RuntimeException. Checked for recoverable, unchecked for programming errors.",
    explanation: "Checked exceptions force error handling, unchecked indicate bugs that should be fixed.",
    translations: {
      tr: {
        question: "Exception handling performansı etkiler mi?",
        answer: "Evet. Exception oluşturmak pahalıdır (stack trace). Exception'ları kontrol akışı için kullanmayın. Normal durumlarda exception fırlatmayın. Exception handling overhead ekler.",
        explanation: "Exception'lar istisnai durumlar içindir, normal kontrol akışı için değil."
      }
    },
    codeExample: {
      code: `// Checked Exception - must handle
public void checkedExample() throws IOException {
    FileReader fr = new FileReader("file.txt");
    // Compiler enforces handling
}

// Unchecked Exception - optional handling
public void uncheckedExample() {
    String s = null;
    s.length();  // NullPointerException
    // No compiler enforcement
}

// Exception Hierarchy:
// Throwable
//   ├── Exception (checked)
//   │     └── RuntimeException (unchecked)
//   │           ├── NullPointerException
//   │           └── ArithmeticException
//   ├── IOException (checked)
//   └── Error (unchecked, not recoverable)`,
      language: 'java'
    },
    topic: 'exception_handling',
    difficulty: 'mid',
    tags: ['checked', 'unchecked', 'exception', 'difference']
  },
  {
    id: 'exception-015',
    question: "What is default exception handling in Java?",
    answer: "When an exception is not caught by user code, JVM's default exception handler takes over. It prints exception details (name, message, stack trace) to console and terminates the program abnormally.",
    explanation: "Default handler is the last resort when no try-catch handles the exception.",
    translations: {
      tr: {
        question: "Suppressed exception nedir?",
        answer: "Suppressed exception, try-with-resources'da birincil exception işlenirken oluşan ek exception'dır. getSuppressed() ile alınır. Birincil exception önceliklidir ancak suppressed exception'lar kaydedilir.",
        explanation: "Birden fazla kaynak kapanırken oluşan tüm exception'ları yakalamak için yararlıdır."
      }
    },
    codeExample: {
      code: `public class DefaultHandler {
    public static void main(String[] args) {
        // No try-catch - default handler takes over
        int x = 10 / 0;

        // Output from default handler:
        // Exception in thread "main"
        // java.lang.ArithmeticException: / by zero
        //     at DefaultHandler.main(DefaultHandler.java:3)

        System.out.println("This won't execute");
    }
}`,
      language: 'java'
    },
    topic: 'exception_handling',
    difficulty: 'junior',
    tags: ['exception', 'default-handler', 'jvm']
  },

  // Collections Framework
  {
    id: 'collections-001',
    question: "What is the Java Collections Framework?",
    answer: "The Java Collections Framework is a unified architecture for representing and manipulating collections of objects. It includes interfaces (List, Set, Map, Queue), implementations (ArrayList, HashSet, HashMap), and algorithms (sort, search).",
    explanation: "Collections Framework provides reusable data structures and algorithms, eliminating need to write custom implementations.",
    translations: {
      tr: {
        question: "Java Collections Framework nedir?",
        answer: "Collections Framework, koleksiyonları (veri grupları) işlemek için birleşik bir mimaridir. Arayüzler (List, Set, Map), implementasyonlar (ArrayList, HashSet), ve algoritmalar (sort, search) sağlar.",
        explanation: "Collections Framework veri yapılarıyla çalışmak için standart bir yol sağlar."
      }
    },
    codeExample: {
      code: `import java.util.*;

// List - ordered, allows duplicates
List<String> list = new ArrayList<>();
list.add("Apple");
list.add("Banana");

// Set - unordered, no duplicates
Set<Integer> set = new HashSet<>();
set.add(1);
set.add(1);  // Ignored

// Map - key-value pairs
Map<String, Integer> map = new HashMap<>();
map.put("John", 25);
map.put("Jane", 30);`,
      language: 'java'
    },
    topic: 'collections',
    difficulty: 'junior',
    tags: ['collections', 'framework', 'data-structures'],    realWorldUse: 'Used everywhere: shopping carts (List), unique users (Set), caching (Map), task queues (Queue).'
  },
  {
    id: 'collections-002',
    question: "What is the difference between ArrayList and LinkedList in Java?",
    answer: "ArrayList: uses dynamic array, fast random access O(1), slow insertion/deletion in middle O(n) due to shifting. LinkedList: uses doubly-linked list, slow random access O(n), fast insertion/deletion O(1) at known positions (with iterator), but O(n) for arbitrary index access.",
    explanation: "Use ArrayList for frequent random access. LinkedList O(1) insertion only applies when you have a reference to the node (via iterator). Adding at arbitrary index requires traversal first, making it O(n) overall.",
    translations: {
      tr: {
        question: "List, Set ve Map arasındaki farklar nelerdir?",
        answer: "List: sıralı, duplicatelara izin verir (ArrayList, LinkedList). Set: sırasız, benzersiz elemanlar (HashSet, TreeSet). Map: key-value çiftleri, benzersiz key'ler (HashMap, TreeMap).",
        explanation: "Collection türünü veri gereksinimlerinize göre seçin: sıra, benzersizlik, key-value."
      }
    },
    codeExample: {
      code: `// ArrayList - backed by array
List<String> arrayList = new ArrayList<>();
arrayList.add("A");
arrayList.get(0);  // Fast O(1)
arrayList.add(0, "B");  // O(n) - shifts all elements

// LinkedList - doubly-linked nodes
List<String> linkedList = new LinkedList<>();
linkedList.add("A");
linkedList.get(0);  // O(n) - must traverse from head
linkedList.addFirst("B");  // O(1) - at head
linkedList.addLast("C");   // O(1) - at tail
linkedList.add(1, "D");    // O(n) - must traverse to index

// O(1) insertion with iterator at known position
ListIterator<String> iter = linkedList.listIterator();
while (iter.hasNext()) {
    iter.next();
    iter.add("X");  // O(1) - iterator knows position
}`,
      language: 'java'
    },
    topic: 'collections',
    difficulty: 'mid',
    tags: ['arraylist', 'linkedlist', 'list', 'comparison'],    commonPitfalls: ['Assuming LinkedList has O(1) insertion everywhere', 'Not considering traversal cost to reach index']
  },
  {
    id: 'collections-003',
    question: "What is the difference between HashSet and TreeSet in Java?",
    answer: "HashSet: uses hash table, unordered, allows one null, O(1) operations. TreeSet: uses red-black tree, sorted order, no null, O(log n) operations.",
    explanation: "Use HashSet for fast operations, TreeSet when you need sorted elements.",
    translations: {
      tr: {
        question: "ArrayList ve LinkedList arasındaki fark nedir?",
        answer: "ArrayList: dinamik dizi, hızlı random erişim O(1), ekleme/silme yavaş O(n). LinkedList: doubly-linked list, yavaş erişim O(n), hızlı ekleme/silme O(1) başta/sonda.",
        explanation: "ArrayList'i sık erişim için, LinkedList'i sık ekleme/silme için kullanın."
      }
    },
    codeExample: {
      code: `// HashSet - unordered, fast
Set<Integer> hashSet = new HashSet<>();
hashSet.add(3);
hashSet.add(1);
hashSet.add(2);
// Unpredictable order: might print [1, 2, 3], [2, 1, 3], [3, 2, 1], etc.
// Order depends on hash function and internal structure
System.out.println(hashSet);  // Output: unpredictable order

// TreeSet - sorted, slower
Set<Integer> treeSet = new TreeSet<>();
treeSet.add(3);
treeSet.add(1);
treeSet.add(2);
System.out.println(treeSet);  // Output: [1, 2, 3] - always sorted`,
      language: 'java'
    },
    topic: 'collections',
    difficulty: 'mid',
    tags: ['hashset', 'treeset', 'set', 'comparison'],    commonPitfalls: ['Assuming HashSet maintains insertion order', 'Confusing HashSet with LinkedHashSet (maintains insertion order)']
  },
  {
    id: 'collections-004',
    question: "What is the difference between HashMap and Hashtable in Java?",
    answer: "HashMap: not synchronized, allows one null key and multiple null values, faster, added in Java 1.2. Hashtable: synchronized, no null keys/values, slower, legacy class.",
    explanation: "Use HashMap for single-threaded, ConcurrentHashMap for multi-threaded. Hashtable is obsolete.",
    translations: {
      tr: {
        question: "HashSet nasıl çalışır?",
        answer: "HashSet HashMap ile desteklenir. Elemanları hash code'a göre saklar. Benzersizlik garantisi. O(1) ekleme, silme, arama. Sıra garantisi yok. null değerlere izin verir.",
        explanation: "HashSet equals() ve hashCode() metodlarına güvenir."
      }
    },
    codeExample: {
      code: `// HashMap - modern, not synchronized
Map<String, Integer> hashMap = new HashMap<>();
hashMap.put(null, 1);  // OK
hashMap.put("key", null);  // OK

// Hashtable - legacy, synchronized
Map<String, Integer> hashtable = new Hashtable<>();
// hashtable.put(null, 1);  // NullPointerException
// hashtable.put("key", null);  // NullPointerException

// Modern alternative for thread-safety
Map<String, Integer> concurrent = new ConcurrentHashMap<>();`,
      language: 'java'
    },
    topic: 'collections',
    difficulty: 'mid',
    tags: ['hashmap', 'hashtable', 'map', 'comparison', 'thread-safety'],  },
  {
    id: 'collections-005',
    question: "How does HashMap work internally in Java?",
    answer: "HashMap uses array of buckets (nodes). Hash function determines bucket index. Multiple keys can hash to same bucket (collision) - handled by linked list (Java 7) or balanced tree (Java 8+). Tree conversion occurs when: 1) bucket size > 8 AND 2) total map capacity >= 64. Converts back to list when bucket size < 6.",
    explanation: "HashMap provides O(1) average case for get/put through hashing. Tree structure (red-black tree) ensures O(log n) worst case for large buckets. Load factor (0.75 default) determines when to resize.",
    translations: {
      tr: {
        question: "HashMap nasıl çalışır?",
        answer: "HashMap key-value çiftlerini hash table'da saklar. Key'in hash code'u bucket'ı belirler. O(1) ekleme, alma, silme (ortalama). Çakışmalar linked list/tree ile ele alınır (Java 8+).",
        explanation: "HashMap sıra garantisi vermez. ConcurrentHashMap thread-safe alternatiftir."
      }
    },
    codeExample: {
      code: `// HashMap internal structure (simplified)
class HashMap<K,V> {
    Node<K,V>[] table;  // Array of buckets
    int size;           // Number of key-value pairs
    float loadFactor;   // Default 0.75

    static class Node<K,V> {
        final int hash;
        final K key;
        V value;
        Node<K,V> next;  // For collision handling (linked list)
    }

    public V put(K key, V value) {
        int hash = hash(key);
        int index = hash & (table.length - 1);  // Fast modulo

        // Handle collision
        Node<K,V> node = table[index];
        if (node == null) {
            table[index] = new Node<>(hash, key, value);
        } else {
            // Traverse list or tree
            // Update if key exists, else add
        }

        // Resize if size > capacity * loadFactor
        if (++size > table.length * loadFactor) {
            resize();  // Double capacity, rehash
        }
        return value;
    }

    public V get(K key) {
        int hash = hash(key);
        int index = hash & (table.length - 1);
        Node<K,V> node = table[index];

        // Search in list or tree at bucket
        while (node != null) {
            if (node.hash == hash &&
                Objects.equals(key, node.key)) {
                return node.value;
            }
            node = node.next;
        }
        return null;
    }

    // Tree conversion criteria:
    // 1. Bucket size > TREEIFY_THRESHOLD (8)
    // 2. Total capacity >= MIN_TREEIFY_CAPACITY (64)
    // Untreeify when bucket size < UNTREEIFY_THRESHOLD (6)
}`,
      language: 'java'
    },
    topic: 'collections',
    difficulty: 'senior',
    tags: ['hashmap', 'internals', 'hashing', 'data-structures', 'performance'],    commonPitfalls: ['Assuming tree conversion happens immediately at size 8', 'Not understanding resize triggers']
  },
  {
    id: 'collections-006',
    question: "What is the difference between Comparable and Comparator in Java?",
    answer: "Comparable: interface for natural ordering, class implements compareTo(), single sorting logic. Comparator: separate class for custom ordering, implements compare(), multiple sorting strategies.",
    explanation: "Use Comparable for default ordering, Comparator for flexible custom ordering.",
    translations: {
      tr: {
        question: "Comparable ve Comparator arasındaki fark nedir?",
        answer: "Comparable: doğal sıralama, sınıfta compareTo() implement eder, tek sıralama. Comparator: özel sıralama, ayrı sınıf, compare() metodunu implement eder, birden fazla sıralama.",
        explanation: "Comparable sınıf kontrolündeyse kullanılır, Comparator esneklik için kullanılır."
      }
    },
    codeExample: {
      code: `// Comparable - natural ordering
class Student implements Comparable<Student> {
    String name;
    int age;

    @Override
    public int compareTo(Student other) {
        // Safe comparison - avoids integer overflow
        return Integer.compare(this.age, other.age);
        // Avoid: return this.age - other.age;  // Can overflow!
    }
}

// Comparator - custom ordering
class NameComparator implements Comparator<Student> {
    @Override
    public int compare(Student s1, Student s2) {
        return s1.name.compareTo(s2.name);  // Sort by name
    }
}

// Lambda expression (Java 8+)
Comparator<Student> ageComparator = (s1, s2) -> Integer.compare(s1.age, s2.age);

List<Student> students = new ArrayList<>();
Collections.sort(students);  // Uses compareTo()
Collections.sort(students, new NameComparator());  // Uses compare()
Collections.sort(students, ageComparator);  // Uses lambda`,
      language: 'java'
    },
    topic: 'collections',
    difficulty: 'mid',
    tags: ['comparable', 'comparator', 'sorting', 'comparison'],    commonPitfalls: ['Using subtraction (a - b) can cause integer overflow', 'Always use Integer.compare() or similar wrapper methods']
  },
  {
    id: 'collections-007',
    question: "What is the difference between Iterator and ListIterator in Java?",
    answer: "Iterator: works with any Collection, unidirectional (forward only), can remove. ListIterator: works with List only, bidirectional (forward/backward), can add, remove, and modify elements.",
    explanation: "ListIterator provides more functionality but only for List implementations.",
    translations: {
      tr: {
        question: "Iterator ve ListIterator arasındaki fark nedir?",
        answer: "Iterator: ileri yön, tüm koleksiyonlar için, sadece remove. ListIterator: iki yön, sadece List için, ekleme, değiştirme, remove, önceki eleman erişimi.",
        explanation: "Iterator temel traversal, ListIterator gelişmiş List operasyonları için."
      }
    },
    codeExample: {
      code: `List<String> list = new ArrayList<>();
list.add("A");
list.add("B");
list.add("C");

// Iterator - forward only
Iterator<String> iterator = list.iterator();
while (iterator.hasNext()) {
    System.out.println(iterator.next());
    iterator.remove();  // Can remove
}

// ListIterator - bidirectional
ListIterator<String> listIterator = list.listIterator();
while (listIterator.hasNext()) {
    listIterator.next();
    listIterator.set("X");  // Can modify
    listIterator.add("Y");  // Can add
}
while (listIterator.hasPrevious()) {
    System.out.println(listIterator.previous());
}`,
      language: 'java'
    },
    topic: 'collections',
    difficulty: 'mid',
    tags: ['iterator', 'listiterator', 'traversal'],  },
  {
    id: 'collections-008',
    question: "What is the difference between fail-fast and fail-safe iterators in Java?",
    answer: "Fail-fast: throws ConcurrentModificationException if collection modified during iteration. Works on original collection. Examples: ArrayList, HashMap. Fail-safe: works on clone, allows modification, no exception. Examples: CopyOnWriteArrayList, ConcurrentHashMap.",
    explanation: "Fail-fast detects concurrent modifications for safety. Fail-safe allows safe concurrent access.",
    translations: {
      tr: {
        question: "fail-fast ve fail-safe iterator nedir?",
        answer: "Fail-fast: iterasyon sırasında koleksiyon değişirse ConcurrentModificationException fırlatır (ArrayList, HashMap). Fail-safe: kopya üzerinde çalışır, exception fırlatmaz (CopyOnWriteArrayList, ConcurrentHashMap).",
        explanation: "Fail-fast hızlı hata algılar, fail-safe concurrent değişikliklere izin verir."
      }
    },
    codeExample: {
      code: `// Fail-fast - throws exception
List<String> list = new ArrayList<>();
list.add("A");
list.add("B");

for (String item : list) {
    // list.add("C");  // ConcurrentModificationException
}

// Fail-safe - no exception
List<String> safe = new CopyOnWriteArrayList<>();
safe.add("A");
safe.add("B");

for (String item : safe) {
    safe.add("C");  // OK - works on clone
}`,
      language: 'java'
    },
    topic: 'collections',
    difficulty: 'mid',
    tags: ['fail-fast', 'fail-safe', 'iterator', 'concurrency'],  },

  // String and Memory
  {
    id: 'string-001',
    question: "What is the difference between String, StringBuilder, and StringBuffer in Java?",
    answer: "String: immutable, thread-safe (constant). StringBuilder: mutable, not thread-safe, faster. StringBuffer: mutable, thread-safe (synchronized), slower.",
    explanation: "Use String for constant text, StringBuilder for single-threaded concatenation, StringBuffer for multi-threaded.",
    translations: {
      tr: {
        question: "String immutable (değişmez) neden yapılmıştır?",
        answer: "String immutable'dır çünkü: 1) String pool için güvenlik, 2) Thread safety, 3) Hash code caching, 4) Performance, 5) Güvenlik (şifreler, bağlantılar).",
        explanation: "Immutability String pooling'i mümkün kılar ve memory optimizasyonu sağlar."
      }
    },
    codeExample: {
      code: `// String - immutable
String str = "Hello";
str = str + " World";  // Creates new object each time

// StringBuilder - mutable, fast
StringBuilder sb = new StringBuilder("Hello");
sb.append(" World");  // Modifies same object
sb.insert(5, ",");
String result = sb.toString();

// StringBuffer - mutable, thread-safe
StringBuffer sbf = new StringBuffer("Hello");
sbf.append(" World");  // Synchronized, slower`,
      language: 'java'
    },
    topic: 'basics',
    difficulty: 'mid',
    tags: ['string', 'stringbuilder', 'stringbuffer', 'immutability'],    realWorldUse: 'StringBuilder for log message building, StringBuffer in multi-threaded logging.'
  },
  {
    id: 'string-002',
    question: "What is String Pool in Java?",
    answer: "String Pool is a special memory region in heap (Java 7+) where JVM stores string literals. When you create a string literal, JVM checks pool first. If exists, returns reference; if not, creates new string and adds to pool. Saves memory. Note: In Java 6 and earlier, the String Pool was located in PermGen space.",
    explanation: "String pool optimization reduces memory usage by reusing common string literals. Java 7 moved the String Pool from PermGen to heap, avoiding OutOfMemoryError issues with large numbers of interned strings.",
    translations: {
      tr: {
        question: "String pool (String havuzu) nedir?",
        answer: "String pool heap'te String literallerini saklayan özel bir alan'dır. Aynı literal birden fazla referans tarafından paylaşılır. Memory'yi optimize eder. intern() metodu String'i pool'a ekler.",
        explanation: "String pool duplicateları önler ve memory kullanımını azaltır."
      }
    },
    codeExample: {
      code: `// String literals - stored in pool (in heap since Java 7)
String s1 = "Hello";
String s2 = "Hello";
System.out.println(s1 == s2);  // true - same reference in pool

// new keyword - creates new object in heap (outside pool)
String s3 = new String("Hello");
System.out.println(s1 == s3);  // false - different objects

// intern() - adds to pool or returns existing reference
String s4 = s3.intern();
System.out.println(s1 == s4);  // true - same pool reference

// Memory location evolution:
// Java 6 and earlier: String Pool in PermGen (limited, fixed size)
// Java 7+: String Pool in heap (garbage collected, dynamic)`,
      language: 'java'
    },
    topic: 'basics',
    difficulty: 'mid',
    tags: ['string-pool', 'memory', 'optimization', 'java7', 'heap', 'permgen'],    realWorldUse: 'Critical for performance in applications with many string literals. Heap location (Java 7+) prevents OutOfMemoryError in PermGen.'
  },
  {
    id: 'string-003',
    question: "Why are Strings immutable in Java?",
    answer: "Reasons: 1) String Pool efficiency - shared references safe, 2) Thread safety - no synchronization needed, 3) Security - cannot be modified after creation, 4) Hashcode caching - safe to cache since immutable, 5) Class loading - class names are strings.",
    explanation: "Immutability provides safety, efficiency, and enables string pool optimization.",
    translations: {
      tr: {
        question: "== ve equals() String karşılaştırmasındaki fark nedir?",
        answer: "== referansları (bellek adresi) karşılaştırır. equals() içeriği (karakterleri) karşılaştırır. String karşılaştırma için her zaman equals() kullanın.",
        explanation: "== yeni vs literal String'lerde farklı davranır. equals() güvenlidir."
      }
    },
    codeExample: {
      code: `// Immutability example
String password = "secret123";
// No method can change the actual string content

// Each "modification" creates new String
String upper = password.toUpperCase();  // New object
String sub = password.substring(0, 6);   // New object

// Original unchanged
System.out.println(password);  // "secret123"

// Thread-safe without synchronization
public void multipleThreadsUseString() {
    String shared = "data";
    // Multiple threads can safely read
}`,
      language: 'java'
    },
    topic: 'basics',
    difficulty: 'mid',
    tags: ['string', 'immutability', 'thread-safety'],  },
  {
    id: 'string-004',
    question: "What is the difference between == and equals() for Strings in Java?",
    answer: "== compares object references (memory addresses). equals() compares content/values. For strings: use == to check if same object, equals() to check if same text.",
    explanation: "Common pitfall: using == instead of equals() for string comparison.",
    translations: {
      tr: {
        question: "String, StringBuilder ve StringBuffer arasındaki fark nedir?",
        answer: "String: immutable, thread-safe, yavaş concat. StringBuilder: mutable, not thread-safe, hızlı. StringBuffer: mutable, thread-safe (synchronized), StringBuilder'dan yavaş.",
        explanation: "String'i basit durumlar için, StringBuilder'ı single-thread concat için, StringBuffer'ı multi-thread için kullanın."
      }
    },
    codeExample: {
      code: `String s1 = "Hello";
String s2 = "Hello";
String s3 = new String("Hello");

// == compares references
System.out.println(s1 == s2);   // true (both in pool)
System.out.println(s1 == s3);   // false (different objects)

// equals() compares content
System.out.println(s1.equals(s2));  // true
System.out.println(s1.equals(s3));  // true

// Always use equals() for content comparison
if (username.equals("admin")) {  // Correct
    // ...
}`,
      language: 'java'
    },
    topic: 'basics',
    difficulty: 'junior',
    tags: ['string', 'comparison', 'equals', 'reference'],    commonPitfalls: ['Using == for string content comparison', 'NullPointerException with equals()']
  },

  // equals() and hashCode()
  {
    id: 'object-001',
    question: "What is the equals() method in Java?",
    answer: "equals() method compares two objects for logical equality. Default implementation (from Object class) compares references (same as ==). Should be overridden to compare content.",
    explanation: "Override equals() to define meaningful equality for your custom classes.",
    translations: {
      tr: {
        question: "Object sınıfı nedir ve neden önemlidir?",
        answer: "Object, Java'da tüm sınıfların üst sınıfıdır (superclass). Her sınıf dolaylı olarak Object'i extend eder. equals(), hashCode(), toString(), clone() gibi temel metodlar sağlar.",
        explanation: "Object metodlarını override etmek uygun nesne davranışı için kritiktir."
      }
    },
    codeExample: {
      code: `public class Person {
    private String name;
    private int age;

    // Override equals() to compare content
    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass())
            return false;

        Person person = (Person) obj;
        return age == person.age &&
               Objects.equals(name, person.name);
    }
}

Person p1 = new Person("John", 25);
Person p2 = new Person("John", 25);
System.out.println(p1.equals(p2));  // true (same content)`,
      language: 'java'
    },
    topic: 'basics',
    difficulty: 'mid',
    tags: ['equals', 'object', 'comparison'],  },
  {
    id: 'object-002',
    question: "What is the hashCode() method in Java?",
    answer: "hashCode() returns an integer hash code for an object. Used by hash-based collections (HashMap, HashSet) to determine bucket location. Objects that are equal (equals()) must have same hashCode().",
    explanation: "hashCode() contract: equal objects must have equal hash codes. Unequal objects should ideally have different hash codes.",
    translations: {
      tr: {
        question: "equals() ve hashCode() contract (sözleşmesi) nedir?",
        answer: "equals() true döndürürse, iki nesne aynı hashCode()'a sahip olmalıdır. hashCode() aynıysa, equals() true veya false döndürebilir. Her ikisini de override edin veya hiçbirini.",
        explanation: "Bu contract HashMap, HashSet gibi hash-based koleksiyonlar için kritiktir."
      }
    },
    codeExample: {
      code: `public class Person {
    private String name;
    private int age;

    @Override
    public int hashCode() {
        return Objects.hash(name, age);
    }

    @Override
    public boolean equals(Object obj) {
        // ... equals implementation
    }
}

// HashMap uses hashCode()
Map<Person, String> map = new HashMap<>();
Person p = new Person("John", 25);
map.put(p, "Engineer");

// Can retrieve using equal object
Person p2 = new Person("John", 25);
System.out.println(map.get(p2));  // "Engineer"`,
      language: 'java'
    },
    topic: 'collections',
    difficulty: 'mid',
    tags: ['hashcode', 'hashing', 'collections'],  },
  {
    id: 'object-003',
    question: "What is the contract between equals() and hashCode() in Java?",
    answer: "Contract rules: 1) If two objects are equal (equals() returns true), they MUST have the same hashCode(). 2) If two objects have same hashCode(), they may or may not be equal. 3) If you override equals(), you MUST override hashCode().",
    explanation: "Breaking this contract causes bugs in hash-based collections like HashMap and HashSet.",
    translations: {
      tr: {
        question: "clone() metodu nasıl çalışır?",
        answer: "clone() nesnenin kopyasını oluşturur. Cloneable interface implement edilmeli. Shallow copy oluşturur (referanslar kopyalanır). Deep copy için manuel implementasyon gerekir.",
        explanation: "clone() nadiren kullanılır - copy constructor veya factory metod tercih edilir."
      }
    },
    codeExample: {
      code: `// WRONG - breaks contract
public class BadPerson {
    String name;

    @Override
    public boolean equals(Object obj) {
        return name.equals(((BadPerson)obj).name);
    }
    // hashCode() not overridden - PROBLEM!
}

// CORRECT - maintains contract
public class GoodPerson {
    String name;

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass())
            return false;
        return name.equals(((GoodPerson)obj).name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name);
    }
}`,
      language: 'java'
    },
    topic: 'basics',
    difficulty: 'mid',
    tags: ['equals', 'hashcode', 'contract', 'collections'],    commonPitfalls: ['Overriding equals() without hashCode()', 'HashMap/HashSet not working correctly']
  },

  // Concurrency & Multithreading
  {
    id: 'concurrency-001',
    question: "What is a thread in Java?",
    answer: "A thread is a lightweight process, the smallest unit of execution within a process. Threads share the same memory space and resources of the parent process but execute independently with their own call stack.",
    explanation: "Multiple threads can run concurrently, allowing parallel execution and better CPU utilization. Threads are used for asynchronous tasks, responsive UIs, and concurrent operations.",
    translations: {
      tr: {
        question: "Thread nedir ve nasıl oluşturulur?",
        answer: "Thread eş zamanlı çalışan bağımsız yürütme yoludur. İki yol: 1) Thread sınıfını extend et, 2) Runnable interface implement et. run() metodu thread mantığını içerir.",
        explanation: "Runnable tercih edilir - daha esnek, sınıf başka sınıfı extend edebilir."
      }
    },
    codeExample: {
      code: `// Thread basics
public class ThreadExample {
    public static void main(String[] args) {
        // Main thread
        System.out.println("Main thread: " +
            Thread.currentThread().getName());

        // Create new thread
        Thread t = new Thread(() -> {
            System.out.println("New thread: " +
                Thread.currentThread().getName());
        });

        t.start();  // Start thread execution
    }
}

// Output:
// Main thread: main
// New thread: Thread-0`,
      language: 'java'
    },
    topic: 'concurrency',
    difficulty: 'junior',
    tags: ['thread', 'concurrency', 'basics'],    realWorldUse: 'Web servers handle multiple requests using threads, GUI applications keep UI responsive while processing.'
  },
  {
    id: 'concurrency-002',
    question: "What are the different thread states in Java (Thread lifecycle)?",
    answer: "Thread lifecycle has 6 states: 1) NEW - created but not started, 2) RUNNABLE - running or ready to run, 3) BLOCKED - waiting for monitor lock, 4) WAITING - waiting indefinitely for another thread, 5) TIMED_WAITING - waiting for specified time, 6) TERMINATED - execution completed.",
    explanation: "Understanding thread states helps debug concurrency issues and optimize thread behavior.",
    translations: {
      tr: {
        question: "synchronized anahtar kelimesi ne yapar?",
        answer: "synchronized thread-safe kod sağlar. Aynı anda sadece bir thread kritik bölüme girer. Metodlarda veya bloklarda kullanılır. İntrinsic lock (monitor) kullanır.",
        explanation: "synchronized race condition'ları önler ancak deadlock'a yol açabilir."
      }
    },
    codeExample: {
      code: `public class ThreadStates {
    public static void main(String[] args) throws InterruptedException {
        Thread thread = new Thread(() -> {
            try {
                // Thread will be RUNNABLE here
                System.out.println("Running");

                // TIMED_WAITING state
                Thread.sleep(1000);

                synchronized (ThreadStates.class) {
                    // WAITING state
                    ThreadStates.class.wait();
                }
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        });

        System.out.println(thread.getState());  // NEW
        thread.start();
        Thread.sleep(100);
        System.out.println(thread.getState());  // RUNNABLE or TIMED_WAITING
        thread.join();
        System.out.println(thread.getState());  // TERMINATED
    }
}

// Thread State Transitions:
// NEW -> RUNNABLE -> RUNNING -> TERMINATED
// RUNNING can transition to:
//   - BLOCKED (waiting for synchronized lock)
//   - WAITING (wait(), join())
//   - TIMED_WAITING (sleep(), wait(timeout))`,
      language: 'java'
    },
    topic: 'concurrency',
    difficulty: 'mid',
    tags: ['thread', 'lifecycle', 'states'],    realWorldUse: 'Monitoring thread states helps identify deadlocks, performance bottlenecks, and thread pool issues.'
  },
  {
    id: 'concurrency-003',
    question: "What are the different ways to create a thread in Java?",
    answer: "Three main ways: 1) Extend Thread class and override run(), 2) Implement Runnable interface (preferred - allows multiple inheritance), 3) Implement Callable interface (can return value and throw checked exceptions).",
    explanation: "Runnable is preferred as Java supports single inheritance. Callable is used when you need return value or exception handling.",
    translations: {
      tr: {
        question: "volatile keyword ne yapar?",
        answer: "volatile değişken her zaman main memory'den okunur ve main memory'ye yazılır. CPU cache kullanmaz. Thread'ler arası görünürlük sağlar. Hafif senkronizasyon.",
        explanation: "volatile atomik olmayan operasyonlar için thread-safety garantilemez."
      }
    },
    codeExample: {
      code: `// Method 1: Extend Thread class
class MyThread extends Thread {
    @Override
    public void run() {
        System.out.println("Thread class: " + getName());
    }
}

// Method 2: Implement Runnable (PREFERRED)
class MyRunnable implements Runnable {
    @Override
    public void run() {
        System.out.println("Runnable: " +
            Thread.currentThread().getName());
    }
}

// Method 3: Implement Callable (returns value)
class MyCallable implements Callable<Integer> {
    @Override
    public Integer call() throws Exception {
        System.out.println("Callable: " +
            Thread.currentThread().getName());
        return 42;
    }
}

// Usage
public class CreateThreads {
    public static void main(String[] args) throws Exception {
        // Method 1
        MyThread t1 = new MyThread();
        t1.start();

        // Method 2 (preferred)
        Thread t2 = new Thread(new MyRunnable());
        t2.start();

        // Method 2 with lambda (Java 8+)
        Thread t3 = new Thread(() ->
            System.out.println("Lambda: " +
                Thread.currentThread().getName()));
        t3.start();

        // Method 3 with ExecutorService
        ExecutorService executor = Executors.newSingleThreadExecutor();
        Future<Integer> future = executor.submit(new MyCallable());
        Integer result = future.get();  // 42
        executor.shutdown();
    }
}`,
      language: 'java'
    },
    topic: 'concurrency',
    difficulty: 'junior',
    tags: ['thread', 'runnable', 'callable', 'creation'],    commonPitfalls: ['Calling run() instead of start() - runs in same thread', 'Extending Thread prevents extending other classes']
  },
  {
    id: 'concurrency-004',
    question: "What is the synchronized keyword in Java?",
    answer: "synchronized provides mutual exclusion - ensures only one thread executes a synchronized block/method at a time. Prevents race conditions. Can synchronize methods or code blocks. Uses intrinsic lock (monitor) on object.",
    explanation: "synchronized prevents multiple threads from accessing shared resources simultaneously, ensuring thread safety.",
    translations: {
      tr: {
        question: "wait(), notify() ve notifyAll() ne yapar?",
        answer: "wait(): thread'i bekletir, lock'u serbest bırakır. notify(): bir bekleyen thread'i uyandırır. notifyAll(): tüm bekleyen thread'leri uyandırır. synchronized bloğunda kullanılmalı.",
        explanation: "Bu metodlar thread iletişimi için kullanılır - producer-consumer pattern'de."
      }
    },
    codeExample: {
      code: `public class SynchronizedExample {
    private int count = 0;
    private final Object lock = new Object();

    // Synchronized method (locks on "this")
    public synchronized void incrementMethod() {
        count++;
    }

    // Synchronized block (locks on specific object)
    public void incrementBlock() {
        synchronized (this) {
            count++;
        }
    }

    // Synchronized on different lock object
    public void incrementCustomLock() {
        synchronized (lock) {
            count++;
        }
    }

    // Static synchronized method (locks on Class object)
    public static synchronized void staticMethod() {
        System.out.println("Static synchronized");
    }

    // Demo race condition vs synchronized
    public static void main(String[] args) throws InterruptedException {
        SynchronizedExample example = new SynchronizedExample();

        // Create 1000 threads incrementing counter
        Thread[] threads = new Thread[1000];
        for (int i = 0; i < 1000; i++) {
            threads[i] = new Thread(() -> {
                for (int j = 0; j < 1000; j++) {
                    example.incrementMethod();
                }
            });
            threads[i].start();
        }

        // Wait for all threads
        for (Thread t : threads) {
            t.join();
        }

        System.out.println("Count: " + example.count);
        // With synchronized: 1,000,000 (correct)
        // Without synchronized: less than 1,000,000 (race condition)
    }
}`,
      language: 'java'
    },
    topic: 'concurrency',
    difficulty: 'mid',
    tags: ['synchronized', 'thread-safety', 'mutex', 'lock'],    commonPitfalls: ['Synchronizing on null', 'Holding locks for too long', 'Synchronizing on String literals (shared across JVM)'],
    realWorldUse: 'Banking transactions, inventory management, counter increments, shared resource access.'
  },
  {
    id: 'concurrency-005',
    question: "What is the volatile keyword in Java?",
    answer: "volatile ensures visibility of changes across threads. When a variable is volatile, writes are immediately visible to other threads. Prevents caching in CPU registers. Provides happens-before relationship but NOT atomicity.",
    explanation: "volatile guarantees visibility but not atomicity. Use for flags/status variables. For atomic operations, use Atomic classes.",
    translations: {
      tr: {
        question: "Deadlock nedir ve nasıl önlenir?",
        answer: "Deadlock iki veya daha fazla thread'in birbirini beklemesi ve hiçbirinin ilerleyememesidir. Önleme: lock sırası, timeout, tryLock(), deadlock detection.",
        explanation: "Deadlock her zaman aynı sırayla lock alarak önlenebilir."
      }
    },
    codeExample: {
      code: `public class VolatileExample {
    // Without volatile: thread may cache value and never see change
    private volatile boolean running = true;
    private volatile int counter = 0;

    public void stop() {
        running = false;  // Immediately visible to all threads
    }

    public void run() {
        while (running) {
            // Do work
            // Thread will see running=false immediately
        }
        System.out.println("Stopped");
    }

    // volatile provides visibility, NOT atomicity
    public void increment() {
        counter++;  // NOT thread-safe! (read-modify-write)
        // Three operations: read, increment, write
        // Another thread can interleave
    }

    // For atomic operations, use AtomicInteger
    private AtomicInteger atomicCounter = new AtomicInteger(0);

    public void atomicIncrement() {
        atomicCounter.incrementAndGet();  // Thread-safe
    }

    // Happens-before relationship example
    private volatile boolean initialized = false;
    private String data;

    // Thread 1
    public void initialize() {
        data = "Ready";           // 1. Non-volatile write
        initialized = true;       // 2. Volatile write (happens-before)
    }

    // Thread 2
    public void useData() {
        if (initialized) {        // 3. Volatile read
            System.out.println(data);  // 4. Guaranteed to see "Ready"
        }
        // Happens-before: operations before volatile write (1)
        // are visible after volatile read (3)
    }
}

// Common use case: shutdown flag
public class Server {
    private volatile boolean shutdown = false;

    public void run() {
        while (!shutdown) {
            processRequest();
        }
    }

    public void shutdown() {
        shutdown = true;  // All threads see this immediately
    }
}`,
      language: 'java'
    },
    topic: 'concurrency',
    difficulty: 'mid',
    tags: ['volatile', 'visibility', 'happens-before', 'memory'],    commonPitfalls: ['Thinking volatile provides atomicity', 'Using volatile for compound operations (i++)'],
    realWorldUse: 'Shutdown flags, status indicators, double-checked locking, publish-subscribe patterns.'
  },
  {
    id: 'concurrency-006',
    question: "What are wait(), notify(), and notifyAll() methods in Java?",
    answer: "Inter-thread communication methods (from Object class). wait() releases lock and waits. notify() wakes one waiting thread. notifyAll() wakes all waiting threads. Must be called within synchronized block/method on the same object.",
    explanation: "Used for thread coordination - one thread waits until another signals. Producer-consumer pattern is classic example.",
    translations: {
      tr: {
        question: "Thread pool nedir ve neden kullanılır?",
        answer: "Thread pool yeniden kullanılabilir thread koleksiyonudur. ExecutorService ile yönetilir. Thread oluşturma overhead'ini azaltır. Kaynak kullanımını kontrol eder.",
        explanation: "Thread pool manuel thread yönetiminden daha verimli ve ölçeklenebilir."
      }
    },
    codeExample: {
      code: `public class WaitNotifyExample {
    private final List<Integer> queue = new LinkedList<>();
    private final int MAX_SIZE = 5;
    private final Object lock = new Object();

    // Producer thread
    public void produce(int value) throws InterruptedException {
        synchronized (lock) {
            // Wait if queue is full
            while (queue.size() == MAX_SIZE) {
                System.out.println("Queue full, producer waiting...");
                lock.wait();  // Releases lock and waits
            }

            queue.add(value);
            System.out.println("Produced: " + value);

            // Notify consumer
            lock.notifyAll();  // Wake up waiting consumers
        }
    }

    // Consumer thread
    public int consume() throws InterruptedException {
        synchronized (lock) {
            // Wait if queue is empty
            while (queue.isEmpty()) {
                System.out.println("Queue empty, consumer waiting...");
                lock.wait();  // Releases lock and waits
            }

            int value = queue.remove(0);
            System.out.println("Consumed: " + value);

            // Notify producer
            lock.notifyAll();  // Wake up waiting producers
            return value;
        }
    }

    public static void main(String[] args) {
        WaitNotifyExample example = new WaitNotifyExample();

        // Producer thread
        Thread producer = new Thread(() -> {
            try {
                for (int i = 0; i < 10; i++) {
                    example.produce(i);
                    Thread.sleep(100);
                }
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        });

        // Consumer thread
        Thread consumer = new Thread(() -> {
            try {
                for (int i = 0; i < 10; i++) {
                    example.consume();
                    Thread.sleep(200);
                }
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        });

        producer.start();
        consumer.start();
    }
}

// Key points:
// 1. Always call wait()/notify() in synchronized block
// 2. Use while loop, not if, to check condition (avoid spurious wakeups)
// 3. notifyAll() is safer than notify() (wakes all threads)`,
      language: 'java'
    },
    topic: 'concurrency',
    difficulty: 'mid',
    tags: ['wait', 'notify', 'inter-thread-communication', 'producer-consumer'],    commonPitfalls: ['Calling wait() without synchronized', 'Using if instead of while loop', 'IllegalMonitorStateException'],
    realWorldUse: 'Producer-consumer queues, thread pools, blocking operations, resource pools.'
  },
  {
    id: 'concurrency-007',
    question: "What is a race condition in Java?",
    answer: "A race condition occurs when multiple threads access shared data concurrently and at least one modifies it, without proper synchronization. The outcome depends on thread scheduling (non-deterministic). Causes incorrect results.",
    explanation: "Race conditions are bugs that occur due to improper thread synchronization. Fix using synchronized, locks, or atomic operations.",
    translations: {
      tr: {
        question: "Callable ve Runnable arasındaki fark nedir?",
        answer: "Runnable: run() metodu, return değeri yok, exception fırlatamaz. Callable: call() metodu, değer return eder, checked exception fırlatabilir. Future ile kullanılır.",
        explanation: "Callable asenkron hesaplamalardan sonuç almak için kullanılır."
      }
    },
    codeExample: {
      code: `public class RaceConditionExample {
    private int counter = 0;

    // NOT thread-safe - race condition
    public void incrementUnsafe() {
        // Three operations (not atomic):
        // 1. Read counter value
        // 2. Increment value
        // 3. Write back to counter
        counter++;

        // If two threads execute simultaneously:
        // Thread 1: reads 0
        // Thread 2: reads 0 (before Thread 1 writes)
        // Thread 1: writes 1
        // Thread 2: writes 1 (overwrites)
        // Result: 1 instead of 2 (lost update)
    }

    // Solution 1: synchronized method
    public synchronized void incrementSafe() {
        counter++;
    }

    // Solution 2: synchronized block
    public void incrementBlock() {
        synchronized (this) {
            counter++;
        }
    }

    // Solution 3: AtomicInteger
    private AtomicInteger atomicCounter = new AtomicInteger(0);

    public void incrementAtomic() {
        atomicCounter.incrementAndGet();
    }

    // Demonstrate race condition
    public static void main(String[] args) throws InterruptedException {
        RaceConditionExample example = new RaceConditionExample();

        // Create 1000 threads, each increments 1000 times
        Thread[] threads = new Thread[1000];
        for (int i = 0; i < 1000; i++) {
            threads[i] = new Thread(() -> {
                for (int j = 0; j < 1000; j++) {
                    example.incrementUnsafe();
                }
            });
            threads[i].start();
        }

        // Wait for completion
        for (Thread t : threads) {
            t.join();
        }

        System.out.println("Counter: " + example.counter);
        // Expected: 1,000,000
        // Actual: less (e.g., 987,432) due to race condition
    }
}

// Real-world example: Banking
class BankAccount {
    private double balance = 1000;

    // Race condition: check-then-act
    public void withdrawUnsafe(double amount) {
        if (balance >= amount) {  // Check
            // Another thread can interleave here!
            balance -= amount;     // Act
        }
    }

    // Thread-safe version
    public synchronized void withdrawSafe(double amount) {
        if (balance >= amount) {
            balance -= amount;
        }
    }
}`,
      language: 'java'
    },
    topic: 'concurrency',
    difficulty: 'mid',
    tags: ['race-condition', 'thread-safety', 'synchronization', 'concurrency-bug'],    commonPitfalls: ['Check-then-act operations', 'Compound operations (i++)', 'Multiple synchronized blocks on different locks'],
    realWorldUse: 'Banking withdrawals, inventory updates, counter increments, shared cache updates.'
  },
  {
    id: 'concurrency-008',
    question: "What is a deadlock in Java?",
    answer: "Deadlock occurs when two or more threads are blocked forever, each waiting for a lock that another thread holds. Classic example: Thread 1 holds Lock A, wants Lock B; Thread 2 holds Lock B, wants Lock A. Neither can proceed.",
    explanation: "Deadlock requires: mutual exclusion, hold and wait, no preemption, and circular wait. Breaking any condition prevents deadlock.",
    translations: {
      tr: {
        question: "Future ve CompletableFuture arasındaki fark nedir?",
        answer: "Future: asenkron hesaplama sonucu, blocking get(). CompletableFuture: non-blocking, zincirleme, kombinasyon, exception handling, reactive programming.",
        explanation: "CompletableFuture modern asenkron programlama için daha güçlüdür."
      }
    },
    codeExample: {
      code: `public class DeadlockExample {
    private final Object lock1 = new Object();
    private final Object lock2 = new Object();

    // DEADLOCK SCENARIO
    public void method1() {
        synchronized (lock1) {
            System.out.println("Thread 1: Holding lock1...");

            try { Thread.sleep(10); } catch (InterruptedException e) {}

            System.out.println("Thread 1: Waiting for lock2...");
            synchronized (lock2) {
                System.out.println("Thread 1: Holding lock1 & lock2");
            }
        }
    }

    public void method2() {
        synchronized (lock2) {  // Acquires lock2 first (PROBLEM!)
            System.out.println("Thread 2: Holding lock2...");

            try { Thread.sleep(10); } catch (InterruptedException e) {}

            System.out.println("Thread 2: Waiting for lock1...");
            synchronized (lock1) {
                System.out.println("Thread 2: Holding lock2 & lock1");
            }
        }
    }

    // SOLUTION 1: Lock Ordering
    public void method1Safe() {
        synchronized (lock1) {  // Always acquire lock1 first
            synchronized (lock2) {
                System.out.println("Method 1 executed safely");
            }
        }
    }

    public void method2Safe() {
        synchronized (lock1) {  // Always acquire lock1 first (same order)
            synchronized (lock2) {
                System.out.println("Method 2 executed safely");
            }
        }
    }

    // SOLUTION 2: tryLock with timeout
    private final Lock lockA = new ReentrantLock();
    private final Lock lockB = new ReentrantLock();

    public void methodWithTimeout() {
        try {
            // Try to acquire both locks with timeout
            if (lockA.tryLock(100, TimeUnit.MILLISECONDS)) {
                try {
                    if (lockB.tryLock(100, TimeUnit.MILLISECONDS)) {
                        try {
                            // Do work
                            System.out.println("Acquired both locks");
                        } finally {
                            lockB.unlock();
                        }
                    }
                } finally {
                    lockA.unlock();
                }
            }
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    // Demonstrate deadlock
    public static void main(String[] args) {
        DeadlockExample example = new DeadlockExample();

        Thread t1 = new Thread(() -> example.method1());
        Thread t2 = new Thread(() -> example.method2());

        t1.start();
        t2.start();

        // Program hangs here - deadlock!
    }
}

// Deadlock Prevention Strategies:
// 1. Lock Ordering: Always acquire locks in same order
// 2. Lock Timeout: Use tryLock() with timeout
// 3. Deadlock Detection: Monitor thread states
// 4. Avoid Nested Locks: Minimize lock scope`,
      language: 'java'
    },
    topic: 'concurrency',
    difficulty: 'senior',
    tags: ['deadlock', 'lock-ordering', 'concurrency-issue', 'synchronization'],    commonPitfalls: ['Inconsistent lock ordering', 'Acquiring multiple locks', 'Not using timeouts'],
    realWorldUse: 'Database transaction deadlocks, resource allocation systems, distributed systems.'
  },
  {
    id: 'concurrency-009',
    question: "What is ExecutorService and thread pools in Java?",
    answer: "ExecutorService is a framework for managing thread pools. Provides thread reuse, avoiding creation overhead. Main types: newFixedThreadPool (fixed size), newCachedThreadPool (grows as needed), newSingleThreadExecutor (single thread), newScheduledThreadPool (scheduled tasks).",
    explanation: "Thread pools improve performance by reusing threads instead of creating new ones for each task. ExecutorService manages lifecycle.",
    translations: {
      tr: {
        question: "CountDownLatch nedir?",
        answer: "CountDownLatch thread'lerin belli sayıda işlem tamamlanana kadar beklemesini sağlar. countDown() sayacı azaltır. await() sıfır olana kadar bekler. Tek kullanımlık.",
        explanation: "Paralel görevlerin tamamlanmasını beklemek için kullanışlıdır."
      }
    },
    codeExample: {
      code: `import java.util.concurrent.*;
import java.util.*;

public class ExecutorServiceExample {

    public static void main(String[] args) throws Exception {

        // 1. Fixed Thread Pool - fixed number of threads
        ExecutorService fixedPool = Executors.newFixedThreadPool(3);
        for (int i = 0; i < 10; i++) {
            final int taskId = i;
            fixedPool.execute(() -> {
                System.out.println("Task " + taskId +
                    " by " + Thread.currentThread().getName());
            });
        }
        fixedPool.shutdown();

        // 2. Cached Thread Pool - creates threads as needed
        ExecutorService cachedPool = Executors.newCachedThreadPool();
        for (int i = 0; i < 5; i++) {
            cachedPool.execute(() -> {
                System.out.println("Cached: " +
                    Thread.currentThread().getName());
            });
        }
        cachedPool.shutdown();

        // 3. Single Thread Executor - sequential execution
        ExecutorService singleExecutor = Executors.newSingleThreadExecutor();
        for (int i = 0; i < 5; i++) {
            final int taskId = i;
            singleExecutor.execute(() -> {
                System.out.println("Sequential task " + taskId);
            });
        }
        singleExecutor.shutdown();

        // 4. Scheduled Thread Pool - delayed/periodic tasks
        ScheduledExecutorService scheduledPool =
            Executors.newScheduledThreadPool(2);

        // Run after 2 seconds delay
        scheduledPool.schedule(() -> {
            System.out.println("Delayed task");
        }, 2, TimeUnit.SECONDS);

        // Run every 1 second, starting after 1 second
        scheduledPool.scheduleAtFixedRate(() -> {
            System.out.println("Periodic task: " + new Date());
        }, 1, 1, TimeUnit.SECONDS);

        // 5. Custom ThreadPoolExecutor
        ThreadPoolExecutor customPool = new ThreadPoolExecutor(
            2,              // corePoolSize
            5,              // maximumPoolSize
            60,             // keepAliveTime
            TimeUnit.SECONDS,
            new LinkedBlockingQueue<>(10)  // workQueue
        );

        // Submit tasks
        for (int i = 0; i < 20; i++) {
            customPool.execute(() -> {
                System.out.println("Custom pool task");
            });
        }

        // Graceful shutdown
        customPool.shutdown();
        if (!customPool.awaitTermination(60, TimeUnit.SECONDS)) {
            customPool.shutdownNow();  // Force shutdown
        }
    }
}

// Best practices:
// 1. Always shutdown executor
// 2. Choose appropriate pool type
// 3. Handle RejectedExecutionException
// 4. Use try-finally for cleanup

public class ExecutorBestPractices {
    public void processData() {
        ExecutorService executor = Executors.newFixedThreadPool(4);

        try {
            List<Future<String>> futures = new ArrayList<>();

            // Submit tasks
            for (int i = 0; i < 10; i++) {
                Future<String> future = executor.submit(() -> {
                    // Process data
                    return "Result";
                });
                futures.add(future);
            }

            // Get results
            for (Future<String> future : futures) {
                String result = future.get();
                System.out.println(result);
            }

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            // Proper shutdown
            executor.shutdown();
            try {
                if (!executor.awaitTermination(60, TimeUnit.SECONDS)) {
                    executor.shutdownNow();
                }
            } catch (InterruptedException e) {
                executor.shutdownNow();
            }
        }
    }
}`,
      language: 'java'
    },
    topic: 'concurrency',
    difficulty: 'mid',
    tags: ['executorservice', 'thread-pool', 'concurrent-execution'],    commonPitfalls: ['Forgetting to shutdown executor', 'Using wrong pool type', 'Not handling rejected tasks'],
    realWorldUse: 'Web servers, batch processing, parallel data processing, scheduled jobs.'
  },
  {
    id: 'concurrency-010',
    question: "What is Future and Callable in Java?",
    answer: "Callable is like Runnable but returns a value and can throw checked exceptions. Future represents the result of asynchronous computation. Use get() to retrieve result (blocks until ready), cancel() to cancel task, isDone() to check completion.",
    explanation: "Future enables retrieving results from asynchronous tasks. Callable extends Runnable functionality with return values.",
    translations: {
      tr: {
        question: "CyclicBarrier nedir?",
        answer: "CyclicBarrier thread'lerin barrier noktasında birbirini beklemesini sağlar. Tüm thread'ler ulaşınca devam eder. Yeniden kullanılabilir. Barrier action çalıştırılabilir.",
        explanation: "CyclicBarrier paralel görevleri senkronize etmek için kullanılır."
      }
    },
    codeExample: {
      code: `import java.util.concurrent.*;
import java.util.*;

public class FutureCallableExample {

    // Callable - returns value and throws exception
    static class DataProcessor implements Callable<String> {
        private int id;

        DataProcessor(int id) {
            this.id = id;
        }

        @Override
        public String call() throws Exception {
            // Simulate processing
            Thread.sleep(1000);

            if (id == 5) {
                throw new Exception("Error processing id: " + id);
            }

            return "Processed data: " + id;
        }
    }

    public static void main(String[] args) {
        ExecutorService executor = Executors.newFixedThreadPool(3);

        try {
            // Submit single task
            Future<String> future = executor.submit(new DataProcessor(1));

            // Check if done (non-blocking)
            System.out.println("Is done: " + future.isDone());

            // Get result (blocking)
            String result = future.get();  // Waits until complete
            System.out.println(result);

            // Get with timeout
            Future<String> future2 = executor.submit(new DataProcessor(2));
            try {
                result = future2.get(2, TimeUnit.SECONDS);
            } catch (TimeoutException e) {
                System.out.println("Task timed out");
                future2.cancel(true);  // Interrupt task
            }

            // Submit multiple tasks
            List<Callable<String>> tasks = new ArrayList<>();
            for (int i = 0; i < 10; i++) {
                tasks.add(new DataProcessor(i));
            }

            // invokeAll - execute all tasks
            List<Future<String>> futures = executor.invokeAll(tasks);

            // Process results
            for (Future<String> f : futures) {
                try {
                    System.out.println(f.get());
                } catch (ExecutionException e) {
                    System.out.println("Task failed: " + e.getCause().getMessage());
                }
            }

            // invokeAny - returns first completed result
            String firstResult = executor.invokeAny(tasks);
            System.out.println("First result: " + firstResult);

            // Cancel future
            Future<String> future3 = executor.submit(new DataProcessor(3));
            future3.cancel(true);  // mayInterruptIfRunning
            System.out.println("Is cancelled: " + future3.isCancelled());

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            executor.shutdown();
        }
    }
}

// Practical example: Parallel file processing
public class ParallelFileProcessor {

    public List<String> processFiles(List<String> filePaths)
            throws InterruptedException {
        ExecutorService executor = Executors.newFixedThreadPool(4);
        List<Future<String>> futures = new ArrayList<>();

        try {
            // Submit all file processing tasks
            for (String path : filePaths) {
                Callable<String> task = () -> {
                    // Read and process file
                    return processFile(path);
                };
                futures.add(executor.submit(task));
            }

            // Collect results
            List<String> results = new ArrayList<>();
            for (Future<String> future : futures) {
                try {
                    results.add(future.get());
                } catch (ExecutionException e) {
                    System.err.println("Error: " + e.getCause());
                }
            }

            return results;

        } finally {
            executor.shutdown();
            executor.awaitTermination(1, TimeUnit.MINUTES);
        }
    }

    private String processFile(String path) {
        // File processing logic
        return "Processed: " + path;
    }
}`,
      language: 'java'
    },
    topic: 'concurrency',
    difficulty: 'mid',
    tags: ['future', 'callable', 'async', 'result'],    commonPitfalls: ['Forgetting to handle ExecutionException', 'Not using timeout with get()', 'Blocking main thread'],
    realWorldUse: 'Parallel data processing, API calls, file operations, database queries.'
  },
  {
    id: 'concurrency-011',
    question: "What is CompletableFuture in Java 8+?",
    answer: "CompletableFuture is an enhanced Future for asynchronous programming. Supports chaining (thenApply, thenCompose), combining (thenCombine, allOf, anyOf), exception handling (exceptionally, handle), and non-blocking operations. More powerful than Future.",
    explanation: "CompletableFuture enables functional-style asynchronous programming with composability and better exception handling.",
    translations: {
      tr: {
        question: "Java 8+'da CompletableFuture nedir?",
        answer: "CompletableFuture asenkron programlama için geliştirilmiş bir Future'dır. Zincirleme (thenApply, thenCompose), birleştirme (thenCombine, allOf, anyOf), exception handling (exceptionally, handle) ve non-blocking operasyonları destekler. Future'dan daha güçlüdür.",
        explanation: "CompletableFuture composition ve daha iyi exception handling ile functional-style asenkron programlama sağlar."
      }
    },
    codeExample: {
      code: `import java.util.concurrent.*;

public class CompletableFutureExample {

    public static void main(String[] args) throws Exception {

        // 1. Create CompletableFuture
        CompletableFuture<String> future = CompletableFuture.supplyAsync(() -> {
            // Runs in ForkJoinPool.commonPool()
            sleep(1000);
            return "Hello";
        });

        // 2. Chain operations - thenApply (transform)
        CompletableFuture<String> result = future
            .thenApply(s -> s + " World")
            .thenApply(String::toUpperCase);

        System.out.println(result.get());  // "HELLO WORLD"

        // 3. thenCompose - flatten nested futures
        CompletableFuture<String> composed = CompletableFuture
            .supplyAsync(() -> "User123")
            .thenCompose(userId -> fetchUserDetails(userId));

        System.out.println(composed.get());

        // 4. Combine multiple futures - thenCombine
        CompletableFuture<String> future1 =
            CompletableFuture.supplyAsync(() -> "Hello");
        CompletableFuture<String> future2 =
            CompletableFuture.supplyAsync(() -> "World");

        CompletableFuture<String> combined = future1
            .thenCombine(future2, (s1, s2) -> s1 + " " + s2);

        System.out.println(combined.get());  // "Hello World"

        // 5. Exception handling - exceptionally
        CompletableFuture<String> withError = CompletableFuture
            .supplyAsync(() -> {
                if (true) throw new RuntimeException("Error!");
                return "Success";
            })
            .exceptionally(ex -> "Recovered from: " + ex.getMessage());

        System.out.println(withError.get());

        // 6. handle - handles both success and failure
        CompletableFuture<String> handled = CompletableFuture
            .supplyAsync(() -> {
                throw new RuntimeException("Failed");
            })
            .handle((result, ex) -> {
                if (ex != null) {
                    return "Error: " + ex.getMessage();
                }
                return result;
            });

        // 7. Wait for all - allOf
        CompletableFuture<String> f1 = CompletableFuture.supplyAsync(() -> "Task1");
        CompletableFuture<String> f2 = CompletableFuture.supplyAsync(() -> "Task2");
        CompletableFuture<String> f3 = CompletableFuture.supplyAsync(() -> "Task3");

        CompletableFuture<Void> allTasks = CompletableFuture.allOf(f1, f2, f3);
        allTasks.join();  // Wait for all
        System.out.println("All completed");

        // 8. Wait for any - anyOf
        CompletableFuture<Object> fastest = CompletableFuture.anyOf(f1, f2, f3);
        System.out.println("First: " + fastest.get());

        // 9. Async callback - thenAccept (consume, no return)
        CompletableFuture.supplyAsync(() -> "Data")
            .thenAccept(data -> System.out.println("Received: " + data));

        // 10. Run after completion - thenRun
        CompletableFuture.supplyAsync(() -> "Done")
            .thenRun(() -> System.out.println("Cleanup"));

        Thread.sleep(2000);  // Wait for async operations
    }

    // Simulated async operation
    static CompletableFuture<String> fetchUserDetails(String userId) {
        return CompletableFuture.supplyAsync(() -> {
            sleep(500);
            return "User details for: " + userId;
        });
    }

    static void sleep(int ms) {
        try { Thread.sleep(ms); } catch (InterruptedException e) {}
    }
}

// Real-world example: REST API calls
public class AsyncApiCalls {

    public CompletableFuture<String> fetchUserProfile(String userId) {
        return CompletableFuture.supplyAsync(() -> {
            // API call
            return "User: " + userId;
        });
    }

    public CompletableFuture<String> fetchUserOrders(String userId) {
        return CompletableFuture.supplyAsync(() -> {
            // API call
            return "Orders for: " + userId;
        });
    }

    public CompletableFuture<String> fetchUserPreferences(String userId) {
        return CompletableFuture.supplyAsync(() -> {
            // API call
            return "Preferences for: " + userId;
        });
    }

    // Combine multiple API calls
    public CompletableFuture<String> getUserDashboard(String userId) {
        CompletableFuture<String> profileFuture = fetchUserProfile(userId);
        CompletableFuture<String> ordersFuture = fetchUserOrders(userId);
        CompletableFuture<String> prefFuture = fetchUserPreferences(userId);

        return CompletableFuture.allOf(profileFuture, ordersFuture, prefFuture)
            .thenApply(v -> {
                // All completed, combine results
                try {
                    return profileFuture.get() + "\\n" +
                           ordersFuture.get() + "\\n" +
                           prefFuture.get();
                } catch (Exception e) {
                    throw new RuntimeException(e);
                }
            });
    }
}`,
      language: 'java'
    },
    topic: 'concurrency',
    difficulty: 'senior',
    tags: ['completablefuture', 'async', 'java8', 'functional'],    commonPitfalls: ['Not handling exceptions properly', 'Blocking with get() defeats async purpose', 'Memory leaks with uncompleted futures'],
    realWorldUse: 'Microservices communication, parallel API calls, reactive programming, event-driven systems.'
  },
  {
    id: 'concurrency-012',
    question: "What is Lock interface and ReentrantLock in Java?",
    answer: "Lock interface provides more flexible locking than synchronized. ReentrantLock is implementation supporting: tryLock() (non-blocking), lockInterruptibly(), fairness option, multiple condition variables. Must manually unlock in finally block.",
    explanation: "Lock offers more control than synchronized: timeout, fairness, interruptible locking. ReentrantLock allows same thread to acquire lock multiple times.",
    translations: {
      tr: {
        question: "ReentrantLock nedir?",
        answer: "ReentrantLock synchronized'a alternatif açık lock'tur. tryLock(), lock interruptibly, fairness desteği. Aynı thread birden fazla acquire edebilir. Manuel unlock gerekir.",
        explanation: "ReentrantLock synchronized'dan daha esnek ancak dikkatli kullanılmalı."
      }
    },
    codeExample: {
      code: `import java.util.concurrent.locks.*;

public class ReentrantLockExample {
    private final ReentrantLock lock = new ReentrantLock();
    private final ReentrantLock fairLock = new ReentrantLock(true);  // Fair lock
    private int count = 0;

    // Basic usage - always use try-finally
    public void increment() {
        lock.lock();
        try {
            count++;
        } finally {
            lock.unlock();  // MUST unlock in finally
        }
    }

    // tryLock - non-blocking attempt
    public void tryIncrement() {
        if (lock.tryLock()) {  // Doesn't block
            try {
                count++;
                System.out.println("Lock acquired");
            } finally {
                lock.unlock();
            }
        } else {
            System.out.println("Could not acquire lock");
        }
    }

    // tryLock with timeout
    public void incrementWithTimeout() {
        try {
            if (lock.tryLock(1, TimeUnit.SECONDS)) {
                try {
                    count++;
                } finally {
                    lock.unlock();
                }
            } else {
                System.out.println("Timeout acquiring lock");
            }
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }

    // Interruptible lock
    public void incrementInterruptibly() {
        try {
            lock.lockInterruptibly();  // Can be interrupted
            try {
                count++;
            } finally {
                lock.unlock();
            }
        } catch (InterruptedException e) {
            System.out.println("Thread interrupted while waiting");
        }
    }

    // Reentrant behavior
    public void reentrantDemo() {
        lock.lock();
        try {
            System.out.println("First lock");

            lock.lock();  // Same thread can acquire again
            try {
                System.out.println("Second lock (reentrant)");
            } finally {
                lock.unlock();
            }

        } finally {
            lock.unlock();
        }
    }

    // Check lock state
    public void checkLockState() {
        System.out.println("Is locked: " + lock.isLocked());
        System.out.println("Hold count: " + lock.getHoldCount());
        System.out.println("Has queued threads: " + lock.hasQueuedThreads());
        System.out.println("Queue length: " + lock.getQueueLength());
    }

    // Fair vs Unfair locks
    public static void demonstrateFairness() {
        ReentrantLock unfairLock = new ReentrantLock(false);  // Unfair (default)
        ReentrantLock fairLock = new ReentrantLock(true);     // Fair

        // Fair lock: threads acquire in order they requested
        // Unfair lock: threads may "barge" ahead (better throughput)
    }
}

// Comparison: synchronized vs ReentrantLock
public class LockComparison {
    private final Object syncLock = new Object();
    private final ReentrantLock reentrantLock = new ReentrantLock();

    // synchronized - simpler
    public void synchronizedMethod() {
        synchronized (syncLock) {
            // Auto unlock when block exits
        }
    }

    // ReentrantLock - more control
    public void reentrantLockMethod() {
        reentrantLock.lock();
        try {
            // Must manually unlock
        } finally {
            reentrantLock.unlock();
        }
    }
}

// Real-world example: Resource pool with timeout
public class ResourcePool {
    private final ReentrantLock lock = new ReentrantLock(true);  // Fair
    private final Queue<Resource> pool = new LinkedList<>();

    public Resource acquire(long timeout, TimeUnit unit)
            throws InterruptedException {
        if (lock.tryLock(timeout, unit)) {
            try {
                if (!pool.isEmpty()) {
                    return pool.poll();
                }
                return null;
            } finally {
                lock.unlock();
            }
        }
        throw new TimeoutException("Could not acquire resource");
    }

    public void release(Resource resource) {
        lock.lock();
        try {
            pool.offer(resource);
        } finally {
            lock.unlock();
        }
    }

    static class Resource {}
}

// When to use ReentrantLock over synchronized:
// 1. Need try-lock with timeout (avoid deadlock)
// 2. Need fair ordering
// 3. Need interruptible locking
// 4. Need multiple condition variables
// 5. Need lock/unlock in different methods`,
      language: 'java'
    },
    topic: 'concurrency',
    difficulty: 'senior',
    tags: ['lock', 'reentrantlock', 'synchronization', 'concurrency'],    commonPitfalls: ['Forgetting to unlock in finally', 'Deadlock without timeout', 'IllegalMonitorStateException'],
    realWorldUse: 'Connection pools, resource management, deadlock prevention, fair scheduling.'
  },
  {
    id: 'concurrency-013',
    question: "What is ReadWriteLock in Java?",
    answer: "ReadWriteLock allows multiple readers OR single writer. Improves concurrency when reads outnumber writes. Has two locks: readLock() for shared read access, writeLock() for exclusive write access. ReentrantReadWriteLock is the implementation.",
    explanation: "ReadWriteLock optimizes read-heavy scenarios by allowing concurrent reads while ensuring exclusive writes.",
    translations: {
      tr: {
        question: "ReadWriteLock nedir?",
        answer: "ReadWriteLock okuma ve yazma için ayrı lock'lar sağlar. Çok okuyucu eş zamanlı okuyabilir. Tek yazıcı özel erişime sahip. Okuma-ağırlıklı senaryolar için optimize edilmiştir.",
        explanation: "ReadWriteLock okuma-ağırlıklı işlemlerde performansı artırır."
      }
    },
    codeExample: {
      code: `import java.util.concurrent.locks.*;
import java.util.*;

public class ReadWriteLockExample {
    private final ReadWriteLock rwLock = new ReentrantReadWriteLock();
    private final Lock readLock = rwLock.readLock();
    private final Lock writeLock = rwLock.writeLock();
    private final Map<String, String> cache = new HashMap<>();

    // Read operation - multiple threads can read simultaneously
    public String read(String key) {
        readLock.lock();
        try {
            System.out.println(Thread.currentThread().getName() + " reading");
            Thread.sleep(100);  // Simulate read
            return cache.get(key);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            return null;
        } finally {
            readLock.unlock();
        }
    }

    // Write operation - exclusive access
    public void write(String key, String value) {
        writeLock.lock();
        try {
            System.out.println(Thread.currentThread().getName() + " writing");
            Thread.sleep(100);  // Simulate write
            cache.put(key, value);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        } finally {
            writeLock.unlock();
        }
    }

    // Demonstrate concurrent reads
    public static void main(String[] args) {
        ReadWriteLockExample example = new ReadWriteLockExample();
        example.write("key1", "value1");

        // Multiple readers - execute concurrently
        for (int i = 0; i < 5; i++) {
            new Thread(() -> {
                String value = example.read("key1");
                System.out.println("Read: " + value);
            }, "Reader-" + i).start();
        }

        // Writer - blocks until all readers done
        new Thread(() -> {
            example.write("key1", "newValue");
        }, "Writer").start();
    }
}

// Real-world example: Cache implementation
public class ThreadSafeCache<K, V> {
    private final Map<K, V> cache = new HashMap<>();
    private final ReadWriteLock lock = new ReentrantReadWriteLock();
    private final Lock readLock = lock.readLock();
    private final Lock writeLock = lock.writeLock();

    public V get(K key) {
        readLock.lock();
        try {
            return cache.get(key);
        } finally {
            readLock.unlock();
        }
    }

    public void put(K key, V value) {
        writeLock.lock();
        try {
            cache.put(key, value);
        } finally {
            writeLock.unlock();
        }
    }

    public void clear() {
        writeLock.lock();
        try {
            cache.clear();
        } finally {
            writeLock.unlock();
        }
    }

    public int size() {
        readLock.lock();
        try {
            return cache.size();
        } finally {
            readLock.unlock();
        }
    }

    // Lock upgrade attempt (READ -> WRITE)
    public V computeIfAbsent(K key, Function<K, V> mappingFunction) {
        readLock.lock();
        try {
            V value = cache.get(key);
            if (value != null) {
                return value;
            }
        } finally {
            readLock.unlock();
        }

        // Must release read lock before acquiring write lock
        writeLock.lock();
        try {
            // Double-check after acquiring write lock
            V value = cache.get(key);
            if (value == null) {
                value = mappingFunction.apply(key);
                cache.put(key, value);
            }
            return value;
        } finally {
            writeLock.unlock();
        }
    }
}

// Performance comparison
public class LockPerformanceDemo {
    private int counter = 0;

    // Synchronized - blocks both reads and writes
    public synchronized int readSync() {
        return counter;
    }

    public synchronized void writeSync(int value) {
        counter = value;
    }

    // ReadWriteLock - allows concurrent reads
    private final ReadWriteLock rwLock = new ReentrantReadWriteLock();

    public int readRW() {
        rwLock.readLock().lock();
        try {
            return counter;
        } finally {
            rwLock.readLock().unlock();
        }
    }

    public void writeRW(int value) {
        rwLock.writeLock().lock();
        try {
            counter = value;
        } finally {
            rwLock.writeLock().unlock();
        }
    }

    // With ReadWriteLock: 10 readers can read simultaneously
    // With synchronized: only 1 thread at a time (read or write)
}

// When to use ReadWriteLock:
// ✓ Read operations significantly outnumber writes
// ✓ Read operations take significant time
// ✓ Need to optimize read performance
// ✗ Equal reads/writes (use synchronized or ReentrantLock)
// ✗ Very short critical sections (overhead not worth it)`,
      language: 'java'
    },
    topic: 'concurrency',
    difficulty: 'senior',
    tags: ['readwritelock', 'concurrency', 'optimization', 'cache'],    commonPitfalls: ['Lock upgrade/downgrade without releasing', 'Using for write-heavy workloads', 'Not releasing locks'],
    realWorldUse: 'Caching systems, configuration management, read-heavy data structures, session management.'
  },
  {
    id: 'concurrency-014',
    question: "What is CountDownLatch in Java?",
    answer: "CountDownLatch is a synchronization aid that allows one or more threads to wait until a set of operations (in other threads) completes. Initialized with count. Threads call await() to wait. Other threads call countDown() to decrement. When count reaches 0, waiting threads proceed.",
    explanation: "CountDownLatch is useful for coordinating thread startup, waiting for services to initialize, or parallel task completion.",
    translations: {
      tr: {
        question: "Atomic sınıfları nedir?",
        answer: "Atomic sınıfları (AtomicInteger, AtomicLong) lock-free thread-safe operasyonlar sağlar. CAS (Compare-And-Swap) kullanır. Increment, decrement, compareAndSet atomiktir.",
        explanation: "Atomic sınıfları basit sayaçlar için synchronized'dan daha hızlıdır."
      }
    },
    codeExample: {
      code: `import java.util.concurrent.*;

public class CountDownLatchExample {

    // Basic usage
    public static void basicExample() throws InterruptedException {
        int numThreads = 3;
        CountDownLatch latch = new CountDownLatch(numThreads);

        // Start worker threads
        for (int i = 0; i < numThreads; i++) {
            final int workerId = i;
            new Thread(() -> {
                System.out.println("Worker " + workerId + " started");

                // Do work
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }

                System.out.println("Worker " + workerId + " finished");
                latch.countDown();  // Decrement count
            }).start();
        }

        // Main thread waits for all workers
        System.out.println("Main thread waiting...");
        latch.await();  // Blocks until count reaches 0
        System.out.println("All workers finished. Proceeding...");
    }

    // Real-world example: Service initialization
    public static class ServiceManager {
        private final CountDownLatch startupLatch = new CountDownLatch(3);

        public void startServices() throws InterruptedException {
            // Start Database Service
            new Thread(() -> {
                System.out.println("Starting Database...");
                sleep(2000);
                System.out.println("Database ready");
                startupLatch.countDown();
            }).start();

            // Start Cache Service
            new Thread(() -> {
                System.out.println("Starting Cache...");
                sleep(1500);
                System.out.println("Cache ready");
                startupLatch.countDown();
            }).start();

            // Start API Service
            new Thread(() -> {
                System.out.println("Starting API...");
                sleep(1000);
                System.out.println("API ready");
                startupLatch.countDown();
            }).start();

            // Wait for all services
            System.out.println("Waiting for all services to start...");
            startupLatch.await();
            System.out.println("All services started. Application ready!");
        }
    }

    // Example: Start signal for concurrent tasks
    public static class RaceStart {
        public void race(int numRunners) throws InterruptedException {
            CountDownLatch startSignal = new CountDownLatch(1);  // Start gate
            CountDownLatch doneSignal = new CountDownLatch(numRunners);  // Finish line

            // Create runners
            for (int i = 0; i < numRunners; i++) {
                final int runnerId = i;
                new Thread(() -> {
                    try {
                        System.out.println("Runner " + runnerId + " ready");
                        startSignal.await();  // Wait for start signal

                        // Run!
                        System.out.println("Runner " + runnerId + " running");
                        Thread.sleep((long)(Math.random() * 1000));

                        System.out.println("Runner " + runnerId + " finished");
                        doneSignal.countDown();

                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }).start();
            }

            Thread.sleep(1000);  // Preparation time
            System.out.println("GO!");
            startSignal.countDown();  // Release all runners simultaneously

            doneSignal.await();  // Wait for all runners to finish
            System.out.println("Race complete!");
        }
    }

    // With timeout
    public static void timeoutExample() {
        CountDownLatch latch = new CountDownLatch(3);

        // Start some workers
        new Thread(() -> {
            sleep(1000);
            latch.countDown();
        }).start();

        try {
            // Wait with timeout
            boolean completed = latch.await(2, TimeUnit.SECONDS);
            if (completed) {
                System.out.println("All tasks completed");
            } else {
                System.out.println("Timeout! Only " +
                    (3 - latch.getCount()) + " tasks completed");
            }
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    // Parallel task processing
    public static class ParallelProcessor {
        public void processData(List<String> data) throws InterruptedException {
            int numThreads = 4;
            CountDownLatch latch = new CountDownLatch(numThreads);

            int chunkSize = data.size() / numThreads;

            for (int i = 0; i < numThreads; i++) {
                final int start = i * chunkSize;
                final int end = (i == numThreads - 1) ?
                    data.size() : (i + 1) * chunkSize;

                new Thread(() -> {
                    try {
                        // Process chunk
                        for (int j = start; j < end; j++) {
                            processItem(data.get(j));
                        }
                    } finally {
                        latch.countDown();
                    }
                }).start();
            }

            latch.await();  // Wait for all chunks processed
            System.out.println("All data processed");
        }

        private void processItem(String item) {
            // Process logic
        }
    }

    private static void sleep(int ms) {
        try { Thread.sleep(ms); } catch (InterruptedException e) {}
    }

    public static void main(String[] args) throws Exception {
        basicExample();
        new ServiceManager().startServices();
        new RaceStart().race(5);
        timeoutExample();
    }
}

// Key points:
// - CountDownLatch is one-time use (cannot reset)
// - Count cannot be increased, only decreased
// - await() blocks until count reaches 0
// - countDown() decrements count
// - Use CyclicBarrier for reusable barrier`,
      language: 'java'
    },
    topic: 'concurrency',
    difficulty: 'mid',
    tags: ['countdownlatch', 'synchronization', 'coordination'],    commonPitfalls: ['Forgetting to countDown()', 'Not handling InterruptedException', 'Cannot reuse (one-time only)'],
    realWorldUse: 'Service initialization, parallel testing, batch processing, coordinated startup.'
  },
  {
    id: 'concurrency-015',
    question: "What is CyclicBarrier in Java?",
    answer: "CyclicBarrier is a synchronization aid where a set of threads wait for each other to reach a barrier point. Unlike CountDownLatch, it is reusable (cyclic). All threads call await() and block until all parties arrive. Useful for iterative parallel algorithms.",
    explanation: "CyclicBarrier vs CountDownLatch: CyclicBarrier is reusable, threads wait for each other. CountDownLatch is one-time, threads wait for count to reach zero.",
    translations: {
      tr: {
        question: "ThreadLocal nedir?",
        answer: "ThreadLocal her thread'in değişkenin kendi kopyasına sahip olmasını sağlar. Thread-safe saklama. get(), set(), remove() metodları. Memory leak için dikkat.",
        explanation: "ThreadLocal thread-specific data (user context, transactions) için kullanışlıdır."
      }
    },
    codeExample: {
      code: `import java.util.concurrent.*;

public class CyclicBarrierExample {

    // Basic usage
    public static void basicExample() {
        int numThreads = 3;
        CyclicBarrier barrier = new CyclicBarrier(numThreads, () -> {
            // Barrier action - runs when all threads reach barrier
            System.out.println("All threads reached barrier. Proceeding...");
        });

        for (int i = 0; i < numThreads; i++) {
            final int workerId = i;
            new Thread(() -> {
                try {
                    System.out.println("Worker " + workerId + " doing phase 1");
                    Thread.sleep((int)(Math.random() * 1000));

                    System.out.println("Worker " + workerId + " waiting at barrier");
                    barrier.await();  // Wait for all threads

                    System.out.println("Worker " + workerId + " doing phase 2");

                } catch (Exception e) {
                    e.printStackTrace();
                }
            }).start();
        }
    }

    // Reusable barrier - multiple phases
    public static void multiPhaseExample() {
        int numThreads = 3;
        CyclicBarrier barrier = new CyclicBarrier(numThreads, () -> {
            System.out.println("=== Phase completed ===");
        });

        for (int i = 0; i < numThreads; i++) {
            final int workerId = i;
            new Thread(() -> {
                try {
                    // Phase 1
                    System.out.println("Worker " + workerId + " - Phase 1");
                    barrier.await();

                    // Phase 2
                    System.out.println("Worker " + workerId + " - Phase 2");
                    barrier.await();

                    // Phase 3
                    System.out.println("Worker " + workerId + " - Phase 3");
                    barrier.await();

                    System.out.println("Worker " + workerId + " - Complete");

                } catch (Exception e) {
                    e.printStackTrace();
                }
            }).start();
        }
    }

    // Real-world example: Matrix multiplication
    public static class ParallelMatrixMultiply {
        private final CyclicBarrier barrier;
        private final int[][] matrixA;
        private final int[][] matrixB;
        private final int[][] result;
        private final int numThreads;

        public ParallelMatrixMultiply(int[][] a, int[][] b, int threads) {
            this.matrixA = a;
            this.matrixB = b;
            this.numThreads = threads;
            this.result = new int[a.length][b[0].length];

            this.barrier = new CyclicBarrier(threads, () -> {
                System.out.println("All threads completed their chunk");
            });
        }

        public int[][] multiply() throws InterruptedException {
            int rowsPerThread = matrixA.length / numThreads;

            for (int i = 0; i < numThreads; i++) {
                final int startRow = i * rowsPerThread;
                final int endRow = (i == numThreads - 1) ?
                    matrixA.length : (i + 1) * rowsPerThread;

                new Thread(() -> {
                    try {
                        // Process assigned rows
                        for (int row = startRow; row < endRow; row++) {
                            for (int col = 0; col < matrixB[0].length; col++) {
                                result[row][col] = 0;
                                for (int k = 0; k < matrixB.length; k++) {
                                    result[row][col] +=
                                        matrixA[row][k] * matrixB[k][col];
                                }
                            }
                        }

                        // Wait for all threads to complete
                        barrier.await();

                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                }).start();
            }

            // Wait for completion
            Thread.sleep(1000);
            return result;
        }
    }

    // Game simulation - turn-based
    public static class MultiPlayerGame {
        private final CyclicBarrier turnBarrier;
        private int currentTurn = 0;

        public MultiPlayerGame(int numPlayers) {
            this.turnBarrier = new CyclicBarrier(numPlayers, () -> {
                currentTurn++;
                System.out.println("\\n=== Turn " + currentTurn + " completed ===\\n");
            });
        }

        public void playGame(int playerId, int numTurns) {
            try {
                for (int turn = 0; turn < numTurns; turn++) {
                    // Player makes move
                    System.out.println("Player " + playerId +
                        " making move in turn " + turn);
                    Thread.sleep((int)(Math.random() * 1000));

                    // Wait for all players to complete turn
                    System.out.println("Player " + playerId + " waiting...");
                    turnBarrier.await();
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

    // With timeout
    public static void timeoutExample() {
        CyclicBarrier barrier = new CyclicBarrier(3);

        // Only 2 threads arrive
        for (int i = 0; i < 2; i++) {
            new Thread(() -> {
                try {
                    System.out.println("Thread arrived");
                    barrier.await(2, TimeUnit.SECONDS);  // Timeout
                } catch (TimeoutException e) {
                    System.out.println("Timeout! Not all threads arrived");
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }).start();
        }
    }

    // Reset example
    public static void resetExample() {
        CyclicBarrier barrier = new CyclicBarrier(2);

        new Thread(() -> {
            try {
                barrier.await();
            } catch (BrokenBarrierException e) {
                System.out.println("Barrier was broken");
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }).start();

        try {
            Thread.sleep(100);
            barrier.reset();  // Reset barrier, breaks waiting threads
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args) throws Exception {
        basicExample();
        Thread.sleep(2000);

        multiPhaseExample();
        Thread.sleep(3000);

        MultiPlayerGame game = new MultiPlayerGame(3);
        for (int i = 0; i < 3; i++) {
            final int playerId = i;
            new Thread(() -> game.playGame(playerId, 3)).start();
        }
    }
}

// CountDownLatch vs CyclicBarrier:
// CountDownLatch: One-time use, threads wait for count to reach 0
// CyclicBarrier: Reusable, threads wait for each other
//
// CountDownLatch: countDown() by any thread, await() by waiting threads
// CyclicBarrier: All threads call await()
//
// Use CountDownLatch: Service initialization, task completion
// Use CyclicBarrier: Iterative algorithms, turn-based systems`,
      language: 'java'
    },
    topic: 'concurrency',
    difficulty: 'mid',
    tags: ['cyclicbarrier', 'synchronization', 'coordination', 'reusable'],    commonPitfalls: ['BrokenBarrierException when thread interrupted', 'Not handling timeout', 'Wrong party count'],
    realWorldUse: 'Parallel algorithms, game turns, iterative computations, simulation steps.'
  },
  {
    id: 'concurrency-016',
    question: "What is Semaphore in Java?",
    answer: "Semaphore is a synchronization aid that maintains a set of permits. Threads call acquire() to obtain permit (blocks if none available), release() to return permit. Used to limit concurrent access to resources. Can have multiple permits (unlike binary locks).",
    explanation: "Semaphore controls access to shared resources through permits. Useful for connection pools, rate limiting, resource pools.",
    translations: {
      tr: {
        question: "ConcurrentHashMap nasıl çalışır?",
        answer: "ConcurrentHashMap thread-safe Map'tir. Segment-based locking (Java 7) veya CAS (Java 8+). Okuma lock-free, yazma kısmi lock. putIfAbsent(), compute() gibi atomic metodlar.",
        explanation: "ConcurrentHashMap Hashtable ve synchronized HashMap'den daha verimli."
      }
    },
    codeExample: {
      code: `import java.util.concurrent.*;

public class SemaphoreExample {

    // Basic usage
    public static void basicExample() {
        Semaphore semaphore = new Semaphore(2);  // 2 permits

        for (int i = 0; i < 5; i++) {
            final int threadId = i;
            new Thread(() -> {
                try {
                    System.out.println("Thread " + threadId + " waiting");
                    semaphore.acquire();  // Acquire permit

                    System.out.println("Thread " + threadId + " acquired permit");
                    Thread.sleep(2000);  // Use resource

                    System.out.println("Thread " + threadId + " releasing permit");

                } catch (InterruptedException e) {
                    e.printStackTrace();
                } finally {
                    semaphore.release();  // ALWAYS release in finally
                }
            }).start();
        }
    }

    // Real-world example: Connection Pool
    public static class ConnectionPool {
        private final Semaphore available;
        private final Queue<Connection> connections;

        public ConnectionPool(int size) {
            available = new Semaphore(size, true);  // Fair semaphore
            connections = new ConcurrentLinkedQueue<>();

            // Initialize connections
            for (int i = 0; i < size; i++) {
                connections.add(new Connection(i));
            }
        }

        public Connection getConnection() throws InterruptedException {
            available.acquire();  // Wait for available connection
            return connections.poll();
        }

        public void releaseConnection(Connection conn) {
            connections.offer(conn);
            available.release();
        }

        // Try acquire with timeout
        public Connection tryGetConnection(long timeout, TimeUnit unit) {
            try {
                if (available.tryAcquire(timeout, unit)) {
                    return connections.poll();
                }
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
            return null;  // Timeout
        }

        static class Connection {
            final int id;
            Connection(int id) { this.id = id; }

            public void execute(String query) {
                System.out.println("Connection " + id + " executing: " + query);
            }
        }
    }

    // Example: Rate limiting
    public static class RateLimiter {
        private final Semaphore semaphore;
        private final int maxRequests;
        private final long periodMs;

        public RateLimiter(int maxRequests, long periodMs) {
            this.maxRequests = maxRequests;
            this.periodMs = periodMs;
            this.semaphore = new Semaphore(maxRequests);

            // Refill permits periodically
            startRefillThread();
        }

        public boolean tryAcquire() {
            return semaphore.tryAcquire();
        }

        private void startRefillThread() {
            ScheduledExecutorService scheduler =
                Executors.newScheduledThreadPool(1);

            scheduler.scheduleAtFixedRate(() -> {
                // Release all permits (reset to max)
                int permitsToAdd = maxRequests - semaphore.availablePermits();
                if (permitsToAdd > 0) {
                    semaphore.release(permitsToAdd);
                }
            }, periodMs, periodMs, TimeUnit.MILLISECONDS);
        }

        public void makeRequest(String request) {
            if (tryAcquire()) {
                System.out.println("Processing: " + request);
            } else {
                System.out.println("Rate limit exceeded for: " + request);
            }
        }
    }

    // Example: Bounded resource access
    public static class PrinterPool {
        private final Semaphore printers;

        public PrinterPool(int numPrinters) {
            printers = new Semaphore(numPrinters);
        }

        public void print(String document) {
            try {
                System.out.println(Thread.currentThread().getName() +
                    " waiting for printer");

                printers.acquire();

                System.out.println(Thread.currentThread().getName() +
                    " got printer, printing " + document);

                Thread.sleep(2000);  // Simulate printing

                System.out.println(Thread.currentThread().getName() +
                    " finished printing");

            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            } finally {
                printers.release();
            }
        }
    }

    // Multiple permits at once
    public static void multiplePermitsExample() {
        Semaphore semaphore = new Semaphore(5);

        new Thread(() -> {
            try {
                System.out.println("Acquiring 3 permits");
                semaphore.acquire(3);  // Acquire multiple

                System.out.println("Got 3 permits");
                Thread.sleep(2000);

            } catch (InterruptedException e) {
                e.printStackTrace();
            } finally {
                semaphore.release(3);  // Release multiple
                System.out.println("Released 3 permits");
            }
        }).start();
    }

    // Fair vs Unfair semaphore
    public static void fairnessExample() {
        // Unfair semaphore (default) - better throughput
        Semaphore unfair = new Semaphore(1, false);

        // Fair semaphore - FIFO order
        Semaphore fair = new Semaphore(1, true);

        // Fair: threads acquire in order they requested
        // Unfair: threads may "cut in line" (better performance)
    }

    // Check available permits
    public static void checkPermits() {
        Semaphore semaphore = new Semaphore(3);

        System.out.println("Available: " + semaphore.availablePermits());  // 3

        try {
            semaphore.acquire();
            System.out.println("Available: " + semaphore.availablePermits());  // 2

            System.out.println("Has queued threads: " +
                semaphore.hasQueuedThreads());
            System.out.println("Queue length: " +
                semaphore.getQueueLength());

        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args) throws Exception {
        basicExample();
        Thread.sleep(5000);

        // Test connection pool
        ConnectionPool pool = new ConnectionPool(3);

        for (int i = 0; i < 10; i++) {
            final int taskId = i;
            new Thread(() -> {
                try {
                    Connection conn = pool.getConnection();
                    conn.execute("Query " + taskId);
                    Thread.sleep(1000);
                    pool.releaseConnection(conn);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }).start();
        }
    }
}

// When to use Semaphore:
// ✓ Limiting concurrent access (connection pool)
// ✓ Rate limiting (API throttling)
// ✓ Resource pools (thread-limited resources)
// ✓ Implementing barriers and latches
// ✗ Simple mutual exclusion (use Lock instead)`,
      language: 'java'
    },
    topic: 'concurrency',
    difficulty: 'mid',
    tags: ['semaphore', 'concurrency', 'resource-pool', 'rate-limiting'],    commonPitfalls: ['Forgetting to release', 'Not using fair semaphore when order matters', 'Deadlock with multiple semaphores'],
    realWorldUse: 'Database connection pools, HTTP connection pools, rate limiting APIs, bounded resource access.'
  },
  {
    id: 'concurrency-017',
    question: "What are Atomic classes in Java?",
    answer: "Atomic classes provide lock-free thread-safe operations on single variables using compare-and-swap (CAS). Main classes: AtomicInteger, AtomicLong, AtomicBoolean, AtomicReference. Methods like get(), set(), compareAndSet(), incrementAndGet() are atomic. More efficient than synchronized for simple operations.",
    explanation: "Atomic classes use hardware-level atomic instructions for thread safety without locks. Better performance than synchronized for counters and flags.",
    translations: {
      tr: {
        question: "Fork/Join framework nedir?",
        answer: "Fork/Join divide-and-conquer parallel hesaplama frameworkdür. Görevleri alt görevlere böler (fork), sonuçları birleştirir (join). Work-stealing algoritması. ForkJoinPool kullanır.",
        explanation: "Fork/Join recursive parallel görevler için idealdir (merge sort, quick sort)."
      }
    },
    codeExample: {
      code: `import java.util.concurrent.atomic.*;

public class AtomicExample {

    // Problem: Non-atomic operations
    private int counter = 0;

    public void incrementUnsafe() {
        counter++;  // NOT atomic: read, increment, write
        // Race condition possible
    }

    // Solution 1: synchronized (lock-based)
    public synchronized void incrementSync() {
        counter++;
    }

    // Solution 2: AtomicInteger (lock-free, better performance)
    private AtomicInteger atomicCounter = new AtomicInteger(0);

    public void incrementAtomic() {
        atomicCounter.incrementAndGet();  // Atomic operation
    }

    // AtomicInteger methods
    public void atomicIntegerDemo() {
        AtomicInteger num = new AtomicInteger(0);

        // Get and set
        int value = num.get();              // Get current value
        num.set(10);                        // Set value

        // Atomic operations
        num.incrementAndGet();              // ++i (returns 11)
        num.getAndIncrement();              // i++ (returns 11, then increments)
        num.decrementAndGet();              // --i
        num.getAndDecrement();              // i--

        num.addAndGet(5);                   // Add and get result
        num.getAndAdd(5);                   // Get then add

        // Compare and set (CAS)
        boolean updated = num.compareAndSet(10, 20);
        // If value is 10, set to 20. Returns true if successful.

        // Update with function (Java 8+)
        num.updateAndGet(n -> n * 2);       // Double the value
        num.accumulateAndGet(5, (x, y) -> x + y);  // Add 5
    }

    // AtomicBoolean
    public void atomicBooleanDemo() {
        AtomicBoolean flag = new AtomicBoolean(false);

        flag.set(true);
        boolean value = flag.get();

        // Compare and set
        flag.compareAndSet(true, false);

        // Get and set
        boolean oldValue = flag.getAndSet(true);
    }

    // AtomicLong
    public void atomicLongDemo() {
        AtomicLong counter = new AtomicLong(0L);

        counter.incrementAndGet();
        counter.addAndGet(100L);
        counter.compareAndSet(100L, 200L);
    }

    // AtomicReference - for objects
    public void atomicReferenceDemo() {
        AtomicReference<String> ref = new AtomicReference<>("Initial");

        ref.set("Updated");
        String value = ref.get();

        // Compare and set
        ref.compareAndSet("Updated", "New Value");

        // Update with function
        ref.updateAndGet(s -> s.toUpperCase());
    }

    // Real-world example: Thread-safe counter
    public static class HitCounter {
        private AtomicLong hits = new AtomicLong(0);

        public void hit() {
            hits.incrementAndGet();
        }

        public long getHits() {
            return hits.get();
        }

        public void reset() {
            hits.set(0);
        }
    }

    // Real-world example: Singleton with AtomicReference
    public static class Singleton {
        private static final AtomicReference<Singleton> INSTANCE =
            new AtomicReference<>();

        private Singleton() {}

        public static Singleton getInstance() {
            if (INSTANCE.get() == null) {
                Singleton newInstance = new Singleton();
                if (!INSTANCE.compareAndSet(null, newInstance)) {
                    // Another thread created instance, discard ours
                    newInstance = null;
                }
            }
            return INSTANCE.get();
        }
    }

    // Compare and Swap (CAS) pattern
    public static class OptimisticLocking {
        private AtomicInteger balance = new AtomicInteger(1000);

        public boolean withdraw(int amount) {
            while (true) {
                int current = balance.get();

                if (current < amount) {
                    return false;  // Insufficient funds
                }

                int newBalance = current - amount;

                // Try to update (CAS)
                if (balance.compareAndSet(current, newBalance)) {
                    return true;  // Success
                }
                // If CAS fails, another thread modified balance
                // Loop and retry with new value
            }
        }
    }

    // Performance comparison
    public static void performanceTest() throws InterruptedException {
        int numThreads = 10;
        int iterations = 100000;

        // Test 1: synchronized
        AtomicExample example = new AtomicExample();
        long start = System.currentTimeMillis();

        Thread[] threads = new Thread[numThreads];
        for (int i = 0; i < numThreads; i++) {
            threads[i] = new Thread(() -> {
                for (int j = 0; j < iterations; j++) {
                    example.incrementSync();
                }
            });
            threads[i].start();
        }

        for (Thread t : threads) {
            t.join();
        }

        long syncTime = System.currentTimeMillis() - start;
        System.out.println("Synchronized: " + syncTime + "ms");

        // Test 2: AtomicInteger
        start = System.currentTimeMillis();

        for (int i = 0; i < numThreads; i++) {
            threads[i] = new Thread(() -> {
                for (int j = 0; j < iterations; j++) {
                    example.incrementAtomic();
                }
            });
            threads[i].start();
        }

        for (Thread t : threads) {
            t.join();
        }

        long atomicTime = System.currentTimeMillis() - start;
        System.out.println("Atomic: " + atomicTime + "ms");

        // AtomicInteger is typically faster
    }

    // AtomicIntegerArray
    public void atomicArrayDemo() {
        AtomicIntegerArray array = new AtomicIntegerArray(10);

        array.set(0, 100);
        int value = array.get(0);

        array.incrementAndGet(0);
        array.addAndGet(0, 50);
        array.compareAndSet(0, 151, 200);
    }

    public static void main(String[] args) throws Exception {
        performanceTest();
    }
}

// When to use Atomic classes:
// ✓ Simple counters, flags, references
// ✓ Lock-free algorithms
// ✓ High-contention scenarios
// ✓ Better performance than synchronized
// ✗ Complex operations (use synchronized/Lock)
// ✗ Multiple variables (use synchronized)`,
      language: 'java'
    },
    topic: 'concurrency',
    difficulty: 'mid',
    tags: ['atomic', 'lock-free', 'cas', 'thread-safety', 'performance'],    commonPitfalls: ['Using for complex multi-step operations', 'ABA problem in CAS', 'Not understanding happens-before'],
    realWorldUse: 'Counters, flags, statistics, concurrent data structures, high-performance systems.'
  },
  {
    id: 'concurrency-018',
    question: "What is ThreadLocal in Java?",
    answer: "ThreadLocal provides thread-local variables. Each thread has its own, independently initialized copy of the variable. Useful when you need to maintain per-thread state without synchronization. Common use: database connections, user sessions, date formatters.",
    explanation: "ThreadLocal isolates data per thread, avoiding synchronization overhead. Each thread sees only its own value.",
    translations: {
      tr: {
        question: "Executor framework nedir?",
        answer: "Executor framework thread yönetimini soyutlar. ExecutorService task'ları çalıştırır. Thread pool'ları yönetir. Cached, fixed, scheduled, single thread executor'lar sağlar.",
        explanation: "Executor manuel thread yönetimi yerine kullanılmalıdır."
      }
    },
    codeExample: {
      code: `import java.text.SimpleDateFormat;
import java.util.*;

public class ThreadLocalExample {

    // Basic ThreadLocal usage
    private static ThreadLocal<Integer> threadId = ThreadLocal.withInitial(() -> 0);

    public void basicExample() {
        threadId.set(123);  // Set value for current thread

        int value = threadId.get();  // Get value for current thread
        System.out.println("Thread " + Thread.currentThread().getName() +
            ": " + value);

        threadId.remove();  // Clean up (important!)
    }

    // Real-world example: SimpleDateFormat (not thread-safe)
    // WRONG: Shared SimpleDateFormat
    private static SimpleDateFormat sharedFormat =
        new SimpleDateFormat("yyyy-MM-dd");

    public String formatDateWrong(Date date) {
        // Race condition! SimpleDateFormat is not thread-safe
        return sharedFormat.format(date);
    }

    // CORRECT: ThreadLocal SimpleDateFormat
    private static ThreadLocal<SimpleDateFormat> dateFormat =
        ThreadLocal.withInitial(() -> new SimpleDateFormat("yyyy-MM-dd"));

    public String formatDateCorrect(Date date) {
        // Each thread has its own SimpleDateFormat instance
        return dateFormat.get().format(date);
    }

    // Real-world example: User context
    public static class UserContext {
        private static ThreadLocal<User> currentUser = new ThreadLocal<>();

        public static void setUser(User user) {
            currentUser.set(user);
        }

        public static User getUser() {
            return currentUser.get();
        }

        public static void clear() {
            currentUser.remove();  // IMPORTANT: prevent memory leaks
        }

        static class User {
            String username;
            User(String username) { this.username = username; }
        }
    }

    // Usage in web application
    public static class RequestHandler {
        public void handleRequest(String username) {
            try {
                // Set user for this thread
                UserContext.setUser(new UserContext.User(username));

                // Process request
                processRequest();

                // User context available throughout call stack
                auditLog();

            } finally {
                // ALWAYS clean up
                UserContext.clear();
            }
        }

        private void processRequest() {
            UserContext.User user = UserContext.getUser();
            System.out.println("Processing request for: " + user.username);
        }

        private void auditLog() {
            UserContext.User user = UserContext.getUser();
            System.out.println("Audit: " + user.username);
        }
    }

    // Real-world example: Database connection per thread
    public static class DatabaseConnections {
        private static ThreadLocal<Connection> connection =
            ThreadLocal.withInitial(() -> {
                return new Connection();  // Create connection for thread
            });

        public static Connection getConnection() {
            return connection.get();
        }

        public static void closeConnection() {
            Connection conn = connection.get();
            if (conn != null) {
                conn.close();
                connection.remove();  // Clean up
            }
        }

        static class Connection {
            void close() {
                System.out.println("Connection closed");
            }
        }
    }

    // ThreadLocal with initial value
    private static ThreadLocal<StringBuilder> buffer =
        ThreadLocal.withInitial(() -> new StringBuilder());

    public String buildString(String... parts) {
        StringBuilder sb = buffer.get();
        sb.setLength(0);  // Reset

        for (String part : parts) {
            sb.append(part);
        }

        return sb.toString();
    }

    // Inheritable ThreadLocal - child threads inherit value
    private static InheritableThreadLocal<String> inheritableValue =
        new InheritableThreadLocal<>();

    public void inheritableExample() {
        inheritableValue.set("Parent value");

        new Thread(() -> {
            // Child thread sees parent's value
            System.out.println("Child thread: " + inheritableValue.get());
        }).start();
    }

    // Generate unique IDs per thread
    public static class ThreadIdGenerator {
        private static final AtomicInteger nextId = new AtomicInteger(0);

        private static ThreadLocal<Integer> threadId =
            ThreadLocal.withInitial(() -> nextId.incrementAndGet());

        public static int getCurrentThreadId() {
            return threadId.get();
        }
    }

    // Demo: Thread isolation
    public static void isolationDemo() {
        ThreadLocal<Integer> counter = ThreadLocal.withInitial(() -> 0);

        Runnable task = () -> {
            for (int i = 0; i < 5; i++) {
                counter.set(counter.get() + 1);
                System.out.println(Thread.currentThread().getName() +
                    ": " + counter.get());
            }
        };

        Thread t1 = new Thread(task, "Thread-1");
        Thread t2 = new Thread(task, "Thread-2");

        t1.start();
        t2.start();

        // Each thread has its own counter (both count to 5)
        // No synchronization needed
    }

    public static void main(String[] args) {
        isolationDemo();
    }
}

// IMPORTANT: Memory Leak Prevention
// ThreadLocal can cause memory leaks in thread pools
// because threads are reused and ThreadLocal values persist

public class ThreadLocalMemoryLeak {
    private static ThreadLocal<byte[]> leak = new ThreadLocal<>();

    // BAD: Memory leak in thread pool
    public void processInThreadPool() {
        ExecutorService executor = Executors.newFixedThreadPool(10);

        for (int i = 0; i < 100; i++) {
            executor.submit(() -> {
                leak.set(new byte[1024 * 1024]);  // 1MB
                // Forgot to remove()
                // Thread is reused, value persists
            });
        }
    }

    // GOOD: Clean up ThreadLocal
    public void processInThreadPoolCorrect() {
        ExecutorService executor = Executors.newFixedThreadPool(10);

        for (int i = 0; i < 100; i++) {
            executor.submit(() -> {
                try {
                    leak.set(new byte[1024 * 1024]);
                    // Use data
                } finally {
                    leak.remove();  // ALWAYS clean up
                }
            });
        }
    }
}

// When to use ThreadLocal:
// ✓ Per-thread state (user context, transaction context)
// ✓ Non-thread-safe objects (SimpleDateFormat)
// ✓ Per-thread caching
// ✓ Avoid parameter passing through deep call stacks
// ✗ Thread pools (memory leak risk)
// ✗ When values need to be shared across threads`,
      language: 'java'
    },
    topic: 'concurrency',
    difficulty: 'mid',
    tags: ['threadlocal', 'thread-safety', 'isolation', 'memory-leak'],    commonPitfalls: ['Memory leaks in thread pools', 'Forgetting to call remove()', 'Sharing ThreadLocal instances'],
    realWorldUse: 'User sessions, database connections, request contexts, transaction management, date formatting.'
  },
  {
    id: 'concurrency-019',
    question: "What is ConcurrentHashMap in Java?",
    answer: "ConcurrentHashMap is a thread-safe HashMap implementation that allows concurrent reads and writes without locking the entire map. Uses segmentation (Java 7) or CAS operations (Java 8+). Better performance than Hashtable or Collections.synchronizedMap(). Allows null values in Java 7, not in Java 8+.",
    explanation: "ConcurrentHashMap provides better concurrency than Hashtable by allowing multiple threads to read/write different segments simultaneously.",
    translations: {
      tr: {
        question: "Race condition nedir?",
        answer: "Race condition iki veya daha fazla thread'in paylaşılan veriye eş zamanlı eriştiğinde ve en az birinin yazdığında oluşur. Öngörülemeyen sonuçlar. Senkronizasyon ile önlenir.",
        explanation: "Race condition bug'ların en zor tespit edilenlerindendir - non-deterministic."
      }
    },
    codeExample: {
      code: `import java.util.concurrent.*;
import java.util.*;

public class ConcurrentHashMapExample {

    // Problem: HashMap is not thread-safe
    private Map<String, Integer> unsafeMap = new HashMap<>();

    public void unsafeIncrement(String key) {
        // Race condition!
        Integer value = unsafeMap.get(key);
        if (value == null) value = 0;
        unsafeMap.put(key, value + 1);
    }

    // Solution 1: Hashtable (slow - locks entire table)
    private Map<String, Integer> hashtable = new Hashtable<>();

    // Solution 2: synchronized wrapper (slow - locks entire map)
    private Map<String, Integer> syncMap =
        Collections.synchronizedMap(new HashMap<>());

    // Solution 3: ConcurrentHashMap (fast - fine-grained locking)
    private ConcurrentHashMap<String, Integer> concurrentMap =
        new ConcurrentHashMap<>();

    public void safeIncrement(String key) {
        // Atomic operation
        concurrentMap.compute(key, (k, v) -> v == null ? 1 : v + 1);

        // Or use computeIfAbsent
        concurrentMap.computeIfAbsent(key, k -> 0);
        concurrentMap.put(key, concurrentMap.get(key) + 1);
    }

    // Better: atomic increment
    public void atomicIncrement(String key) {
        concurrentMap.merge(key, 1, Integer::sum);
        // If key absent, sets to 1
        // If key present, adds 1 to existing value
    }

    // ConcurrentHashMap methods
    public void demonstrateMethods() {
        ConcurrentHashMap<String, String> map = new ConcurrentHashMap<>();

        // Basic operations (thread-safe)
        map.put("key1", "value1");
        String value = map.get("key1");
        map.remove("key1");

        // putIfAbsent - atomic operation
        String oldValue = map.putIfAbsent("key2", "value2");
        // Returns null if key was absent, old value if present

        // compute - atomic update
        map.compute("counter", (k, v) -> v == null ? 1 : Integer.parseInt(v) + 1);

        // computeIfAbsent - lazy initialization
        map.computeIfAbsent("key3", k -> expensiveComputation(k));

        // computeIfPresent - update if exists
        map.computeIfPresent("key3", (k, v) -> v.toUpperCase());

        // merge - combine values
        map.merge("counter", "1", (oldVal, newVal) ->
            String.valueOf(Integer.parseInt(oldVal) + Integer.parseInt(newVal)));

        // replace - conditional update
        map.replace("key3", "oldValue", "newValue");  // CAS operation

        // Bulk operations (parallel in Java 8+)
        map.forEach((k, v) -> System.out.println(k + ": " + v));

        // Search
        String result = map.search(1, (k, v) ->
            v.contains("search") ? k : null);

        // Reduce
        String combined = map.reduce(1,
            (k, v) -> k + "=" + v,
            (s1, s2) -> s1 + ", " + s2);
    }

    private String expensiveComputation(String key) {
        return "computed_" + key;
    }

    // Real-world example: Cache implementation
    public static class ThreadSafeCache<K, V> {
        private final ConcurrentHashMap<K, V> cache;
        private final int maxSize;

        public ThreadSafeCache(int maxSize) {
            this.maxSize = maxSize;
            this.cache = new ConcurrentHashMap<>(maxSize);
        }

        public V get(K key) {
            return cache.get(key);
        }

        public V getOrCompute(K key, Function<K, V> computer) {
            return cache.computeIfAbsent(key, computer);
        }

        public void put(K key, V value) {
            if (cache.size() >= maxSize) {
                // Evict random entry (simple strategy)
                K firstKey = cache.keys().nextElement();
                cache.remove(firstKey);
            }
            cache.put(key, value);
        }

        public void remove(K key) {
            cache.remove(key);
        }

        public void clear() {
            cache.clear();
        }

        public int size() {
            return cache.size();
        }
    }

    // Real-world example: Request counter
    public static class RequestCounter {
        private ConcurrentHashMap<String, AtomicLong> counters =
            new ConcurrentHashMap<>();

        public void recordRequest(String endpoint) {
            counters.computeIfAbsent(endpoint, k -> new AtomicLong(0))
                    .incrementAndGet();
        }

        public long getCount(String endpoint) {
            AtomicLong counter = counters.get(endpoint);
            return counter != null ? counter.get() : 0;
        }

        public Map<String, Long> getStats() {
            Map<String, Long> stats = new HashMap<>();
            counters.forEach((endpoint, counter) ->
                stats.put(endpoint, counter.get()));
            return stats;
        }
    }

    // Comparison: HashMap vs Hashtable vs ConcurrentHashMap
    public static void performanceComparison() throws InterruptedException {
        int numThreads = 10;
        int operations = 100000;

        // Test ConcurrentHashMap
        ConcurrentHashMap<Integer, Integer> concurrentMap =
            new ConcurrentHashMap<>();
        long start = System.currentTimeMillis();

        Thread[] threads = new Thread[numThreads];
        for (int i = 0; i < numThreads; i++) {
            threads[i] = new Thread(() -> {
                for (int j = 0; j < operations; j++) {
                    concurrentMap.put(j, j);
                    concurrentMap.get(j);
                }
            });
            threads[i].start();
        }

        for (Thread t : threads) {
            t.join();
        }

        long concurrentTime = System.currentTimeMillis() - start;
        System.out.println("ConcurrentHashMap: " + concurrentTime + "ms");

        // Test Hashtable
        Hashtable<Integer, Integer> hashtable = new Hashtable<>();
        start = System.currentTimeMillis();

        for (int i = 0; i < numThreads; i++) {
            threads[i] = new Thread(() -> {
                for (int j = 0; j < operations; j++) {
                    hashtable.put(j, j);
                    hashtable.get(j);
                }
            });
            threads[i].start();
        }

        for (Thread t : threads) {
            t.join();
        }

        long hashtableTime = System.currentTimeMillis() - start;
        System.out.println("Hashtable: " + hashtableTime + "ms");

        // ConcurrentHashMap is typically 2-5x faster
    }

    // Java 8+ features
    public void java8Features() {
        ConcurrentHashMap<String, Integer> map = new ConcurrentHashMap<>();
        map.put("a", 1);
        map.put("b", 2);
        map.put("c", 3);

        // forEach - parallel iteration
        map.forEach(1, (k, v) -> {
            System.out.println(k + ": " + v);
        });

        // search - parallel search
        String found = map.search(1, (k, v) -> v > 2 ? k : null);

        // reduce - parallel reduction
        int sum = map.reduce(1,
            (k, v) -> v,
            (v1, v2) -> v1 + v2);

        // forEachKey, forEachValue, forEachEntry
        map.forEachKey(1, System.out::println);
        map.forEachValue(1, System.out::println);
    }

    public static void main(String[] args) throws Exception {
        performanceComparison();
    }
}

// ConcurrentHashMap vs Hashtable vs synchronizedMap:
//
// ConcurrentHashMap:
// ✓ Fine-grained locking (segments)
// ✓ Better concurrency
// ✓ Faster for concurrent access
// ✗ Slightly more memory
// ✗ No null keys/values (Java 8+)
//
// Hashtable:
// ✓ Simple
// ✗ Locks entire table
// ✗ Slow for concurrent access
// ✗ Legacy class
//
// synchronizedMap:
// ✗ Locks entire map
// ✗ Slow for concurrent access
// ✓ Wraps any Map

// When to use ConcurrentHashMap:
// ✓ High-concurrency scenarios
// ✓ More reads than writes
// ✓ Need thread-safe map
// ✗ Need null keys/values (use ConcurrentSkipListMap)
// ✗ Single-threaded (use HashMap)`,
      language: 'java'
    },
    topic: 'concurrency',
    difficulty: 'senior',
    tags: ['concurrenthashmap', 'thread-safety', 'collections', 'performance'],    commonPitfalls: ['Compound operations not atomic', 'Iteration not consistent snapshot', 'No null keys/values'],
    realWorldUse: 'Caches, session management, counters, concurrent data access, high-traffic applications.'
  },
  {
    id: 'concurrency-020',
    question: "What is CopyOnWriteArrayList in Java?",
    answer: "CopyOnWriteArrayList is a thread-safe variant of ArrayList where all mutative operations (add, set, remove) create a copy of the underlying array. Reads require no locking. Optimized for read-heavy scenarios with infrequent writes. Iterator never throws ConcurrentModificationException.",
    explanation: "CopyOnWriteArrayList trades write performance for excellent read performance. Each modification copies the entire array.",
    translations: {
      tr: {
        question: "Thread safety nasıl sağlanır?",
        answer: "Thread safety yöntemleri: 1) Synchronization, 2) Immutable nesneler, 3) Atomic sınıfları, 4) ThreadLocal, 5) Concurrent collections, 6) Lock'lar.",
        explanation: "Uygun yöntemi kullanım durumuna göre seçin - performans vs basitlik."
      }
    },
    codeExample: {
      code: `import java.util.*;
import java.util.concurrent.*;

public class CopyOnWriteArrayListExample {

    // Problem: ArrayList with concurrent modification
    private List<String> arrayList = new ArrayList<>();

    public void unsafeIteration() {
        for (String item : arrayList) {
            // arrayList.add("new");  // ConcurrentModificationException!
        }
    }

    // Solution: CopyOnWriteArrayList
    private CopyOnWriteArrayList<String> cowList = new CopyOnWriteArrayList<>();

    public void safeIteration() {
        for (String item : cowList) {
            cowList.add("new");  // OK! No exception
            // Iterator works on snapshot of array
        }
    }

    // Basic operations
    public void demonstrateOperations() {
        CopyOnWriteArrayList<String> list = new CopyOnWriteArrayList<>();

        // Add (creates new array copy)
        list.add("A");
        list.add("B");
        list.add("C");

        // Get (no locking, reads from current array)
        String value = list.get(0);

        // Set (creates new array copy)
        list.set(0, "X");

        // Remove (creates new array copy)
        list.remove("B");

        // Iterate (snapshot, no ConcurrentModificationException)
        for (String item : list) {
            System.out.println(item);
            list.add("D");  // Allowed! Iterator uses old snapshot
        }

        // Size
        int size = list.size();
    }

    // How it works internally
    public static class SimpleCOWList<E> {
        private volatile Object[] array;

        public SimpleCOWList() {
            array = new Object[0];
        }

        public void add(E element) {
            synchronized (this) {
                Object[] oldArray = array;
                int len = oldArray.length;

                // Create new array (copy + 1)
                Object[] newArray = Arrays.copyOf(oldArray, len + 1);
                newArray[len] = element;

                // Atomic swap
                array = newArray;
            }
        }

        public E get(int index) {
            // No locking needed for read
            return (E) array[index];
        }

        public Iterator<E> iterator() {
            // Return iterator over snapshot
            return new Snapshot<>(array);
        }

        static class Snapshot<E> implements Iterator<E> {
            private final Object[] snapshot;
            private int cursor = 0;

            Snapshot(Object[] array) {
                this.snapshot = array;
            }

            public boolean hasNext() {
                return cursor < snapshot.length;
            }

            public E next() {
                return (E) snapshot[cursor++];
            }
        }
    }

    // Real-world example: Observer/Listener pattern
    public static class EventPublisher {
        private final CopyOnWriteArrayList<EventListener> listeners =
            new CopyOnWriteArrayList<>();

        public void addListener(EventListener listener) {
            listeners.add(listener);
        }

        public void removeListener(EventListener listener) {
            listeners.remove(listener);
        }

        public void publishEvent(String event) {
            // Safe iteration even if listeners are added/removed
            for (EventListener listener : listeners) {
                listener.onEvent(event);
            }
        }

        interface EventListener {
            void onEvent(String event);
        }
    }

    // Real-world example: Configuration cache
    public static class ConfigCache {
        private final CopyOnWriteArrayList<String> allowedIPs =
            new CopyOnWriteArrayList<>();

        public ConfigCache() {
            // Load initial config
            loadConfig();
        }

        private void loadConfig() {
            allowedIPs.add("192.168.1.1");
            allowedIPs.add("192.168.1.2");
        }

        // Frequently called (read-heavy)
        public boolean isAllowed(String ip) {
            return allowedIPs.contains(ip);  // Fast, no locking
        }

        // Rarely called (write)
        public void addAllowedIP(String ip) {
            allowedIPs.add(ip);  // Slow, copies array
        }

        public void reloadConfig() {
            allowedIPs.clear();
            loadConfig();
        }
    }

    // Performance comparison: ArrayList vs CopyOnWriteArrayList
    public static void performanceTest() throws InterruptedException {
        int numReaders = 10;
        int numWrites = 100;
        int numReads = 100000;

        // Test 1: CopyOnWriteArrayList (many reads, few writes)
        CopyOnWriteArrayList<Integer> cowList = new CopyOnWriteArrayList<>();
        for (int i = 0; i < numWrites; i++) {
            cowList.add(i);
        }

        long start = System.currentTimeMillis();

        Thread[] readers = new Thread[numReaders];
        for (int i = 0; i < numReaders; i++) {
            readers[i] = new Thread(() -> {
                for (int j = 0; j < numReads; j++) {
                    int sum = 0;
                    for (Integer num : cowList) {
                        sum += num;
                    }
                }
            });
            readers[i].start();
        }

        for (Thread t : readers) {
            t.join();
        }

        long cowTime = System.currentTimeMillis() - start;
        System.out.println("CopyOnWriteArrayList: " + cowTime + "ms");

        // Test 2: synchronized ArrayList
        List<Integer> syncList = Collections.synchronizedList(new ArrayList<>());
        for (int i = 0; i < numWrites; i++) {
            syncList.add(i);
        }

        start = System.currentTimeMillis();

        for (int i = 0; i < numReaders; i++) {
            readers[i] = new Thread(() -> {
                for (int j = 0; j < numReads; j++) {
                    synchronized (syncList) {  // Must synchronize iteration
                        int sum = 0;
                        for (Integer num : syncList) {
                            sum += num;
                        }
                    }
                }
            });
            readers[i].start();
        }

        for (Thread t : readers) {
            t.join();
        }

        long syncTime = System.currentTimeMillis() - start;
        System.out.println("Synchronized ArrayList: " + syncTime + "ms");

        // CopyOnWriteArrayList is much faster for reads
    }

    // When NOT to use CopyOnWriteArrayList
    public static void antiPattern() {
        CopyOnWriteArrayList<String> list = new CopyOnWriteArrayList<>();

        // BAD: Frequent writes
        for (int i = 0; i < 10000; i++) {
            list.add("item" + i);  // Each add copies entire array!
            // Very slow: O(n) for each add
        }

        // GOOD: Batch add
        List<String> items = new ArrayList<>();
        for (int i = 0; i < 10000; i++) {
            items.add("item" + i);
        }
        list.addAll(items);  // Single copy
    }

    public static void main(String[] args) throws Exception {
        // Demonstrate safe concurrent iteration
        CopyOnWriteArrayList<String> list = new CopyOnWriteArrayList<>();
        list.add("A");
        list.add("B");

        // Writer thread
        new Thread(() -> {
            for (int i = 0; i < 10; i++) {
                list.add("Item" + i);
                try { Thread.sleep(100); } catch (InterruptedException e) {}
            }
        }).start();

        // Reader threads
        for (int i = 0; i < 3; i++) {
            new Thread(() -> {
                for (int j = 0; j < 5; j++) {
                    for (String item : list) {
                        System.out.println(Thread.currentThread().getName() +
                            ": " + item);
                    }
                    try { Thread.sleep(200); } catch (InterruptedException e) {}
                }
            }, "Reader-" + i).start();
        }

        Thread.sleep(3000);
        performanceTest();
    }
}

// CopyOnWriteArrayList characteristics:
// ✓ Thread-safe for all operations
// ✓ Iterator never throws ConcurrentModificationException
// ✓ No locking for reads (very fast)
// ✓ Weakly consistent iterator (snapshot isolation)
// ✗ Expensive writes (copies entire array)
// ✗ Not suitable for frequent modifications
// ✗ Memory overhead (copy on every write)

// When to use CopyOnWriteArrayList:
// ✓ Read operations >> Write operations
// ✓ Small to medium list size
// ✓ Observer/listener patterns
// ✓ Event handlers
// ✓ Configuration caches
// ✗ Frequent writes (use ConcurrentLinkedQueue)
// ✗ Large lists (memory overhead)
// ✗ Write-heavy workloads

// Alternatives:
// - ConcurrentLinkedQueue: for queue operations
// - Collections.synchronizedList(): for general purpose
// - CopyOnWriteArraySet: for set semantics`,
      language: 'java'
    },
    topic: 'concurrency',
    difficulty: 'senior',
    tags: ['copyonwritearraylist', 'thread-safety', 'collections', 'read-heavy'],    commonPitfalls: ['Using for write-heavy workloads', 'Not understanding snapshot semantics', 'Memory overhead with large lists'],
    realWorldUse: 'Event listeners, observer pattern, configuration management, notification systems.'
  },
  {
    id: 'concurrency-021',
    question: "What is the difference between Thread.sleep(), Object.wait(), and LockSupport.park()?",
    answer: "Thread.sleep(ms): pauses current thread for time, does NOT release locks, cannot be woken early (except interrupt). Object.wait(): releases monitor lock, waits until notify(), must be in synchronized block. LockSupport.park(): pauses thread, no lock required, can be unparked by another thread.",
    explanation: "These methods serve different purposes: sleep for timed pause, wait for inter-thread communication, park for low-level thread parking.",
    translations: {
      tr: {
        question: "Context switching nedir ve neden önemlidir?",
        answer: "Context switching CPU'nun bir thread'den diğerine geçişidir. Thread durumunu kaydeder/geri yükler. Pahalı - performance overhead. Çok fazla thread context switching artırır.",
        explanation: "Thread sayısını optimize etmek context switching'i minimize eder."
      }
    },
    codeExample: {
      code: `import java.util.concurrent.locks.*;

public class ThreadPausingComparison {

    // 1. Thread.sleep() - timed pause, keeps locks
    public static void sleepExample() throws InterruptedException {
        System.out.println("Sleeping for 2 seconds...");
        Thread.sleep(2000);  // Pauses for 2 seconds
        System.out.println("Woke up!");

        // Does NOT release locks
        synchronized (ThreadPausingComparison.class) {
            Thread.sleep(1000);  // Still holds lock while sleeping
            // Other threads blocked from synchronized block
        }
    }

    // 2. Object.wait() - releases lock, waits for notification
    public static void waitExample() {
        Object lock = new Object();

        // Waiting thread
        Thread waiter = new Thread(() -> {
            synchronized (lock) {
                try {
                    System.out.println("Thread waiting...");
                    lock.wait();  // Releases lock, waits for notify
                    System.out.println("Thread resumed!");
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        });

        // Notifying thread
        Thread notifier = new Thread(() -> {
            try {
                Thread.sleep(2000);
                synchronized (lock) {
                    System.out.println("Notifying waiting thread");
                    lock.notify();  // Wake up one waiting thread
                }
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        });

        waiter.start();
        notifier.start();
    }

    // wait() with timeout
    public static void waitWithTimeout() {
        Object lock = new Object();

        synchronized (lock) {
            try {
                // Wait for notify or timeout
                lock.wait(2000);  // Max 2 seconds

                // Returns when:
                // 1. notify() called
                // 2. 2 seconds elapsed
                // 3. Thread interrupted

            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }

    // 3. LockSupport.park() - low-level thread parking
    public static void parkExample() {
        Thread thread = new Thread(() -> {
            System.out.println("Thread parking...");
            LockSupport.park();  // Park thread (pause)
            System.out.println("Thread unparked!");
        });

        thread.start();

        // Unpark from another thread
        try {
            Thread.sleep(2000);
            System.out.println("Unparking thread");
            LockSupport.unpark(thread);  // Wake up specific thread
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    // park() with timeout
    public static void parkWithTimeout() {
        Thread thread = new Thread(() -> {
            System.out.println("Parking with timeout...");

            // Park with absolute timeout
            long deadline = System.currentTimeMillis() + 2000;
            LockSupport.parkUntil(deadline);

            // Or relative timeout
            LockSupport.parkNanos(2_000_000_000L);  // 2 seconds in nanos

            System.out.println("Resumed after timeout or unpark");
        });

        thread.start();
    }

    // park() with blocker object (for debugging)
    public static void parkWithBlocker() {
        Object blocker = new Object();

        Thread thread = new Thread(() -> {
            LockSupport.park(blocker);  // Park with blocker reference
            // Helps identify what thread is waiting for in thread dumps
        });

        thread.start();

        try {
            Thread.sleep(1000);
            System.out.println("Blocker: " + LockSupport.getBlocker(thread));
            LockSupport.unpark(thread);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    // Comparison example
    public static class ComparisonDemo {
        private final Object waitLock = new Object();

        // sleep - keeps lock
        public void sleepWithLock() throws InterruptedException {
            synchronized (this) {
                System.out.println("Sleeping with lock");
                Thread.sleep(2000);  // Lock still held
                System.out.println("Sleep done");
            }
        }

        // wait - releases lock
        public void waitForNotify() throws InterruptedException {
            synchronized (waitLock) {
                System.out.println("Waiting, releasing lock");
                waitLock.wait();  // Lock released
                System.out.println("Notified");
            }
        }

        public void notifyWaiter() {
            synchronized (waitLock) {
                waitLock.notify();
            }
        }

        // park - no lock needed
        public void parkThread() {
            System.out.println("Parking thread");
            LockSupport.park();  // No lock needed
            System.out.println("Unparked");
        }
    }

    // Real-world example: Custom blocking queue with park/unpark
    public static class ParkUnparkQueue<E> {
        private final Queue<E> queue = new LinkedList<>();
        private final int capacity;
        private final Lock lock = new ReentrantLock();
        private Thread waitingConsumer;

        public ParkUnparkQueue(int capacity) {
            this.capacity = capacity;
        }

        public void put(E element) throws InterruptedException {
            lock.lock();
            try {
                while (queue.size() >= capacity) {
                    lock.unlock();
                    LockSupport.park();  // Park if full
                    lock.lock();
                }

                queue.offer(element);

                // Unpark waiting consumer
                if (waitingConsumer != null) {
                    LockSupport.unpark(waitingConsumer);
                }
            } finally {
                lock.unlock();
            }
        }

        public E take() throws InterruptedException {
            lock.lock();
            try {
                while (queue.isEmpty()) {
                    waitingConsumer = Thread.currentThread();
                    lock.unlock();
                    LockSupport.park();  // Park if empty
                    lock.lock();
                }

                return queue.poll();
            } finally {
                waitingConsumer = null;
                lock.unlock();
            }
        }
    }

    // Interruption handling
    public static void interruptionExample() {
        // sleep - throws InterruptedException
        Thread t1 = new Thread(() -> {
            try {
                Thread.sleep(10000);
            } catch (InterruptedException e) {
                System.out.println("Sleep interrupted");
            }
        });
        t1.start();
        t1.interrupt();

        // wait - throws InterruptedException
        Thread t2 = new Thread(() -> {
            synchronized (ThreadPausingComparison.class) {
                try {
                    ThreadPausingComparison.class.wait();
                } catch (InterruptedException e) {
                    System.out.println("Wait interrupted");
                }
            }
        });
        t2.start();
        t2.interrupt();

        // park - just returns on interrupt (no exception)
        Thread t3 = new Thread(() -> {
            LockSupport.park();
            if (Thread.interrupted()) {
                System.out.println("Park interrupted");
            }
        });
        t3.start();
        t3.interrupt();
    }

    public static void main(String[] args) throws Exception {
        System.out.println("=== Thread.sleep() ===");
        sleepExample();

        System.out.println("\\n=== Object.wait() ===");
        waitExample();
        Thread.sleep(3000);

        System.out.println("\\n=== LockSupport.park() ===");
        parkExample();
        Thread.sleep(3000);

        System.out.println("\\n=== Interruption ===");
        interruptionExample();
    }
}

// Key Differences:
//
// Thread.sleep(ms):
// ✓ Simple timed pause
// ✓ Static method
// ✗ Does NOT release locks
// ✗ Cannot be woken early (except interrupt)
// Use: Simple delays, rate limiting
//
// Object.wait():
// ✓ Releases monitor lock
// ✓ Can be woken by notify()
// ✓ Supports timeout
// ✗ Must be in synchronized block
// ✗ Throws InterruptedException
// Use: Inter-thread communication, producer-consumer
//
// LockSupport.park():
// ✓ No lock required
// ✓ Can be unparked by specific thread
// ✓ No exception on interrupt
// ✓ Supports blocker object (debugging)
// ✗ Low-level, more complex
// ✗ No built-in timeout (use parkNanos/parkUntil)
// Use: Building synchronizers, custom locks, AQS

// spurious wakeups:
// wait() can return without notify() (rare)
// Always use while loop, not if:
// while (condition) {
//     wait();
// }`,
      language: 'java'
    },
    topic: 'concurrency',
    difficulty: 'senior',
    tags: ['sleep', 'wait', 'park', 'thread-coordination', 'synchronization'],    commonPitfalls: ['Using sleep instead of wait (wastes CPU)', 'Forgetting synchronized with wait', 'Not handling interruption'],
    realWorldUse: 'Thread coordination, blocking queues, custom synchronizers, rate limiting, locks.'
  },

  // Java 8+ Features
  {
    id: 'java8-001',
    question: "What is the Stream API in Java 8 and how does it differ from collections?",
    answer: "Stream API provides a functional approach to process collections of objects. Unlike collections, streams don't store data - they convey elements from a source (collection, array, I/O) through a pipeline of operations. Streams are lazy (computed on demand), support parallel processing, and are immutable.",
    explanation: "Streams have intermediate operations (filter, map) that return streams and terminal operations (collect, forEach) that produce results. Intermediate operations are lazy and only execute when terminal operation is called.",
    translations: {
      tr: {
        question: "Lambda expression nedir?",
        answer: "Lambda anonim fonksiyonlardır (isimsiz metodlar). Functional interface implement eder. Kısa syntax: (parameters) -> expression. Kodu daha özlü ve okunabilir yapar.",
        explanation: "Lambda Java 8'in önemli özelliğidir - functional programming sağlar."
      }
    },
    codeExample: {
      code: `// Traditional approach
List<String> names = Arrays.asList("Alice", "Bob", "Charlie", "David");
List<String> result = new ArrayList<>();
for (String name : names) {
    if (name.length() > 3) {
        result.add(name.toUpperCase());
    }
}

// Stream API approach
List<String> result = names.stream()
    .filter(name -> name.length() > 3)
    .map(String::toUpperCase)
    .collect(Collectors.toList());

// Stream creation
Stream<String> fromCollection = list.stream();
Stream<String> fromArray = Arrays.stream(new String[]{"a", "b"});
Stream<Integer> fromRange = IntStream.range(1, 10).boxed();
Stream<String> fromValues = Stream.of("a", "b", "c");

// Intermediate vs Terminal
list.stream()
    .filter(x -> x > 5)    // Intermediate - returns Stream
    .map(x -> x * 2)       // Intermediate - returns Stream
    .collect(Collectors.toList()); // Terminal - produces result`,
      language: 'java'
    },
    topic: 'java8',
    difficulty: 'junior',
    tags: ['stream-api', 'functional-programming', 'java8', 'collections'],    commonPitfalls: ['Reusing streams (they can only be consumed once)', 'Not calling terminal operation (nothing executes)', 'Modifying source during stream operation'],
    realWorldUse: 'Data transformation pipelines, filtering large datasets, parallel processing, ETL operations.'
  },
  {
    id: 'java8-002',
    question: "Explain the filter() operation in Streams with examples.",
    answer: "filter() is an intermediate operation that selects elements matching a given predicate (boolean condition). It takes a Predicate<T> and returns a Stream containing only elements where the predicate returns true.",
    explanation: "filter() is lazy - it doesn't process elements until a terminal operation is called. Multiple filter operations can be chained, and they're evaluated in order for each element.",
    translations: {
      tr: {
        question: "Functional interface nedir?",
        answer: "Functional interface tam olarak bir abstract metoda sahip arayüzdür. @FunctionalInterface anotasyonu. Lambda veya method reference ile kullanılır. Predicate, Function, Consumer, Supplier örnektir.",
        explanation: "Functional interface lambda expression'ların hedefidir."
      }
    },
    codeExample: {
      code: `List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Simple filter
List<Integer> evens = numbers.stream()
    .filter(n -> n % 2 == 0)
    .collect(Collectors.toList());
// Result: [2, 4, 6, 8, 10]

// Multiple filters (chained)
List<Integer> result = numbers.stream()
    .filter(n -> n % 2 == 0)        // Keep evens
    .filter(n -> n > 5)              // Keep > 5
    .collect(Collectors.toList());
// Result: [6, 8, 10]

// Filter with objects
class Employee {
    String name;
    int salary;
    String department;
}

List<Employee> highEarners = employees.stream()
    .filter(e -> e.salary > 100000)
    .filter(e -> e.department.equals("Engineering"))
    .collect(Collectors.toList());

// Filter with null check
List<String> nonNull = list.stream()
    .filter(Objects::nonNull)
    .filter(s -> !s.isEmpty())
    .collect(Collectors.toList());`,
      language: 'java'
    },
    topic: 'java8',
    difficulty: 'junior',
    tags: ['stream-api', 'filter', 'predicate', 'functional'],    commonPitfalls: ['Forgetting that filter returns new stream (immutable)', 'Performance hit from too many filter chaining', 'Not considering null values'],
    realWorldUse: 'Filtering search results, data validation, permission checks, query result filtering.'
  },
  {
    id: 'java8-003',
    question: "Explain the map() operation in Streams with examples.",
    answer: "map() is an intermediate operation that transforms each element in a stream by applying a function. It takes a Function<T, R> and returns a Stream<R> where each element is the result of applying the function to the original element.",
    explanation: "map() performs 1-to-1 transformation. Each input element produces exactly one output element. Use flatMap() for 1-to-many transformations.",
    translations: {
      tr: {
        question: "Stream API nedir?",
        answer: "Stream API koleksiyonları deklaratif şekilde işler. Functional-style operasyonlar: filter, map, reduce. Lazy evaluation. Parallel stream destekler. Intermediate ve terminal operations.",
        explanation: "Stream for loop'ları daha okunaklı functional pipeline'larla değiştirir."
      }
    },
    codeExample: {
      code: `List<String> names = Arrays.asList("alice", "bob", "charlie");

// Simple transformation
List<String> uppercase = names.stream()
    .map(String::toUpperCase)
    .collect(Collectors.toList());
// Result: ["ALICE", "BOB", "CHARLIE"]

// Extract property from objects
class Person {
    String name;
    int age;
}

List<Integer> ages = people.stream()
    .map(Person::getAge)
    .collect(Collectors.toList());

// Multiple transformations
List<Integer> lengths = names.stream()
    .map(String::toUpperCase)
    .map(String::length)
    .collect(Collectors.toList());
// Result: [5, 3, 7]

// Complex transformation
List<String> formatted = employees.stream()
    .map(e -> e.getName() + " (" + e.getDepartment() + ")")
    .collect(Collectors.toList());

// Type conversion
List<String> numbers = Arrays.asList("1", "2", "3");
List<Integer> integers = numbers.stream()
    .map(Integer::parseInt)
    .collect(Collectors.toList());`,
      language: 'java'
    },
    topic: 'java8',
    difficulty: 'junior',
    tags: ['stream-api', 'map', 'transformation', 'functional'],    commonPitfalls: ['Using map when flatMap is needed (nested streams)', 'Exceptions in map function break entire stream', 'Not handling null returns from map'],
    realWorldUse: 'DTO conversions, extracting fields from objects, data format transformations, API response mapping.'
  },
  {
    id: 'java8-004',
    question: "Explain the reduce() operation in Streams with examples.",
    answer: "reduce() is a terminal operation that combines stream elements into a single result by repeatedly applying a combining function. It takes an identity value (initial/default) and a BinaryOperator that combines two values into one.",
    explanation: "reduce() performs a fold operation - it accumulates elements from left to right. There are three forms: reduce(BinaryOperator), reduce(identity, BinaryOperator), and reduce(identity, BiFunction, BinaryOperator) for parallel streams.",
    translations: {
      tr: {
        question: "Method reference nedir?",
        answer: "Method reference mevcut metodları kısa syntax ile lambda olarak kullanır. Dört tip: static, instance, constructor, arbitrary object. :: operatörü kullanır.",
        explanation: "Method reference lambda'dan daha kısa - mevcut metod varsa kullanın."
      }
    },
    codeExample: {
      code: `List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);

// Sum with identity
int sum = numbers.stream()
    .reduce(0, (a, b) -> a + b);
// Result: 15 (0+1+2+3+4+5)

// Sum using method reference
int sum2 = numbers.stream()
    .reduce(0, Integer::sum);

// Product
int product = numbers.stream()
    .reduce(1, (a, b) -> a * b);
// Result: 120 (1*2*3*4*5)

// Maximum value
Optional<Integer> max = numbers.stream()
    .reduce((a, b) -> a > b ? a : b);
// Or: .reduce(Integer::max);

// String concatenation
List<String> words = Arrays.asList("Java", "is", "awesome");
String sentence = words.stream()
    .reduce("", (a, b) -> a + " " + b).trim();
// Result: "Java is awesome"

// Complex reduction
class Order {
    double amount;
}

double totalAmount = orders.stream()
    .map(Order::getAmount)
    .reduce(0.0, Double::sum);

// No identity (returns Optional)
Optional<Integer> result = numbers.stream()
    .reduce((a, b) -> a + b);`,
      language: 'java'
    },
    topic: 'java8',
    difficulty: 'mid',
    tags: ['stream-api', 'reduce', 'aggregation', 'terminal-operation'],    commonPitfalls: ['Using wrong identity value (affects result)', 'Not handling empty stream (use Optional version)', 'Using reduce for mutable accumulation (use collect instead)'],
    realWorldUse: 'Calculating totals/sums, finding max/min values, combining results, statistical aggregations.'
  },
  {
    id: 'java8-005',
    question: "Explain the collect() operation and Collectors utility class.",
    answer: "collect() is a terminal operation that transforms stream elements into a different form, usually a collection. Collectors utility class provides common reduction operations like toList(), toSet(), toMap(), groupingBy(), joining(), etc.",
    explanation: "collect() is more powerful than reduce() for accumulating into mutable containers. Collectors.toList() is most common, but Collectors offers many specialized collectors for grouping, partitioning, and aggregating.",
    translations: {
      tr: {
        question: "Optional sınıfı nedir?",
        answer: "Optional değer olabilecek veya null olabilecek container'dır. NullPointerException önler. isPresent(), ifPresent(), orElse(), orElseGet() metodları. Null kontrolleri açık yapar.",
        explanation: "Optional null return yerine tercih edilir - daha güvenli API."
      }
    },
    codeExample: {
      code: `List<String> names = Arrays.asList("Alice", "Bob", "Charlie", "David");

// Collect to List
List<String> list = names.stream()
    .filter(n -> n.length() > 3)
    .collect(Collectors.toList());

// Collect to Set (removes duplicates)
Set<String> set = names.stream()
    .collect(Collectors.toSet());

// Collect to Map
Map<String, Integer> nameToLength = names.stream()
    .collect(Collectors.toMap(
        name -> name,           // key
        String::length          // value
    ));

// Joining strings
String joined = names.stream()
    .collect(Collectors.joining(", ", "[", "]"));
// Result: "[Alice, Bob, Charlie, David]"

// Grouping by property
class Employee {
    String name;
    String department;
}

Map<String, List<Employee>> byDepartment = employees.stream()
    .collect(Collectors.groupingBy(Employee::getDepartment));

// Partitioning (boolean grouping)
Map<Boolean, List<Integer>> evenOdd = numbers.stream()
    .collect(Collectors.partitioningBy(n -> n % 2 == 0));
// Result: {true=[2,4,6], false=[1,3,5]}

// Counting
Long count = names.stream()
    .collect(Collectors.counting());

// Statistics
DoubleSummaryStatistics stats = employees.stream()
    .collect(Collectors.summarizingDouble(Employee::getSalary));
// stats.getAverage(), stats.getMax(), etc.`,
      language: 'java'
    },
    topic: 'java8',
    difficulty: 'mid',
    tags: ['stream-api', 'collectors', 'collect', 'grouping'],    commonPitfalls: ['Duplicate keys in toMap() throws exception', 'toList() returns implementation-specific list (not always ArrayList)', 'Forgetting merge function in toMap with duplicates'],
    realWorldUse: 'Grouping data by category, converting results to collections, building maps from lists, aggregating statistics.'
  },
  {
    id: 'java8-006',
    question: "Explain flatMap() and how it differs from map().",
    answer: "flatMap() transforms each element into a stream, then flattens all streams into a single stream. Unlike map() which does 1-to-1 transformation, flatMap() does 1-to-many transformation. It takes Function<T, Stream<R>> and returns Stream<R>.",
    explanation: "flatMap() is essential when dealing with nested structures or when each element needs to produce multiple output elements. It flattens the structure by one level.",
    translations: {
      tr: {
        question: "Default metodlar nedir?",
        answer: "Default metodlar (Java 8) arayüzlerde implementasyon içeren metodlardır. Geriye uyumluluk sağlar. Çoklu kalıtım sorunlarına yol açabilir. default anahtar kelimesi.",
        explanation: "Default metodlar arayüz evrimini mevcut implementasyonları bozmadan sağlar."
      }
    },
    codeExample: {
      code: `// Problem: map() creates nested streams
List<String> words = Arrays.asList("Hello", "World");
List<Stream<String>> nested = words.stream()
    .map(word -> Arrays.stream(word.split("")))
    .collect(Collectors.toList());
// Result: [Stream["H","e","l","l","o"], Stream["W","o","r","l","d"]]

// Solution: flatMap() flattens
List<String> letters = words.stream()
    .flatMap(word -> Arrays.stream(word.split("")))
    .distinct()
    .collect(Collectors.toList());
// Result: ["H","e","l","o","W","r","d"]

// Flattening nested lists
List<List<Integer>> nested = Arrays.asList(
    Arrays.asList(1, 2, 3),
    Arrays.asList(4, 5),
    Arrays.asList(6, 7, 8, 9)
);

List<Integer> flat = nested.stream()
    .flatMap(List::stream)
    .collect(Collectors.toList());
// Result: [1,2,3,4,5,6,7,8,9]

// Multiple values per element
class Person {
    List<String> phoneNumbers;
}

List<String> allPhones = people.stream()
    .flatMap(p -> p.getPhoneNumbers().stream())
    .collect(Collectors.toList());

// Combining with Optional
List<Optional<String>> optionals = Arrays.asList(
    Optional.of("A"),
    Optional.empty(),
    Optional.of("B")
);

List<String> values = optionals.stream()
    .flatMap(Optional::stream)  // Java 9+
    .collect(Collectors.toList());
// Result: ["A", "B"]

// Cartesian product
List<String> letters = Arrays.asList("a", "b");
List<Integer> numbers = Arrays.asList(1, 2);

List<String> combinations = letters.stream()
    .flatMap(letter -> numbers.stream()
        .map(number -> letter + number))
    .collect(Collectors.toList());
// Result: ["a1", "a2", "b1", "b2"]`,
      language: 'java'
    },
    topic: 'java8',
    difficulty: 'mid',
    tags: ['stream-api', 'flatmap', 'flatten', 'nested-structures'],    commonPitfalls: ['Using map() instead of flatMap() for nested structures', 'Returning null instead of empty stream (use Stream.empty())', 'Performance issues with deep nesting'],
    realWorldUse: 'Flattening nested JSON structures, processing graph relationships, combining multiple data sources, handling one-to-many relationships.'
  },
  {
    id: 'java8-007',
    question: "What are lambda expressions in Java 8 and what is their syntax?",
    answer: "Lambda expressions provide a concise way to represent anonymous functions (methods without names). They enable functional programming by treating behavior as a method argument. Syntax: (parameters) -> expression or (parameters) -> { statements; }",
    explanation: "Lambdas implement functional interfaces (interfaces with single abstract method). The compiler infers types from context. Lambdas can capture variables from enclosing scope (effectively final).",
    translations: {
      tr: {
        question: "forEach() metodu nedir?",
        answer: "forEach() Iterable'larda her eleman için işlem yapar. Consumer alır. Internal iteration. Paralel işleme uygun. Stream veya Collection'da kullanılır.",
        explanation: "forEach external loop'ları internal iteration ile değiştirir."
      }
    },
    codeExample: {
      code: `// Traditional anonymous class
Runnable r1 = new Runnable() {
    @Override
    public void run() {
        System.out.println("Hello");
    }
};

// Lambda expression
Runnable r2 = () -> System.out.println("Hello");

// Lambda with parameters
Comparator<Integer> comp = (a, b) -> a.compareTo(b);

// Lambda with block body
BiFunction<Integer, Integer, Integer> add = (a, b) -> {
    int sum = a + b;
    return sum;
};

// Type inference (compiler knows types)
List<String> names = Arrays.asList("Alice", "Bob");
names.forEach(name -> System.out.println(name));

// Multiple parameters with types
BiPredicate<String, Integer> checker =
    (String s, Integer len) -> s.length() == len;

// No parameters
Supplier<Double> random = () -> Math.random();

// Single parameter (parentheses optional)
Consumer<String> print = s -> System.out.println(s);
// Or: (s) -> System.out.println(s);

// Capturing variables (must be effectively final)
int factor = 2;
Function<Integer, Integer> multiplier = n -> n * factor;
// factor = 3; // Compile error!

// Common use cases
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
numbers.stream()
    .filter(n -> n % 2 == 0)
    .map(n -> n * n)
    .forEach(n -> System.out.println(n));`,
      language: 'java'
    },
    topic: 'java8',
    difficulty: 'junior',
    tags: ['lambda', 'functional-programming', 'java8', 'syntax'],    commonPitfalls: ['Modifying captured variables (must be effectively final)', 'Using return in expression form', 'Overusing lambdas (reducing readability)'],
    realWorldUse: 'Event handlers, stream operations, asynchronous callbacks, comparators, thread creation.'
  },
  {
    id: 'java8-008',
    question: "What are method references in Java 8 and what are the different types?",
    answer: "Method references are shorthand for lambda expressions that only call an existing method. Syntax: ClassName::methodName. Four types: static method (Class::staticMethod), instance method of object (obj::instanceMethod), instance method of class (Class::instanceMethod), constructor (Class::new).",
    explanation: "Method references make code more readable when lambda only delegates to existing method. The compiler matches method signature to functional interface.",
    translations: {
      tr: {
        question: "map() ve flatMap() arasındaki fark nedir?",
        answer: "map(): her eleman için dönüşüm, Stream<T> -> Stream<R>. flatMap(): her eleman stream döndürür, bunları düzleştirir (flatten), Stream<Stream<T>> -> Stream<T>.",
        explanation: "map transformation için, flatMap nested yapıları düzleştirmek için."
      }
    },
    codeExample: {
      code: `// 1. Static method reference
// Lambda: x -> Math.sqrt(x)
Function<Double, Double> sqrt = Math::sqrt;
double result = sqrt.apply(16.0); // 4.0

List<String> numbers = Arrays.asList("1", "2", "3");
// Lambda: s -> Integer.parseInt(s)
List<Integer> ints = numbers.stream()
    .map(Integer::parseInt)
    .collect(Collectors.toList());

// 2. Instance method reference on specific object
String prefix = "Hello, ";
// Lambda: s -> prefix.concat(s)
Function<String, String> greeter = prefix::concat;
String greeting = greeter.apply("World"); // "Hello, World"

List<String> words = Arrays.asList("a", "b", "c");
// Lambda: s -> System.out.println(s)
words.forEach(System.out::println);

// 3. Instance method reference on arbitrary object of type
List<String> names = Arrays.asList("charlie", "alice", "bob");
// Lambda: (s1, s2) -> s1.compareToIgnoreCase(s2)
Collections.sort(names, String::compareToIgnoreCase);

// Lambda: s -> s.toUpperCase()
List<String> upper = names.stream()
    .map(String::toUpperCase)
    .collect(Collectors.toList());

// 4. Constructor reference
// Lambda: () -> new ArrayList<>()
Supplier<List<String>> listSupplier = ArrayList::new;
List<String> list = listSupplier.get();

// Lambda: s -> new Person(s)
Function<String, Person> personFactory = Person::new;
Person p = personFactory.apply("John");

// Array constructor reference
// Lambda: size -> new String[size]
IntFunction<String[]> arrayCreator = String[]::new;
String[] arr = arrayCreator.apply(10);

// Practical example
class Person {
    String name;
    Person(String name) { this.name = name; }
}

List<String> nameList = Arrays.asList("Alice", "Bob");
List<Person> people = nameList.stream()
    .map(Person::new)  // Constructor reference
    .collect(Collectors.toList());`,
      language: 'java'
    },
    topic: 'java8',
    difficulty: 'mid',
    tags: ['method-reference', 'lambda', 'java8', 'functional'],    commonPitfalls: ['Confusing instance method types (obj::method vs Class::method)', 'Using method reference when lambda needs additional logic', 'Not matching method signature with functional interface'],
    realWorldUse: 'Cleaner stream operations, factory patterns with constructors, event handler registration, comparators.'
  },
  {
    id: 'java8-009',
    question: "Explain the Predicate functional interface with examples.",
    answer: "Predicate<T> represents a boolean-valued function that tests a condition on type T. It has one abstract method: boolean test(T t). Commonly used for filtering operations in streams and conditional logic.",
    explanation: "Predicate provides default methods for composition: and(), or(), negate(). Also has static method isEqual(). Often used with filter() in streams.",
    translations: {
      tr: {
        question: "filter() metodu nasıl çalışır?",
        answer: "filter() Predicate'e göre elemanları seçer. Koşulu karşılayanları tutar. Intermediate operation - lazy. Birden fazla filter zincirlenebilinir.",
        explanation: "filter deklaratif veri filtreleme sağlar."
      }
    },
    codeExample: {
      code: `import java.util.function.Predicate;

// Simple predicate
Predicate<Integer> isEven = n -> n % 2 == 0;
System.out.println(isEven.test(4));  // true
System.out.println(isEven.test(5));  // false

// Predicate with objects
class Person {
    String name;
    int age;
}

Predicate<Person> isAdult = p -> p.age >= 18;
Predicate<Person> hasLongName = p -> p.name.length() > 5;

// Composition with and(), or(), negate()
Predicate<Person> adultWithLongName = isAdult.and(hasLongName);
Predicate<Person> adultOrLongName = isAdult.or(hasLongName);
Predicate<Person> notAdult = isAdult.negate();

// Filter with predicate
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6);
List<Integer> evens = numbers.stream()
    .filter(isEven)
    .collect(Collectors.toList());

// Multiple predicates
Predicate<String> startsWithA = s -> s.startsWith("A");
Predicate<String> longerThan3 = s -> s.length() > 3;

List<String> names = Arrays.asList("Alice", "Bob", "Anna", "Al");
List<String> filtered = names.stream()
    .filter(startsWithA.and(longerThan3))
    .collect(Collectors.toList());
// Result: ["Alice", "Anna"]

// Static isEqual method
Predicate<String> isHello = Predicate.isEqual("Hello");
System.out.println(isHello.test("Hello")); // true
System.out.println(isHello.test("Hi"));    // false

// Practical: Validation
Predicate<String> isValidEmail = email ->
    email != null && email.contains("@") && email.contains(".");

List<String> emails = Arrays.asList("test@example.com", "invalid", "a@b.c");
List<String> validEmails = emails.stream()
    .filter(isValidEmail)
    .collect(Collectors.toList());

// removeIf uses Predicate
List<Integer> nums = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5));
nums.removeIf(n -> n % 2 == 0); // Removes even numbers
// Result: [1, 3, 5]`,
      language: 'java'
    },
    topic: 'java8',
    difficulty: 'mid',
    tags: ['predicate', 'functional-interface', 'java8', 'filter'],    commonPitfalls: ['Not handling null values in predicate', 'Complex predicate logic (reduce readability)', 'Forgetting negate() returns new predicate (immutable)'],
    realWorldUse: 'Input validation, filtering collections, permission checks, conditional logic, business rules.'
  },
  {
    id: 'java8-010',
    question: "Explain the Function functional interface with examples.",
    answer: "Function<T, R> represents a function that takes an argument of type T and produces result of type R. It has one abstract method: R apply(T t). Used for transformations and mapping operations.",
    explanation: "Function provides composition methods: andThen() (execute this then that) and compose() (execute that then this). Commonly used with map() in streams.",
    translations: {
      tr: {
        question: "collect() metodu nedir?",
        answer: "collect() stream'i collection'a dönüştürür. Collectors utility kullanır: toList(), toSet(), toMap(), groupingBy(), partitioningBy(). Mutable reduction operation.",
        explanation: "collect stream sonucunu collection'da toplar."
      }
    },
    codeExample: {
      code: `import java.util.function.Function;

// Simple function
Function<Integer, Integer> square = n -> n * n;
System.out.println(square.apply(5));  // 25

Function<String, Integer> length = s -> s.length();
System.out.println(length.apply("Hello"));  // 5

// Composition with andThen (execute first, then second)
Function<Integer, Integer> multiplyBy2 = n -> n * 2;
Function<Integer, Integer> add3 = n -> n + 3;

Function<Integer, Integer> combined = multiplyBy2.andThen(add3);
System.out.println(combined.apply(5));  // (5*2)+3 = 13

// Composition with compose (execute second first, then first)
Function<Integer, Integer> composed = multiplyBy2.compose(add3);
System.out.println(composed.apply(5));  // (5+3)*2 = 16

// Using with map()
List<String> names = Arrays.asList("alice", "bob", "charlie");
List<Integer> lengths = names.stream()
    .map(String::length)  // Function<String, Integer>
    .collect(Collectors.toList());

// Chaining functions in stream
Function<String, String> trim = String::trim;
Function<String, String> upperCase = String::toUpperCase;

List<String> processed = names.stream()
    .map(trim.andThen(upperCase))
    .collect(Collectors.toList());

// Object transformation
class Person {
    String name;
    Person(String name) { this.name = name; }
}

Function<String, Person> toPerson = Person::new;
List<Person> people = names.stream()
    .map(toPerson)
    .collect(Collectors.toList());

// BiFunction for two arguments
BiFunction<Integer, Integer, Integer> add = (a, b) -> a + b;
System.out.println(add.apply(5, 3));  // 8

// Practical: Data transformation
Function<String, Integer> stringToInt = Integer::parseInt;
Function<Integer, String> intToHex = Integer::toHexString;

Function<String, String> decimalToHex =
    stringToInt.andThen(intToHex);
System.out.println(decimalToHex.apply("255"));  // "ff"

// Identity function
Function<String, String> identity = Function.identity();
// Same as: s -> s`,
      language: 'java'
    },
    topic: 'java8',
    difficulty: 'mid',
    tags: ['function', 'functional-interface', 'java8', 'transformation'],    commonPitfalls: ['Confusing andThen vs compose order', 'Not handling exceptions in function', 'Complex function chains (reduce readability)'],
    realWorldUse: 'DTO transformations, data mapping, type conversions, function composition pipelines, calculators.'
  },
  {
    id: 'java8-011',
    question: "Explain Consumer and Supplier functional interfaces.",
    answer: "Consumer<T> accepts input and returns nothing (void). Method: void accept(T t). Used for side effects. Supplier<T> accepts no input and returns value of type T. Method: T get(). Used for lazy value generation or factory patterns.",
    explanation: "Consumer is for operations with side effects (printing, saving). Supplier is for deferred execution and value generation. Both are key functional interfaces in Java 8.",
    translations: {
      tr: {
        question: "Predicate, Function, Consumer, Supplier nedir?",
        answer: "Predicate: boolean test(T), koşul testi. Function: R apply(T), dönüşüm. Consumer: void accept(T), işlem. Supplier: T get(), değer sağlar. Functional interface'ler.",
        explanation: "Bu functional interface'ler lambda için standart type'lardır."
      }
    },
    codeExample: {
      code: `import java.util.function.Consumer;
import java.util.function.Supplier;

// CONSUMER - accepts input, returns nothing
Consumer<String> printer = s -> System.out.println(s);
printer.accept("Hello");  // Prints: Hello

// Consumer with forEach
List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
names.forEach(name -> System.out.println(name));
// Or: names.forEach(System.out::println);

// Consumer composition with andThen
Consumer<String> print = s -> System.out.print(s);
Consumer<String> newLine = s -> System.out.println();
Consumer<String> printLine = print.andThen(newLine);

names.forEach(printLine);

// BiConsumer - two arguments
BiConsumer<String, Integer> printWithIndex =
    (name, idx) -> System.out.println(idx + ": " + name);
printWithIndex.accept("Alice", 1);  // "1: Alice"

// Map forEach uses BiConsumer
Map<String, Integer> map = new HashMap<>();
map.put("a", 1);
map.put("b", 2);
map.forEach((key, value) -> System.out.println(key + "=" + value));

// SUPPLIER - no input, returns value
Supplier<Double> randomSupplier = () -> Math.random();
System.out.println(randomSupplier.get());  // Random value

Supplier<String> uuidSupplier = () -> UUID.randomUUID().toString();
String id = uuidSupplier.get();

// Lazy initialization
Supplier<List<String>> listFactory = ArrayList::new;
List<String> list = listFactory.get();

// Deferred execution
Supplier<LocalDateTime> now = LocalDateTime::now;
// Value not computed until get() is called
LocalDateTime time1 = now.get();
Thread.sleep(1000);
LocalDateTime time2 = now.get();  // Different value

// Practical: Logging with Supplier (lazy evaluation)
void log(Supplier<String> messageSupplier) {
    if (logger.isDebugEnabled()) {
        logger.debug(messageSupplier.get()); // Only compute if needed
    }
}

// Expensive operation only runs if debug enabled
log(() -> "User data: " + fetchExpensiveUserData());

// Factory pattern with Supplier
class Factory {
    public static <T> T create(Supplier<T> supplier) {
        return supplier.get();
    }
}

Person p = Factory.create(Person::new);

// Optional.orElseGet uses Supplier
Optional<String> optional = Optional.empty();
String result = optional.orElseGet(() -> "default");`,
      language: 'java'
    },
    topic: 'java8',
    difficulty: 'mid',
    tags: ['consumer', 'supplier', 'functional-interface', 'java8'],    commonPitfalls: ['Using orElse instead of orElseGet (eager vs lazy)', 'Side effects in Supplier (should be pure)', 'Not leveraging lazy evaluation'],
    realWorldUse: 'Logging frameworks, factory patterns, lazy initialization, forEach operations, callback handlers.'
  },
  {
    id: 'java8-012',
    question: "What is Optional in Java 8 and why is it useful?",
    answer: "Optional<T> is a container object that may or may not contain a non-null value. It's designed to represent optional values instead of null references, helping avoid NullPointerException and making null-handling explicit.",
    explanation: "Optional encourages better null-handling practices by forcing developers to consciously handle absence of value. It provides methods like isPresent(), ifPresent(), orElse(), orElseGet(), orElseThrow(), map(), flatMap().",
    translations: {
      tr: {
        question: "reduce() metodu nasıl çalışır?",
        answer: "reduce() elemanları tek değere indirgir. Identity, accumulator, combiner alır. sum(), max(), min() gibi operasyonlar için. Terminal operation.",
        explanation: "reduce agrega hesaplamalarda kullanılır."
      }
    },
    codeExample: {
      code: `import java.util.Optional;

// Creating Optional
Optional<String> empty = Optional.empty();
Optional<String> nonEmpty = Optional.of("Hello");
// Optional.of(null); // Throws NullPointerException

Optional<String> nullable = Optional.ofNullable(getValue());
// Returns empty if getValue() returns null

// Checking presence (old style - NOT recommended)
if (optional.isPresent()) {
    String value = optional.get();
    System.out.println(value);
}

// Modern style with ifPresent
optional.ifPresent(value -> System.out.println(value));
// Or: optional.ifPresent(System.out::println);

// Providing default values
String result = optional.orElse("default");

// Lazy default with Supplier
String result2 = optional.orElseGet(() -> computeDefault());

// Throw exception if empty
String result3 = optional.orElseThrow(() ->
    new IllegalStateException("Value not found"));

// Transformation with map
Optional<String> name = Optional.of("Alice");
Optional<Integer> length = name.map(String::length);
// If name is empty, length is also empty

Optional<String> upper = name.map(String::toUpperCase);
System.out.println(upper.orElse(""));  // "ALICE"

// Chaining transformations
Optional<String> result = Optional.of("  hello  ")
    .map(String::trim)
    .map(String::toUpperCase)
    .filter(s -> s.length() > 3);

// flatMap for nested Optionals
class Person {
    Optional<String> getAddress() {
        return Optional.of("123 Main St");
    }
}

Optional<Person> person = Optional.of(new Person());

// Wrong: map returns Optional<Optional<String>>
Optional<Optional<String>> wrong = person.map(Person::getAddress);

// Correct: flatMap flattens
Optional<String> address = person.flatMap(Person::getAddress);

// filter
Optional<Integer> number = Optional.of(42);
Optional<Integer> even = number.filter(n -> n % 2 == 0);
// Result: Optional[42]

Optional<Integer> odd = number.filter(n -> n % 2 != 0);
// Result: Optional.empty

// Practical: Repository pattern
Optional<User> findById(String id) {
    User user = database.find(id);
    return Optional.ofNullable(user);
}

// Usage
String userName = findById("123")
    .map(User::getName)
    .orElse("Unknown");

// Anti-pattern: Don't do this!
Optional<String> bad = Optional.of("value");
if (bad.isPresent()) {
    return bad.get();  // Just use orElse!
}`,
      language: 'java'
    },
    topic: 'java8',
    difficulty: 'mid',
    tags: ['optional', 'null-safety', 'java8', 'functional'],    commonPitfalls: ['Using get() without isPresent() check', 'Using orElse with expensive operation (use orElseGet)', 'Overusing Optional (don\'t use in fields or parameters)', 'Using Optional.of(null)'],
    realWorldUse: 'Repository return types, configuration values, method chains, null-safe transformations, API responses.'
  },
  {
    id: 'java8-013',
    question: "Explain the new Date/Time API in Java 8 (LocalDate, LocalDateTime, LocalTime).",
    answer: "Java 8 introduced java.time package with immutable, thread-safe date/time classes. LocalDate (date without time), LocalTime (time without date), LocalDateTime (date and time), all without timezone. Replaces problematic old Date and Calendar classes.",
    explanation: "New API is immutable (thread-safe), has clear separation of concerns, uses fluent API with method chaining, and follows ISO-8601 standard. All manipulation methods return new instances.",
    translations: {
      tr: {
        question: "Parallel stream nedir?",
        answer: "Parallel stream operasyonları paralel çalıştırır. parallelStream() veya parallel() ile oluşturulur. ForkJoinPool kullanır. Büyük veri setlerinde performans artışı. Thread-safe olmalı.",
        explanation: "Parallel stream çok çekirdekli CPU'dan yararlanır ancak overhead vardır."
      }
    },
    codeExample: {
      code: `import java.time.*;
import java.time.format.DateTimeFormatter;

// LocalDate - date without time
LocalDate today = LocalDate.now();
LocalDate birthday = LocalDate.of(1990, 5, 15);
LocalDate parsed = LocalDate.parse("2023-12-25");

System.out.println(today);  // 2025-10-12
System.out.println(birthday.getYear());  // 1990
System.out.println(birthday.getMonth());  // MAY
System.out.println(birthday.getDayOfMonth());  // 15

// Date manipulation (returns new instance - immutable!)
LocalDate tomorrow = today.plusDays(1);
LocalDate nextWeek = today.plusWeeks(1);
LocalDate nextMonth = today.plusMonths(1);
LocalDate nextYear = today.plusYears(1);

LocalDate yesterday = today.minusDays(1);

// LocalTime - time without date
LocalTime now = LocalTime.now();
LocalTime lunchTime = LocalTime.of(12, 30);
LocalTime parsed2 = LocalTime.parse("14:30:00");

System.out.println(now);  // 15:30:45.123
System.out.println(lunchTime.getHour());  // 12

// Time manipulation
LocalTime later = lunchTime.plusHours(2);
LocalTime withMinutes = lunchTime.withMinute(45);

// LocalDateTime - date and time (no timezone)
LocalDateTime dateTime = LocalDateTime.now();
LocalDateTime meeting = LocalDateTime.of(2025, 12, 25, 14, 30);
LocalDateTime combined = LocalDate.now().atTime(LocalTime.now());

// Manipulation
LocalDateTime future = dateTime.plusDays(5).plusHours(3);

// Comparing dates
LocalDate date1 = LocalDate.of(2025, 1, 1);
LocalDate date2 = LocalDate.of(2025, 12, 31);

boolean isBefore = date1.isBefore(date2);  // true
boolean isAfter = date1.isAfter(date2);    // false
boolean isEqual = date1.isEqual(date2);    // false

// Formatting
DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
String formatted = today.format(formatter);
LocalDate parsedDate = LocalDate.parse("25/12/2025", formatter);

// Common patterns
DateTimeFormatter iso = DateTimeFormatter.ISO_DATE;  // 2025-12-25
DateTimeFormatter custom = DateTimeFormatter.ofPattern("MMM dd, yyyy");  // Dec 25, 2025

// Practical: Calculate age
LocalDate birthDate = LocalDate.of(1990, 5, 15);
Period age = Period.between(birthDate, LocalDate.now());
System.out.println(age.getYears() + " years old");`,
      language: 'java'
    },
    topic: 'java8',
    difficulty: 'mid',
    tags: ['date-time', 'localdate', 'localdatetime', 'java8'],    commonPitfalls: ['Forgetting dates are immutable (modifications return new instance)', 'Using old Date/Calendar instead of new API', 'Not considering timezone (use ZonedDateTime for timezone-aware)'],
    realWorldUse: 'Scheduling systems, birthday/age calculations, date formatting, logging timestamps, booking systems.'
  },
  {
    id: 'java8-014',
    question: "Explain ZonedDateTime, Duration, and Period in Java 8 Date/Time API.",
    answer: "ZonedDateTime represents date-time with timezone. Duration measures time in seconds/nanoseconds (time-based, e.g., hours, minutes). Period measures time in years/months/days (date-based). All are immutable and thread-safe.",
    explanation: "ZonedDateTime handles timezone conversions and DST. Duration for time-based amounts (PT2H30M). Period for date-based amounts (P2Y3M5D). Use Duration for time differences, Period for date differences.",
    translations: {
      tr: {
        question: "Intermediate ve terminal operations arasındaki fark nedir?",
        answer: "Intermediate: lazy, Stream döndürür, zincirlenir (filter, map). Terminal: eager, Stream olmayan döndürür, pipeline'ı tetikler (collect, forEach). Terminal olmadan hiç çalışmaz.",
        explanation: "Stream lazy evaluation kullanır - terminal operation gereklidir."
      }
    },
    codeExample: {
      code: `import java.time.*;

// ZonedDateTime - date-time with timezone
ZonedDateTime nowUTC = ZonedDateTime.now(ZoneId.of("UTC"));
ZonedDateTime nowNY = ZonedDateTime.now(ZoneId.of("America/New_York"));
ZonedDateTime nowTokyo = ZonedDateTime.now(ZoneId.of("Asia/Tokyo"));

System.out.println(nowUTC);  // 2025-10-12T10:30:00Z[UTC]

// Convert between timezones
ZonedDateTime utcTime = ZonedDateTime.now(ZoneId.of("UTC"));
ZonedDateTime nyTime = utcTime.withZoneSameInstant(
    ZoneId.of("America/New_York"));

// Create specific zoned time
ZonedDateTime meeting = ZonedDateTime.of(
    2025, 12, 25, 14, 30, 0, 0,
    ZoneId.of("America/Los_Angeles"));

// DURATION - time-based (hours, minutes, seconds)
LocalTime start = LocalTime.of(9, 0);
LocalTime end = LocalTime.of(17, 30);
Duration workDay = Duration.between(start, end);

System.out.println(workDay.toHours());    // 8
System.out.println(workDay.toMinutes());  // 510

// Creating durations
Duration twoHours = Duration.ofHours(2);
Duration thirtyMinutes = Duration.ofMinutes(30);
Duration combined = Duration.ofHours(2).plusMinutes(30);

// Duration with dates
LocalDateTime start2 = LocalDateTime.now();
LocalDateTime end2 = start2.plusHours(5);
Duration duration = Duration.between(start2, end2);

// Duration manipulation
LocalDateTime future = LocalDateTime.now().plus(Duration.ofHours(3));

// PERIOD - date-based (years, months, days)
LocalDate birthDate = LocalDate.of(1990, 5, 15);
LocalDate today = LocalDate.now();
Period age = Period.between(birthDate, today);

System.out.println(age.getYears());   // 35
System.out.println(age.getMonths());  // 4
System.out.println(age.getDays());    // 27

// Creating periods
Period twoYears = Period.ofYears(2);
Period threeMonths = Period.ofMonths(3);
Period tenDays = Period.ofDays(10);
Period combined2 = Period.of(2, 3, 15);  // 2y 3m 15d

// Period manipulation
LocalDate futureDate = LocalDate.now().plus(Period.ofMonths(6));

// Practical: Subscription expiry
LocalDate subscriptionStart = LocalDate.now();
LocalDate subscriptionEnd = subscriptionStart.plus(Period.ofYears(1));
Period remaining = Period.between(LocalDate.now(), subscriptionEnd);

// Duration vs Period
// Duration: time-based (PT2H30M = 2 hours 30 minutes)
// Period: date-based (P1Y2M3D = 1 year 2 months 3 days)

// Converting
long days = Duration.ofHours(48).toDays();  // 2
long totalDays = Period.ofMonths(2).toTotalMonths();  // 2

// Instant - timestamp (epoch milliseconds)
Instant timestamp = Instant.now();
Instant epochStart = Instant.ofEpochMilli(0);
Duration sinceEpoch = Duration.between(epochStart, timestamp);`,
      language: 'java'
    },
    topic: 'java8',
    difficulty: 'senior',
    tags: ['zoneddatetime', 'duration', 'period', 'timezone', 'java8'],    commonPitfalls: ['Using Duration for dates (use Period)', 'Not handling DST transitions', 'Confusing Duration.ofDays vs Period.ofDays', 'Storing ZonedDateTime instead of Instant in DB'],
    realWorldUse: 'Global scheduling, timezone conversions, subscription management, age calculations, time tracking, booking systems.'
  },
  {
    id: 'java8-015',
    question: "What are default and static methods in interfaces (Java 8)?",
    answer: "Default methods allow interfaces to have method implementations using \"default\" keyword, enabling backward compatibility. Static methods allow interfaces to have static utility methods. Both provide implementation without breaking existing implementations.",
    explanation: "Default methods solved the interface evolution problem - adding new methods to interfaces without breaking all implementations. Static methods group related utility methods with the interface.",
    translations: {
      tr: {
        question: "Date/Time API (java.time) nedir?",
        answer: "Java 8 modern Date/Time API sunar. Immutable ve thread-safe. LocalDate, LocalTime, LocalDateTime, ZonedDateTime. Period, Duration. DateTimeFormatter.",
        explanation: "java.time eski Date/Calendar API'sinin sorunlarını çözer."
      }
    },
    codeExample: {
      code: `// Default methods
interface Vehicle {
    void start();  // Abstract method

    // Default method with implementation
    default void honk() {
        System.out.println("Beep beep!");
    }

    default void stop() {
        System.out.println("Vehicle stopped");
    }
}

class Car implements Vehicle {
    @Override
    public void start() {
        System.out.println("Car started");
    }
    // Can use default honk() or override it
}

Car car = new Car();
car.start();  // Car started
car.honk();   // Beep beep! (default implementation)

// Overriding default method
class Truck implements Vehicle {
    @Override
    public void start() {
        System.out.println("Truck started");
    }

    @Override
    public void honk() {
        System.out.println("HOOONK!");  // Override default
    }
}

// Static methods in interfaces
interface MathUtils {
    static int add(int a, int b) {
        return a + b;
    }

    static int multiply(int a, int b) {
        return a * b;
    }
}

// Call static method on interface
int sum = MathUtils.add(5, 3);  // 8

// Real example: Comparator
interface MyComparator<T> {
    int compare(T o1, T o2);

    // Default method
    default MyComparator<T> reversed() {
        return (o1, o2) -> compare(o2, o1);
    }

    // Static factory method
    static <T extends Comparable<T>> MyComparator<T> naturalOrder() {
        return (o1, o2) -> o1.compareTo(o2);
    }
}

// Multiple inheritance of default methods
interface A {
    default void foo() {
        System.out.println("A");
    }
}

interface B {
    default void foo() {
        System.out.println("B");
    }
}

// Must resolve conflict explicitly
class C implements A, B {
    @Override
    public void foo() {
        A.super.foo();  // Call A's implementation
        // Or: B.super.foo();
        // Or: provide own implementation
    }
}

// Java 8 Collection API uses default methods
List<String> list = Arrays.asList("a", "b", "c");
list.forEach(System.out::println);  // forEach is default method

// Stream default method
list.stream()  // stream() is default method in Collection
    .forEach(System.out::println);`,
      language: 'java'
    },
    topic: 'java8',
    difficulty: 'mid',
    tags: ['default-methods', 'static-methods', 'interfaces', 'java8'],    commonPitfalls: ['Diamond problem with multiple default methods (must override)', 'Trying to override static methods (not inherited)', 'Breaking encapsulation with default methods'],
    realWorldUse: 'API evolution (adding methods without breaking), utility methods in interfaces, Collection API enhancements.'
  },
  {
    id: 'java8-016',
    question: "What are parallel streams and when should you use them?",
    answer: "Parallel streams divide stream into multiple chunks processed concurrently on multiple CPU cores using ForkJoinPool. Created with parallelStream() or stream().parallel(). Best for CPU-intensive operations on large datasets, but has overhead and ordering issues.",
    explanation: "Parallel streams use common ForkJoinPool (cores-1 threads). Good for independent, CPU-bound tasks. Avoid for I/O operations, small datasets, or when order matters. Not always faster due to overhead.",
    translations: {
      tr: {
        question: "CompletableFuture nedir?",
        answer: "CompletableFuture asenkron hesaplama için gelişmiş Future'dır. Non-blocking. Zincirleme (thenApply, thenAccept). Kombinasyon (thenCombine). Exception handling (exceptionally).",
        explanation: "CompletableFuture reactive asenkron programlama sağlar."
      }
    },
    codeExample: {
      code: `import java.util.stream.*;

List<Integer> numbers = IntStream.rangeClosed(1, 1000000)
    .boxed()
    .collect(Collectors.toList());

// Sequential stream
long start = System.currentTimeMillis();
long sum1 = numbers.stream()
    .mapToInt(Integer::intValue)
    .sum();
long time1 = System.currentTimeMillis() - start;

// Parallel stream
start = System.currentTimeMillis();
long sum2 = numbers.parallelStream()
    .mapToInt(Integer::intValue)
    .sum();
long time2 = System.currentTimeMillis() - start;

// Or convert to parallel
long sum3 = numbers.stream()
    .parallel()
    .mapToInt(Integer::intValue)
    .sum();

// Good use case: CPU-intensive operations
List<String> names = Arrays.asList("Alice", "Bob", "Charlie", /*...1000s*/);

List<String> processed = names.parallelStream()
    .map(name -> expensiveCpuOperation(name))  // CPU-bound
    .collect(Collectors.toList());

// Bad use case: I/O operations (sequential is better)
List<User> users = ids.parallelStream()
    .map(id -> database.findById(id))  // I/O bound - BAD!
    .collect(Collectors.toList());

// Order issues with parallel
List<Integer> ordered = Arrays.asList(1, 2, 3, 4, 5);

// Sequential maintains order
ordered.stream()
    .forEach(System.out::print);  // 12345

// Parallel may not maintain order
ordered.parallelStream()
    .forEach(System.out::print);  // 31524 (unpredictable)

// Use forEachOrdered to maintain order
ordered.parallelStream()
    .forEachOrdered(System.out::print);  // 12345

// Thread safety issues
List<Integer> list = new ArrayList<>();
IntStream.range(0, 1000).parallel()
    .forEach(list::add);  // RACE CONDITION!

// Safe version
List<Integer> safe = IntStream.range(0, 1000)
    .parallel()
    .boxed()
    .collect(Collectors.toList());

// Custom pool (advanced)
ForkJoinPool customPool = new ForkJoinPool(4);
customPool.submit(() ->
    numbers.parallelStream()
        .map(n -> n * 2)
        .collect(Collectors.toList())
).get();

// When to use parallel streams:
// ✓ Large datasets (10,000+ elements)
// ✓ CPU-intensive operations
// ✓ Independent operations (no shared state)
// ✗ Small datasets (overhead > benefit)
// ✗ I/O operations
// ✗ Order-sensitive operations
// ✗ Shared mutable state`,
      language: 'java'
    },
    topic: 'java8',
    difficulty: 'senior',
    tags: ['parallel-streams', 'concurrency', 'performance', 'java8'],    commonPitfalls: ['Using parallel for small datasets (slower due to overhead)', 'Shared mutable state causes race conditions', 'I/O operations (sequential is better)', 'Assuming parallel is always faster'],
    realWorldUse: 'Image processing, data analytics on large datasets, batch processing, scientific computations, map-reduce operations.'
  },
  {
    id: 'java8-017',
    question: "Explain Stream short-circuiting operations (findFirst, findAny, anyMatch, allMatch, noneMatch).",
    answer: "Short-circuiting operations can terminate stream processing early without examining all elements. Terminal operations: findFirst() (first element), findAny() (any element), anyMatch() (any matches), allMatch() (all match), noneMatch() (none match). Improve performance by avoiding unnecessary processing.",
    explanation: "Short-circuiting is crucial for infinite streams and performance. Operations stop as soon as result is determined. Returns Optional for find operations, boolean for match operations.",
    translations: {
      tr: {
        question: "groupingBy() collector nasıl çalışır?",
        answer: "groupingBy() elemanları anahtara göre gruplar. Map<K, List<V>> döndürür. Downstream collector ile customize edilebilir. Çoklu seviye gruplama mümkün.",
        explanation: "groupingBy SQL GROUP BY'a benzer - veri gruplama için güçlü."
      }
    },
    codeExample: {
      code: `List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// findFirst - returns first element (Optional)
Optional<Integer> first = numbers.stream()
    .filter(n -> n > 5)
    .findFirst();
System.out.println(first.get());  // 6

// findAny - returns any element (useful in parallel)
Optional<Integer> any = numbers.parallelStream()
    .filter(n -> n > 5)
    .findAny();
System.out.println(any.get());  // Could be 6, 7, 8, 9, or 10

// anyMatch - true if any element matches
boolean hasEven = numbers.stream()
    .anyMatch(n -> n % 2 == 0);
System.out.println(hasEven);  // true (stops at 2)

// allMatch - true if all elements match
boolean allPositive = numbers.stream()
    .allMatch(n -> n > 0);
System.out.println(allPositive);  // true

boolean allEven = numbers.stream()
    .allMatch(n -> n % 2 == 0);
System.out.println(allEven);  // false (stops at 1)

// noneMatch - true if no elements match
boolean noNegative = numbers.stream()
    .noneMatch(n -> n < 0);
System.out.println(noNegative);  // true

// Short-circuiting saves processing
numbers.stream()
    .peek(n -> System.out.println("Processing: " + n))
    .anyMatch(n -> n > 5);
// Output: Processing 1, 2, 3, 4, 5, 6
// Stops at 6 (found match)

// Infinite stream requires short-circuiting
Optional<Integer> firstEven = Stream.iterate(1, n -> n + 1)
    .filter(n -> n % 2 == 0)
    .findFirst();
System.out.println(firstEven.get());  // 2

// Without short-circuit, would run forever!
// Stream.iterate(1, n -> n + 1)
//     .forEach(System.out::println);  // INFINITE!

// Practical: Search operations
class User {
    String name;
    boolean isAdmin;
}

// Find first admin
Optional<User> admin = users.stream()
    .filter(User::isAdmin)
    .findFirst();

// Check if any user is admin
boolean hasAdmin = users.stream()
    .anyMatch(User::isAdmin);

// Check all users verified
boolean allVerified = users.stream()
    .allMatch(User::isVerified);

// Complex example
List<String> words = Arrays.asList("apple", "banana", "cherry");

boolean anyLongWord = words.stream()
    .peek(s -> System.out.println("Checking: " + s))
    .anyMatch(s -> s.length() > 6);
// Output: Checking: apple, Checking: banana
// Stops at "banana" (length 6 > 6 is false, but continues)
// Actually checks all until finds match or reaches end

// Combining with limit (also short-circuits)
List<Integer> firstFiveEvens = Stream.iterate(1, n -> n + 1)
    .filter(n -> n % 2 == 0)
    .limit(5)  // Short-circuit after 5 elements
    .collect(Collectors.toList());
// Result: [2, 4, 6, 8, 10]`,
      language: 'java'
    },
    topic: 'java8',
    difficulty: 'mid',
    tags: ['stream-api', 'short-circuit', 'findFirst', 'anyMatch', 'performance'],    commonPitfalls: ['Using forEach instead of anyMatch for existence check', 'Not handling Optional return from find operations', 'Assuming findAny returns specific element'],
    realWorldUse: 'Search operations, validation checks, existence checks, early termination of expensive operations, infinite stream processing.'
  },
  {
    id: 'java8-018',
    question: "Explain Stream intermediate operations: peek, distinct, sorted, limit, skip.",
    answer: "peek() for debugging (executes action without modifying stream). distinct() removes duplicates. sorted() sorts elements (natural or custom order). limit(n) takes first n elements. skip(n) skips first n elements. All are lazy except sorted (stateful).",
    explanation: "peek is for side effects (logging, debugging). distinct uses equals/hashCode. sorted is stateful (needs to see all elements). limit/skip are short-circuiting. All return new stream (immutable).",
    translations: {
      tr: {
        question: "StringJoiner ve joining() nedir?",
        answer: "StringJoiner String'leri ayırıcıyla birleştirir. Prefix/suffix destekler. joining() collector stream'de kullanılır. Delimiter, prefix, suffix parametreleri.",
        explanation: "StringJoiner CSV, vb. formatlar için temiz String birleştirme sağlar."
      }
    },
    codeExample: {
      code: `import java.util.stream.*;

List<Integer> numbers = Arrays.asList(5, 2, 8, 2, 9, 1, 5, 3);

// peek - debugging without modifying stream
List<Integer> result = numbers.stream()
    .peek(n -> System.out.println("Original: " + n))
    .filter(n -> n > 3)
    .peek(n -> System.out.println("After filter: " + n))
    .map(n -> n * 2)
    .peek(n -> System.out.println("After map: " + n))
    .collect(Collectors.toList());

// distinct - remove duplicates (uses equals/hashCode)
List<Integer> unique = numbers.stream()
    .distinct()
    .collect(Collectors.toList());
// Result: [5, 2, 8, 9, 1, 3]

List<String> names = Arrays.asList("Alice", "alice", "Bob", "ALICE");
List<String> distinctNames = names.stream()
    .map(String::toLowerCase)
    .distinct()
    .collect(Collectors.toList());
// Result: [alice, bob]

// sorted - natural order
List<Integer> sorted = numbers.stream()
    .sorted()
    .collect(Collectors.toList());
// Result: [1, 2, 2, 3, 5, 5, 8, 9]

// sorted - custom comparator
List<Integer> sortedDesc = numbers.stream()
    .sorted(Comparator.reverseOrder())
    .collect(Collectors.toList());
// Result: [9, 8, 5, 5, 3, 2, 2, 1]

// sorted with objects
class Person {
    String name;
    int age;
}

List<Person> sortedByAge = people.stream()
    .sorted(Comparator.comparing(Person::getAge))
    .collect(Collectors.toList());

// Multiple sorting criteria
List<Person> sorted2 = people.stream()
    .sorted(Comparator.comparing(Person::getAge)
        .thenComparing(Person::getName))
    .collect(Collectors.toList());

// limit - take first n elements (short-circuiting)
List<Integer> firstThree = numbers.stream()
    .limit(3)
    .collect(Collectors.toList());
// Result: [5, 2, 8]

// Infinite stream with limit
List<Integer> first10Evens = Stream.iterate(0, n -> n + 2)
    .limit(10)
    .collect(Collectors.toList());
// Result: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]

// skip - skip first n elements
List<Integer> afterTwo = numbers.stream()
    .skip(2)
    .collect(Collectors.toList());
// Result: [8, 2, 9, 1, 5, 3]

// Pagination with skip and limit
int pageSize = 3;
int pageNumber = 1;  // 0-indexed

List<Integer> page = numbers.stream()
    .skip(pageNumber * pageSize)
    .limit(pageSize)
    .collect(Collectors.toList());

// Combining operations
List<Integer> complex = numbers.stream()
    .distinct()           // Remove duplicates
    .sorted()             // Sort
    .skip(2)              // Skip first 2
    .limit(3)             // Take next 3
    .peek(System.out::println)  // Debug
    .collect(Collectors.toList());

// Practical: Top N after filtering
List<Product> topExpensive = products.stream()
    .filter(p -> p.getCategory().equals("Electronics"))
    .sorted(Comparator.comparing(Product::getPrice).reversed())
    .limit(10)
    .collect(Collectors.toList());

// dropWhile and takeWhile (Java 9+)
List<Integer> nums = Arrays.asList(1, 2, 3, 4, 5, 4, 3, 2, 1);

// takeWhile - take while condition true
List<Integer> taken = nums.stream()
    .takeWhile(n -> n < 4)
    .collect(Collectors.toList());
// Result: [1, 2, 3]

// dropWhile - drop while condition true
List<Integer> dropped = nums.stream()
    .dropWhile(n -> n < 4)
    .collect(Collectors.toList());
// Result: [4, 5, 4, 3, 2, 1]`,
      language: 'java'
    },
    topic: 'java8',
    difficulty: 'mid',
    tags: ['stream-api', 'peek', 'distinct', 'sorted', 'limit', 'skip'],    commonPitfalls: ['Using peek for business logic (use map instead)', 'sorted on large streams (memory intensive)', 'Not considering order with distinct', 'Skip/limit on unordered streams'],
    realWorldUse: 'Pagination, debugging streams, removing duplicates, top-N queries, ranking systems, data processing pipelines.'
  },

  // Generics
  {
    id: 'generics-001',
    question: "What are Generics in Java and why are they important?",
    answer: "Generics enable types (classes and methods) to be parameters when defining classes, interfaces, and methods. They provide compile-time type safety by allowing you to detect errors at compile time rather than runtime. Introduced in Java 5.",
    explanation: "Generics eliminate the need for casting, provide stronger type checking at compile time, enable generic algorithms, and make code more reusable. Without generics, you'd need unsafe casts and could get ClassCastException at runtime.",
    translations: {
      tr: {
        question: "Generic'ler nedir ve neden kullanılır?",
        answer: "Generic'ler type-safe veri yapıları sağlar. Tip parametreleri (<T>) ile çalışır. Derleme zamanı tip kontrolü. Cast gerekmez. Code reuse. Collection'larda yaygın.",
        explanation: "Generic'ler ClassCastException'ı önler ve kodu type-safe yapar."
      }
    },
    codeExample: {
      code: `// Before generics (Java 1.4)
List list = new ArrayList();
list.add("Hello");
list.add(123);  // No compile error!
String s = (String) list.get(1);  // Runtime ClassCastException!

// With generics (Java 5+)
List<String> list = new ArrayList<>();
list.add("Hello");
// list.add(123);  // Compile error! Type safety
String s = list.get(0);  // No cast needed

// Generic class
class Box<T> {
    private T value;

    public void set(T value) {
        this.value = value;
    }

    public T get() {
        return value;
    }
}

Box<String> stringBox = new Box<>();
stringBox.set("Hello");
String value = stringBox.get();  // No cast needed

Box<Integer> intBox = new Box<>();
intBox.set(42);
Integer num = intBox.get();

// Multiple type parameters
class Pair<K, V> {
    private K key;
    private V value;

    public Pair(K key, V value) {
        this.key = key;
        this.value = value;
    }

    public K getKey() { return key; }
    public V getValue() { return value; }
}

Pair<String, Integer> pair = new Pair<>("Age", 25);

// Generic interface
interface Repository<T> {
    void save(T entity);
    T findById(Long id);
    List<T> findAll();
}

class UserRepository implements Repository<User> {
    @Override
    public void save(User entity) { }

    @Override
    public User findById(Long id) { return null; }

    @Override
    public List<User> findAll() { return null; }
}`,
      language: 'java'
    },
    topic: 'generics',
    difficulty: 'junior',
    tags: ['generics', 'type-safety', 'compile-time'],    commonPitfalls: ['Using raw types (lose type safety)', 'Cannot create generic arrays', 'Cannot use primitives (use wrapper classes)'],
    realWorldUse: 'Collections framework (List<T>, Map<K,V>), DAO/Repository pattern, generic utility classes, type-safe APIs.'
  },
  {
    id: 'generics-002',
    question: "How do you create a generic method in Java?",
    answer: "Generic methods have type parameters declared before the return type. Syntax: <T> ReturnType methodName(T param). The type parameter scope is limited to that method. Generic methods can be in both generic and non-generic classes.",
    explanation: "Type parameters are inferred from arguments when calling the method, but can be explicitly specified. Generic methods provide type safety for individual methods without making entire class generic.",
    translations: {
      tr: {
        question: "Bounded type parameter nedir?",
        answer: "Bounded type parameter tip parametresini kısıtlar. Upper bound: <T extends Number> - T Number veya alt sınıfı. Lower bound: <T super Integer> - T Integer veya üst sınıfı (wildcard'ta).",
        explanation: "Bounded type belirli metodlara/özelliklere erişim sağlar."
      }
    },
    codeExample: {
      code: `// Generic method in non-generic class
public class Utils {
    // Generic method with single type parameter
    public static <T> void printArray(T[] array) {
        for (T element : array) {
            System.out.println(element);
        }
    }

    // Generic method with return type
    public static <T> T getFirst(List<T> list) {
        if (list.isEmpty()) {
            return null;
        }
        return list.get(0);
    }

    // Multiple type parameters
    public static <K, V> Map<K, V> createMap(K key, V value) {
        Map<K, V> map = new HashMap<>();
        map.put(key, value);
        return map;
    }
}

// Usage
String[] strings = {"a", "b", "c"};
Utils.printArray(strings);  // Type inferred

Integer[] numbers = {1, 2, 3};
Utils.printArray(numbers);  // Type inferred

// Explicit type specification
Utils.<String>printArray(strings);

List<String> names = Arrays.asList("Alice", "Bob");
String first = Utils.getFirst(names);

Map<String, Integer> map = Utils.createMap("Age", 25);

// Generic method in generic class
class Container<T> {
    private T value;

    // Non-generic method using class type parameter
    public T getValue() {
        return value;
    }

    // Generic method with different type parameter
    public <U> void printBoth(U other) {
        System.out.println(value);  // T
        System.out.println(other);  // U
    }

    // Generic method can have same name as class parameter
    public <T> void printType(T param) {
        // This T shadows the class T
        System.out.println(param);
    }
}

// Bounded generic method
public static <T extends Comparable<T>> T findMax(T a, T b) {
    return a.compareTo(b) > 0 ? a : b;
}

Integer max = findMax(5, 10);  // 10
String maxStr = findMax("apple", "banana");  // "banana"`,
      language: 'java'
    },
    topic: 'generics',
    difficulty: 'mid',
    tags: ['generics', 'generic-methods', 'type-parameters'],    commonPitfalls: ['Forgetting <T> before return type', 'Name collision between class and method type parameters', 'Not understanding type inference'],
    realWorldUse: 'Utility methods (Arrays.asList, Collections.sort), factory methods, conversion methods, comparison methods.'
  },
  {
    id: 'generics-003',
    question: "What are bounded type parameters in generics?",
    answer: "Bounded type parameters restrict the types that can be used as type arguments. Upper bound uses \"extends\" (T extends UpperBound), allowing only subtypes of UpperBound. Multiple bounds use & (T extends Class & Interface1 & Interface2). Enables calling methods defined in the bound.",
    explanation: "Bounds provide compile-time guarantees about available methods. Upper bounds use \"extends\" for both classes and interfaces. You can have one class bound and multiple interface bounds. Class must come first if present.",
    translations: {
      tr: {
        question: "Wildcard (?) nedir?",
        answer: "Wildcard bilinmeyen tipi temsil eder. Üç tip: Unbounded (?), Upper bounded (? extends T), Lower bounded (? super T). Read/write kısıtlamaları. PECS prensibi.",
        explanation: "Wildcard generic type esnekliği sağlar."
      }
    },
    codeExample: {
      code: `// Upper bound - single bound
class NumberBox<T extends Number> {
    private T value;

    public NumberBox(T value) {
        this.value = value;
    }

    public double getDoubleValue() {
        return value.doubleValue();  // Can call Number methods
    }
}

NumberBox<Integer> intBox = new NumberBox<>(42);
NumberBox<Double> doubleBox = new NumberBox<>(3.14);
// NumberBox<String> error = new NumberBox<>("text");  // Compile error!

// Multiple bounds (class + interfaces)
class ComparableBox<T extends Number & Comparable<T>> {
    private T value;

    public T max(T other) {
        return value.compareTo(other) > 0 ? value : other;
    }
}

// Bounded generic method
public static <T extends Comparable<T>> T findMin(List<T> list) {
    if (list.isEmpty()) {
        throw new IllegalArgumentException("Empty list");
    }

    T min = list.get(0);
    for (T element : list) {
        if (element.compareTo(min) < 0) {
            min = element;
        }
    }
    return min;
}

List<Integer> numbers = Arrays.asList(5, 2, 8, 1, 9);
Integer min = findMin(numbers);  // 1

// Multiple bounds in method
public static <T extends Number & Comparable<T>> boolean isGreater(T a, T b) {
    return a.compareTo(b) > 0 && a.doubleValue() > b.doubleValue();
}

// Recursive type bound (common pattern)
class Person implements Comparable<Person> {
    String name;
    int age;

    @Override
    public int compareTo(Person other) {
        return this.age - other.age;
    }
}

public static <T extends Comparable<T>> void sort(List<T> list) {
    Collections.sort(list);
}

// Builder pattern with recursive bound
class Builder<T extends Builder<T>> {
    public T withName(String name) {
        // set name
        return (T) this;
    }
}

// Interface bound
interface Drawable {
    void draw();
}

class Canvas<T extends Drawable> {
    public void render(T item) {
        item.draw();  // Can call Drawable methods
    }
}`,
      language: 'java'
    },
    topic: 'generics',
    difficulty: 'mid',
    tags: ['generics', 'bounded-types', 'type-bounds', 'extends'],    commonPitfalls: ['Using "super" for upper bound (only extends works)', 'Wrong order of bounds (class must be first)', 'Thinking extends means inheritance (it means "is a")'],
    realWorldUse: 'Sorting algorithms, numeric computations, builder patterns, DAO layers, comparator utilities.'
  },
  {
    id: 'generics-004',
    question: "Explain wildcards in generics (?, ? extends T, ? super T).",
    answer: "Wildcards represent unknown types. Unbounded wildcard (?) accepts any type. Upper bounded (? extends T) accepts T and its subtypes (covariant). Lower bounded (? super T) accepts T and its supertypes (contravariant). Used for reading (extends) and writing (super).",
    explanation: "PECS principle: Producer Extends, Consumer Super. Use ? extends when reading from structure (producer). Use ? super when writing to structure (consumer). Unbounded ? for methods that don't depend on type parameter.",
    translations: {
      tr: {
        question: "PECS prensibi nedir?",
        answer: "PECS: Producer Extends, Consumer Super. Producer (read): ? extends T. Consumer (write): ? super T. Esneklik için wildcard kullanım kuralı.",
        explanation: "PECS wildcard seçiminde yol gösterir - okuma vs yazma."
      }
    },
    codeExample: {
      code: `// Unbounded wildcard (?)
public static void printList(List<?> list) {
    for (Object item : list) {
        System.out.println(item);
    }
    // Cannot add to list (except null)
    // list.add("String");  // Compile error
}

printList(Arrays.asList(1, 2, 3));
printList(Arrays.asList("a", "b", "c"));

// Upper bounded wildcard (? extends T) - READING
public static double sumNumbers(List<? extends Number> list) {
    double sum = 0;
    for (Number n : list) {
        sum += n.doubleValue();  // Can READ as Number
    }
    // Cannot WRITE (except null)
    // list.add(5);  // Compile error
    // list.add(5.0);  // Compile error
    return sum;
}

List<Integer> ints = Arrays.asList(1, 2, 3);
List<Double> doubles = Arrays.asList(1.5, 2.5);
double sum1 = sumNumbers(ints);     // Works
double sum2 = sumNumbers(doubles);  // Works

// Lower bounded wildcard (? super T) - WRITING
public static void addIntegers(List<? super Integer> list) {
    list.add(1);
    list.add(2);
    list.add(3);  // Can WRITE Integer

    // Can READ but only as Object
    Object obj = list.get(0);
    // Integer i = list.get(0);  // Compile error
}

List<Number> numbers = new ArrayList<>();
List<Object> objects = new ArrayList<>();
addIntegers(numbers);  // Works
addIntegers(objects);  // Works
// List<Integer> ints2 = new ArrayList<>();
// addIntegers would work, but you'd typically use exact type

// PECS: Producer Extends, Consumer Super
class Collections {
    // Producer (reading from src) - use extends
    public static <T> void copy(
        List<? super T> dest,      // Consumer - can write T
        List<? extends T> src      // Producer - can read T
    ) {
        for (T item : src) {       // Reading from src
            dest.add(item);        // Writing to dest
        }
    }
}

List<Number> dest = new ArrayList<>();
List<Integer> src = Arrays.asList(1, 2, 3);
Collections.copy(dest, src);  // Works!

// Practical example: Comparator
class Animal { }
class Dog extends Animal { }
class Cat extends Animal { }

// Can use Dog comparator for any Animal supertype
Comparator<? super Dog> comparator;

// Get methods - use extends (covariant)
public Animal getAnimal(List<? extends Animal> animals) {
    return animals.get(0);
}

List<Dog> dogs = new ArrayList<>();
Animal animal = getAnimal(dogs);  // Works

// Add methods - use super (contravariant)
public void addDog(List<? super Dog> animals) {
    animals.add(new Dog());
}

List<Animal> animals = new ArrayList<>();
addDog(animals);  // Works`,
      language: 'java'
    },
    topic: 'generics',
    difficulty: 'senior',
    tags: ['generics', 'wildcards', 'pecs', 'covariance', 'contravariance'],    commonPitfalls: ['Confusing extends vs super usage', 'Trying to add to extends wildcard', 'Trying to read specific type from super wildcard', 'Overusing unbounded wildcards'],
    realWorldUse: 'Collections API (addAll, copy), Stream API, DAO methods, comparators, generic utility methods.'
  },
  {
    id: 'generics-005',
    question: "What is type erasure in Java generics?",
    answer: "Type erasure is the process by which the Java compiler removes all generic type information during compilation, replacing type parameters with their bounds (or Object if unbounded). This ensures backward compatibility with pre-Java 5 code but causes limitations.",
    explanation: "At runtime, all generic types are erased to their raw types. List<String> and List<Integer> both become List. Bounds are replaced with the bound type. This enables generics to work with legacy code but prevents certain operations like instanceof with type parameters.",
    translations: {
      tr: {
        question: "Type erasure nedir?",
        answer: "Type erasure generic tip bilgisini çalışma zamanında siler. Bytecode'da raw type kalır. Geriye uyumluluk için. Generic tip bilgisi sadece derleme zamanında.",
        explanation: "Type erasure generic'lerin çalışma zamanı limitasyonunu açıklar."
      }
    },
    codeExample: {
      code: `// Source code with generics
class Box<T> {
    private T value;

    public void set(T value) {
        this.value = value;
    }

    public T get() {
        return value;
    }
}

// After type erasure (bytecode)
class Box {
    private Object value;  // T erased to Object

    public void set(Object value) {
        this.value = value;
    }

    public Object get() {
        return value;
    }
}

// With bounded type parameter
class NumberBox<T extends Number> {
    private T value;
    public T getValue() { return value; }
}

// After erasure - replaced with bound
class NumberBox {
    private Number value;  // T erased to Number
    public Number getValue() { return value; }
}

// Bridge methods for type erasure
interface Comparable<T> {
    int compareTo(T other);
}

class MyClass implements Comparable<MyClass> {
    @Override
    public int compareTo(MyClass other) {
        return 0;
    }
}

// Compiler generates bridge method after erasure
// public int compareTo(Object other) {
//     return compareTo((MyClass) other);
// }

// Type erasure limitations

// 1. Cannot use instanceof with type parameter
public <T> void check(Object obj) {
    // if (obj instanceof T) { }  // Compile error
    // if (obj instanceof List<String>) { }  // Compile error

    // Can do unchecked instanceof
    if (obj instanceof List<?>) {  // OK
        List<?> list = (List<?>) obj;
    }
}

// 2. Cannot create instance of type parameter
public <T> T create() {
    // return new T();  // Compile error

    // Workaround: use Class object
    public <T> T create(Class<T> clazz) throws Exception {
        return clazz.newInstance();
    }
}

// 3. Cannot create generic array
public <T> void createArray() {
    // T[] array = new T[10];  // Compile error
    // List<String>[] array = new List<String>[10];  // Compile error

    // Workaround 1: unchecked cast
    T[] array = (T[]) new Object[10];

    // Workaround 2: use List instead
    List<T> list = new ArrayList<>();
}

// 4. Static context cannot reference type parameters
class Box<T> {
    // private static T instance;  // Compile error
    // public static T getInstance() { }  // Compile error

    // Static generic method is OK
    public static <U> Box<U> create() {
        return new Box<>();
    }
}

// 5. Cannot overload with different generic types
class Processor {
    // These become identical after erasure
    // public void process(List<String> list) { }
    // public void process(List<Integer> list) { }  // Compile error
}

// Heap pollution example
List<String> strings = new ArrayList<>();
List raw = strings;  // Raw type - loses type safety
raw.add(42);  // No compile error (raw type)
// String s = strings.get(0);  // Runtime ClassCastException!`,
      language: 'java'
    },
    topic: 'generics',
    difficulty: 'senior',
    tags: ['generics', 'type-erasure', 'runtime', 'limitations'],    commonPitfalls: ['Trying to use instanceof with type parameters', 'Creating generic arrays directly', 'Using static fields/methods with type parameters', 'Not understanding heap pollution'],
    realWorldUse: 'Understanding generics limitations, avoiding runtime issues, properly using reflection with generics, library design.'
  },
  {
    id: 'generics-006',
    question: "What are the restrictions and limitations of generics in Java?",
    answer: "Key limitations: 1) Cannot instantiate type parameters (new T()), 2) Cannot create generic arrays, 3) Cannot use primitives as type arguments, 4) Cannot use instanceof with parameterized types, 5) Cannot declare static fields of type parameter, 6) Cannot catch or throw generic exceptions.",
    explanation: "These limitations exist due to type erasure. At runtime, generic type information is lost, making operations like new T() or instanceof T impossible. These constraints ensure type safety and backward compatibility.",
    translations: {
      tr: {
        question: "Generic metod nasıl yazılır?",
        answer: "Generic metod dönüş tipinden önce <T> bildirir. Sınıf generic olmasa da metod generic olabilir. Type parameter metod seviyesinde. Static generic metodlar mümkün.",
        explanation: "Generic metodlar utility metodlar için kullanışlıdır."
      }
    },
    codeExample: {
      code: `// 1. Cannot instantiate type parameters
class Factory<T> {
    public T create() {
        // return new T();  // ERROR: Cannot instantiate T

        // Workaround: Pass Class<T>
        public T create(Class<T> clazz) throws Exception {
            return clazz.getDeclaredConstructor().newInstance();
        }

        // Workaround: Use Supplier
        public T create(Supplier<T> supplier) {
            return supplier.get();
        }
    }
}

// 2. Cannot create generic arrays
public <T> void arrayExample() {
    // T[] array = new T[10];  // ERROR
    // List<String>[] lists = new List<String>[10];  // ERROR

    // Workaround: use Object[] and cast
    @SuppressWarnings("unchecked")
    T[] array = (T[]) new Object[10];

    // Better: use List instead of array
    List<T> list = new ArrayList<>();
}

// 3. Cannot use primitives
// List<int> numbers;  // ERROR: must use Integer
List<Integer> numbers = new ArrayList<>();

// 4. Cannot use instanceof with parameterized types
public void checkType(Object obj) {
    // if (obj instanceof List<String>) { }  // ERROR

    // Can use unbounded wildcard
    if (obj instanceof List<?>) {
        List<?> list = (List<?>) obj;
    }
}

// 5. Cannot declare static fields of type parameter
class Box<T> {
    // private static T instance;  // ERROR
    private T value;  // OK - instance field

    // Cannot use T in static method
    // public static T getValue() { }  // ERROR

    // But static generic method is OK
    public static <U> Box<U> create(U value) {
        return new Box<>();
    }
}

// 6. Cannot catch or throw generic exceptions
class GenericException<T> extends Exception {  // OK to extend
    private T data;
}

public <T extends Exception> void method() {
    try {
        // code
    // } catch (T e) {  // ERROR: Cannot catch T
    } catch (Exception e) {
        // OK
    }
}

// Cannot throw generic exception
// public <T extends Exception> void test() throws T { }  // ERROR

// 7. Cannot overload with different generic types (erasure conflict)
class Processor {
    // Both erase to process(List)
    // public void process(List<String> list) { }
    // public void process(List<Integer> list) { }  // ERROR

    // Workaround: different method names
    public void processStrings(List<String> list) { }
    public void processIntegers(List<Integer> list) { }
}

// 8. Cannot have two interface implementations with different type args
// class MyClass implements Comparable<String>, Comparable<Integer> { }  // ERROR

// 9. Generic class cannot extend Throwable
// class MyException<T> extends Throwable { }  // ERROR
class MyException extends Exception {  // OK
    private String message;
}

// Valid patterns

// Generic method with Class parameter
public static <T> List<T> createList(Class<T> clazz, int size) {
    List<T> list = new ArrayList<>();
    for (int i = 0; i < size; i++) {
        try {
            list.add(clazz.getDeclaredConstructor().newInstance());
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
    return list;
}

// Using Supplier for object creation
public static <T> T create(Supplier<T> factory) {
    return factory.get();
}

String str = create(() -> new String("Hello"));
List<String> list = create(ArrayList::new);`,
      language: 'java'
    },
    topic: 'generics',
    difficulty: 'senior',
    tags: ['generics', 'limitations', 'restrictions', 'type-erasure'],    commonPitfalls: ['Trying to new T()', 'Creating generic arrays', 'Using primitives with generics', 'Static generic fields'],
    realWorldUse: 'Understanding framework design choices, working around limitations, proper generic API design, reflection-based factories.'
  },
  {
    id: 'generics-007',
    question: "Explain the PECS principle (Producer Extends Consumer Super).",
    answer: "PECS helps choose between ? extends and ? super wildcards. Use ? extends when you only GET values (producer). Use ? super when you only PUT values (consumer). Producers produce (extend), Consumers consume (super).",
    explanation: "extends enables reading (covariance) - safe to read as supertype. super enables writing (contravariance) - safe to write as subtype. This principle maximizes API flexibility while maintaining type safety.",
    translations: {
      tr: {
        question: "Raw type nedir ve neden kaçınılmalı?",
        answer: "Raw type tip parametresi olmayan generic type'dır (List yerine List<T>). Tip güvenliği kaybeder. Legacy kod uyumluluğu için var. Modern kodda kullanmayın.",
        explanation: "Raw type generic'lerin faydalarını kaybeder - type safety yok."
      }
    },
    codeExample: {
      code: `// PECS: Producer Extends, Consumer Super

class Animal { String name; }
class Dog extends Animal { }
class Cat extends Animal { }

// Producer Extends - READ from collection
// Use ? extends when the collection PRODUCES values (you read from it)
public static void printAnimals(List<? extends Animal> animals) {
    for (Animal animal : animals) {  // Can READ as Animal
        System.out.println(animal.name);
    }

    // Cannot add (except null)
    // animals.add(new Dog());  // ERROR
    // animals.add(new Animal());  // ERROR
    animals.add(null);  // Only null allowed
}

List<Dog> dogs = Arrays.asList(new Dog(), new Dog());
List<Cat> cats = Arrays.asList(new Cat());
printAnimals(dogs);  // Works - Dog extends Animal
printAnimals(cats);  // Works - Cat extends Animal

// Consumer Super - WRITE to collection
// Use ? super when the collection CONSUMES values (you write to it)
public static void addDogs(List<? super Dog> animals) {
    animals.add(new Dog());  // Can WRITE Dog
    animals.add(new Dog());

    // Can READ but only as Object
    Object obj = animals.get(0);
    // Dog dog = animals.get(0);  // ERROR
    // Animal animal = animals.get(0);  // ERROR
}

List<Animal> animals = new ArrayList<>();
List<Object> objects = new ArrayList<>();
addDogs(animals);  // Works - Animal is super of Dog
addDogs(objects);  // Works - Object is super of Dog

// Real example: Collections.copy
public static <T> void copy(
    List<? super T> dest,      // Consumer - writes T
    List<? extends T> src      // Producer - reads T
) {
    for (int i = 0; i < src.size(); i++) {
        dest.add(src.get(i));  // Read from src, write to dest
    }
}

List<Number> dest = new ArrayList<>();
List<Integer> src = Arrays.asList(1, 2, 3);
copy(dest, src);  // Integer extends Number

// Example: Stack operations
interface Stack<E> {
    void push(E element);
    E pop();

    // Consumer - writes E elements to stack
    void pushAll(Iterable<? extends E> src);

    // Producer - reads from stack and writes to collection
    void popAll(Collection<? super E> dst);
}

class StackImpl<E> implements Stack<E> {
    private List<E> elements = new ArrayList<>();

    public void push(E element) {
        elements.add(element);
    }

    public E pop() {
        return elements.remove(elements.size() - 1);
    }

    // src PRODUCES elements (extends)
    public void pushAll(Iterable<? extends E> src) {
        for (E e : src) {
            push(e);  // Reading from src
        }
    }

    // dst CONSUMES elements (super)
    public void popAll(Collection<? super E> dst) {
        while (!elements.isEmpty()) {
            dst.add(pop());  // Writing to dst
        }
    }
}

// Usage
Stack<Number> stack = new StackImpl<>();
List<Integer> ints = Arrays.asList(1, 2, 3);
stack.pushAll(ints);  // Integer extends Number

List<Object> objects = new ArrayList<>();
stack.popAll(objects);  // Object is super of Number

// Comparator example
class Collections {
    public static <T> void sort(
        List<T> list,
        Comparator<? super T> comparator  // Consumer of T
    ) {
        // comparator consumes T objects for comparison
    }
}

List<Dog> dogs = new ArrayList<>();
Comparator<Animal> animalComparator =
    Comparator.comparing(a -> a.name);
Collections.sort(dogs, animalComparator);  // Works!

// Remember:
// PECS - Producer Extends, Consumer Super
// extends = covariant = output = reading = get
// super = contravariant = input = writing = add`,
      language: 'java'
    },
    topic: 'generics',
    difficulty: 'senior',
    tags: ['generics', 'pecs', 'wildcards', 'producer', 'consumer'],    commonPitfalls: ['Using extends when you need to add elements', 'Using super when you need to read specific type', 'Not applying PECS for maximum API flexibility'],
    realWorldUse: 'Collections API design, stream operations, builder patterns, repository methods, generic utility libraries.'
  },
  {
    id: 'generics-008',
    question: "How do you work with generic types and reflection in Java?",
    answer: "Use java.lang.reflect package with Type, ParameterizedType, TypeVariable, and GenericArrayType. At runtime, generic type info is erased, but you can access it through reflection on class signatures, method signatures, and field types. Cannot get type of local variables.",
    explanation: "While type erasure removes runtime type info from bytecode execution, the compiler stores generic type information in class metadata. Reflection APIs let you access this metadata for classes, methods, and fields, but not for local variables or type parameters during execution.",
    translations: {
      tr: {
        question: "Generic type birden fazla bound alabilir mi?",
        answer: "Evet, & ile multiple bound: <T extends Number & Comparable>. İlk bound sınıf veya interface, sonrakiler interface olmalı. T hem Number hem Comparable metodlarına erişir.",
        explanation: "Multiple bound zengin tip kısıtlaması sağlar."
      }
    },
    codeExample: {
      code: `import java.lang.reflect.*;

// Getting generic type information

class GenericClass<T extends Number> {
    private List<String> stringList;
    private Map<String, Integer> map;
    private T value;

    public void method(List<String> param) { }

    public <U extends Comparable<U>> U genericMethod(U param) {
        return param;
    }
}

// 1. Get field generic types
class ReflectionExample {
    public static void printFieldTypes(Class<?> clazz) throws Exception {
        for (Field field : clazz.getDeclaredFields()) {
            Type genericType = field.getGenericType();

            if (genericType instanceof ParameterizedType) {
                ParameterizedType pType = (ParameterizedType) genericType;

                System.out.println("Field: " + field.getName());
                System.out.println("Raw type: " + pType.getRawType());

                Type[] typeArgs = pType.getActualTypeArguments();
                System.out.println("Type arguments: " + Arrays.toString(typeArgs));
            }
        }
    }
}

// Output for GenericClass:
// Field: stringList
// Raw type: interface java.util.List
// Type arguments: [class java.lang.String]
//
// Field: map
// Raw type: interface java.util.Map
// Type arguments: [class java.lang.String, class java.lang.Integer]

// 2. Get class type parameters
TypeVariable<?>[] typeParams = GenericClass.class.getTypeParameters();
for (TypeVariable<?> typeParam : typeParams) {
    System.out.println("Type parameter: " + typeParam.getName());
    System.out.println("Bounds: " + Arrays.toString(typeParam.getBounds()));
}
// Output: Type parameter: T
//         Bounds: [class java.lang.Number]

// 3. Get method generic info
Method method = GenericClass.class.getMethod("genericMethod", Object.class);
TypeVariable<?>[] methodTypeParams = method.getTypeParameters();
Type returnType = method.getGenericReturnType();
Type[] paramTypes = method.getGenericParameterTypes();

// 4. Working around type erasure with TypeToken pattern
// (Inspired by Guava's TypeToken)
abstract class TypeToken<T> {
    private final Type type;

    protected TypeToken() {
        Type superclass = getClass().getGenericSuperclass();
        this.type = ((ParameterizedType) superclass)
            .getActualTypeArguments()[0];
    }

    public Type getType() {
        return type;
    }
}

// Usage
TypeToken<List<String>> token = new TypeToken<List<String>>() {};
Type type = token.getType();
System.out.println(type);  // java.util.List<java.lang.String>

// 5. Generic factory with reflection
public class GenericFactory {
    public static <T> T create(Class<T> clazz) {
        try {
            return clazz.getDeclaredConstructor().newInstance();
        } catch (Exception e) {
            throw new RuntimeException("Cannot create instance", e);
        }
    }

    // With constructor parameters
    public static <T> T create(Class<T> clazz, Object... args) {
        try {
            // Find matching constructor
            Class<?>[] paramTypes = Arrays.stream(args)
                .map(Object::getClass)
                .toArray(Class[]::new);

            Constructor<T> constructor = clazz.getConstructor(paramTypes);
            return constructor.newInstance(args);
        } catch (Exception e) {
            throw new RuntimeException("Cannot create instance", e);
        }
    }
}

// Usage
String str = GenericFactory.create(String.class);
List<String> list = GenericFactory.create(ArrayList.class);

// 6. Getting superclass generic type
class StringList extends ArrayList<String> { }

Type superclass = StringList.class.getGenericSuperclass();
if (superclass instanceof ParameterizedType) {
    ParameterizedType pType = (ParameterizedType) superclass;
    Type[] typeArgs = pType.getActualTypeArguments();
    System.out.println("Superclass type arg: " + typeArgs[0]);
    // Output: class java.lang.String
}

// 7. Practical example: Generic JSON deserializer
class JsonDeserializer {
    public <T> T fromJson(String json, Class<T> clazz) {
        // Deserialize to clazz
        return null;
    }

    // For generic types like List<User>
    public <T> T fromJson(String json, TypeToken<T> typeToken) {
        Type type = typeToken.getType();
        // Use type information for deserialization
        return null;
    }
}

// Usage
List<User> users = deserializer.fromJson(
    json,
    new TypeToken<List<User>>() {}
);`,
      language: 'java'
    },
    topic: 'generics',
    difficulty: 'senior',
    tags: ['generics', 'reflection', 'type-token', 'runtime'],    commonPitfalls: ['Expecting runtime type info for local variables', 'Not handling type erasure in reflection code', 'Forgetting type info only available in class signatures'],
    realWorldUse: 'JSON/XML serialization libraries (Gson, Jackson), dependency injection frameworks (Spring, Guice), ORM frameworks, generic factories.'
  },
  {
    id: 'generics-009',
    question: "What are some advanced generic patterns in Java?",
    answer: "Key patterns: 1) Recursive type bounds (Builder pattern), 2) Type tokens for reified generics, 3) Generic singleton pattern, 4) Self-bounding generics (fluent interfaces), 5) Phantom types for compile-time safety, 6) Generic visitor pattern.",
    explanation: "Advanced patterns work around type erasure limitations and enable powerful compile-time guarantees. These patterns are common in library design for type-safe APIs, fluent interfaces, and framework development.",
    translations: {
      tr: {
        question: "Generic ve array birlikte kullanılabilir mi?",
        answer: "Hayır, generic array oluşturulamaz: new T[10] veya new List<String>[10] yasak. Type erasure nedeniyle. Alternatif: List<T> veya Object[] sonra cast.",
        explanation: "Generic array kısıtlaması type erasure'dan kaynaklanır."
      }
    },
    codeExample: {
      code: `// 1. Recursive type bound (Self-bounded generics)
// Ensures subclass methods return correct subclass type
abstract class Builder<T extends Builder<T>> {
    protected abstract T self();

    public T withName(String name) {
        // Set name
        return self();
    }

    public T withAge(int age) {
        // Set age
        return self();
    }
}

class PersonBuilder extends Builder<PersonBuilder> {
    @Override
    protected PersonBuilder self() {
        return this;
    }

    public PersonBuilder withEmail(String email) {
        // Set email
        return this;
    }

    public Person build() {
        return new Person();
    }
}

// Usage - all methods return PersonBuilder
Person person = new PersonBuilder()
    .withName("John")
    .withAge(30)
    .withEmail("john@example.com")  // PersonBuilder method
    .build();

// 2. Enum singleton pattern with generics
abstract class EnumSingleton<E extends Enum<E> & EnumSingleton<E>> {
    // Singleton per enum constant
}

enum DatabaseConnection implements EnumSingleton<DatabaseConnection> {
    MYSQL, POSTGRESQL, MONGODB;

    public void connect() {
        // Connection logic
    }
}

// Usage
DatabaseConnection.MYSQL.connect();

// 3. Type Token pattern (Reified generics workaround)
class TypeSafeMap {
    private Map<Class<?>, Object> map = new HashMap<>();

    public <T> void put(Class<T> clazz, T value) {
        map.put(clazz, value);
    }

    public <T> T get(Class<T> clazz) {
        return clazz.cast(map.get(clazz));
    }
}

// Usage
TypeSafeMap tsMap = new TypeSafeMap();
tsMap.put(String.class, "Hello");
tsMap.put(Integer.class, 42);

String str = tsMap.get(String.class);  // Type-safe
Integer num = tsMap.get(Integer.class);

// 4. Phantom types (compile-time states)
class Money<Currency> {
    private double amount;

    private Money(double amount) {
        this.amount = amount;
    }

    public static <C> Money<C> of(double amount) {
        return new Money<>(amount);
    }

    // Can only add same currency
    public Money<Currency> add(Money<Currency> other) {
        return new Money<>(this.amount + other.amount);
    }
}

// Phantom type markers
class USD { }
class EUR { }

// Usage
Money<USD> usd1 = Money.of(100.0);
Money<USD> usd2 = Money.of(50.0);
Money<USD> total = usd1.add(usd2);  // OK

Money<EUR> eur = Money.of(100.0);
// Money<EUR> invalid = usd1.add(eur);  // Compile error!

// 5. Generic visitor pattern
interface Visitor<R> {
    R visitString(String value);
    R visitInteger(Integer value);
    R visitList(List<?> value);
}

interface Visitable {
    <R> R accept(Visitor<R> visitor);
}

class StringValue implements Visitable {
    private String value;

    @Override
    public <R> R accept(Visitor<R> visitor) {
        return visitor.visitString(value);
    }
}

// 6. Generic factory with method handles
class GenericFactory<T> {
    private final Supplier<T> constructor;

    public GenericFactory(Supplier<T> constructor) {
        this.constructor = constructor;
    }

    public T create() {
        return constructor.get();
    }

    public static <T> GenericFactory<T> of(Supplier<T> constructor) {
        return new GenericFactory<>(constructor);
    }
}

// Usage
GenericFactory<ArrayList<String>> factory =
    GenericFactory.of(ArrayList::new);
ArrayList<String> list = factory.create();

// 7. Covariant return types with generics
interface Animal<T extends Animal<T>> {
    T breed();
}

class Dog implements Animal<Dog> {
    @Override
    public Dog breed() {  // Returns Dog, not Animal
        return new Dog();
    }
}

class Cat implements Animal<Cat> {
    @Override
    public Cat breed() {  // Returns Cat, not Animal
        return new Cat();
    }
}`,
      language: 'java'
    },
    topic: 'generics',
    difficulty: 'senior',
    tags: ['generics', 'advanced-patterns', 'builder', 'phantom-types'],    commonPitfalls: ['Overcomplicating with unnecessary generics', 'Making APIs too abstract', 'Not documenting complex generic constraints'],
    realWorldUse: 'Builder APIs (Lombok), type-safe dependency injection, fluent APIs, domain-driven design, financial calculations with units.'
  },

  // Memory Management & JVM
  {
    id: 'jvm-001',
    question: "Explain the difference between Heap and Stack memory in Java.",
    answer: "Stack stores method frames, local variables, and method call information - LIFO structure, thread-specific, automatically cleaned. Heap stores objects and instance variables - shared among all threads, managed by garbage collector, larger but slower access. Stack is for method execution, heap is for object storage.",
    explanation: "Stack memory is fast, small, and automatically managed (scope-based). Heap is slower, larger, requires GC. Stack stores primitives and references; heap stores actual objects. Each thread has its own stack but shares the heap.",
    translations: {
      tr: {
        question: "JVM memory yapısı nedir?",
        answer: "JVM memory: 1) Heap (nesneler), 2) Stack (metod çağrıları, local değişkenler), 3) Method Area (sınıf metadata), 4) PC Register, 5) Native Method Stack.",
        explanation: "Her alanın farklı amacı ve lifecycle'ı vardır."
      }
    },
    codeExample: {
      code: `public class MemoryExample {
    // Class variable - stored in Heap (in object)
    private static int classVar = 100;

    // Instance variable - stored in Heap
    private int instanceVar;

    public void method(int param) {  // param - Stack
        // Local primitive - Stack
        int localVar = 10;

        // Reference - Stack, Object - Heap
        Person person = new Person("John");
        //  ↑ Stack      ↑ Heap

        // Array reference - Stack, Array object - Heap
        int[] array = new int[5];

        calculate(localVar);
    }

    public void calculate(int value) {
        // Each method call creates new stack frame
        int result = value * 2;
        // When method returns, stack frame is removed
    }
}

// STACK (per thread):
// - Method frames
// - Local variables (primitives)
// - Object references
// - Method parameters
// - Automatically cleaned when out of scope
// - StackOverflowError if too deep recursion

// HEAP (shared):
// - Objects
// - Instance variables
// - Arrays
// - Managed by Garbage Collector
// - OutOfMemoryError if too many objects

// Example: Stack vs Heap allocation
public void stackVsHeap() {
    int x = 10;              // Stack
    Integer y = 20;          // y ref on Stack, object on Heap
    Person p = new Person(); // p ref on Stack, Person object on Heap
    p.name = "Alice";        // name field in Heap (part of object)

    int[] arr = {1, 2, 3};   // arr ref on Stack, array on Heap
}

// Stack frame example:
// method1() calls method2() calls method3()
// Stack:
// +----------------+
// | method3 frame  | <- Current
// +----------------+
// | method2 frame  |
// +----------------+
// | method1 frame  |
// +----------------+
// | main frame     |
// +----------------+

// When method3 returns, its frame is popped

// Memory sizes:
// Stack: Small (typically 1MB per thread)
// Heap: Large (GBs, configured with -Xms, -Xmx)

// Passing by value vs reference:
public void passExample() {
    int x = 5;           // Stack
    changePrimitive(x);
    // x is still 5 (copy passed)

    Person p = new Person("John");  // ref on Stack, obj on Heap
    changePerson(p);
    // p.name is now "Jane" (reference copied, same object)
}

void changePrimitive(int val) {
    val = 10;  // Changes copy on stack
}

void changePerson(Person person) {
    person.name = "Jane";  // Changes heap object
}`,
      language: 'java'
    },
    topic: 'jvm',
    difficulty: 'mid',
    tags: ['heap', 'stack', 'memory', 'jvm'],    commonPitfalls: ['Thinking Java passes objects by reference (it passes reference by value)', 'Deep recursion causing StackOverflowError', 'Not understanding where variables are stored'],
    realWorldUse: 'Debugging memory issues, understanding performance characteristics, optimizing recursive algorithms, troubleshooting stack overflow.'
  },
  {
    id: 'jvm-002',
    question: "How does Garbage Collection work in Java?",
    answer: "Garbage Collection (GC) automatically reclaims memory from objects that are no longer referenced. GC identifies unreachable objects (not reachable from GC roots), marks them, and reclaims their memory. GC runs in separate threads, causing \"stop-the-world\" pauses.",
    explanation: "GC uses generational hypothesis: most objects die young. Heap divided into Young (Eden, Survivor) and Old generations. Young GC is frequent and fast. Old GC (Full GC) is rare but slower. GC roots include: static variables, active threads, JNI references.",
    translations: {
      tr: {
        question: "Heap ve Stack arasındaki fark nedir?",
        answer: "Heap: nesneler, paylaşılan, GC yönetir, büyük, yavaş. Stack: metod çağrıları/local değişkenler, thread-specific, otomatik yönetim, küçük, hızlı. StackOverflowError vs OutOfMemoryError.",
        explanation: "Heap nesneler için, Stack metod execution için."
      }
    },
    codeExample: {
      code: `// Garbage Collection basics

public class GCExample {
    public static void main(String[] args) {
        // Object created - stored in heap
        Person p1 = new Person("John");

        // p1 reference changed - old object eligible for GC
        p1 = new Person("Jane");
        // Old "John" object has no references - GC candidate

        // Multiple references to same object
        Person p2 = new Person("Bob");
        Person p3 = p2;  // Both reference same object
        p2 = null;
        // Object still reachable via p3 - NOT eligible for GC
        p3 = null;
        // Now eligible for GC

        // Objects in method scope
        createObjects();
        // After method returns, objects eligible for GC
        // (if no references escape the method)
    }

    public static void createObjects() {
        Person temp = new Person("Temp");
        // temp eligible for GC after method returns
    }
}

// Generational Garbage Collection

// YOUNG GENERATION (objects die young)
// - Eden Space: New objects allocated here
// - Survivor Space 0 (S0): Survived 1+ GC
// - Survivor Space 1 (S1): Alternate survivor space

// OLD GENERATION (Tenured)
// - Long-lived objects promoted here
// - Objects that survived multiple young GCs

// METASPACE (Java 8+, replaces PermGen)
// - Class metadata, static variables

// GC Process:
// 1. Minor GC (Young Generation)
//    - Very frequent, fast
//    - Eden -> S0 -> S1 -> Old
//    - Surviving objects age++

// 2. Major/Full GC (Old Generation)
//    - Less frequent, slower
//    - "Stop-the-world" pause
//    - Cleans old generation

// GC Roots (always reachable):
// 1. Static variables
// 2. Active thread stacks
// 3. JNI references
// 4. Currently executing methods

class GCRoots {
    // GC Root: Static variable
    private static Connection dbConnection;

    public void method() {
        // GC Root: Local variable in active thread
        Connection local = new Connection();

        // Not a root
        Connection temp = createConnection();
    }
}

// Making objects eligible for GC
public void makeEligibleForGC() {
    // 1. Nulling reference
    Object obj = new Object();
    obj = null;  // Eligible

    // 2. Reassigning reference
    String s = new String("old");
    s = new String("new");  // "old" eligible

    // 3. Object created inside method
    createTempObject();  // Eligible after return

    // 4. Island of isolation
    Node node1 = new Node();
    Node node2 = new Node();
    node1.next = node2;
    node2.next = node1;
    node1 = null;
    node2 = null;
    // Circular reference but no external refs - eligible!
}

// Forcing GC (not recommended in production)
System.gc();  // Suggests GC, doesn't guarantee
Runtime.getRuntime().gc();

// finalize() method (deprecated in Java 9)
@Override
protected void finalize() throws Throwable {
    // Called before GC reclaims object
    // Not guaranteed to be called!
    // Don't rely on this for cleanup
}

// Better: try-with-resources or explicit cleanup
try (Connection conn = getConnection()) {
    // Use connection
} // Automatically closed

// Monitoring GC
// JVM flags:
// -XX:+PrintGCDetails
// -XX:+PrintGCDateStamps
// -Xloggc:gc.log`,
      language: 'java'
    },
    topic: 'jvm',
    difficulty: 'mid',
    tags: ['garbage-collection', 'gc', 'memory-management', 'jvm'],    commonPitfalls: ['Calling System.gc() in production', 'Relying on finalize()', 'Not understanding GC roots', 'Circular references thinking they prevent GC'],
    realWorldUse: 'Memory optimization, preventing OutOfMemoryError, tuning application performance, debugging memory leaks.'
  },
  {
    id: 'jvm-003',
    question: "What are the main Garbage Collection algorithms in Java (G1, ZGC, Shenandoah)?",
    answer: "Serial GC (single-threaded, small apps), Parallel GC (multiple threads, throughput-focused), CMS (low pause, deprecated), G1 GC (default Java 9+, balanced, region-based), ZGC (ultra-low pause <10ms, large heaps), Shenandoah (low pause, concurrent). Each optimizes different metrics: throughput vs latency.",
    explanation: "Choosing GC depends on requirements: Serial for small apps, Parallel for batch processing (throughput), G1 for balanced approach, ZGC/Shenandoah for low-latency applications with large heaps. Modern GCs are mostly concurrent to reduce pause times.",
    translations: {
      tr: {
        question: "Garbage Collection nasıl çalışır?",
        answer: "GC kullanılmayan nesneleri otomatik siler. Reachability analizi. Young Gen (Eden, Survivor), Old Gen. Minor GC, Major GC, Full GC. Çeşitli GC algoritmaları: Serial, Parallel, CMS, G1, ZGC.",
        explanation: "GC manuel memory yönetimini otomatikleştirir ancak performance etkisi var."
      }
    },
    codeExample: {
      code: `// Garbage Collector Algorithms

// 1. Serial GC (-XX:+UseSerialGC)
// - Single-threaded
// - "Stop-the-world" for both young and old GC
// - Small applications (<100MB heap)
// - Simplest, lowest overhead
java -XX:+UseSerialGC -Xmx100m MyApp

// 2. Parallel GC (-XX:+UseParallelGC)
// - Multi-threaded (uses multiple GC threads)
// - Optimized for THROUGHPUT
// - Good for batch processing
// - Default in Java 8
// - Longer pause times but higher throughput
java -XX:+UseParallelGC -XX:ParallelGCThreads=4 MyApp

// 3. CMS - Concurrent Mark Sweep (DEPRECATED in Java 9)
// - Low pause times
// - Concurrent marking (runs with app threads)
// - Fragmentation issues
// - Removed in Java 14
java -XX:+UseConcMarkSweepGC MyApp

// 4. G1 GC - Garbage First (-XX:+UseG1GC)
// - DEFAULT in Java 9+
// - Region-based heap (divides heap into ~2000 regions)
// - Predictable pause times
// - Good for large heaps (>4GB)
// - Balances throughput and latency
// - Target pause time: 200ms default
java -XX:+UseG1GC -XX:MaxGCPauseMillis=200 MyApp

// G1 GC Regions:
// - Heap divided into equal-sized regions (1-32MB)
// - Regions can be Eden, Survivor, Old
// - Mixed collections: young + some old regions
// - Humongous objects (>50% region size) get special regions

// 5. ZGC - Z Garbage Collector (Java 11+)
// - Ultra-low pause times (<10ms, even for TB heaps)
// - Scalable (handles 8MB to 16TB heaps)
// - Concurrent compaction
// - Colored pointers for concurrent operations
// - Linux, macOS, Windows
java -XX:+UseZGC -Xmx16g MyApp

// ZGC phases (ALL concurrent except 2 very short pauses):
// 1. Pause Mark Start (<1ms)
// 2. Concurrent Mark
// 3. Concurrent Reference Processing
// 4. Pause Mark End (<1ms)
// 5. Concurrent Prepare
// 6. Concurrent Relocate
// Result: Pause time independent of heap size!

// 6. Shenandoah GC (Java 12+, OpenJDK)
// - Low pause times (similar to ZGC)
// - Concurrent evacuation
// - Brooks pointers for forwarding
// - Good for large heaps with low latency requirements
java -XX:+UseShenandoahGC MyApp

// 7. Epsilon GC (Java 11+)
// - NO-OP garbage collector
// - Allocates memory but never reclaims it
// - For testing, ultra-short jobs
// - Will throw OutOfMemoryError when heap exhausted
java -XX:+UseEpsilonGC MyApp

// Comparison:
// +--------------+------------+----------+------------+
// | GC           | Pause Time | Heap     | Use Case   |
// +--------------+------------+----------+------------+
// | Serial       | High       | Small    | Dev/Test   |
// | Parallel     | High       | Any      | Batch      |
// | G1           | Medium     | Large    | General    |
// | ZGC          | Very Low   | V.Large  | Low Latency|
// | Shenandoah   | Very Low   | V.Large  | Low Latency|
// +--------------+------------+----------+------------+

// Monitoring GC
// Common flags:
-XX:+PrintGCDetails         // Print GC details
-XX:+PrintGCDateStamps      // Add timestamps
-Xloggc:gc.log              // Log to file
-XX:+PrintGCApplicationStoppedTime  // App pause time

// Java 9+ Unified Logging
-Xlog:gc*:file=gc.log:time,uptime,level,tags

// Example GC selection for different scenarios:
// Microservices (low latency): ZGC or Shenandoah
// Big Data processing: Parallel GC
// General web app: G1 GC
// Small app: Serial GC
// Real-time app: ZGC`,
      language: 'java'
    },
    topic: 'jvm',
    difficulty: 'senior',
    tags: ['gc-algorithms', 'g1', 'zgc', 'garbage-collection', 'jvm'],    commonPitfalls: ['Using wrong GC for workload', 'Not tuning GC parameters', 'Ignoring GC logs', 'Using deprecated CMS in new apps'],
    realWorldUse: 'Tuning production JVMs, reducing latency in microservices, optimizing batch processing, handling large heaps.'
  },
  {
    id: 'jvm-004',
    question: "What causes memory leaks in Java and how do you identify them?",
    answer: "Memory leaks occur when objects remain referenced but are no longer needed, preventing GC. Common causes: static collections holding objects, unclosed resources, listeners not removed, ThreadLocal not cleaned, caches growing unbounded. Identify with heap dumps, profilers (VisualVM, YourKit), monitoring OutOfMemoryError.",
    explanation: "Even with GC, Java can leak memory if objects remain reachable but unused. Unlike C/C++, you can't \"forget\" to free memory, but you can forget to remove references. Growing heap usage over time indicates leaks.",
    translations: {
      tr: {
        question: "Young Generation ve Old Generation nedir?",
        answer: "Young Gen: yeni nesneler, sık GC, küçük pause. Eden + 2 Survivor space. Old Gen: uzun yaşayan nesneler, nadir GC, uzun pause. Promotion young'dan old'a.",
        explanation: "Generational GC çoğu nesnenin kısa yaşadığı varsayımına dayanır."
      }
    },
    codeExample: {
      code: `// Memory Leak Examples in Java

// 1. Static collection holding objects
public class StaticCollectionLeak {
    // Static list never gets GC'd
    private static final List<Object> cache = new ArrayList<>();

    public void addToCache(Object obj) {
        cache.add(obj);  // LEAK: Objects never removed
    }
}

// Fix: Use bounded cache or clear periodically
private static final Map<String, Object> cache =
    Collections.synchronizedMap(
        new LinkedHashMap<>(100, 0.75f, true) {
            protected boolean removeEldestEntry(Map.Entry eldest) {
                return size() > 100;  // Limit size
            }
        }
    );

// 2. Unclosed resources
public void processFile() {
    BufferedReader reader = new BufferedReader(
        new FileReader("file.txt"));
    // If exception occurs, reader never closed
    // reader reference kept in memory - LEAK
}

// Fix: try-with-resources
public void processFile() {
    try (BufferedReader reader = new BufferedReader(
            new FileReader("file.txt"))) {
        // Use reader
    } // Automatically closed, eligible for GC
}

// 3. Event listeners not removed
public class ButtonLeak {
    private Button button = new Button();

    public void setup() {
        button.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                // Anonymous inner class holds reference to outer class
            }
        });
        // LEAK: If button outlives this object, entire object leaked
    }

    // Fix: Remove listener when done
    private ActionListener listener;

    public void setup() {
        listener = e -> { /* ... */ };
        button.addActionListener(listener);
    }

    public void cleanup() {
        button.removeActionListener(listener);
    }
}

// 4. ThreadLocal not cleaned
public class ThreadLocalLeak {
    private static ThreadLocal<Connection> connectionHolder =
        ThreadLocal.withInitial(() -> createConnection());

    public void doWork() {
        Connection conn = connectionHolder.get();
        // Use connection
        // LEAK: In thread pool, thread reused, ThreadLocal value persists
    }

    // Fix: Always remove
    public void doWork() {
        try {
            Connection conn = connectionHolder.get();
            // Use connection
        } finally {
            connectionHolder.remove();  // Clean up
        }
    }
}

// 5. HashMap with mutable keys
class MutableKey {
    private int value;

    public void setValue(int value) {
        this.value = value;
    }

    @Override
    public int hashCode() {
        return value;
    }
}

Map<MutableKey, String> map = new HashMap<>();
MutableKey key = new MutableKey(1);
map.put(key, "value");
key.setValue(2);  // hashCode changed!
// Can't find entry now - LEAK (entry stays in wrong bucket)

// 6. Inner class holding outer class reference
public class OuterClass {
    private byte[] data = new byte[1000000];  // Large data

    public class InnerClass {
        public void doSomething() {
            // Inner class has implicit reference to OuterClass
        }
    }

    public InnerClass getInner() {
        return new InnerClass();  // LEAK: Inner holds outer
    }
}

// Fix: Use static inner class
public static class StaticInnerClass {
    public void doSomething() {
        // No implicit reference to outer
    }
}

// 7. String.intern() abuse
for (int i = 0; i < 1000000; i++) {
    String s = ("User_" + i).intern();  // LEAK: String pool grows
}

// Detecting Memory Leaks:

// 1. Heap dump analysis
// Create heap dump on OutOfMemoryError
java -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/tmp/heap.hprof

// 2. jmap - generate heap dump manually
jmap -dump:format=b,file=heap.hprof <pid>

// 3. Analyze with Eclipse MAT, VisualVM, YourKit
// Look for:
// - Objects with high retained size
// - Growing collections
// - Duplicate strings
// - Class loaders not unloaded

// 4. Monitor heap usage
// If heap keeps growing over time = leak
Runtime runtime = Runtime.getRuntime();
long usedMemory = runtime.totalMemory() - runtime.freeMemory();

// 5. GC logs analysis
// If Full GC doesn't reclaim much memory = leak
// Look for increasing "used" memory after GC

// Prevention:
// - Use try-with-resources
// - Remove listeners explicitly
// - Clean ThreadLocal values
// - Use WeakHashMap for caches
// - Avoid static collections
// - Profile regularly in development`,
      language: 'java'
    },
    topic: 'jvm',
    difficulty: 'senior',
    tags: ['memory-leak', 'debugging', 'profiling', 'heap-dump'],    commonPitfalls: ['Static collections growing unboundedly', 'Not removing event listeners', 'ThreadLocal in thread pools', 'Mutable HashMap keys'],
    realWorldUse: 'Production debugging, performance tuning, preventing OutOfMemoryError, maintaining long-running applications.'
  },
  {
    id: 'jvm-005',
    question: "Explain Java reference types: Strong, Soft, Weak, and Phantom references.",
    answer: "Strong (default): Never GC'd while reachable. Soft: GC'd before OutOfMemoryError (good for caches). Weak: GC'd at next GC cycle (good for canonical mappings). Phantom: After finalization, used with ReferenceQueue for cleanup. Each provides different GC eligibility.",
    explanation: "References control GC behavior. Strong prevents GC. Soft allows GC under memory pressure. Weak allows immediate GC. Phantom enables post-finalization cleanup. Use for memory-sensitive caches, canonicalizing mappings, and resource cleanup.",
    translations: {
      tr: {
        question: "ClassLoader nedir?",
        answer: "ClassLoader .class dosyalarını JVM'e yükler. Üç built-in: Bootstrap, Extension, Application. Delegation model. Dinamik sınıf yükleme. Custom ClassLoader mümkün.",
        explanation: "ClassLoader Java'nın dinamik yükleme mekanizmasıdır."
      }
    },
    codeExample: {
      code: `import java.lang.ref.*;

// 1. Strong Reference (default)
Object strongRef = new Object();
// As long as strongRef exists, object never GC'd
strongRef = null;  // Now eligible for GC

// 2. Soft Reference (for memory-sensitive caches)
// GC'd only when JVM needs memory (before OutOfMemoryError)
SoftReference<Object> softRef = new SoftReference<>(new Object());

Object obj = softRef.get();  // May return null if GC'd
if (obj != null) {
    // Use object
} else {
    // Object was GC'd, recreate if needed
}

// Use case: Image cache
class ImageCache {
    private Map<String, SoftReference<BufferedImage>> cache =
        new HashMap<>();

    public BufferedImage getImage(String path) {
        SoftReference<BufferedImage> ref = cache.get(path);
        BufferedImage image = ref != null ? ref.get() : null;

        if (image == null) {
            // Image was GC'd or not cached, load it
            image = loadImage(path);
            cache.put(path, new SoftReference<>(image));
        }
        return image;
    }
    // JVM will GC images when memory is low
}

// 3. Weak Reference
// GC'd at next GC cycle, even with available memory
WeakReference<Object> weakRef = new WeakReference<>(new Object());

Object obj2 = weakRef.get();  // May return null
if (obj2 != null) {
    // Use object
}

// Use case: WeakHashMap (canonical mapping)
WeakHashMap<User, UserMetadata> metadata = new WeakHashMap<>();
User user = new User("John");
metadata.put(user, new UserMetadata());

// When user is GC'd, entry automatically removed from map
user = null;  // After GC, entry removed from WeakHashMap

// Use case: Prevent memory leaks in listeners
class ListenerRegistry {
    private List<WeakReference<EventListener>> listeners =
        new ArrayList<>();

    public void addListener(EventListener listener) {
        listeners.add(new WeakReference<>(listener));
    }

    public void fireEvent(Event e) {
        // Remove GC'd listeners
        listeners.removeIf(ref -> ref.get() == null);

        for (WeakReference<EventListener> ref : listeners) {
            EventListener listener = ref.get();
            if (listener != null) {
                listener.handleEvent(e);
            }
        }
    }
}

// 4. Phantom Reference (for cleanup)
// get() always returns null
// Used with ReferenceQueue for cleanup after finalization
ReferenceQueue<Object> queue = new ReferenceQueue<>();
PhantomReference<Object> phantomRef =
    new PhantomReference<>(new Object(), queue);

// phantomRef.get() always returns null!

// Use case: Resource cleanup (better than finalize())
class ResourceCleanup {
    private static ReferenceQueue<Resource> queue =
        new ReferenceQueue<>();
    private static List<ResourcePhantomRef> references =
        new ArrayList<>();

    static class ResourcePhantomRef extends PhantomReference<Resource> {
        private NativeHandle handle;

        ResourcePhantomRef(Resource resource, NativeHandle handle) {
            super(resource, queue);
            this.handle = handle;
        }

        void cleanup() {
            handle.close();  // Clean native resource
        }
    }

    public static void allocate(Resource resource, NativeHandle handle) {
        references.add(new ResourcePhantomRef(resource, handle));
    }

    // Cleanup thread
    static {
        Thread cleanupThread = new Thread(() -> {
            while (true) {
                try {
                    ResourcePhantomRef ref =
                        (ResourcePhantomRef) queue.remove();
                    ref.cleanup();
                    references.remove(ref);
                } catch (InterruptedException e) {
                    break;
                }
            }
        });
        cleanupThread.setDaemon(true);
        cleanupThread.start();
    }
}

// Reference Strength Hierarchy:
// Strong > Soft > Weak > Phantom

// GC Behavior:
// Strong:  Never GC'd (while reachable)
// Soft:    GC'd before OutOfMemoryError
// Weak:    GC'd at next GC cycle
// Phantom: After finalization, before memory reclaim

// Practical example: All together
class CacheSystem {
    // Strong reference: Required objects
    private Map<String, Config> requiredConfigs = new HashMap<>();

    // Soft reference: Memory-sensitive cache
    private Map<String, SoftReference<Image>> imageCache = new HashMap<>();

    // Weak reference: Canonical mapping
    private WeakHashMap<User, Session> activeSessions = new WeakHashMap<>();

    // Phantom reference: Resource cleanup
    private ReferenceQueue<Connection> cleanupQueue = new ReferenceQueue<>();
}

// When to use:
// Strong: Default, normal objects
// Soft: Caches (images, parsed data)
// Weak: Canonical mappings, prevent leaks
// Phantom: Native resource cleanup`,
      language: 'java'
    },
    topic: 'jvm',
    difficulty: 'senior',
    tags: ['reference-types', 'weak-reference', 'soft-reference', 'phantom-reference', 'gc'],    commonPitfalls: ['Using strong references for caches (memory leak)', 'Expecting phantom.get() to return object', 'Not checking for null from weak/soft references'],
    realWorldUse: 'Image caching, preventing listener leaks, canonical object pools, native resource cleanup, WeakHashMap.'
  },
  {
    id: 'jvm-006',
    question: "What are the different JVM memory areas?",
    answer: "Heap (objects, instance variables, arrays - GC managed), Stack (method frames, local variables - per thread), Metaspace (class metadata, Java 8+ replacing PermGen), Code Cache (JIT-compiled code), Direct Memory (NIO buffers outside heap). Each serves different purpose with different management.",
    explanation: "JVM memory is divided into multiple areas with different purposes and management strategies. Heap and Metaspace can cause OutOfMemoryError. Understanding these areas is crucial for tuning and troubleshooting.",
    translations: {
      tr: {
        question: "JVM tuning parametreleri nelerdir?",
        answer: "Heap size: -Xms (initial), -Xmx (maximum). GC: -XX:+UseG1GC. Thread stack: -Xss. Metaspace: -XX:MetaspaceSize. Profiling: -XX:+PrintGCDetails. Performance tuning için kritik.",
        explanation: "JVM tuning uygulama gereksinimlerine göre performansı optimize eder."
      }
    },
    codeExample: {
      code: `// JVM Memory Areas

// 1. HEAP MEMORY
// - Objects, arrays, instance variables
// - Shared among all threads
// - Managed by Garbage Collector
// - Divided into Young and Old generations
// - Configure: -Xms (initial) -Xmx (maximum)

public class HeapExample {
    // Instance variable - stored in Heap
    private String name;

    // Static variable - stored in Heap (in class object)
    private static int count;

    public void createObjects() {
        // Object allocated in Heap
        Person p = new Person();

        // Array allocated in Heap
        int[] array = new int[100];
    }
}

// Heap size configuration:
java -Xms512m -Xmx2g MyApp
// -Xms512m: Initial heap size
// -Xmx2g: Maximum heap size

// 2. STACK MEMORY
// - Method frames, local variables, method parameters
// - One stack per thread
// - LIFO structure
// - Automatically managed (no GC needed)
// - Configure: -Xss (stack size per thread)

public class StackExample {
    public void method1() {
        int x = 10;  // Local variable - Stack
        method2();
    }

    public void method2() {
        int y = 20;  // Stack
        // Each method call creates new frame on stack
    }
}

// Stack size configuration:
java -Xss1m MyApp  // 1MB stack per thread

// StackOverflowError example:
public int factorial(int n) {
    return n * factorial(n - 1);  // No base case - stack overflow!
}

// 3. METASPACE (Java 8+, replaces PermGen)
// - Class metadata (method data, field data)
// - Static variables
// - Constant pool
// - Native memory (not part of heap)
// - Auto-grows by default
// - Configure: -XX:MetaspaceSize, -XX:MaxMetaspaceSize

// Metaspace stores:
class MyClass {
    // Class structure stored in Metaspace
    static int staticVar;  // Value in heap, reference in Metaspace
}

// Metaspace configuration:
java -XX:MetaspaceSize=128m -XX:MaxMetaspaceSize=512m MyApp

// PermGen (Java 7 and earlier - REMOVED in Java 8)
// -XX:PermSize=128m -XX:MaxPermSize=256m

// 4. CODE CACHE
// - JIT-compiled native code
// - Hotspot optimizations
// - Default size: 240MB (varies by JVM)
// - Configure: -XX:ReservedCodeCacheSize

java -XX:ReservedCodeCacheSize=256m MyApp

// Monitor code cache:
jconsole  // View "Code Cache" in Memory tab

// 5. DIRECT MEMORY (Off-Heap)
// - NIO ByteBuffer.allocateDirect()
// - Not managed by GC
// - Faster for I/O operations
// - Configure: -XX:MaxDirectMemorySize

ByteBuffer directBuffer = ByteBuffer.allocateDirect(1024);
// Allocated outside heap, in native memory

// Configuration:
java -XX:MaxDirectMemorySize=512m MyApp

// 6. THREAD STACKS
// - Each thread has own stack
// - Default: 1MB per thread
// - 1000 threads = 1GB just for stacks!

// Thread count impact:
// 1000 threads × 1MB stack = 1GB memory (not in heap!)

// Memory Areas Summary:

// +----------------------------------+
// |          HEAP MEMORY             |
// |  +----------------------------+  |
// |  | Young Gen                  |  |
// |  | - Eden                     |  |
// |  | - Survivor 0, Survivor 1   |  |
// |  +----------------------------+  |
// |  | Old Gen (Tenured)          |  |
// |  +----------------------------+  |
// +----------------------------------+
// |          METASPACE              |
// | (Native Memory, not in heap)    |
// +----------------------------------+
// |          CODE CACHE             |
// | (JIT-compiled code)             |
// +----------------------------------+
// |       THREAD STACKS             |
// | (One per thread)                |
// +----------------------------------+
// |       DIRECT MEMORY             |
// | (NIO buffers)                   |
// +----------------------------------+

// OutOfMemoryError types:

// 1. Java heap space
// Heap full, can't allocate object
java.lang.OutOfMemoryError: Java heap space
// Fix: Increase -Xmx or fix memory leak

// 2. Metaspace
// Class metadata area full
java.lang.OutOfMemoryError: Metaspace
// Fix: Increase -XX:MaxMetaspaceSize

// 3. unable to create new native thread
// Too many threads
java.lang.OutOfMemoryError: unable to create new native thread
// Fix: Reduce threads or increase OS thread limit

// 4. Direct buffer memory
// Direct ByteBuffer allocation failed
java.lang.OutOfMemoryError: Direct buffer memory
// Fix: Increase -XX:MaxDirectMemorySize

// Monitoring memory:
Runtime runtime = Runtime.getRuntime();
long maxMemory = runtime.maxMemory();     // -Xmx
long totalMemory = runtime.totalMemory(); // Current heap
long freeMemory = runtime.freeMemory();   // Free in current heap
long usedMemory = totalMemory - freeMemory;

// JVM memory tools:
// jstat - Monitor GC and memory
// jmap - Heap dump
// jconsole - GUI monitoring
// VisualVM - Comprehensive profiling`,
      language: 'java'
    },
    topic: 'jvm',
    difficulty: 'senior',
    tags: ['jvm-memory', 'heap', 'stack', 'metaspace', 'memory-areas'],    commonPitfalls: ['Confusing heap and stack', 'Not accounting for thread stack memory', 'Forgetting about Metaspace', 'Setting Xmx too high (OS needs memory too)'],
    realWorldUse: 'JVM tuning, troubleshooting OutOfMemoryError, capacity planning, performance optimization.'
  },
  {
    id: 'jvm-007',
    question: "How does class loading work in Java? Explain the class loading mechanism.",
    answer: "Class loading has 3 phases: Loading (find and load bytecode), Linking (verify, prepare, resolve), Initialization (execute static initializers). ClassLoader hierarchy: Bootstrap (core Java classes), Extension/Platform (extensions), Application (classpath). Uses parent delegation model - delegates to parent first.",
    explanation: "Parent Delegation Model ensures core classes loaded first, prevents malicious class replacement. Loading is lazy (on-demand). Custom ClassLoaders enable dynamic loading, plugin systems, and isolation (OSGi, servlet containers).",
    translations: {
      tr: {
        question: "PermGen vs Metaspace",
        answer: "PermGen (Java 7): sabit boyut, OutOfMemoryError: PermGen space. Metaspace (Java 8+): native memory, dinamik boyut, auto-expand. Sınıf metadata saklar.",
        explanation: "Metaspace PermGen memory sorunlarını çözer."
      }
    },
    codeExample: {
      code: `// Class Loading Process

// 1. LOADING
// Find and load .class file bytecode
// ClassLoader.loadClass() called

// 2. LINKING
//    a) Verification: Bytecode validation
//    b) Preparation: Allocate memory for static fields
//    c) Resolution: Resolve symbolic references

// 3. INITIALIZATION
// Execute static initializers and static blocks
// <clinit> method called

class Example {
    // Preparation: count = 0 (default value)
    private static int count = 42;

    // Initialization: executed in order
    static {
        System.out.println("Static block 1");
        count = 100;
    }

    static {
        System.out.println("Static block 2");
        count = 200;
    }
    // Final value: count = 200
}

// ClassLoader Hierarchy (Parent Delegation Model)

// Bootstrap ClassLoader (native, no parent)
//     ↑
// Extension/Platform ClassLoader
//     ↑
// Application/System ClassLoader
//     ↑
// Custom ClassLoader

// Bootstrap ClassLoader
// - Loads core Java classes (java.lang.*, java.util.*)
// - From jre/lib/rt.jar
// - Native implementation (C++)
String s = new String();  // Loaded by Bootstrap
Object o = new Object();  // Loaded by Bootstrap

// Extension/Platform ClassLoader
// - Loads from jre/lib/ext or java.ext.dirs
// - Java 9+: Platform ClassLoader
Connection conn;  // javax.sql.* loaded by Platform

// Application/System ClassLoader
// - Loads from CLASSPATH or -cp
// - Application classes
MyClass obj = new MyClass();  // Loaded by Application

// Parent Delegation Model
public class CustomClassLoader extends ClassLoader {
    @Override
    public Class<?> loadClass(String name) throws ClassNotFoundException {
        // 1. Check if class already loaded
        Class<?> c = findLoadedClass(name);
        if (c != null) {
            return c;
        }

        // 2. Delegate to parent first (PARENT DELEGATION)
        try {
            c = getParent().loadClass(name);
        } catch (ClassNotFoundException e) {
            // Parent couldn't find it
        }

        // 3. Load ourselves only if parent can't
        if (c == null) {
            c = findClass(name);  // Custom loading logic
        }

        return c;
    }
}

// Custom ClassLoader example
class MyClassLoader extends ClassLoader {
    @Override
    protected Class<?> findClass(String name) throws ClassNotFoundException {
        // Load class from custom source (network, database, etc.)
        byte[] classBytes = loadClassData(name);

        // Define class from bytecode
        return defineClass(name, classBytes, 0, classBytes.length);
    }

    private byte[] loadClassData(String name) {
        // Load from file, network, etc.
        String fileName = name.replace('.', '/') + ".class";
        // Read file and return bytes
        return readFileBytes(fileName);
    }
}

// Usage
MyClassLoader loader = new MyClassLoader();
Class<?> clazz = loader.loadClass("com.example.MyClass");
Object instance = clazz.getDeclaredConstructor().newInstance();

// When is a class initialized?
// 1. new instance created
MyClass obj = new MyClass();  // Initializes MyClass

// 2. Static method called
MyClass.staticMethod();  // Initializes MyClass

// 3. Static field accessed (except compile-time constants)
int value = MyClass.staticField;  // Initializes MyClass

// 4. Reflection
Class.forName("MyClass");  // Initializes MyClass
MyClass.class;  // Does NOT initialize (just loads)

// 5. Subclass initialized
class Child extends Parent { }
new Child();  // Initializes Parent first, then Child

// NOT initialized:
// - Accessing static final compile-time constant
// - Using .class literal
final static int CONST = 42;  // Compile-time constant
int x = MyClass.CONST;  // Does NOT initialize MyClass

// Class.forName() vs ClassLoader.loadClass()

// Class.forName() - initializes class
Class<?> c1 = Class.forName("com.mysql.Driver");  // Executes static block
// Used for JDBC driver loading

// ClassLoader.loadClass() - does NOT initialize
Class<?> c2 = getClass().getClassLoader()
    .loadClass("com.mysql.Driver");  // No initialization

// ClassLoader isolation (web containers, OSGi)
// Each web app has own ClassLoader
// App1ClassLoader loads com.example.User (version 1.0)
// App2ClassLoader loads com.example.User (version 2.0)
// Same class name, different versions, isolated!

// Checking ClassLoader
Class<?> clazz = MyClass.class;
ClassLoader loader = clazz.getClassLoader();
System.out.println(loader);  // Application ClassLoader

// Bootstrap classes return null
ClassLoader stringLoader = String.class.getClassLoader();
System.out.println(stringLoader);  // null (Bootstrap)

// Common issues:

// 1. ClassNotFoundException
// Class not found in classpath
Class.forName("com.example.Missing");  // Throws ClassNotFoundException

// 2. NoClassDefFoundError
// Class was present during compile but not at runtime
// Or static initializer failed

// 3. ClassCastException with different ClassLoaders
// Same class loaded by different ClassLoaders = different classes!
MyClass obj1 = loader1.loadClass("MyClass").newInstance();
MyClass obj2 = loader2.loadClass("MyClass").newInstance();
// obj1.getClass() != obj2.getClass()  // Different classes!`,
      language: 'java'
    },
    topic: 'jvm',
    difficulty: 'senior',
    tags: ['classloader', 'class-loading', 'jvm', 'initialization'],    commonPitfalls: ['Confusing loadClass() vs Class.forName()', 'ClassCastException with multiple ClassLoaders', 'Not understanding parent delegation', 'Breaking parent delegation unnecessarily'],
    realWorldUse: 'Plugin systems, hot reloading, servlet containers, OSGi, JDBC driver loading, application servers.'
  },
  {
    id: 'jvm-008',
    question: "What are the important JVM tuning parameters for memory management?",
    answer: "Heap: -Xms (initial heap), -Xmx (max heap), -Xmn (young generation size). GC: -XX:+UseG1GC, -XX:MaxGCPauseMillis. Stack: -Xss (thread stack size). Metaspace: -XX:MetaspaceSize, -XX:MaxMetaspaceSize. Direct memory: -XX:MaxDirectMemorySize. GC logging: -Xlog:gc*.",
    explanation: "Proper tuning reduces GC pauses, prevents OutOfMemoryError, improves throughput. Start with defaults, monitor, adjust based on metrics. Set Xms=Xmx to avoid heap resizing. Young gen should be 25-50% of heap.",
    translations: {
      tr: {
        question: "Memory leak Java'da nasıl oluşur?",
        answer: "Memory leak: referans tutulan ama kullanılmayan nesneler. Nedenler: static koleksiyonlar, listener kayıtları, ThreadLocal, unclosed kaynaklar. GC silemez.",
        explanation: "Java'da GC olsa da memory leak mümkün - referans yönetimi kritik."
      }
    },
    codeExample: {
      code: `// JVM Tuning Parameters

// ===== HEAP MEMORY =====

// Initial and maximum heap size
java -Xms2g -Xmx4g MyApp
// -Xms: Initial heap size (2GB)
// -Xmx: Maximum heap size (4GB)
// Best practice: Set Xms = Xmx to avoid resizing overhead

// Young generation size
java -Xmn512m -Xmx2g MyApp
// -Xmn: Young generation size (Eden + Survivor spaces)
// Typically 25-50% of total heap

// Ratio-based configuration (alternative to -Xmn)
java -XX:NewRatio=2 -Xmx4g MyApp
// NewRatio=2 means Old:Young = 2:1
// Young = 4GB / 3 = ~1.3GB
// Old = 2.7GB

// Survivor space ratio
java -XX:SurvivorRatio=8 MyApp
// SurvivorRatio=8 means Eden:Survivor = 8:1
// If Young=1GB: Eden=800MB, S0=100MB, S1=100MB

// ===== GARBAGE COLLECTION =====

// G1 GC (default Java 9+, recommended)
java -XX:+UseG1GC \\
     -XX:MaxGCPauseMillis=200 \\
     -XX:G1HeapRegionSize=16m \\
     -Xmx8g MyApp

// -XX:MaxGCPauseMillis=200: Target pause time (200ms)
// -XX:G1HeapRegionSize: Region size (1-32MB, must be power of 2)

// Parallel GC (throughput-focused)
java -XX:+UseParallelGC \\
     -XX:ParallelGCThreads=4 \\
     -Xmx4g MyApp

// -XX:ParallelGCThreads: Number of GC threads

// ZGC (ultra-low latency, Java 11+)
java -XX:+UseZGC \\
     -Xmx16g \\
     -XX:ConcGCThreads=2 MyApp

// Shenandoah GC (low latency)
java -XX:+UseShenandoahGC \\
     -Xmx8g MyApp

// ===== STACK MEMORY =====

// Thread stack size
java -Xss1m MyApp
// -Xss: Stack size per thread (default ~1MB)
// Reduce if many threads, increase if deep recursion

// ===== METASPACE =====

// Metaspace configuration (Java 8+)
java -XX:MetaspaceSize=128m \\
     -XX:MaxMetaspaceSize=512m MyApp

// -XX:MetaspaceSize: Initial metaspace size
// -XX:MaxMetaspaceSize: Maximum metaspace size

// Old PermGen (Java 7 and earlier - DEPRECATED)
// -XX:PermSize=128m
// -XX:MaxPermSize=256m

// ===== DIRECT MEMORY =====

// NIO direct buffer memory
java -XX:MaxDirectMemorySize=512m MyApp

// ===== GC LOGGING =====

// Java 9+ Unified Logging
java -Xlog:gc*:file=gc.log:time,uptime,level,tags MyApp

// Java 8 GC Logging
java -XX:+PrintGCDetails \\
     -XX:+PrintGCDateStamps \\
     -XX:+PrintGCTimeStamps \\
     -Xloggc:gc.log MyApp

// ===== PERFORMANCE TUNING =====

// String deduplication (G1 GC)
java -XX:+UseStringDeduplication MyApp
// Reduces memory for duplicate strings

// Compressed ordinary object pointers (default <32GB heap)
java -XX:+UseCompressedOops MyApp
// Reduces pointer size from 64 to 32 bits

// Compressed class pointers
java -XX:+UseCompressedClassPointers MyApp

// ===== DEBUGGING & MONITORING =====

// Heap dump on OutOfMemoryError
java -XX:+HeapDumpOnOutOfMemoryError \\
     -XX:HeapDumpPath=/tmp/heap.hprof MyApp

// Print command-line flags
java -XX:+PrintCommandLineFlags MyApp

// Print final flag values
java -XX:+PrintFlagsFinal MyApp

// ===== EXAMPLE CONFIGURATIONS =====

// Microservice (low latency, small heap)
java -Xms512m -Xmx512m \\
     -XX:+UseZGC \\
     -XX:+HeapDumpOnOutOfMemoryError \\
     -Xlog:gc*:file=gc.log MyApp

// Web application (balanced)
java -Xms4g -Xmx4g \\
     -Xmn1g \\
     -XX:+UseG1GC \\
     -XX:MaxGCPauseMillis=200 \\
     -XX:+UseStringDeduplication \\
     -Xlog:gc*:file=gc.log MyApp

// Batch processing (high throughput)
java -Xms8g -Xmx8g \\
     -XX:+UseParallelGC \\
     -XX:ParallelGCThreads=8 \\
     -Xlog:gc*:file=gc.log MyApp

// Large heap (low latency)
java -Xms16g -Xmx16g \\
     -XX:+UseZGC \\
     -Xlog:gc*:file=gc.log MyApp

// ===== MONITORING COMMANDS =====

// JVM statistics
jstat -gc <pid> 1000  // Every 1 second

// Heap summary
jmap -heap <pid>

// Heap histogram (top objects)
jmap -histo <pid> | head -20

// Thread dump
jstack <pid>

// VM flags
jinfo -flags <pid>

// Set flag at runtime
jinfo -flag +HeapDumpOnOutOfMemoryError <pid>

// ===== BEST PRACTICES =====

// 1. Set Xms = Xmx (avoid resizing)
// 2. Young gen = 25-50% of heap
// 3. Monitor GC logs regularly
// 4. Use G1 GC for most applications
// 5. Heap dump on OOM for debugging
// 6. Don't over-tune, start with defaults
// 7. Test changes under realistic load`,
      language: 'bash'
    },
    topic: 'jvm',
    difficulty: 'senior',
    tags: ['jvm-tuning', 'performance', 'gc-tuning', 'memory-parameters'],    commonPitfalls: ['Over-tuning without monitoring', 'Setting Xmx too high (OS needs memory)', 'Not setting Xms=Xmx', 'Using wrong GC for workload'],
    realWorldUse: 'Production JVM configuration, performance optimization, preventing OutOfMemoryError, reducing GC pauses.'
  },
  {
    id: 'jvm-009',
    question: "What are the different types of OutOfMemoryError and their causes?",
    answer: "Java heap space (heap exhausted), GC overhead limit exceeded (too much GC time), Metaspace (class metadata area full), Unable to create new native thread (thread limit reached), Direct buffer memory (NIO buffer allocation failed), Requested array size exceeds VM limit. Each indicates different resource exhaustion.",
    explanation: "Different OOM errors require different solutions. Heap space = increase Xmx or fix leak. Metaspace = increase MaxMetaspaceSize. Thread limit = reduce threads or increase OS limit. Understanding the type helps diagnose root cause.",
    translations: {
      tr: {
        question: "OutOfMemoryError türleri nelerdir?",
        answer: "Java heap space: heap dolu. GC overhead limit: GC çok zaman harcar. PermGen/Metaspace: class metadata alanı dolu. Unable to create native thread: çok thread. Direct buffer memory.",
        explanation: "Her OOME türü farklı root cause ve çözüme sahip."
      }
    },
    codeExample: {
      code: `// OutOfMemoryError Types and Solutions

// 1. java.lang.OutOfMemoryError: Java heap space
// Cause: Heap memory exhausted, cannot allocate object
public class HeapSpaceOOM {
    public static void main(String[] args) {
        List<byte[]> list = new ArrayList<>();
        while (true) {
            list.add(new byte[1024 * 1024]);  // 1MB each
            // Eventually: OutOfMemoryError: Java heap space
        }
    }
}

// Solutions:
// 1. Increase heap size
java -Xmx2g MyApp

// 2. Fix memory leak
// - Analyze heap dump
// - Remove unnecessary references
// - Use WeakHashMap for caches

// 3. Optimize memory usage
// - Use primitives instead of objects
// - Stream data instead of loading all
// - Clear collections when done

// 2. java.lang.OutOfMemoryError: GC overhead limit exceeded
// Cause: >98% time in GC, <2% heap recovered
public class GCOverheadOOM {
    public static void main(String[] args) {
        Map<Integer, String> map = new HashMap<>();
        int i = 0;
        while (true) {
            map.put(i++, "Value" + i);
            // Heap nearly full, GC runs constantly
        }
    }
}

// Solutions:
// 1. Increase heap size
java -Xmx4g MyApp

// 2. Disable check (not recommended)
java -XX:-UseGCOverheadLimit MyApp

// 3. Fix memory leak or reduce memory usage

// 3. java.lang.OutOfMemoryError: Metaspace
// Cause: Class metadata area full (Java 8+)
public class MetaspaceOOM {
    public static void main(String[] args) throws Exception {
        int count = 0;
        while (true) {
            // Generate class dynamically
            ClassLoader loader = new ClassLoader() { };
            Class.forName("SomeClass", true, loader);
            count++;
            // Eventually: OutOfMemoryError: Metaspace
        }
    }
}

// Common causes:
// - Too many classes loaded
// - Class loader leak (in app servers)
// - Excessive use of reflection/proxies
// - Spring Boot DevTools in production

// Solutions:
// 1. Increase Metaspace
java -XX:MaxMetaspaceSize=512m MyApp

// 2. Fix class loader leaks
// - Proper webapp undeployment
// - Clean ThreadLocal references
// - Remove static references to webapp classes

// 3. Reduce class count
// - Fewer dynamic proxies
// - Less reflection

// 4. java.lang.OutOfMemoryError: unable to create new native thread
// Cause: OS thread limit reached or not enough memory for thread stack
public class ThreadOOM {
    public static void main(String[] args) {
        while (true) {
            new Thread(() -> {
                try {
                    Thread.sleep(Long.MAX_VALUE);
                } catch (InterruptedException e) { }
            }).start();
            // Eventually: OutOfMemoryError: unable to create new native thread
        }
    }
}

// Solutions:
// 1. Reduce thread stack size
java -Xss256k MyApp  // Smaller stack, more threads possible

// 2. Increase OS thread limit
// Linux: ulimit -u 4096

// 3. Use thread pools instead of creating threads
ExecutorService executor = Executors.newFixedThreadPool(10);

// 4. Reduce number of threads in application

// 5. Increase system resources

// 5. java.lang.OutOfMemoryError: Direct buffer memory
// Cause: NIO direct buffer allocation failed
public class DirectBufferOOM {
    public static void main(String[] args) {
        List<ByteBuffer> buffers = new ArrayList<>();
        while (true) {
            buffers.add(ByteBuffer.allocateDirect(1024 * 1024));
            // Eventually: OutOfMemoryError: Direct buffer memory
        }
    }
}

// Solutions:
// 1. Increase direct memory
java -XX:MaxDirectMemorySize=512m MyApp

// 2. Explicitly free buffers
((DirectBuffer) buffer).cleaner().clean();

// 3. Use heap buffers if possible
ByteBuffer.allocate(size);  // Heap buffer

// 6. java.lang.OutOfMemoryError: Requested array size exceeds VM limit
// Cause: Trying to allocate array larger than VM limit
public class ArraySizeOOM {
    public static void main(String[] args) {
        int[] huge = new int[Integer.MAX_VALUE];
        // OutOfMemoryError: Requested array size exceeds VM limit
    }
}

// VM limit typically: Integer.MAX_VALUE - 2
// (header words reserved)

// Solutions:
// 1. Reduce array size
// 2. Use multiple smaller arrays
// 3. Use List<List<Integer>> for 2D structure
// 4. Stream data instead of loading all

// Debugging OutOfMemoryError:

// 1. Enable heap dump on OOM
java -XX:+HeapDumpOnOutOfMemoryError \\
     -XX:HeapDumpPath=/tmp/heap.hprof MyApp

// 2. Analyze heap dump
// - Eclipse MAT
// - VisualVM
// - jhat (deprecated)

// 3. Monitor memory before crash
// - jstat -gc <pid> 1000
// - jconsole
// - VisualVM

// 4. Check GC logs
java -Xlog:gc*:file=gc.log MyApp

// Prevention:

// 1. Load testing
// - Find memory leaks before production
// - Monitor memory growth over time

// 2. Proper resource cleanup
try (Resource r = getResource()) {
    // Use resource
} // Automatically closed

// 3. Bounded caches
Map<K, V> cache = new LinkedHashMap<>(100, 0.75f, true) {
    protected boolean removeEldestEntry(Map.Entry eldest) {
        return size() > 100;
    }
};

// 4. Monitor production
// - Set up alerts for high memory usage
// - Regular heap dump analysis
// - GC log monitoring

// 5. Avoid common mistakes
// - Don't store everything in static collections
// - Remove event listeners
// - Clean ThreadLocal in thread pools
// - Don't use String.intern() excessively`,
      language: 'java'
    },
    topic: 'jvm',
    difficulty: 'senior',
    tags: ['outofmemoryerror', 'debugging', 'memory-issues', 'troubleshooting'],    commonPitfalls: ['Not enabling heap dump on OOM', 'Confusing different OOM types', 'Not analyzing GC logs', 'Ignoring early warning signs'],
    realWorldUse: 'Production debugging, troubleshooting crashes, preventing downtime, capacity planning, performance optimization.'
  },

  // I/O and Serialization
  {
    id: 'io-001',
    question: "What is the difference between byte streams and character streams in Java?",
    answer: "Byte streams (InputStream/OutputStream) handle raw binary data (8-bit bytes), used for all types of files. Character streams (Reader/Writer) handle character data (16-bit Unicode), automatically handle character encoding/decoding. Use byte streams for binary files (images, videos), character streams for text files.",
    explanation: "Byte streams are lower-level, work with raw bytes. Character streams are built on top of byte streams, adding character encoding support (UTF-8, UTF-16). InputStreamReader/OutputStreamWriter bridge byte and character streams.",
    translations: {
      tr: {
        question: "Java'da I/O stream'ler nedir?",
        answer: "I/O stream'ler veri okuma/yazma için kullanılır. InputStream/OutputStream (byte), Reader/Writer (karakter). Buffered stream'ler performans artırır. try-with-resources ile kullanın.",
        explanation: "Stream'ler dosya, network, memory gibi kaynaklardan veri transfer eder."
      }
    },
    codeExample: {
      code: `// BYTE STREAMS - Raw binary data (8-bit)
try (FileInputStream fis = new FileInputStream("image.jpg");
     FileOutputStream fos = new FileOutputStream("copy.jpg")) {
    byte[] buffer = new byte[8192];
    int bytesRead;
    while ((bytesRead = fis.read(buffer)) != -1) {
        fos.write(buffer, 0, bytesRead);
    }
}

// CHARACTER STREAMS - Text data with encoding (16-bit)
try (BufferedReader br = new BufferedReader(
        new FileReader("input.txt"));
     BufferedWriter bw = new BufferedWriter(
        new FileWriter("output.txt"))) {
    String line;
    while ((line = br.readLine()) != null) {
        bw.write(line);
        bw.newLine();
    }
}

// BRIDGING: InputStreamReader/OutputStreamWriter
try (InputStream is = new FileInputStream("file.txt");
     Reader reader = new InputStreamReader(is, StandardCharsets.UTF_8)) {
    // Read characters with UTF-8 encoding
}`,
      language: 'java'
    },
    topic: 'io',
    difficulty: 'mid',
    tags: ['io', 'streams', 'byte-streams', 'character-streams'],    commonPitfalls: ['Using byte streams for text (encoding issues)', 'Not using buffered streams', 'Forgetting to close streams', 'Relying on default charset'],
    realWorldUse: 'File I/O, reading logs, data import/export, image processing, configuration files.'
  },
  {
    id: 'io-002',
    question: "What is Serialization and how does it work in Java?",
    answer: "Serialization converts an object into a byte stream for storage/transmission. Objects must implement Serializable interface. ObjectOutputStream writes objects, ObjectInputStream reads them. Static and transient fields are not serialized. SerialVersionUID ensures version compatibility.",
    explanation: "Serialization saves object state to bytes. Used for persistence, network transmission, caching. Transient keyword excludes fields. Custom serialization via writeObject/readObject methods.",
    translations: {
      tr: {
        question: "Buffered stream nedir ve neden kullanılır?",
        answer: "Buffered stream (BufferedReader, BufferedWriter) veriyi buffer'da toplar ve toplu yazar/okur. Disk I/O sayısını azaltır. Performansı önemli ölçüde artırır.",
        explanation: "Buffer kullanımı her karakter için disk erişimini önler - çok daha hızlı."
      }
    },
    codeExample: {
      code: `class Person implements Serializable {
    private static final long serialVersionUID = 1L;

    private String name;
    private int age;
    private transient String password;  // NOT serialized
    private static int count;  // NOT serialized
}

// Serialize
try (ObjectOutputStream oos = new ObjectOutputStream(
        new FileOutputStream("person.ser"))) {
    Person p = new Person("Alice", 30, "secret");
    oos.writeObject(p);
}

// Deserialize
try (ObjectInputStream ois = new ObjectInputStream(
        new FileInputStream("person.ser"))) {
    Person p = (Person) ois.readObject();
    // p.password will be null (transient)
}

// Custom serialization
private void writeObject(ObjectOutputStream oos) throws IOException {
    oos.defaultWriteObject();
    oos.writeObject(encrypt(password));
}

private void readObject(ObjectInputStream ois)
        throws IOException, ClassNotFoundException {
    ois.defaultReadObject();
    this.password = decrypt((String) ois.readObject());
}`,
      language: 'java'
    },
    topic: 'io',
    difficulty: 'mid',
    tags: ['serialization', 'objectstream', 'persistence', 'io'],    commonPitfalls: ['Not declaring serialVersionUID', 'Expecting transient fields to be saved', 'Not handling version compatibility', 'Circular references'],
    realWorldUse: 'Saving game state, caching (Redis), RMI, session persistence, distributed systems.'
  },
  {
    id: 'io-003',
    question: "What is the transient keyword and when should you use it?",
    answer: "transient marks a field to be excluded from serialization. Transient fields are not saved during serialization and have default values after deserialization (null for objects, 0 for primitives). Use for sensitive data (passwords), derived fields, or non-serializable references.",
    explanation: "Transient prevents field serialization. After deserialization, transient fields must be reinitialized if needed. Common use: passwords, cached data, calculated fields, connections.",
    translations: {
      tr: {
        question: "Serialization nedir?",
        answer: "Serialization nesneyi byte stream'e dönüştürür. Deserialization byte stream'i nesneye geri dönüştürür. Serializable interface gerekli. transient alanlar serialize edilmez.",
        explanation: "Serialization nesneleri dosyaya kaydetmek veya network'te göndermek için kullanılır."
      }
    },
    codeExample: {
      code: `class User implements Serializable {
    private String username;
    private int age;

    // Transient fields - NOT serialized
    private transient String password;  // Sensitive
    private transient int loginAttempts;  // Temporary
    private transient Connection dbConnection;  // Non-serializable
}

// After deserialization
User user = deserialize("user.ser");
// user.username ✓ restored
// user.password = null ✗ (transient)
// user.loginAttempts = 0 ✗ (transient)

// Reinitialize transient fields
class Service implements Serializable {
    private transient Connection connection;

    private void readObject(ObjectInputStream ois)
            throws IOException, ClassNotFoundException {
        ois.defaultReadObject();
        // Recreate transient objects
        this.connection = createConnection();
    }
}

// Use cases:
// 1. Sensitive data (passwords, keys)
// 2. Derived/calculated fields
// 3. Large cached data
// 4. Non-serializable objects (Thread, Socket, Connection)`,
      language: 'java'
    },
    topic: 'io',
    difficulty: 'mid',
    tags: ['transient', 'serialization', 'io', 'security'],    commonPitfalls: ['Forgetting to reinitialize transient fields', 'Expecting transient fields to have values', 'Not using transient for passwords'],
    realWorldUse: 'Protecting passwords, excluding cached data, handling non-serializable fields, security.'
  },
  {
    id: 'io-004',
    question: "What is the Externalizable interface and how does it differ from Serializable?",
    answer: "Externalizable extends Serializable but requires explicit writeExternal() and readExternal() methods. Gives complete control over serialization. Faster than Serializable (no reflection). Requires public no-arg constructor. Use for performance optimization or custom serialization logic.",
    explanation: "Serializable is automatic (Java handles it). Externalizable is manual (you control everything). Externalizable is faster but requires more code. No transient support (you control what gets saved).",
    translations: {
      tr: {
        question: "NIO (New I/O) nedir?",
        answer: "NIO (Java 1.4+) buffer-based, non-blocking I/O sağlar. Channel ve Buffer kullanır. Selector çoklu channel yönetir. Daha yüksek performans ve ölçeklenebilirlik.",
        explanation: "NIO büyük dosya ve çok sayıda bağlantı için geleneksel I/O'dan daha verimli."
      }
    },
    codeExample: {
      code: `// Externalizable - Manual serialization
class Employee implements Externalizable {
    private String name;
    private int age;
    private double salary;

    // REQUIRED: Public no-arg constructor
    public Employee() { }

    public Employee(String name, int age, double salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    @Override
    public void writeExternal(ObjectOutput out) throws IOException {
        // Manually write each field
        out.writeObject(name);
        out.writeInt(age);
        out.writeDouble(salary);
    }

    @Override
    public void readExternal(ObjectInput in)
            throws IOException, ClassNotFoundException {
        // Read in SAME ORDER
        this.name = (String) in.readObject();
        this.age = in.readInt();
        this.salary = in.readDouble();
    }
}

// Performance optimization
class OptimizedData implements Externalizable {
    private List<Integer> data;

    public OptimizedData() { }

    @Override
    public void writeExternal(ObjectOutput out) throws IOException {
        // Just write values, not entire List object
        out.writeInt(data.size());
        for (Integer value : data) {
            out.writeInt(value);
        }
    }

    @Override
    public void readExternal(ObjectInput in) throws IOException {
        int size = in.readInt();
        this.data = new ArrayList<>(size);
        for (int i = 0; i < size; i++) {
            data.add(in.readInt());
        }
    }
}

// Comparison:
// Serializable: Easy, automatic, slower (reflection)
// Externalizable: Full control, faster, more code`,
      language: 'java'
    },
    topic: 'io',
    difficulty: 'senior',
    tags: ['externalizable', 'serialization', 'performance', 'io'],    commonPitfalls: ['Forgetting no-arg constructor', 'Reading in different order', 'Not handling versioning', 'Expecting transient to work'],
    realWorldUse: 'High-performance serialization, custom protocols, data encryption, network optimization.'
  },

  // String Manipulation (Entry-Level)
  {
    id: 'string-101',
    question: "What are the most commonly used String methods in Java?",
    answer: "length(), charAt(index), substring(start, end), indexOf(str), contains(str), equals(str), equalsIgnoreCase(str), toLowerCase(), toUpperCase(), trim(), replace(old, new), split(regex), startsWith(prefix), endsWith(suffix), isEmpty(), concat(str). Strings are immutable - all methods return new String objects.",
    explanation: "String methods are extremely common in interviews. Remember: String is immutable, so methods like toUpperCase() return NEW strings. Use StringBuilder for multiple modifications.",
    translations: {
      tr: {
        question: "String literal ve new String() ile oluşturma arasındaki fark nedir?",
        answer: "Literal (\"Hello\"): String pool'da oluşturulur, paylaşılır. new String(): her zaman heap'te yeni nesne oluşturur, paylaşılmaz. Literal memory açısından verimlidir.",
        explanation: "Literal kullanmak tercih edilir - memory'yi optimize eder."
      }
    },
    codeExample: {
      code: `String str = "  Hello World  ";

// Length and character access
int len = str.length();  // 15 (includes spaces)
char c = str.charAt(2);  // 'H"

// Substring
String sub = str.substring(2, 7);  // "Hello"
String sub2 = str.substring(8);    // "World  "

// Search
int index = str.indexOf("World");  // 8
int lastIndex = str.lastIndexOf("o");  // 9
boolean contains = str.contains("Hello");  // true

// Comparison
String s1 = "hello";
String s2 = "HELLO";
boolean same = s1.equals(s2);  // false
boolean sameIgnoreCase = s1.equalsIgnoreCase(s2);  // true

// Case conversion
String upper = str.toUpperCase();  // "  HELLO WORLD  "
String lower = str.toLowerCase();  // "  hello world  "

// Trim whitespace
String trimmed = str.trim();  // "Hello World"

// Replace
String replaced = str.replace("World", "Java");  // "  Hello Java  "
String replacedChar = str.replace('l', 'L');  // "  HeLLo WorLd  "

// Split
String csv = "apple,banana,orange";
String[] fruits = csv.split(",");  // ["apple", "banana", "orange"]

// Check prefix/suffix
boolean starts = str.startsWith("  Hello");  // true
boolean ends = str.endsWith("World  ");  // true

// Empty check
String empty = "";
boolean isEmpty = empty.isEmpty();  // true
boolean isBlank = empty.isBlank();  // true (Java 11+)

// Concatenation
String s = "Hello";
String result = s.concat(" World");  // "Hello World"
// Or use +
String result2 = s + " World";  // "Hello World"

// Common interview problems:

// 1. Reverse a string
String original = "hello";
String reversed = new StringBuilder(original).reverse().toString();
// "olleh"

// 2. Check palindrome
boolean isPalindrome(String s) {
    String cleaned = s.toLowerCase().replaceAll("[^a-z0-9]", "");
    return cleaned.equals(new StringBuilder(cleaned).reverse().toString());
}

// 3. Count occurrences of character
int count = original.length() - original.replace("l", "").length();

// 4. Remove duplicates
String removeDuplicates(String s) {
    StringBuilder result = new StringBuilder();
    for (char c : s.toCharArray()) {
        if (result.indexOf(String.valueOf(c)) == -1) {
            result.append(c);
        }
    }
    return result.toString();
}

// 5. Anagram check
boolean isAnagram(String s1, String s2) {
    if (s1.length() != s2.length()) return false;
    char[] arr1 = s1.toCharArray();
    char[] arr2 = s2.toCharArray();
    Arrays.sort(arr1);
    Arrays.sort(arr2);
    return Arrays.equals(arr1, arr2);
}`,
      language: 'java'
    },
    topic: 'string',
    difficulty: 'junior',
    tags: ['string', 'string-methods', 'basics', 'interview'],    commonPitfalls: ['Thinking String is mutable', 'Using == instead of equals()', 'IndexOutOfBoundsException with charAt/substring', 'Not trimming input strings'],
    realWorldUse: 'Input validation, parsing, text processing, data cleaning, user input handling.'
  },
  {
    id: 'string-102',
    question: "What is the difference between String, StringBuilder, and StringBuffer?",
    answer: "String is immutable (cannot be changed). StringBuilder is mutable (can be modified), not thread-safe, fast. StringBuffer is mutable, thread-safe (synchronized), slower. Use String for fixed text, StringBuilder for single-threaded modifications, StringBuffer for thread-safe modifications.",
    explanation: "String concatenation in loops creates many objects (wasteful). StringBuilder is best for building strings. StringBuffer rarely needed (use StringBuilder + external synchronization if needed).",
    translations: {
      tr: {
        question: "String.intern() metodu ne yapar?",
        answer: "intern() String'i String pool'a ekler veya pool'daki mevcut String'i döndürür. Aynı içerikli String'ler aynı referansı paylaşır. Memory optimizasyonu sağlar.",
        explanation: "Çok sayıda duplicate String varsa intern() kullanışlıdır."
      }
    },
    codeExample: {
      code: `// STRING - Immutable
String s = "Hello";
s = s + " World";  // Creates NEW string object
// Original "Hello" becomes garbage

// Poor performance in loop
String result = "";
for (int i = 0; i < 1000; i++) {
    result += i;  // Creates 1000 String objects! BAD
}

// STRINGBUILDER - Mutable, NOT thread-safe, FAST
StringBuilder sb = new StringBuilder("Hello");
sb.append(" World");  // Modifies same object
sb.insert(5, " Beautiful");  // "Hello Beautiful World"
sb.delete(6, 16);  // "Hello World"
sb.reverse();  // "dlroW olleH"
String final = sb.toString();

// Good performance in loop
StringBuilder result = new StringBuilder();
for (int i = 0; i < 1000; i++) {
    result.append(i);  // Single object, efficient
}

// STRINGBUFFER - Mutable, thread-safe, SLOW
StringBuffer sbuf = new StringBuffer("Hello");
sbuf.append(" World");  // Thread-safe (synchronized)

// Common methods (same for StringBuilder and StringBuffer)
StringBuilder sb = new StringBuilder();
sb.append("Hello");
sb.append(" ").append("World");  // Method chaining
sb.insert(5, " Beautiful");
sb.delete(0, 6);
sb.deleteCharAt(0);
sb.reverse();
sb.replace(0, 5, "Hi");
int len = sb.length();
int capacity = sb.capacity();  // Current capacity
char c = sb.charAt(0);
String str = sb.toString();

// Capacity management
StringBuilder sb2 = new StringBuilder();  // Initial capacity 16
StringBuilder sb3 = new StringBuilder(100);  // Capacity 100
sb2.ensureCapacity(50);  // Ensure at least 50

// When to use what:

// String: Fixed text
String name = "John";
String greeting = "Hello " + name;  // OK for simple concat

// StringBuilder: Building strings (single thread)
StringBuilder sql = new StringBuilder();
sql.append("SELECT * FROM users ");
sql.append("WHERE age > 18 ");
sql.append("AND status = 'active'");

// StringBuffer: Thread-safe building (rare)
// Usually better to use StringBuilder + external sync
StringBuffer threadSafeLog = new StringBuffer();

// Performance comparison:
// String concatenation: O(n²) for n concatenations
// StringBuilder: O(n) for n appends

// Example: Building CSV
StringBuilder csv = new StringBuilder();
for (String item : items) {
    csv.append(item).append(",");
}
csv.deleteCharAt(csv.length() - 1);  // Remove last comma

// Interview tip:
// Always use StringBuilder for string building in loops!`,
      language: 'java'
    },
    topic: 'string',
    difficulty: 'junior',
    tags: ['string', 'stringbuilder', 'stringbuffer', 'performance'],    commonPitfalls: ['Using String concatenation in loops', 'Using StringBuffer when StringBuilder suffices', 'Not using StringBuilder capacity wisely'],
    realWorldUse: 'Building SQL queries, CSV generation, JSON construction, log messages, report generation.'
  },
  {
    id: 'string-103',
    question: "Why is String immutable in Java? What are the benefits?",
    answer: "String is immutable for: 1) Security (URLs, file paths, passwords), 2) Thread safety (no synchronization needed), 3) String pool optimization (memory savings), 4) Hashcode caching (used in HashMap keys), 5) Performance. Once created, String content cannot change.",
    explanation: "Immutability means String objects cannot be modified. Any \"modification\" creates a new String. This design enables string pool, thread safety, and security benefits.",
    translations: {
      tr: {
        question: "String immutable olmasına rağmen nasıl değiştirilebilir?",
        answer: "String değiştirilemez. \"Değişiklik\" yeni String oluşturur. Orijinal String değişmez. concat(), replace(), substring() yeni String'ler döndürür.",
        explanation: "Her String işlemi yeni nesne oluşturur - bu yüzden çok concat için StringBuilder kullanın."
      }
    },
    codeExample: {
      code: `// String is immutable - cannot be changed
String s = "Hello";
s.concat(" World");  // Returns NEW string
System.out.println(s);  // Still "Hello" - original unchanged!

// Must assign to see change
s = s.concat(" World");  // Now s points to new object
System.out.println(s);  // "Hello World"

// Benefits:

// 1. SECURITY - Strings used in sensitive operations
void openFile(String filename) {
    // If String were mutable, another thread could change
    // filename AFTER validation but BEFORE opening!
    if (isValid(filename)) {
        // filename guaranteed unchanged here
        File f = new File(filename);
    }
}

// Database connection
Connection conn = DriverManager.getConnection(
    "jdbc:mysql://localhost/db",  // URL can't be changed
    "user",    // Username safe
    "pass"     // Password safe
);

// 2. THREAD SAFETY - No synchronization needed
String shared = "Hello";
// Multiple threads can read safely
// No race conditions possible

// 3. STRING POOL - Memory optimization
String s1 = "Hello";
String s2 = "Hello";
String s3 = "Hello";
// All three reference SAME object in string pool!
// s1 == s2 == s3 (true)

// Only possible because Strings are immutable
// If mutable, changing s1 would affect s2 and s3!

// 4. HASHCODE CACHING - Performance
String key = "username";
int hash = key.hashCode();  // Calculated once
// Hashcode stored in String object
// Future calls return cached value

// Critical for HashMap/HashSet keys
Map<String, User> users = new HashMap<>();
users.put("john", user1);  // Uses cached hashcode
// If String were mutable, hashcode would change!

// 5. CLASS LOADING
// Class names are Strings
// Must be immutable for security
Class.forName("com.example.MyClass");

// How immutability works internally:
public final class String {
    private final char[] value;  // Final array reference
    private int hash;  // Cached hashcode

    // No setters - no way to modify
    // All methods return new Strings
}

// Creating new Strings vs reusing:
String s1 = "Hello";  // Goes to string pool
String s2 = "Hello";  // Reuses from pool
System.out.println(s1 == s2);  // true

String s3 = new String("Hello");  // NEW object (heap)
System.out.println(s1 == s3);  // false
System.out.println(s1.equals(s3));  // true

// String pool benefit:
String[] arr = new String[1000];
for (int i = 0; i < 1000; i++) {
    arr[i] = "Hello";  // All reference same object!
}
// Only 1 String object created, not 1000

// If you need mutability, use StringBuilder
StringBuilder mutable = new StringBuilder("Hello");
mutable.append(" World");  // Modifies same object`,
      language: 'java'
    },
    topic: 'string',
    difficulty: 'mid',
    tags: ['string', 'immutability', 'thread-safety', 'string-pool'],    commonPitfalls: ['Expecting String methods to modify the object', 'Creating too many String objects in loops', 'Using == for String comparison'],
    realWorldUse: 'Thread-safe code, HashMap keys, security in file operations, memory optimization.'
  },
  {
    id: 'string-104',
    question: "What is the String pool in Java? How does it work?",
    answer: "String pool (intern pool) is a special memory area in heap where Java stores String literals. When you create a String literal, Java checks pool first - if exists, returns reference; if not, adds to pool. Saves memory by reusing String objects. Use intern() to add String to pool.",
    explanation: "String pool enables memory optimization. Literals are automatically pooled. new String() creates heap object outside pool. intern() method moves/checks String in pool.",
    translations: {
      tr: {
        question: "String'de substring memory leak nasıl oluşur?",
        answer: "Java 6'da substring orijinal String'in char array'ini paylaşırdı. Küçük substring büyük array'i bellekte tutardı. Java 7+ substring yeni array oluşturur - leak yok.",
        explanation: "Modern Java'da substring güvenlidir ancak eski kodda dikkatli olun."
      }
    },
    codeExample: {
      code: `// STRING POOL - Special memory area for String literals

// Literal - goes to pool automatically
String s1 = "Hello";
String s2 = "Hello";
String s3 = "Hello";

// All three reference SAME object in pool
System.out.println(s1 == s2);  // true
System.out.println(s2 == s3);  // true

// new String() - creates object in HEAP (outside pool)
String s4 = new String("Hello");
System.out.println(s1 == s4);  // false (different objects)
System.out.println(s1.equals(s4));  // true (same content)

// Memory visualization:
// String Pool:
//   "Hello" <-- s1, s2, s3 all point here
// Heap:
//   "Hello" <-- s4 points here (separate object)

// intern() method - add to pool
String s5 = new String("Hello").intern();
System.out.println(s1 == s5);  // true (now in pool)

// How intern() works:
String s6 = new String("World");
String s7 = s6.intern();
// 1. Check if "World" exists in pool
// 2. If yes, return pool reference
// 3. If no, add to pool and return reference

// Practical example: Memory saving
// Bad - creates 1000 String objects
String[] names1 = new String[1000];
for (int i = 0; i < 1000; i++) {
    names1[i] = new String("John");  // 1000 objects
}

// Good - reuses 1 String object from pool
String[] names2 = new String[1000];
for (int i = 0; i < 1000; i++) {
    names2[i] = "John";  // All reference same pooled object
}

// String concatenation and pool
String s8 = "Hello" + "World";  // Compile-time constant
String s9 = "HelloWorld";
System.out.println(s8 == s9);  // true (both in pool)

// Runtime concatenation - NOT pooled
String s10 = "Hello";
String s11 = s10 + "World";  // Runtime concat
String s12 = "HelloWorld";
System.out.println(s11 == s12);  // false

// Use intern() for runtime Strings
String s13 = (s10 + "World").intern();
System.out.println(s13 == s12);  // true

// When to use intern():
// 1. Reading many duplicate strings from file/database
Set<String> uniqueWords = new HashSet<>();
while (scanner.hasNext()) {
    String word = scanner.next().intern();  // Reuse pooled
    uniqueWords.add(word);
}

// 2. Reducing memory in large datasets
List<Person> people = new ArrayList<>();
for (Data data : dataset) {
    // Many people have same city
    String city = data.getCity().intern();  // Reuse
    people.add(new Person(data.getName(), city));
}

// Warning: intern() can cause memory leaks in old Java
// String pool was in PermGen (limited, never GC'd)
// Java 7+: String pool in heap (can be GC'd)

// String pool size
// Java 7+: -XX:StringTableSize=<size>
// Default: 60013 (Java 8+)

// Best practices:
// ✓ Use literals when possible: "Hello"
// ✓ Use intern() for duplicate runtime strings
// ✗ Don't intern() unique strings
// ✗ Don't use new String("literal")

// Common interview question:
String s = new String("Hello");
// How many objects created? TWO
// 1. "Hello" literal in pool
// 2. new String object in heap`,
      language: 'java'
    },
    topic: 'string',
    difficulty: 'mid',
    tags: ['string', 'string-pool', 'memory', 'intern'],    commonPitfalls: ['Using new String("literal")', 'Interning unique strings', 'Using == for String comparison', 'Not understanding pool vs heap'],
    realWorldUse: 'Memory optimization, processing large text files, database result caching, configuration values.'
  },
  {
    id: 'string-005',
    question: "How do you compare Strings in Java? What is the difference between == and equals()?",
    answer: "== compares references (memory addresses) - checks if two variables point to same object. equals() compares content (values) - checks if two Strings have same characters. Always use equals() for String comparison, unless you specifically need reference equality.",
    explanation: "Common interview mistake: using == for Strings. == checks if same object in memory. equals() checks if same content. equalsIgnoreCase() ignores case. compareTo() for ordering.",
    translations: {
      tr: {
        question: "String concatenation (+) vs concat() metodu",
        answer: "+ operatörü: derleme zamanında StringBuilder kullanır, daha okunabilir. concat(): doğrudan String oluşturur, biraz daha hızlı. Çok concat için StringBuilder tercih edilir.",
        explanation: "Tek concat için + kullanın, döngüde StringBuilder kullanın."
      }
    },
    codeExample: {
      code: `// == vs equals()

// == compares REFERENCES (memory address)
String s1 = "Hello";
String s2 = "Hello";
String s3 = new String("Hello");

System.out.println(s1 == s2);     // true (same pool object)
System.out.println(s1 == s3);     // false (different objects)

// equals() compares CONTENT
System.out.println(s1.equals(s2));  // true
System.out.println(s1.equals(s3));  // true

// Visual representation:
// Pool: "Hello" <-- s1, s2
// Heap: "Hello" <-- s3
// s1 == s2: true (same address)
// s1 == s3: false (different address)
// s1.equals(s3): true (same content)

// equalsIgnoreCase() - case-insensitive comparison
String s4 = "HELLO";
System.out.println(s1.equals(s4));  // false
System.out.println(s1.equalsIgnoreCase(s4));  // true

// compareTo() - lexicographic comparison
String s5 = "apple";
String s6 = "banana";
int result = s5.compareTo(s6);
// result < 0: s5 comes before s6
// result = 0: s5 equals s6
// result > 0: s5 comes after s6
System.out.println(result);  // negative (apple < banana)

// Case-insensitive ordering
result = s5.compareToIgnoreCase(s6);

// Common interview pitfall:
String input = getUserInput();
if (input == "yes") {  // WRONG! Don't use ==
    // This will almost always be false
}

if (input.equals("yes")) {  // CORRECT
    // Use equals() for content comparison
}

// Null-safe comparison (Java 7+)
String s7 = null;
String s8 = "Hello";

// Unsafe - NullPointerException
// s7.equals(s8);  // Throws NPE

// Safe - null check
if (s7 != null && s7.equals(s8)) {
    // Safe
}

// Better - compare to literal (never null)
if ("Hello".equals(s7)) {  // Safe, returns false
    // Literal first prevents NPE
}

// Objects.equals() - null-safe (Java 7+)
boolean equal = Objects.equals(s7, s8);  // false, no NPE

// Practical examples:

// 1. User input validation
String password = getPassword();
if (password.equals("admin123")) {  // Use equals()
    grantAccess();
}

// 2. Sorting strings
List<String> names = Arrays.asList("Charlie", "Alice", "Bob");
Collections.sort(names);  // Uses compareTo()
// Result: [Alice, Bob, Charlie]

// Custom comparator
Collections.sort(names, String.CASE_INSENSITIVE_ORDER);

// 3. Switch statement (uses equals internally)
String day = "Monday";
switch (day) {
    case "Monday":    // Uses equals(), not ==
        break;
}

// 4. HashMap keys
Map<String, Integer> map = new HashMap<>();
map.put("key", 1);
String k = new String("key");
int value = map.get(k);  // Uses equals() to find key

// Best practices:
// ✓ Use equals() for content comparison
// ✓ Use == only when checking for same object (rare)
// ✓ Put literal first: "literal".equals(variable)
// ✓ Use Objects.equals() for null-safety
// ✗ Never use == for String comparison in logic`,
      language: 'java'
    },
    topic: 'string',
    difficulty: 'junior',
    tags: ['string', 'comparison', 'equals', 'interview'],    commonPitfalls: ['Using == instead of equals()', 'NullPointerException when calling equals()', 'Case-sensitive comparison when not intended'],
    realWorldUse: 'User input validation, password checking, sorting, HashMap keys, configuration comparison.'
  },

  {
    id: 'string-006',
    question: "How do you format Strings in Java? What are the different ways?",
    answer: "Main methods: 1) String.format() - returns formatted String, 2) System.out.printf() - prints directly, 3) StringBuilder with append(), 4) String concatenation (+). String.format() and printf() use format specifiers like %s (String), %d (integer), %f (float), %.2f (2 decimal places).",
    explanation: "String formatting is crucial for output, reports, logging, and data presentation. String.format() and printf() use the same format specifiers as C's printf. Very commonly asked in interviews for formatting numbers, dates, and creating aligned output.",
    translations: {
      tr: {
        question: "String'de charAt() vs toCharArray() performansı",
        answer: "charAt(): tek karakter erişimi, O(1). toCharArray(): tüm array'i kopyalar, O(n). Tek karakter için charAt(), birden fazla karakter için toCharArray() kullanın.",
        explanation: "Gerektiğinde uygun metodu kullanmak performansı optimize eder."
      }
    },
    codeExample: {
      code: `// String formatting methods
String name = "Alice";
int age = 25;
double salary = 75000.50;

// 1. String.format() - returns formatted string
String msg1 = String.format("Name: %s, Age: %d, Salary: $%.2f", name, age, salary);
// Output: "Name: Alice, Age: 25, Salary: $75000.50"

// 2. printf() - prints directly
System.out.printf("Name: %s, Age: %d%n", name, age);

// Common format specifiers:
// %s - String
// %d - decimal integer
// %f - floating point
// %.2f - float with 2 decimal places
// %n - newline (platform independent)
// %x - hexadecimal
// %c - character

// Padding and alignment
System.out.printf("|%10s|%n", "text");      // |      text| (right-aligned)
System.out.printf("|%-10s|%n", "text");     // |text      | (left-aligned)
System.out.printf("|%010d|%n", 42);         // |0000000042| (zero-padded)

// Interview question: Format table output
String[] names = {"John", "Alice", "Bob"};
int[] scores = {95, 87, 92};

System.out.printf("%-10s %10s%n", "Name", "Score");
System.out.printf("%-10s %10s%n", "----", "-----");
for (int i = 0; i < names.length; i++) {
    System.out.printf("%-10s %10d%n", names[i], scores[i]);
}
// Output:
// Name            Score
// ----            -----
// John               95
// Alice              87
// Bob                92

// 3. StringBuilder for complex building
StringBuilder sb = new StringBuilder();
sb.append("Name: ").append(name)
  .append(", Age: ").append(age);

// 4. Text blocks (Java 15+) for multiline
String json = ""
    {
        "name": "%s",
        "age": %d
    }
    """.formatted(name, age);`,
      language: 'java'
    },
    topic: 'string',
    difficulty: 'junior',
    tags: ['string', 'formatting', 'printf', 'output', 'interview'],    commonPitfalls: ['Wrong format specifier causing IllegalFormatException', 'Forgetting %n for newline', 'Not understanding padding and alignment', 'Mixing up argument order'],
    realWorldUse: 'Report generation, logging, data export, console output, invoice formatting, receipt printing.'
  },

  {
    id: 'string-007',
    question: "How do you convert between String and other data types in Java?",
    answer: "To String: String.valueOf(), Integer.toString(), or concatenate with \"\". From String: Integer.parseInt(), Double.parseDouble(), Boolean.parseBoolean(). Use wrapper class valueOf() for boxed types (Integer.valueOf()). Be careful of NumberFormatException for invalid input.",
    explanation: "Type conversion is extremely common in interviews and real projects - parsing user input, reading files, API responses, database queries. Understanding the difference between parseInt() (returns primitive) and valueOf() (returns wrapper object) is important.",
    translations: {
      tr: {
        question: "String.format() vs concatenation performansı",
        answer: "format(): esnek, okunabilir, yavaş (parsing overhead). Concatenation: hızlı, basit durumlar için. Formatlama için format(), basit birleştirme için concat kullanın.",
        explanation: "Esnekliği hıza tercih edin ancak performans kritikse concat kullanın."
      }
    },
    codeExample: {
      code: `// Converting TO String
int num = 42;
double price = 19.99;
boolean flag = true;

String s1 = String.valueOf(num);        // "42" - works for any type
String s2 = Integer.toString(num);      // "42" - explicit
String s3 = "" + num;                   // "42" - concatenation (not recommended)
String s4 = String.valueOf(price);      // "19.99"

// Converting FROM String (common interview topic!)
String str = "123";
int i = Integer.parseInt(str);          // 123 (primitive int)
Integer iObj = Integer.valueOf(str);    // 123 (Integer object)
double d = Double.parseDouble("19.99"); // 19.99
boolean b = Boolean.parseBoolean("true"); // true

// Interview question: Parse with error handling
public static Integer safeParseInt(String str) {
    try {
        return Integer.parseInt(str);
    } catch (NumberFormatException e) {
        return null;  // or throw custom exception
    }
}

// Common interview trap:
String invalidNum = "abc";
try {
    int result = Integer.parseInt(invalidNum);  // NumberFormatException!
} catch (NumberFormatException e) {
    System.out.println("Invalid number: " + e.getMessage());
}

// String to char array and back
String text = "hello";
char[] chars = text.toCharArray();      // ['h', 'e', 'l', 'l', 'o']
String reconstructed = new String(chars); // "hello"

// String to byte array (for encoding)
byte[] bytes = text.getBytes();         // Default charset
String decoded = new String(bytes);     // Back to String

// Interview tip: Difference between parseInt and valueOf
int primitive = Integer.parseInt("100");    // returns int (faster)
Integer object = Integer.valueOf("100");    // returns Integer (uses cache for -128 to 127)

// Practical example: Parse CSV
String csv = "John,25,75000.50";
String[] parts = csv.split(",");
String name = parts[0];
int age = Integer.parseInt(parts[1]);
double salary = Double.parseDouble(parts[2]);`,
      language: 'java'
    },
    topic: 'string',
    difficulty: 'junior',
    tags: ['string', 'conversion', 'parsing', 'type-conversion', 'interview'],    commonPitfalls: ['Not handling NumberFormatException', 'Confusing parseInt() vs valueOf()', 'Using + for type conversion (poor practice)', 'Not trimming input before parsing'],
    realWorldUse: 'User input processing, file parsing, API data handling, database queries, configuration reading, CSV parsing.'
  },

  {
    id: 'string-008',
    question: "What are common String manipulation interview problems you should know?",
    answer: "Key problems: 1) Check palindrome, 2) Reverse a string, 3) Check anagram, 4) First non-repeating character, 5) Count character occurrences, 6) Remove duplicates, 7) String compression, 8) Longest substring without repeating characters. Practice with StringBuilder for efficiency.",
    explanation: "These are bread-and-butter interview questions asked at ALL levels and companies. Understanding these patterns helps solve many string-related problems. Focus on time/space complexity: HashMap for counting (O(n)), StringBuilder for building (O(n)).",
    translations: {
      tr: {
        question: "String comparison için en iyi uygulamalar nelerdir?",
        answer: "equals() kullanın, == değil. equalsIgnoreCase() case-insensitive için. compareTo() sıralama için. null kontrolleri yapın. Objects.equals() null-safe karşılaştırma için.",
        explanation: "Doğru karşılaştırma metodu NullPointerException ve mantık hatalarını önler."
      }
    },
    codeExample: {
      code: `// 1. Check if palindrome (reads same forwards and backwards)
public static boolean isPalindrome(String s) {
    int left = 0, right = s.length() - 1;
    while (left < right) {
        if (s.charAt(left++) != s.charAt(right--)) {
            return false;
        }
    }
    return true;
}
// Time: O(n), Space: O(1)

// 2. Reverse string
public static String reverse(String s) {
    return new StringBuilder(s).reverse().toString();
}
// Or manually:
public static String reverseManual(String s) {
    char[] chars = s.toCharArray();
    int left = 0, right = chars.length - 1;
    while (left < right) {
        char temp = chars[left];
        chars[left++] = chars[right];
        chars[right--] = temp;
    }
    return new String(chars);
}

// 3. Check if two strings are anagrams
public static boolean isAnagram(String s1, String s2) {
    if (s1.length() != s2.length()) return false;

    int[] count = new int[26];  // For lowercase a-z
    for (int i = 0; i < s1.length(); i++) {
        count[s1.charAt(i) - 'a']++;
        count[s2.charAt(i) - 'a']--;
    }

    for (int c : count) {
        if (c != 0) return false;
    }
    return true;
}
// Time: O(n), Space: O(1) - fixed size array

// 4. First non-repeating character
public static char firstNonRepeating(String s) {
    Map<Character, Integer> count = new HashMap<>();

    // Count occurrences
    for (char c : s.toCharArray()) {
        count.put(c, count.getOrDefault(c, 0) + 1);
    }

    // Find first with count 1
    for (char c : s.toCharArray()) {
        if (count.get(c) == 1) {
            return c;
        }
    }
    return '_';  // No non-repeating character
}

// 5. Count character occurrences
public static Map<Character, Integer> countChars(String s) {
    Map<Character, Integer> map = new HashMap<>();
    for (char c : s.toCharArray()) {
        map.put(c, map.getOrDefault(c, 0) + 1);
    }
    return map;
}

// 6. Remove duplicate characters (keep first occurrence)
public static String removeDuplicates(String s) {
    Set<Character> seen = new HashSet<>();
    StringBuilder result = new StringBuilder();

    for (char c : s.toCharArray()) {
        if (!seen.contains(c)) {
            seen.add(c);
            result.append(c);
        }
    }
    return result.toString();
}

// Interview tip: Always analyze time and space complexity!`,
      language: 'java'
    },
    topic: 'string',
    difficulty: 'mid',
    tags: ['string', 'algorithms', 'interview', 'palindrome', 'anagram', 'problem-solving'],    commonPitfalls: ['Not considering case sensitivity', 'Forgetting to handle empty strings', 'Using String concatenation in loops (O(n²))', 'Not using HashMap for counting problems'],
    realWorldUse: 'Data validation, duplicate detection, text processing, pattern matching, data cleaning, user input sanitization.'
  },

  // Arrays
  {
    id: 'array-001',
    question: "How do you declare and initialize arrays in Java? What are the different ways?",
    answer: "Declaration: int[] arr or int arr[]. Initialization: 1) new int[size] (default values), 2) {1, 2, 3} (array literal), 3) new int[]{1, 2, 3} (anonymous array). Arrays have fixed size. Default values: 0 for numbers, false for boolean, null for objects.",
    explanation: "Arrays are fundamental data structures. Understanding declaration, initialization, and default values is crucial. Arrays are fixed-size, indexed from 0. Very commonly asked in entry-level interviews.",
    translations: {
      tr: {
        question: "Java'da array nedir?",
        answer: "Array aynı tipte elemanların sabit boyutlu koleksiyonudur. Index 0'dan başlar. Primitive veya object içerebilir. Boyut değiştirilemez.",
        explanation: "Array basit ve hızlıdır ancak sabit boyutludur - esnek yapılar için List kullanın."
      }
    },
    codeExample: {
      code: `// 1. Declaration (creating reference, not array yet)
int[] numbers;        // Preferred style
int numbers2[];       // Also valid, C-style

String[] names;
double[] prices;

// 2. Declaration + initialization (size only, default values)
int[] arr1 = new int[5];        // [0, 0, 0, 0, 0]
boolean[] flags = new boolean[3]; // [false, false, false]
String[] words = new String[2];  // [null, null]

// 3. Declaration + initialization (with values)
int[] arr2 = {1, 2, 3, 4, 5};           // Array literal
String[] days = {"Mon", "Tue", "Wed"};  // Array literal

// 4. Anonymous array (useful for method calls)
int[] arr3 = new int[]{10, 20, 30};
printArray(new int[]{1, 2, 3});  // Pass array directly

// 5. Array properties
int[] nums = {10, 20, 30};
int length = nums.length;  // 3 (not a method!)
int first = nums[0];       // 10 (index starts at 0)
int last = nums[nums.length - 1];  // 30

// 6. Multi-dimensional arrays
int[][] matrix = new int[3][4];  // 3 rows, 4 columns
int[][] matrix2 = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

// Jagged array (different row sizes)
int[][] jagged = new int[3][];
jagged[0] = new int[2];
jagged[1] = new int[3];
jagged[2] = new int[1];

// 7. Default values by type:
// byte, short, int, long: 0
// float, double: 0.0
// char: '\\u0000' (null character)
// boolean: false
// Object references: null

// Common interview question: Initialize with specific value
int[] arr = new int[5];
Arrays.fill(arr, 10);  // [10, 10, 10, 10, 10]

// Range fill (Java 8+)
int[] range = IntStream.range(0, 5).toArray();  // [0, 1, 2, 3, 4]
int[] repeat = IntStream.generate(() -> 1).limit(5).toArray();  // [1, 1, 1, 1, 1]`,
      language: 'java'
    },
    topic: 'arrays',
    difficulty: 'junior',
    tags: ['arrays', 'initialization', 'declaration', 'basics'],    commonPitfalls: ['ArrayIndexOutOfBoundsException', 'Using .length() instead of .length', 'Forgetting arrays are 0-indexed', 'Not initializing before use'],
    realWorldUse: 'Storing collections of data, matrices, lookup tables, fixed-size data structures, coordinate systems.'
  },

  {
    id: 'array-002',
    question: "What are common array operations and methods in Java?",
    answer: "Key operations: 1) Access by index arr[i], 2) Modify arr[i] = value, 3) Iterate (for/for-each), 4) Arrays.toString() for printing, 5) Arrays.sort() for sorting, 6) Arrays.binarySearch() for searching, 7) Arrays.copyOf() for copying, 8) Arrays.equals() for comparison, 9) Arrays.fill() for filling.",
    explanation: "Arrays class (java.util.Arrays) provides utility methods. These are essential for array manipulation and frequently asked in interviews. Understanding time complexity of operations is important.",
    translations: {
      tr: {
        question: "Array nasıl oluşturulur ve başlatılır?",
        answer: "İki yol: 1) int[] arr = new int[5]; (varsayılan değerlerle), 2) int[] arr = {1,2,3,4,5}; (değerlerle). Çok boyutlu: int[][] matrix = new int[3][4];",
        explanation: "Bilinen değerler varsa {} kullanın, boyut bellidir değerler sonra gelirse new kullanın."
      }
    },
    codeExample: {
      code: `import java.util.Arrays;

int[] arr = {5, 2, 8, 1, 9};

// 1. Accessing elements
int first = arr[0];     // 5
int last = arr[arr.length - 1];  // 9

// 2. Modifying elements
arr[0] = 10;  // [10, 2, 8, 1, 9]

// 3. Iterate with traditional for loop
for (int i = 0; i < arr.length; i++) {
    System.out.println(arr[i]);
}

// 4. Iterate with enhanced for loop (for-each)
for (int num : arr) {
    System.out.println(num);
}

// 5. Print array (DON'T use toString() directly!)
System.out.println(arr);  // BAD: [I@15db9742 (hashcode)
System.out.println(Arrays.toString(arr));  // GOOD: [10, 2, 8, 1, 9]

// 6. Sort array (modifies original)
Arrays.sort(arr);  // [1, 2, 8, 9, 10]
// Time: O(n log n), Space: O(log n)

// Sort range
int[] arr2 = {5, 2, 8, 1, 9};
Arrays.sort(arr2, 0, 3);  // Sort first 3 elements: [2, 5, 8, 1, 9]

// 7. Binary search (array MUST be sorted!)
int index = Arrays.binarySearch(arr, 8);  // 2
int notFound = Arrays.binarySearch(arr, 3);  // -3 (insertion point -1)
// Time: O(log n)

// 8. Copy array
int[] copy1 = Arrays.copyOf(arr, arr.length);  // Full copy
int[] copy2 = Arrays.copyOf(arr, 3);           // Copy first 3
int[] copy3 = Arrays.copyOfRange(arr, 1, 4);   // Copy index 1-3

// 9. Compare arrays (element by element)
int[] a = {1, 2, 3};
int[] b = {1, 2, 3};
boolean same = Arrays.equals(a, b);  // true
boolean sameRef = (a == b);          // false (different objects)

// 10. Fill array with value
int[] filled = new int[5];
Arrays.fill(filled, 7);  // [7, 7, 7, 7, 7]
Arrays.fill(filled, 1, 3, 9);  // [7, 9, 9, 7, 7] (range 1-2)

// 11. Find min/max (no built-in method, use loop or Stream)
int[] nums = {5, 2, 8, 1, 9};
int min = Arrays.stream(nums).min().getAsInt();  // 1
int max = Arrays.stream(nums).max().getAsInt();  // 9

// Manual way:
int minVal = nums[0];
for (int num : nums) {
    if (num < minVal) minVal = num;
}

// 12. Convert array to List (fixed-size!)
Integer[] boxed = {1, 2, 3};
List<Integer> list = Arrays.asList(boxed);
// WARNING: list.add() throws UnsupportedOperationException

// Better: Create mutable list
List<Integer> mutableList = new ArrayList<>(Arrays.asList(boxed));`,
      language: 'java'
    },
    topic: 'arrays',
    difficulty: 'junior',
    tags: ['arrays', 'operations', 'Arrays-class', 'methods'],    commonPitfalls: ['Using binarySearch on unsorted array', 'Modifying Arrays.asList() result', 'Using arr.toString() instead of Arrays.toString()', 'Off-by-one errors in loops'],
    realWorldUse: 'Data sorting, searching, copying, comparison, data processing, algorithms implementation.'
  },

  {
    id: 'array-003',
    question: "What is the difference between arrays and ArrayList in Java?",
    answer: "Array: Fixed size, can hold primitives, faster, uses [] syntax. ArrayList: Dynamic size (resizable), only holds objects (uses autoboxing), slower, uses methods (add/remove/get). Arrays are lower-level, ArrayList provides more functionality.",
    explanation: "This is a very common interview question. Arrays are primitive data structures, ArrayList is a class. Choose arrays for fixed-size, performance-critical code; ArrayList for flexibility.",
    translations: {
      tr: {
        question: "Array length özelliği nasıl çalışır?",
        answer: "length array'in eleman sayısını döndüren final değişkendir (metod değil). arr.length şeklinde kullanılır. Değiştirilemez.",
        explanation: "length array'in sabit boyutunu verir - ArrayList.size() ile karıştırılmamalı."
      }
    },
    codeExample: {
      code: `// ARRAY - Fixed size, primitives
int[] arr = new int[5];     // Size fixed at creation
arr[0] = 10;                // Direct access with []
int val = arr[0];
int size = arr.length;      // Property (not method!)

// Cannot resize:
// arr[5] = 20;  // ArrayIndexOutOfBoundsException!

// ARRAYLIST - Dynamic size, objects only
ArrayList<Integer> list = new ArrayList<>();  // Initial capacity 10
list.add(10);               // Auto-grows as needed
list.add(20);
list.add(30);
int val2 = list.get(0);     // Method call
int size2 = list.size();    // Method call

// Can grow:
for (int i = 0; i < 1000; i++) {
    list.add(i);  // No problem, auto-resizes
}

// Performance comparison:
// Array: Direct memory access, O(1) read/write
// ArrayList: Indirection + bounds checking, slightly slower

// Memory:
int[] intArr = new int[1000];  // 4KB (4 bytes * 1000)
ArrayList<Integer> intList = new ArrayList<>();
for (int i = 0; i < 1000; i++) intList.add(i);
// Much larger: Integer objects + ArrayList overhead

// Primitives:
int[] prims = {1, 2, 3};    // OK
// ArrayList<int> wrong;    // ERROR: primitives not allowed
ArrayList<Integer> boxed = new ArrayList<>();  // Must use wrapper

// When to use what:
// ✓ Array: Fixed size, primitives, performance-critical, simple data
// ✓ ArrayList: Dynamic size, need add/remove, flexibility

// Interview question: Convert between them
// Array to ArrayList
Integer[] arr2 = {1, 2, 3};
ArrayList<Integer> list2 = new ArrayList<>(Arrays.asList(arr2));

// ArrayList to Array
ArrayList<Integer> list3 = new ArrayList<>();
list3.add(1); list3.add(2); list3.add(3);
Integer[] arr3 = list3.toArray(new Integer[0]);

// Primitive array from ArrayList (manual)
int[] primArr = list3.stream().mapToInt(i -> i).toArray();`,
      language: 'java'
    },
    topic: 'arrays',
    difficulty: 'junior',
    tags: ['arrays', 'arraylist', 'comparison', 'collections'],    commonPitfalls: ['Using ArrayList for primitives (performance loss)', 'Resizing arrays manually', 'Confusing .length and .size()', 'Using [] syntax with ArrayList'],
    realWorldUse: 'Choosing right data structure, performance optimization, memory management, data collection handling.'
  },

  {
    id: 'array-004',
    question: "How do you find duplicates in an array?",
    answer: "Multiple approaches: 1) Nested loops O(n²), 2) HashSet O(n) - best for unsorted, 3) Sort first then check adjacent O(n log n), 4) Frequency map O(n) - counts occurrences. HashSet approach is most common and efficient for interviews.",
    explanation: "Finding duplicates is a classic interview question. Understanding different approaches and their trade-offs (time vs space complexity) is important. HashSet approach is optimal for most cases.",
    translations: {
      tr: {
        question: "Array kopyalama yöntemleri nelerdir?",
        answer: "1) System.arraycopy(): native, hızlı. 2) Arrays.copyOf(): yeni array oluşturur. 3) clone(): shallow copy. 4) Manual loop. System.arraycopy en hızlısı.",
        explanation: "Shallow copy referansları kopyalar, deep copy için manuel implementasyon gerekir."
      }
    },
    codeExample: {
      code: `// Method 1: HashSet (BEST - O(n) time, O(n) space)
public static List<Integer> findDuplicates(int[] arr) {
    Set<Integer> seen = new HashSet<>();
    List<Integer> duplicates = new ArrayList<>();

    for (int num : arr) {
        if (seen.contains(num)) {
            duplicates.add(num);
        } else {
            seen.add(num);
        }
    }
    return duplicates;
}
// Time: O(n), Space: O(n)

// Method 2: Check if has duplicates (boolean)
public static boolean hasDuplicates(int[] arr) {
    Set<Integer> set = new HashSet<>();
    for (int num : arr) {
        if (!set.add(num)) {  // add() returns false if already exists
            return true;
        }
    }
    return false;
}

// Method 3: Sort first, then check adjacent
public static boolean hasDuplicatesSorted(int[] arr) {
    Arrays.sort(arr);  // O(n log n)
    for (int i = 1; i < arr.length; i++) {
        if (arr[i] == arr[i-1]) {
            return true;
        }
    }
    return false;
}
// Time: O(n log n), Space: O(1)
// Good when: Space is limited, array can be modified

// Method 4: Frequency map (count all occurrences)
public static Map<Integer, Integer> findDuplicateCount(int[] arr) {
    Map<Integer, Integer> freq = new HashMap<>();

    for (int num : arr) {
        freq.put(num, freq.getOrDefault(num, 0) + 1);
    }

    // Filter only duplicates (count > 1)
    Map<Integer, Integer> duplicates = new HashMap<>();
    for (Map.Entry<Integer, Integer> entry : freq.entrySet()) {
        if (entry.getValue() > 1) {
            duplicates.put(entry.getKey(), entry.getValue());
        }
    }
    return duplicates;
}
// Time: O(n), Space: O(n)

// Method 5: Brute force (NOT RECOMMENDED)
public static boolean hasDuplicatesBrute(int[] arr) {
    for (int i = 0; i < arr.length; i++) {
        for (int j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                return true;
            }
        }
    }
    return false;
}
// Time: O(n²), Space: O(1)
// Only use for very small arrays

// Interview example:
int[] numbers = {1, 2, 3, 2, 4, 5, 1};
System.out.println(findDuplicates(numbers));  // [2, 1]
System.out.println(hasDuplicates(numbers));   // true`,
      language: 'java'
    },
    topic: 'arrays',
    difficulty: 'mid',
    tags: ['arrays', 'duplicates', 'algorithms', 'interview', 'hashset'],    commonPitfalls: ['Using O(n²) brute force', 'Not considering space complexity', 'Modifying original array when not allowed', 'Not handling empty arrays'],
    realWorldUse: 'Data validation, duplicate detection, data cleaning, email validation, user registration, inventory systems.'
  },

  {
    id: 'array-005',
    question: "How do you reverse an array in Java?",
    answer: "Two main approaches: 1) Two-pointer swap in-place O(n) time, O(1) space, 2) Create new array copying backwards O(n) time, O(n) space. For ArrayList, use Collections.reverse(). In-place reversal is most efficient for interviews.",
    explanation: "Array reversal is a fundamental operation tested in interviews. Understanding in-place vs creating new array is important. Two-pointer technique is crucial for many array problems.",
    translations: {
      tr: {
        question: "ArrayIndexOutOfBoundsException ne zaman oluşur?",
        answer: "Geçersiz index erişiminde: negatif veya >= length. arr[arr.length] hata verir (son index arr.length-1). Runtime exception.",
        explanation: "Index sınırlarını kontrol edin - off-by-one hataları yaygındır."
      }
    },
    codeExample: {
      code: `// Method 1: In-place reversal (BEST - modifies original)
public static void reverseInPlace(int[] arr) {
    int left = 0;
    int right = arr.length - 1;

    while (left < right) {
        // Swap elements
        int temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        left++;
        right--;
    }
}
// Time: O(n), Space: O(1)

// Method 2: Create new reversed array (preserves original)
public static int[] reverseNew(int[] arr) {
    int[] reversed = new int[arr.length];

    for (int i = 0; i < arr.length; i++) {
        reversed[i] = arr[arr.length - 1 - i];
    }

    return reversed;
}
// Time: O(n), Space: O(n)

// Method 3: Using Collections (for ArrayList)
ArrayList<Integer> list = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5));
Collections.reverse(list);  // [5, 4, 3, 2, 1]

// Method 4: Using streams (creates new array)
int[] arr = {1, 2, 3, 4, 5};
int[] reversed = IntStream.rangeClosed(1, arr.length)
    .map(i -> arr[arr.length - i])
    .toArray();

// Interview variations:

// 1. Reverse only part of array
public static void reverseRange(int[] arr, int start, int end) {
    while (start < end) {
        int temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

// 2. Reverse without temp variable (XOR swap)
public static void reverseXOR(int[] arr) {
    int left = 0, right = arr.length - 1;
    while (left < right) {
        arr[left] = arr[left] ^ arr[right];
        arr[right] = arr[left] ^ arr[right];
        arr[left] = arr[left] ^ arr[right];
        left++;
        right--;
    }
}
// Clever but less readable, not recommended in interviews

// Example usage:
int[] numbers = {1, 2, 3, 4, 5};
reverseInPlace(numbers);
System.out.println(Arrays.toString(numbers));  // [5, 4, 3, 2, 1]

int[] original = {1, 2, 3, 4, 5};
int[] copy = reverseNew(original);
System.out.println(Arrays.toString(original)); // [1, 2, 3, 4, 5]
System.out.println(Arrays.toString(copy));     // [5, 4, 3, 2, 1]`,
      language: 'java'
    },
    topic: 'arrays',
    difficulty: 'junior',
    tags: ['arrays', 'reverse', 'two-pointer', 'algorithms', 'interview'],    commonPitfalls: ['Off-by-one errors in loop bounds', 'Not handling empty/single-element arrays', 'Modifying array when asked not to', 'Forgetting temp variable'],
    realWorldUse: 'String reversal, palindrome checking, data transformation, undo functionality, rotating data.'
  },

  {
    id: 'array-006',
    question: "How do you find the maximum and minimum elements in an array?",
    answer: "Iterate through array keeping track of max/min values. Initialize with first element or Integer.MIN_VALUE/MAX_VALUE. Time: O(n), Space: O(1). Can also use Arrays.stream().max/min() but manual loop is more efficient.",
    explanation: "Finding min/max is a common interview warm-up question. Tests understanding of iteration, comparison, and edge cases (empty array, single element). Essential for many algorithms.",
    translations: {
      tr: {
        question: "Array vs ArrayList farkları nelerdir?",
        answer: "Array: sabit boyut, primitive destekler, hızlı erişim, manuel yönetim. ArrayList: dinamik boyut, sadece object, daha yavaş, otomatik boyutlandırma, Collection metodları.",
        explanation: "Sabit boyut ve primitive için array, esneklik için ArrayList kullanın."
      }
    },
    codeExample: {
      code: `// Method 1: Manual loop (BEST - most efficient)
public static int findMax(int[] arr) {
    if (arr == null || arr.length == 0) {
        throw new IllegalArgumentException("Array is empty");
    }

    int max = arr[0];  // Initialize with first element

    for (int i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

public static int findMin(int[] arr) {
    if (arr == null || arr.length == 0) {
        throw new IllegalArgumentException("Array is empty");
    }

    int min = arr[0];

    for (int i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return min;
}
// Time: O(n), Space: O(1)

// Method 2: Find both in single pass (efficient)
public static int[] findMinMax(int[] arr) {
    if (arr == null || arr.length == 0) {
        throw new IllegalArgumentException("Array is empty");
    }

    int min = arr[0];
    int max = arr[0];

    for (int i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return new int[]{min, max};
}

// Method 3: Using Stream API (less efficient)
int[] arr = {5, 2, 8, 1, 9};
int max = Arrays.stream(arr).max().getAsInt();
int min = Arrays.stream(arr).min().getAsInt();
// Time: O(n), but slower due to stream overhead

// Method 4: Sort first (NOT recommended)
Arrays.sort(arr);  // O(n log n)
int min = arr[0];
int max = arr[arr.length - 1];
// Time: O(n log n), Space: O(log n)
// Only if you need sorted array anyway

// Interview variations:

// 1. Find second largest
public static int findSecondLargest(int[] arr) {
    if (arr.length < 2) {
        throw new IllegalArgumentException("Need at least 2 elements");
    }

    int max = Integer.MIN_VALUE;
    int secondMax = Integer.MIN_VALUE;

    for (int num : arr) {
        if (num > max) {
            secondMax = max;
            max = num;
        } else if (num > secondMax && num != max) {
            secondMax = num;
        }
    }

    return secondMax;
}

// 2. Find kth largest (use sorting or heap)
public static int findKthLargest(int[] arr, int k) {
    Arrays.sort(arr);
    return arr[arr.length - k];
}

// Example usage:
int[] numbers = {5, 2, 8, 1, 9, 3};
System.out.println("Max: " + findMax(numbers));  // 9
System.out.println("Min: " + findMin(numbers));  // 1

int[] minMax = findMinMax(numbers);
System.out.println("Min: " + minMax[0] + ", Max: " + minMax[1]);`,
      language: 'java'
    },
    topic: 'arrays',
    difficulty: 'junior',
    tags: ['arrays', 'min-max', 'algorithms', 'interview', 'iteration'],    commonPitfalls: ['Not handling empty arrays', 'Integer overflow with MIN_VALUE/MAX_VALUE', 'Using sort when not needed (worse complexity)', 'Not considering duplicate values'],
    realWorldUse: 'Data analysis, statistics, finding extremes, price comparison, temperature monitoring, score calculation.'
  },

  // Wrapper Classes
  {
    id: 'wrapper-001',
    question: "What are Wrapper classes in Java? Why do we need them?",
    answer: "Wrapper classes convert primitive types into objects: Integer (int), Double (double), Boolean (boolean), Character (char), etc. Needed because: 1) Collections only store objects, 2) Null representation, 3) Utility methods (parseInt, toString), 4) Generics require objects.",
    explanation: "Java has 8 primitive types but Collections framework and generics only work with objects. Wrapper classes bridge this gap. Each primitive has a corresponding wrapper class in java.lang package.",
    translations: {
      tr: {
        question: "Wrapper class'lar nedir?",
        answer: "Wrapper class'lar primitive tipleri object olarak sarar: Integer, Double, Boolean, vb. Collection'larda primitive kullanımı sağlar. Null değer alabilir.",
        explanation: "Wrapper'lar primitive'leri object-oriented özelliklerle kullanmayı sağlar."
      }
    },
    codeExample: {
      code: `// 8 Primitive types and their Wrapper classes:
// byte    → Byte
// short   → Short
// int     → Integer
// long    → Long
// float   → Float
// double  → Double
// boolean → Boolean
// char    → Character

// Why we need wrappers:

// 1. Collections only store objects
// List<int> wrong;  // ERROR: primitives not allowed
List<Integer> numbers = new ArrayList<>();  // OK: wrapper class
numbers.add(10);  // Autoboxing: int → Integer

// 2. Null representation (primitives can't be null)
int primitive = null;  // ERROR: primitives can't be null
Integer wrapper = null;  // OK: objects can be null

// Useful for database nullable fields:
Integer age = getAgeFromDatabase();  // Can be null if not set
if (age != null && age > 18) {
    // Process
}

// 3. Utility methods
String s = "123";
int parsed = Integer.parseInt(s);  // Wrapper class method
String str = Integer.toString(42);  // Convert to String
int max = Integer.MAX_VALUE;  // Constants

// 4. Generics require objects
class Box<T> {
    private T value;
}
// Box<int> wrong;  // ERROR
Box<Integer> box = new Box<>();  // OK

// Creating wrapper objects:
Integer i1 = new Integer(10);  // Deprecated since Java 9
Integer i2 = Integer.valueOf(10);  // Preferred
Integer i3 = 10;  // Autoboxing (automatic conversion)

// Interview trap:
Integer a = 100;
Integer b = 100;
System.out.println(a == b);  // true (Integer cache -128 to 127)

Integer c = 200;
Integer d = 200;
System.out.println(c == d);  // false (outside cache, different objects)

// ALWAYS use equals() for wrapper comparison!
System.out.println(c.equals(d));  // true`,
      language: 'java'
    },
    topic: 'wrapper',
    difficulty: 'junior',
    tags: ['wrapper-classes', 'primitives', 'autoboxing', 'basics'],    commonPitfalls: ['Using == to compare wrappers', 'NullPointerException with unboxing null', 'Not understanding Integer cache', 'Using new Integer() (deprecated)'],
    realWorldUse: 'Collections, database nullable fields, JSON parsing, API responses, configuration values, generic programming.'
  },

  {
    id: 'wrapper-002',
    question: "What is Autoboxing and Unboxing in Java?",
    answer: "Autoboxing: Automatic conversion of primitive to wrapper (int → Integer). Unboxing: Automatic conversion of wrapper to primitive (Integer → int). Introduced in Java 5. Compiler automatically handles conversions, but can cause NullPointerException if wrapper is null.",
    explanation: "Autoboxing/unboxing makes code cleaner by eliminating manual conversions. However, it can hide performance issues (object creation) and NullPointerException risks. Understanding when it happens is important.",
    translations: {
      tr: {
        question: "Autoboxing ve unboxing nedir?",
        answer: "Autoboxing: primitive'i otomatik wrapper'a dönüştürme (int -> Integer). Unboxing: wrapper'ı primitive'e dönüştürme (Integer -> int). Java 5+ otomatik yapar.",
        explanation: "Autoboxing kod yazımını basitleştirir ancak performans maliyeti vardır."
      }
    },
    codeExample: {
      code: `// AUTOBOXING: Primitive → Wrapper (automatic)
int primitive = 10;
Integer wrapper = primitive;  // Autoboxing: int → Integer
// Compiler converts to: Integer wrapper = Integer.valueOf(primitive);

// Common autoboxing scenarios:
List<Integer> list = new ArrayList<>();
list.add(5);  // Autoboxing: int 5 → Integer(5)

Map<String, Integer> map = new HashMap<>();
map.put("age", 25);  // Autoboxing: int 25 → Integer(25)

// UNBOXING: Wrapper → Primitive (automatic)
Integer wrapper2 = 20;
int primitive2 = wrapper2;  // Unboxing: Integer → int
// Compiler converts to: int primitive2 = wrapper2.intValue();

// Common unboxing scenarios:
Integer num = 10;
int result = num + 5;  // Unboxing: num.intValue() + 5

// DANGER: NullPointerException with unboxing!
Integer nullWrapper = null;
// int value = nullWrapper;  // NullPointerException! Can't unbox null

// Safe unboxing:
Integer wrapper3 = null;
int value = (wrapper3 != null) ? wrapper3 : 0;  // Check before unboxing

// Performance consideration:
// Autoboxing creates objects - expensive in loops
List<Integer> numbers = new ArrayList<>();
for (int i = 0; i < 1000000; i++) {
    numbers.add(i);  // Creates 1 million Integer objects!
}

// Better for primitives when possible:
int[] primitiveArray = new int[1000000];  // Much faster

// Interview question: What gets printed?
Integer a = 1000, b = 1000;
System.out.println(a == b);  // false (different objects)
System.out.println(a.equals(b));  // true (value comparison)

int x = a;  // Unboxing
int y = b;  // Unboxing
System.out.println(x == y);  // true (primitive comparison)

// Method calls with autoboxing/unboxing
public void process(Integer i) {
    System.out.println(i);
}
process(10);  // Autoboxing: int → Integer

public int calculate(int a, int b) {
    return a + b;
}
Integer result = calculate(10, 20);  // Unboxing params, autoboxing return

// Ternary operator gotcha:
Integer i = null;
Double d = 3.0;
// Object result = true ? i : d;  // NullPointerException!
// Both operands are unboxed to primitives first!

// Safe version:
Object result = true ? (Object)i : (Object)d;  // No unboxing`,
      language: 'java'
    },
    topic: 'wrapper',
    difficulty: 'mid',
    tags: ['autoboxing', 'unboxing', 'wrapper-classes', 'conversion'],    commonPitfalls: ['NullPointerException from unboxing null', 'Performance issues in loops', 'Ternary operator unboxing', 'Not checking for null before unboxing'],
    realWorldUse: 'Collections usage, method parameters, database nullable fields, performance optimization, null safety.'
  },

  {
    id: 'wrapper-003',
    question: "What is the Integer cache in Java? How does it work?",
    answer: "Java caches Integer objects from -128 to 127 by default. valueOf() reuses cached objects in this range for memory efficiency. new Integer() always creates new object (deprecated). Affects == comparison: cached values return true, non-cached return false.",
    explanation: "Integer cache is a performance optimization. valueOf() checks cache first. This is why == sometimes works for Integers but not always - a common interview trap question.",
    translations: {
      tr: {
        question: "Integer cache nedir?",
        answer: "Integer -128 ile 127 arasındaki değerleri cache'ler. valueOf() cache'den döner. new Integer() her zaman yeni nesne. == yerine equals() kullanın.",
        explanation: "Cache küçük değerler için memory optimize eder."
      }
    },
    codeExample: {
      code: `// Integer cache behavior
Integer a = 100;  // Uses valueOf() → returns cached object
Integer b = 100;
System.out.println(a == b);  // true (same cached object)

Integer c = 200;  // Uses valueOf() → creates new object (outside cache)
Integer d = 200;
System.out.println(c == d);  // false (different objects)

// Visualize the cache:
// Cache: [-128, -127, ..., -1, 0, 1, ..., 126, 127]
// valueOf(50) → returns cached Integer(50)
// valueOf(200) → creates new Integer(200)

// valueOf() vs new Integer()
Integer i1 = Integer.valueOf(100);  // Returns cached object
Integer i2 = Integer.valueOf(100);  // Returns SAME cached object
System.out.println(i1 == i2);  // true

Integer i3 = new Integer(100);  // Always creates NEW object (deprecated!)
Integer i4 = new Integer(100);  // Always creates NEW object
System.out.println(i3 == i4);  // false (different objects)

// Cache range can be configured with JVM flag:
// -XX:AutoBoxCacheMax=<size>
// Default max: 127
// Default min: -128 (cannot be changed)

// Interview question: What gets printed?
Integer x = 127;
Integer y = 127;
System.out.println(x == y);  // true (cached)

Integer m = 128;
Integer n = 128;
System.out.println(m == n);  // false (not cached)

// RULE: ALWAYS use equals() for Integer comparison!
System.out.println(m.equals(n));  // true (correct)

// Other wrapper caches:
// Byte: all values (-128 to 127) - always cached
// Short: -128 to 127 (configurable)
// Long: -128 to 127 (configurable)
// Character: 0 to 127 (ASCII)
// Boolean: TRUE and FALSE (always cached)
// Float, Double: NO CACHE

// Why cache exists:
// 1. Memory efficiency: reuse common objects
// 2. Performance: avoid object creation
// 3. Small integers are very frequently used

// Practical example:
List<Integer> numbers = new ArrayList<>();
for (int i = 0; i < 100; i++) {
    numbers.add(i);  // Reuses cached Integers (no new objects!)
}

for (int i = 0; i < 100; i++) {
    numbers.add(i + 200);  // Creates new Integer objects
}

// Common interview mistake:
Integer score1 = getUserScore();  // Returns 100
Integer score2 = getUserScore();  // Returns 100

if (score1 == score2) {  // WRONG! Works if <= 127, fails otherwise
    System.out.println("Same score");
}

if (score1.equals(score2)) {  // CORRECT! Always works
    System.out.println("Same score");
}`,
      language: 'java'
    },
    topic: 'wrapper',
    difficulty: 'mid',
    tags: ['integer-cache', 'wrapper-classes', 'memory', 'interview'],    commonPitfalls: ['Using == for Integer comparison', 'Assuming cache for all values', 'Not knowing cache range', 'Using new Integer() instead of valueOf()'],
    realWorldUse: 'Performance optimization, memory management, understanding == vs equals(), debugging comparison issues.'
  },

  {
    id: 'wrapper-004',
    question: "What are common methods in Integer and Double wrapper classes?",
    answer: "Integer: parseInt(), valueOf(), toString(), intValue(), compareTo(), MAX_VALUE, MIN_VALUE. Double: parseDouble(), valueOf(), doubleValue(), isNaN(), isInfinite(). All wrappers have: compareTo(), equals(), toString(), xxxValue() conversion methods.",
    explanation: "Wrapper classes provide utility methods for conversion, parsing, comparison, and constants. Understanding these methods is essential for type conversion and data validation.",
    translations: {
      tr: {
        question: "parseInt() ve valueOf() arasındaki fark nedir?",
        answer: "parseInt(): String'i primitive int'e dönüştürür. valueOf(): String'i Integer object'e dönüştürür. Benzer metodlar diğer wrapper'larda da var.",
        explanation: "Primitive gerekirse parseInt, object gerekirse valueOf kullanın."
      }
    },
    codeExample: {
      code: `// INTEGER METHODS

// 1. Parsing String to int (primitive)
int num = Integer.parseInt("123");  // Returns primitive int
// int bad = Integer.parseInt("abc");  // NumberFormatException!

// Safe parsing:
try {
    int value = Integer.parseInt(userInput);
} catch (NumberFormatException e) {
    System.out.println("Invalid number");
}

// 2. Parsing String to Integer (wrapper)
Integer num2 = Integer.valueOf("123");  // Returns Integer object
// Also works with radix:
Integer hex = Integer.valueOf("FF", 16);  // 255

// 3. Convert int to String
String s1 = Integer.toString(123);  // "123"
String s2 = String.valueOf(123);    // "123" (safer, handles null)

// 4. Get primitive value
Integer wrapper = 100;
int primitive = wrapper.intValue();  // Explicit unboxing

// 5. Comparison
Integer a = 10, b = 20;
int cmp = a.compareTo(b);  // -1 (a < b)
// Returns: negative if a < b, 0 if equal, positive if a > b

// 6. Constants
int max = Integer.MAX_VALUE;  // 2147483647
int min = Integer.MIN_VALUE;  // -2147483648
int size = Integer.SIZE;      // 32 (bits)
int bytes = Integer.BYTES;    // 4 (bytes)

// 7. Other useful methods
int bits = Integer.bitCount(7);  // 3 (number of 1-bits in binary)
String binary = Integer.toBinaryString(10);  // "1010"
String hex = Integer.toHexString(255);       // "ff"
String octal = Integer.toOctalString(8);     // "10"

// DOUBLE METHODS

// 1. Parsing String to double
double d1 = Double.parseDouble("3.14");
Double d2 = Double.valueOf("3.14");

// 2. Special double values
double nan = Double.NaN;  // Not a Number
double inf = Double.POSITIVE_INFINITY;
double negInf = Double.NEGATIVE_INFINITY;

// 3. Check for special values
double result = 0.0 / 0.0;
if (Double.isNaN(result)) {
    System.out.println("Not a number");
}

double div = 1.0 / 0.0;
if (Double.isInfinite(div)) {
    System.out.println("Infinite");
}

if (Double.isFinite(3.14)) {
    System.out.println("Finite number");
}

// 4. Constants
double max = Double.MAX_VALUE;  // 1.7976931348623157E308
double min = Double.MIN_VALUE;  // 4.9E-324 (smallest positive)

// 5. Comparison (careful with floating point!)
Double d3 = 3.14;
Double d4 = 3.14;
System.out.println(d3.equals(d4));  // true

// Floating point comparison with epsilon:
double a = 0.1 + 0.2;
double b = 0.3;
System.out.println(a == b);  // false (floating point precision!)
System.out.println(Math.abs(a - b) < 0.0001);  // true (correct way)

// ALL WRAPPER CLASSES HAVE:

// compareTo() - for ordering
Integer i1 = 10, i2 = 20;
i1.compareTo(i2);  // -1

// equals() - value comparison
i1.equals(i2);  // false

// toString() - String representation
i1.toString();  // "10"

// xxxValue() - convert to other primitives
Integer num = 100;
int i = num.intValue();
double d = num.doubleValue();
long l = num.longValue();
byte by = num.byteValue();`,
      language: 'java'
    },
    topic: 'wrapper',
    difficulty: 'junior',
    tags: ['wrapper-methods', 'Integer', 'Double', 'parsing', 'conversion'],    commonPitfalls: ['Not handling NumberFormatException', 'Using == for floating point comparison', 'Not checking for NaN/Infinity', 'Integer overflow'],
    realWorldUse: 'Parsing user input, file reading, API responses, data validation, type conversion, mathematical calculations.'
  },

  {
    id: 'wrapper-005',
    question: "What are the performance implications of using wrapper classes vs primitives?",
    answer: "Wrappers are slower and use more memory: 1) Object overhead (16 bytes vs 4 bytes for int), 2) Heap allocation vs stack, 3) Indirection for access, 4) Autoboxing creates objects. Use primitives for performance-critical code, wrappers only when needed (Collections, nullability, generics).",
    explanation: "Understanding performance trade-offs is important for optimization. Primitives are faster and more memory-efficient. Wrappers provide flexibility but at a cost. Choose based on requirements.",
    translations: {
      tr: {
        question: "Wrapper class'larda == ve equals() kullanımı",
        answer: "== referans karşılaştırır (cache dışında farklı). equals() değer karşılaştırır. Wrapper'larda her zaman equals() kullanın. Cache'lenen değerler == ile eşit olabilir.",
        explanation: "Wrapper object olduğu için == güvenilmez - equals() kullanın."
      }
    },
    codeExample: {
      code: `// MEMORY COMPARISON
// int primitive: 4 bytes (on stack)
// Integer wrapper: 16+ bytes (object header + 4 bytes value + padding) on heap

int primitive = 42;  // 4 bytes on stack
Integer wrapper = 42;  // 16+ bytes on heap (object overhead!)

// Array comparison:
int[] prims = new int[1000];  // 4KB (4 bytes * 1000)
Integer[] wrappers = new Integer[1000];  // 16+ KB (16+ bytes * 1000)

// PERFORMANCE COMPARISON
// Test 1: Array sum (primitives)
int[] primArray = new int[1_000_000];
for (int i = 0; i < primArray.length; i++) {
    primArray[i] = i;
}

long start = System.nanoTime();
long sum = 0;
for (int i = 0; i < primArray.length; i++) {
    sum += primArray[i];  // Direct memory access
}
long end = System.nanoTime();
System.out.println("Primitive: " + (end - start) + " ns");

// Test 2: Array sum (wrappers)
Integer[] wrapperArray = new Integer[1_000_000];
for (int i = 0; i < wrapperArray.length; i++) {
    wrapperArray[i] = i;  // Autoboxing!
}

start = System.nanoTime();
long sum2 = 0;
for (int i = 0; i < wrapperArray.length; i++) {
    sum2 += wrapperArray[i];  // Unboxing + indirection
}
end = System.nanoTime();
System.out.println("Wrapper: " + (end - start) + " ns");
// Wrapper version is 3-5x SLOWER!

// AUTOBOXING OVERHEAD in loops
List<Integer> list = new ArrayList<>();
for (int i = 0; i < 100_000; i++) {
    list.add(i);  // Creates 100,000 Integer objects!
}
// Each autoboxing calls Integer.valueOf() - overhead!

// Better: Use primitive collections (not in standard library)
// Consider libraries like GNU Trove, Eclipse Collections for int[], long[] backed lists

// When to use PRIMITIVES:
// ✓ Local variables
// ✓ Method parameters (when null not needed)
// ✓ Arrays (when size known)
// ✓ Performance-critical loops
// ✓ Mathematical calculations
// ✓ Counters, indices, flags

public int calculate(int a, int b) {  // Primitives
    int result = 0;
    for (int i = 0; i < a; i++) {
        result += b;
    }
    return result;
}

// When to use WRAPPERS:
// ✓ Collections (List, Set, Map)
// ✓ Nullable values (database fields)
// ✓ Generics (Box<Integer>)
// ✓ JSON/XML parsing (null handling)
// ✓ Optional values

public Integer getAge(String userId) {  // Can return null
    User user = findUser(userId);
    return (user != null) ? user.getAge() : null;
}

// INTERVIEW QUESTION: Optimize this code
// BAD: Creates millions of objects
Map<String, Integer> counts = new HashMap<>();
for (String word : words) {
    Integer count = counts.get(word);  // Unboxing
    if (count == null) {
        counts.put(word, 1);  // Autoboxing
    } else {
        counts.put(word, count + 1);  // Unboxing + autoboxing
    }
}

// BETTER: Reduce boxing/unboxing
Map<String, Integer> counts = new HashMap<>();
for (String word : words) {
    counts.merge(word, 1, Integer::sum);  // Less boxing
}

// BEST: Use primitive map (if available)
// TIntIntHashMap counts = new TIntIntHashMap();  // GNU Trove

// Summary:
// Primitive: Fast, memory-efficient, no null, stack-allocated
// Wrapper: Slow, memory-heavy, nullable, heap-allocated, needed for Collections`,
      language: 'java'
    },
    topic: 'wrapper',
    difficulty: 'mid',
    tags: ['wrapper-classes', 'performance', 'optimization', 'memory'],    commonPitfalls: ['Using wrappers in performance-critical code', 'Excessive autoboxing in loops', 'Large wrapper arrays', 'Not considering memory footprint'],
    realWorldUse: 'Performance optimization, memory profiling, choosing data structures, loop optimization, large data processing.'
  },

  // Access Modifiers & Constructors
  {
    id: 'access-101',
    question: "What are the access modifiers in Java? What is their scope?",
    answer: "4 access modifiers: 1) public - accessible everywhere, 2) protected - same package + subclasses, 3) default (no modifier) - same package only, 4) private - same class only. Used to control visibility and encapsulation.",
    explanation: "Access modifiers control who can access classes, methods, and variables. Essential for encapsulation, one of OOP pillars. Understanding scope is crucial for designing APIs and protecting data.",
    translations: {
      tr: {
        question: "Java'da access modifier'ların erişim seviyeleri nelerdir?",
        answer: "En kısıtlayıcıdan en az kısıtlayıcıya: private (sadece sınıf) -> default (paket) -> protected (paket + alt sınıflar) -> public (her yer).",
        explanation: "Minimum gerekli erişimi verin - encapsulation için en kısıtlayıcıyı tercih edin."
      }
    },
    codeExample: {
      code: `// Access Modifier Scope Summary:
// public:    Everywhere
// protected: Same package + subclasses (even different package)
// default:   Same package only
// private:   Same class only

package com.example.myapp;

public class AccessDemo {

    // PUBLIC: Accessible from anywhere
    public String publicField = "public";
    public void publicMethod() {
        System.out.println("Public method");
    }

    // PROTECTED: Same package + subclasses
    protected String protectedField = "protected";
    protected void protectedMethod() {
        System.out.println("Protected method");
    }

    // DEFAULT (no modifier): Same package only
    String defaultField = "default";
    void defaultMethod() {
        System.out.println("Default method");
    }

    // PRIVATE: Same class only
    private String privateField = "private";
    private void privateMethod() {
        System.out.println("Private method");
    }

    // All accessible within same class
    public void testAccess() {
        System.out.println(publicField);
        System.out.println(protectedField);
        System.out.println(defaultField);
        System.out.println(privateField);  // OK: same class
    }
}

// Same package - different class
package com.example.myapp;

class SamePackageTest {
    void test() {
        AccessDemo obj = new AccessDemo();
        obj.publicField;     // OK: public
        obj.protectedField;  // OK: same package
        obj.defaultField;    // OK: same package
        // obj.privateField; // ERROR: private
    }
}

// Different package - subclass
package com.example.other;
import com.example.myapp.AccessDemo;

class SubclassTest extends AccessDemo {
    void test() {
        publicField;     // OK: public
        protectedField;  // OK: subclass
        // defaultField; // ERROR: different package
        // privateField; // ERROR: private
    }
}

// Different package - not subclass
package com.example.other;
import com.example.myapp.AccessDemo;

class DifferentPackageTest {
    void test() {
        AccessDemo obj = new AccessDemo();
        obj.publicField;  // OK: public
        // obj.protectedField; // ERROR: not subclass
        // obj.defaultField;   // ERROR: different package
        // obj.privateField;   // ERROR: private
    }
}

// Best practices:
// ✓ Use private for fields (encapsulation)
// ✓ Use public for API methods
// ✓ Use protected for inheritance
// ✓ Use default for package-private utilities
// ✗ Avoid public fields (breaks encapsulation)`,
      language: 'java'
    },
    topic: 'access',
    difficulty: 'junior',
    tags: ['access-modifiers', 'encapsulation', 'visibility', 'scope'],    commonPitfalls: ['Making all fields public', 'Confusing protected with default', 'Not understanding package scope', 'Using private for methods that should be protected'],
    realWorldUse: 'API design, encapsulation, security, inheritance control, package organization, framework design.'
  },

  {
    id: 'access-102',
    question: "What is encapsulation? Why should fields be private?",
    answer: "Encapsulation is hiding internal state and requiring access through public methods (getters/setters). Benefits: 1) Control access, 2) Validate input, 3) Change implementation without breaking code, 4) Maintain invariants. Core OOP principle.",
    explanation: "Encapsulation protects object integrity. Private fields + public methods = controlled access. One of the four pillars of OOP. Essential for maintainable, secure code.",
    translations: {
      tr: {
        question: "Constructor'larda access modifier kullanımı",
        answer: "Constructor'lar tüm access modifier'ları kullanabilir. private: singleton pattern. protected: abstract class'lar. public: normal kullanım. default: paket-internal.",
        explanation: "Constructor erişimi nesne oluşturmayı kontrol eder - design pattern'lerde önemli."
      }
    },
    codeExample: {
      code: `// BAD: Public fields (no encapsulation)
class BadAccount {
    public String name;
    public double balance;  // Anyone can modify!
}

BadAccount account = new BadAccount();
account.balance = -1000;  // Invalid state! No control

// GOOD: Private fields with getters/setters
class GoodAccount {
    private String name;
    private double balance;

    // Getter (read access)
    public double getBalance() {
        return balance;
    }

    // Setter with validation (controlled write)
    public void setBalance(double balance) {
        if (balance < 0) {
            throw new IllegalArgumentException("Balance cannot be negative");
        }
        this.balance = balance;
    }

    // Better: Use methods instead of direct setters
    public void deposit(double amount) {
        if (amount <= 0) {
            throw new IllegalArgumentException("Amount must be positive");
        }
        this.balance += amount;
    }

    public void withdraw(double amount) {
        if (amount <= 0) {
            throw new IllegalArgumentException("Amount must be positive");
        }
        if (amount > balance) {
            throw new IllegalArgumentException("Insufficient funds");
        }
        this.balance -= amount;
    }
}

// Benefits of encapsulation:

// 1. VALIDATION
class Person {
    private int age;

    public void setAge(int age) {
        if (age < 0 || age > 150) {
            throw new IllegalArgumentException("Invalid age");
        }
        this.age = age;
    }
}

// 2. CHANGE IMPLEMENTATION without breaking clients
class Employee {
    private double salary;

    // Can change from storing salary to storing hourly rate
    // without affecting clients using getSalary()
    public double getSalary() {
        return salary;  // Or: hourlyRate * hoursPerMonth
    }
}

// 3. MAINTAIN INVARIANTS
class Rectangle {
    private int width;
    private int height;

    // Ensure width and height stay positive
    public void setWidth(int width) {
        if (width <= 0) throw new IllegalArgumentException("Width must be positive");
        this.width = width;
    }

    public void setHeight(int height) {
        if (height <= 0) throw new IllegalArgumentException("Height must be positive");
        this.height = height;
    }

    public int getArea() {
        return width * height;  // Always valid calculation
    }
}

// 4. COMPUTED PROPERTIES
class Circle {
    private double radius;

    public double getRadius() {
        return radius;
    }

    // Diameter computed, not stored
    public double getDiameter() {
        return radius * 2;
    }

    // Area computed, not stored
    public double getArea() {
        return Math.PI * radius * radius;
    }
}

// Interview question: What's wrong with this?
class Bad {
    public int age;  // Direct access
}
// Answer: No validation, no control, breaks encapsulation

// Correct:
class Good {
    private int age;

    public int getAge() { return age; }
    public void setAge(int age) {
        if (age >= 0) this.age = age;
    }
}

// Best practices:
// ✓ All fields private
// ✓ Public getters for read access
// ✓ Public setters with validation for write access
// ✓ Use methods over direct setters when possible
// ✗ Never public fields (except constants)`,
      language: 'java'
    },
    topic: 'access',
    difficulty: 'junior',
    tags: ['encapsulation', 'oop', 'getters-setters', 'data-hiding'],    commonPitfalls: ['Public mutable fields', 'No validation in setters', 'Exposing internal collections directly', 'Returning mutable objects from getters'],
    realWorldUse: 'Data validation, maintaining object state, API design, security, preventing bugs, code maintainability.'
  },

  {
    id: 'constructor-001',
    question: "What is a constructor in Java? What are the types of constructors?",
    answer: "Constructor: Special method to initialize objects, same name as class, no return type. Types: 1) Default constructor (no-arg, compiler-generated), 2) Parameterized constructor (takes arguments), 3) Copy constructor (copies another object). Called with new keyword.",
    explanation: "Constructors initialize object state. Every class has at least one constructor (default if not defined). Understanding constructors is fundamental to object creation.",
    translations: {
      tr: {
        question: "Default constructor nedir?",
        answer: "Default constructor argümansız constructor'dır. Hiç constructor yoksa Java otomatik sağlar. Herhangi bir constructor varsa default otomatik gelmez. super() çağırır.",
        explanation: "Başka constructor eklerseniz, argümansız constructor gerekirse manuel yazmalısınız."
      }
    },
    codeExample: {
      code: `// 1. DEFAULT CONSTRUCTOR (no arguments)
class Student {
    private String name;
    private int age;

    // Default constructor - compiler generates if none defined
    public Student() {
        this.name = "Unknown";
        this.age = 0;
    }
}

Student s1 = new Student();  // Calls default constructor

// 2. PARAMETERIZED CONSTRUCTOR (with arguments)
class Student {
    private String name;
    private int age;

    // Parameterized constructor
    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
}

Student s2 = new Student("Alice", 20);  // Calls parameterized constructor

// 3. MULTIPLE CONSTRUCTORS (constructor overloading)
class Student {
    private String name;
    private int age;
    private String major;

    // Default
    public Student() {
        this("Unknown", 0, "Undeclared");
    }

    // Two parameters
    public Student(String name, int age) {
        this(name, age, "Undeclared");
    }

    // Three parameters
    public Student(String name, int age, String major) {
        this.name = name;
        this.age = age;
        this.major = major;
    }
}

// 4. COPY CONSTRUCTOR (copies another object)
class Student {
    private String name;
    private int age;

    // Regular constructor
    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // Copy constructor
    public Student(Student other) {
        this.name = other.name;
        this.age = other.age;
    }
}

Student original = new Student("Bob", 21);
Student copy = new Student(original);  // Creates copy

// IMPORTANT: If you define ANY constructor,
// compiler does NOT generate default constructor!

class Example {
    private int value;

    public Example(int value) {
        this.value = value;
    }
}

// Example e1 = new Example();  // ERROR! No default constructor
Example e2 = new Example(10);   // OK

// Constructor rules:
// ✓ Same name as class
// ✓ No return type (not even void)
// ✓ Can be overloaded
// ✓ Can call other constructors with this()
// ✓ First line can be super() or this()

// Common constructor patterns:

// 1. Validation in constructor
public class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
        if (name == null || name.isEmpty()) {
            throw new IllegalArgumentException("Name cannot be empty");
        }
        if (age < 0) {
            throw new IllegalArgumentException("Age cannot be negative");
        }
        this.name = name;
        this.age = age;
    }
}

// 2. Default values
public class Account {
    private String id;
    private double balance;

    public Account(String id) {
        this.id = id;
        this.balance = 0.0;  // Default initial balance
    }
}

// 3. Constructor chaining
public class Employee {
    private String name;
    private int id;
    private double salary;

    public Employee(String name, int id) {
        this(name, id, 50000.0);  // Call other constructor
    }

    public Employee(String name, int id, double salary) {
        this.name = name;
        this.id = id;
        this.salary = salary;
    }
}`,
      language: 'java'
    },
    topic: 'constructor',
    difficulty: 'junior',
    tags: ['constructor', 'initialization', 'object-creation', 'basics'],    commonPitfalls: ['Forgetting constructor removes default', 'Adding return type to constructor', 'Not validating constructor parameters', 'Circular constructor calls'],
    realWorldUse: 'Object initialization, dependency injection, factory patterns, ensuring valid state, immutable objects.'
  },

  {
    id: 'constructor-002',
    question: "What is constructor chaining? How does this() work?",
    answer: "Constructor chaining: One constructor calling another using this(). Must be FIRST statement. Used to avoid code duplication, provide default values, and route all initialization through one main constructor.",
    explanation: "Constructor chaining allows reusing initialization code. this() calls another constructor in same class, super() calls parent constructor. Very common pattern for flexible object creation.",
    translations: {
      tr: {
        question: "Constructor overloading nedir?",
        answer: "Aynı sınıfta farklı parametrelerle birden fazla constructor. Esnek nesne oluşturma. this() ile birbirini çağırabilir (constructor chaining).",
        explanation: "Constructor overloading farklı başlatma senaryoları için esneklik sağlar."
      }
    },
    codeExample: {
      code: `// Constructor chaining with this()
class Employee {
    private String name;
    private int id;
    private double salary;
    private String department;

    // Main constructor with all parameters
    public Employee(String name, int id, double salary, String department) {
        this.name = name;
        this.id = id;
        this.salary = salary;
        this.department = department;
    }

    // Chain to main constructor with default department
    public Employee(String name, int id, double salary) {
        this(name, id, salary, "General");  // Call 4-arg constructor
    }

    // Chain with default salary and department
    public Employee(String name, int id) {
        this(name, id, 50000.0);  // Call 3-arg constructor
    }

    // Chain with defaults for everything except name
    public Employee(String name) {
        this(name, 0);  // Call 2-arg constructor
    }
}

// Usage:
Employee e1 = new Employee("Alice", 101, 75000.0, "Engineering");
Employee e2 = new Employee("Bob", 102, 60000.0);  // Uses default dept
Employee e3 = new Employee("Charlie", 103);       // Uses default salary & dept
Employee e4 = new Employee("Dave");               // Uses all defaults

// Benefits:
// 1. No code duplication
// 2. Single place for validation
// 3. Flexible object creation
// 4. Maintainable

// RULES FOR this():
// 1. Must be FIRST statement in constructor
// 2. Cannot call this() and super() in same constructor
// 3. Can only call one other constructor

// WRONG: this() not first
public Employee(String name) {
    System.out.println("Creating employee");  // ERROR: must be first
    this(name, 0);
}

// WRONG: Multiple this() calls
public Employee(String name) {
    this(name, 0);      // ERROR: only one call allowed
    this(name, 0, 0.0); // ERROR
}

// Practical example: Rectangle class
class Rectangle {
    private int width;
    private int height;

    // Main constructor with validation
    public Rectangle(int width, int height) {
        if (width <= 0 || height <= 0) {
            throw new IllegalArgumentException("Dimensions must be positive");
        }
        this.width = width;
        this.height = height;
    }

    // Square constructor (width = height)
    public Rectangle(int side) {
        this(side, side);  // Reuse validation logic
    }

    // Default constructor (unit square)
    public Rectangle() {
        this(1);  // Reuse validation logic
    }
}

// Interview example: Constructor chaining with super()
class Vehicle {
    protected String brand;

    public Vehicle(String brand) {
        this.brand = brand;
    }
}

class Car extends Vehicle {
    private int doors;

    // Must call super() before this()
    public Car(String brand, int doors) {
        super(brand);  // Call parent constructor FIRST
        this.doors = doors;
    }

    // Chain to other constructor
    public Car(String brand) {
        this(brand, 4);  // Default 4 doors
    }
}

// this() vs super():
// this() - calls another constructor in SAME class
// super() - calls constructor in PARENT class
// Both must be first statement (can't use both!)

// Best practices:
// ✓ Chain to most complete constructor
// ✓ Put validation in main constructor
// ✓ Use for default values
// ✓ Reduce code duplication
// ✗ Don't create circular chains`,
      language: 'java'
    },
    topic: 'constructor',
    difficulty: 'junior',
    tags: ['constructor-chaining', 'this', 'initialization', 'code-reuse'],    commonPitfalls: ['this() not first statement', 'Circular constructor calls', 'Using this() and super() together', 'Forgetting to chain'],
    realWorldUse: 'Flexible object creation, default values, reducing duplication, builder pattern, API design.'
  },

  {
    id: 'constructor-003',
    question: "What is the difference between constructor and method in Java?",
    answer: "Constructor: Initializes object, same name as class, no return type, called automatically with new. Method: Performs operations, any name, has return type, called explicitly. Constructors cannot be inherited or overridden, methods can be.",
    explanation: "Understanding the distinction is fundamental. Constructors are for initialization only, methods are for behavior. Common interview question testing basic OOP knowledge.",
    translations: {
      tr: {
        question: "Copy constructor nedir?",
        answer: "Copy constructor aynı tipteki bir nesneden yeni nesne oluşturur. Java otomatik sağlamaz. Manuel implement edilir. Deep veya shallow copy yapılabilir.",
        explanation: "Copy constructor nesne kopyalama için clone()'a alternatif, daha kontrollü."
      }
    },
    codeExample: {
      code: `class Example {
    private int value;

    // CONSTRUCTOR
    public Example(int value) {  // Same name as class
        this.value = value;      // No return type
    }                            // Called with 'new"

    // METHOD
    public int getValue() {      // Any name
        return value;            // Has return type (int)
    }                            // Called with dot notation
}

// Usage:
Example obj = new Example(10);  // Constructor called automatically
int val = obj.getValue();       // Method called explicitly

// KEY DIFFERENCES:

// 1. NAME
class Test {
    public Test() { }         // Constructor: same as class name
    public void test() { }    // Method: any name
}

// 2. RETURN TYPE
class Demo {
    public Demo() { }              // Constructor: NO return type (not even void)
    public void doSomething() { }  // Method: must have return type
    public int calculate() { return 0; }  // Method: returns value
}

// 3. WHEN CALLED
class User {
    public User() {
        System.out.println("Constructor called");
    }

    public void login() {
        System.out.println("Method called");
    }
}

User user = new User();  // Constructor called automatically
user.login();            // Method called explicitly

// 4. PURPOSE
class Account {
    private double balance;

    // Constructor: Initialize object state
    public Account(double initialBalance) {
        this.balance = initialBalance;
    }

    // Method: Perform operations
    public void deposit(double amount) {
        balance += amount;
    }
}

// 5. INHERITANCE
class Parent {
    public Parent() {
        System.out.println("Parent constructor");
    }

    public void display() {
        System.out.println("Parent method");
    }
}

class Child extends Parent {
    public Child() {
        super();  // Call parent constructor explicitly
        System.out.println("Child constructor");
    }

    @Override
    public void display() {  // Can override methods
        System.out.println("Child method");
    }

    // Cannot override constructors!
}

// 6. OVERLOADING
class Calculator {
    // Constructor overloading
    public Calculator() { }
    public Calculator(int value) { }

    // Method overloading
    public int add(int a, int b) { return a + b; }
    public double add(double a, double b) { return a + b; }
}

// 7. STATIC
class Static {
    // Constructors CANNOT be static
    // public static Static() { }  // ERROR!

    // Methods CAN be static
    public static void staticMethod() { }
}

// 8. FINAL
class Final {
    // Constructors CANNOT be final
    // public final Final() { }  // ERROR!

    // Methods CAN be final
    public final void finalMethod() { }
}

// COMPARISON TABLE:
//
// Feature       | Constructor           | Method
// --------------|-----------------------|------------------
// Name          | Same as class         | Any name
// Return type   | None (not even void)  | Must have (can be void)
// Purpose       | Initialize object     | Define behavior
// Called        | Automatically (new)   | Explicitly (dot)
// Inherited     | No                    | Yes
// Overridden    | No                    | Yes (if not final)
// Static        | No                    | Yes
// Final         | No                    | Yes

// Common interview question:
// Q: Can constructor have return type?
// A: No! Not even void. If you add return type, it becomes a method.

class Wrong {
    public void Wrong() {  // This is a METHOD, not constructor!
        // Name happens to be same as class, but return type makes it method
    }
}

// Best practices:
// ✓ Use constructors only for initialization
// ✓ Use methods for behavior
// ✓ Keep constructors simple
// ✓ Validate in constructors
// ✗ Don't add return type to constructors`,
      language: 'java'
    },
    topic: 'constructor',
    difficulty: 'junior',
    tags: ['constructor', 'method', 'comparison', 'basics'],    commonPitfalls: ['Adding return type to constructor', 'Confusing method with same name as class', 'Trying to override constructors', 'Making constructor static'],
    realWorldUse: 'Understanding OOP fundamentals, proper class design, initialization vs behavior separation.'
  },

  // Design Patterns
  {
    id: 'pattern-001',
    question: "What is the Singleton pattern? How do you implement it in Java?",
    answer: "Singleton ensures only one instance of a class exists. Implementation: 1) Private constructor, 2) Private static instance, 3) Public static getInstance() method. Used for configuration, logging, database connections. Thread-safe variants use synchronized or enum.",
    explanation: "Singleton is one of the most commonly asked design patterns in interviews. Controls object creation to ensure single instance. Simple but has thread-safety considerations.",
    translations: {
      tr: {
        question: "Singleton pattern nedir?",
        answer: "Singleton bir sınıftan sadece bir instance olmasını garantiler. private constructor, static instance, getInstance() metodu. Thread-safety için dikkat.",
        explanation: "Singleton global erişim noktası sağlar - configuration, logging için yaygın."
      }
    },
    codeExample: {
      code: `// BASIC SINGLETON (not thread-safe)
class BasicSingleton {
    // Private static instance
    private static BasicSingleton instance;

    // Private constructor prevents instantiation
    private BasicSingleton() {
        System.out.println("Singleton instance created");
    }

    // Public static method to get instance
    public static BasicSingleton getInstance() {
        if (instance == null) {
            instance = new BasicSingleton();
        }
        return instance;
    }
}

// Usage:
BasicSingleton s1 = BasicSingleton.getInstance();
BasicSingleton s2 = BasicSingleton.getInstance();
System.out.println(s1 == s2);  // true (same instance)

// THREAD-SAFE SINGLETON (synchronized)
class ThreadSafeSingleton {
    private static ThreadSafeSingleton instance;

    private ThreadSafeSingleton() { }

    // Synchronized method (slow but thread-safe)
    public static synchronized ThreadSafeSingleton getInstance() {
        if (instance == null) {
            instance = new ThreadSafeSingleton();
        }
        return instance;
    }
}

// EAGER INITIALIZATION (thread-safe, simple)
class EagerSingleton {
    // Created at class loading time
    private static final EagerSingleton instance = new EagerSingleton();

    private EagerSingleton() { }

    public static EagerSingleton getInstance() {
        return instance;
    }
}

// DOUBLE-CHECKED LOCKING (best performance)
class DoubleCheckedSingleton {
    private static volatile DoubleCheckedSingleton instance;

    private DoubleCheckedSingleton() { }

    public static DoubleCheckedSingleton getInstance() {
        if (instance == null) {  // First check (no locking)
            synchronized (DoubleCheckedSingleton.class) {
                if (instance == null) {  // Second check (with locking)
                    instance = new DoubleCheckedSingleton();
                }
            }
        }
        return instance;
    }
}

// ENUM SINGLETON (best approach - Java)
enum EnumSingleton {
    INSTANCE;

    public void doSomething() {
        System.out.println("Enum singleton method");
    }
}

// Usage:
EnumSingleton.INSTANCE.doSomething();

// Practical example: Database connection
class DatabaseConnection {
    private static DatabaseConnection instance;
    private Connection connection;

    private DatabaseConnection() {
        // Initialize database connection
        connection = DriverManager.getConnection("jdbc:mysql://localhost/db");
    }

    public static synchronized DatabaseConnection getInstance() {
        if (instance == null) {
            instance = new DatabaseConnection();
        }
        return instance;
    }

    public Connection getConnection() {
        return connection;
    }
}

// Interview question: Break singleton with reflection
// Answer: Use enum (cannot be instantiated via reflection)
// Or throw exception in constructor if instance exists

private BasicSingleton() {
    if (instance != null) {
        throw new RuntimeException("Use getInstance() method");
    }
}

// When to use Singleton:
// ✓ Configuration manager
// ✓ Logger
// ✓ Database connection pool
// ✓ Cache
// ✗ Not for everything! (can make testing difficult)`,
      language: 'java'
    },
    topic: 'design_patterns',
    difficulty: 'mid',
    tags: ['singleton', 'design-pattern', 'creational', 'interview'],    commonPitfalls: ['Not thread-safe', 'Broken by reflection/serialization', 'Makes testing difficult', 'Overusing singleton'],
    realWorldUse: 'Configuration management, logging, database connections, caching, thread pools, application state.'
  },

  {
    id: 'pattern-002',
    question: "What is the Factory pattern? When would you use it?",
    answer: "Factory pattern creates objects without exposing creation logic. Client uses factory method instead of new. Benefits: 1) Decouples creation from usage, 2) Easy to add new types, 3) Single place for object creation logic. Common in frameworks.",
    explanation: "Factory is a creational pattern very commonly asked in interviews. Provides abstraction over object creation. Makes code more flexible and maintainable.",
    translations: {
      tr: {
        question: "Factory pattern nedir?",
        answer: "Factory nesne oluşturma mantığını kapsüller. Interface döndürür, concrete class gizler. Tip parametreye göre farklı nesne oluşturur.",
        explanation: "Factory oluşturma mantığını merkezileştirir ve esneklik sağlar."
      }
    },
    codeExample: {
      code: `// Without Factory Pattern (tight coupling)
class Client {
    public void createShape(String type) {
        Shape shape;
        if (type.equals("circle")) {
            shape = new Circle();  // Direct instantiation
        } else if (type.equals("rectangle")) {
            shape = new Rectangle();
        }
        shape.draw();
    }
}

// WITH FACTORY PATTERN

// 1. Product interface
interface Shape {
    void draw();
}

// 2. Concrete products
class Circle implements Shape {
    @Override
    public void draw() {
        System.out.println("Drawing Circle");
    }
}

class Rectangle implements Shape {
    @Override
    public void draw() {
        System.out.println("Drawing Rectangle");
    }
}

class Triangle implements Shape {
    @Override
    public void draw() {
        System.out.println("Drawing Triangle");
    }
}

// 3. Factory class
class ShapeFactory {
    // Factory method
    public static Shape createShape(String type) {
        if (type == null) {
            return null;
        }
        if (type.equalsIgnoreCase("circle")) {
            return new Circle();
        } else if (type.equalsIgnoreCase("rectangle")) {
            return new Rectangle();
        } else if (type.equalsIgnoreCase("triangle")) {
            return new Triangle();
        }
        throw new IllegalArgumentException("Unknown shape type: " + type);
    }
}

// 4. Client code (decoupled from concrete classes)
class Client {
    public static void main(String[] args) {
        // No 'new' keyword for concrete classes!
        Shape shape1 = ShapeFactory.createShape("circle");
        shape1.draw();

        Shape shape2 = ShapeFactory.createShape("rectangle");
        shape2.draw();

        // Easy to add new shape without changing client code
    }
}

// Practical example: Database connection factory
interface Database {
    void connect();
}

class MySQLDatabase implements Database {
    @Override
    public void connect() {
        System.out.println("Connecting to MySQL");
    }
}

class PostgreSQLDatabase implements Database {
    @Override
    public void connect() {
        System.out.println("Connecting to PostgreSQL");
    }
}

class DatabaseFactory {
    public static Database getDatabase(String type) {
        switch (type.toLowerCase()) {
            case "mysql":
                return new MySQLDatabase();
            case "postgresql":
                return new PostgreSQLDatabase();
            default:
                throw new IllegalArgumentException("Unknown database: " + type);
        }
    }
}

// Usage:
String dbType = config.getDatabaseType();  // From config file
Database db = DatabaseFactory.getDatabase(dbType);
db.connect();

// ENUM-based Factory (type-safe)
enum ShapeType {
    CIRCLE, RECTANGLE, TRIANGLE
}

class EnumShapeFactory {
    public static Shape createShape(ShapeType type) {
        switch (type) {
            case CIRCLE:
                return new Circle();
            case RECTANGLE:
                return new Rectangle();
            case TRIANGLE:
                return new Triangle();
            default:
                throw new IllegalArgumentException("Unknown shape type");
        }
    }
}

// Benefits:
// 1. Loose coupling - client doesn't know concrete classes
// 2. Single Responsibility - creation logic in one place
// 3. Open/Closed - easy to add new types without changing client
// 4. Code reusability

// When to use:
// ✓ Object creation is complex
// ✓ Want to hide creation logic
// ✓ Need flexibility to add new types
// ✓ Multiple similar objects with slight variations`,
      language: 'java'
    },
    topic: 'design_patterns',
    difficulty: 'mid',
    tags: ['factory', 'design-pattern', 'creational', 'interview'],    commonPitfalls: ['Overcomplicating simple object creation', 'Not handling invalid types', 'Factory class becomes too large', 'Forgetting to update factory when adding types'],
    realWorldUse: 'Object creation, plugin systems, database connections, document parsers, UI component creation.'
  },

  {
    id: 'pattern-003',
    question: "What is the Builder pattern? Why is it useful?",
    answer: "Builder pattern constructs complex objects step by step. Separates construction from representation. Benefits: 1) Readable object creation, 2) Immutable objects, 3) Optional parameters, 4) No telescoping constructors. Common for objects with many fields.",
    explanation: "Builder solves the problem of constructors with many parameters. Makes code more readable and maintainable. Very popular in modern Java (e.g., StringBuilder, Lombok @Builder).",
    translations: {
      tr: {
        question: "Builder pattern nedir?",
        answer: "Builder karmaşık nesneleri adım adım oluşturur. Çok parametreli constructor'a alternatif. Fluent API, method chaining. Immutable nesneler için ideal.",
        explanation: "Builder okunabilir, esnek nesne oluşturma sağlar - çok parametre varsa kullanın."
      }
    },
    codeExample: {
      code: `// WITHOUT BUILDER (telescoping constructors - messy!)
class User {
    private String name;
    private int age;
    private String email;
    private String phone;
    private String address;

    // Too many constructors!
    public User(String name) { }
    public User(String name, int age) { }
    public User(String name, int age, String email) { }
    public User(String name, int age, String email, String phone) { }
    public User(String name, int age, String email, String phone, String address) {
        // Which parameter is which?
        this.name = name;
        this.age = age;
        this.email = email;
        this.phone = phone;
        this.address = address;
    }
}

// Usage is confusing:
User user = new User("Alice", 25, "alice@email.com", "123-456", "123 St");
// What does each parameter mean? Hard to read!

// WITH BUILDER PATTERN

class User {
    // All fields final (immutable)
    private final String name;
    private final int age;
    private final String email;
    private final String phone;
    private final String address;

    // Private constructor (only builder can create)
    private User(UserBuilder builder) {
        this.name = builder.name;
        this.age = builder.age;
        this.email = builder.email;
        this.phone = builder.phone;
        this.address = builder.address;
    }

    // Static nested Builder class
    public static class UserBuilder {
        // Required parameters
        private final String name;

        // Optional parameters (with defaults)
        private int age = 0;
        private String email = "";
        private String phone = "";
        private String address = "";

        // Constructor with required parameters
        public UserBuilder(String name) {
            this.name = name;
        }

        // Setter methods return builder (for chaining)
        public UserBuilder age(int age) {
            this.age = age;
            return this;
        }

        public UserBuilder email(String email) {
            this.email = email;
            return this;
        }

        public UserBuilder phone(String phone) {
            this.phone = phone;
            return this;
        }

        public UserBuilder address(String address) {
            this.address = address;
            return this;
        }

        // Build method creates User
        public User build() {
            // Can add validation here
            if (name == null || name.isEmpty()) {
                throw new IllegalArgumentException("Name is required");
            }
            return new User(this);
        }
    }

    // Getters only (immutable)
    public String getName() { return name; }
    public int getAge() { return age; }
    public String getEmail() { return email; }
    public String getPhone() { return phone; }
    public String getAddress() { return address; }
}

// Usage: Readable and flexible!
User user1 = new User.UserBuilder("Alice")
    .age(25)
    .email("alice@email.com")
    .phone("123-456-7890")
    .address("123 Main St")
    .build();

// Optional parameters - only set what you need
User user2 = new User.UserBuilder("Bob")
    .age(30)
    .email("bob@email.com")
    .build();

// Order doesn't matter (named parameters)
User user3 = new User.UserBuilder("Charlie")
    .email("charlie@email.com")
    .age(35)
    .build();

// Practical example: HTTP Request builder
class HttpRequest {
    private final String url;
    private final String method;
    private final Map<String, String> headers;
    private final String body;

    private HttpRequest(Builder builder) {
        this.url = builder.url;
        this.method = builder.method;
        this.headers = builder.headers;
        this.body = builder.body;
    }

    public static class Builder {
        private final String url;
        private String method = "GET";
        private Map<String, String> headers = new HashMap<>();
        private String body = "";

        public Builder(String url) {
            this.url = url;
        }

        public Builder method(String method) {
            this.method = method;
            return this;
        }

        public Builder addHeader(String key, String value) {
            this.headers.put(key, value);
            return this;
        }

        public Builder body(String body) {
            this.body = body;
            return this;
        }

        public HttpRequest build() {
            return new HttpRequest(this);
        }
    }
}

// Usage:
HttpRequest request = new HttpRequest.Builder("https://api.example.com/users")
    .method("POST")
    .addHeader("Content-Type", "application/json")
    .addHeader("Authorization", "Bearer token123")
    .body("{\\"name\\":\\"Alice\\"}")
    .build();

// Benefits:
// 1. Readable code (self-documenting)
// 2. Immutable objects (thread-safe)
// 3. No telescoping constructors
// 4. Validation in one place
// 5. Optional parameters

// When to use:
// ✓ Class has many fields (>4)
// ✓ Many optional parameters
// ✓ Want immutable objects
// ✓ Complex object construction`,
      language: 'java'
    },
    topic: 'design_patterns',
    difficulty: 'mid',
    tags: ['builder', 'design-pattern', 'creational', 'immutability'],    commonPitfalls: ['Forgetting to make fields final', 'Not validating in build()', 'Builder class becomes too large', 'Overusing for simple objects'],
    realWorldUse: 'Complex object creation, configuration objects, HTTP requests, database queries, UI components, test data.'
  },

  {
    id: 'pattern-004',
    question: "What is the Strategy pattern? How does it work?",
    answer: "Strategy pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable. Client can switch algorithms at runtime. Components: 1) Strategy interface, 2) Concrete strategies, 3) Context class. Replaces complex if-else/switch.",
    explanation: "Strategy enables selecting algorithm at runtime. Follows Open/Closed principle. Common in payment processing, sorting, validation. Makes code more flexible and testable.",
    translations: {
      tr: {
        question: "Observer pattern nedir?",
        answer: "Observer bir-çok dependency tanımlar. Subject değiştiğinde tüm observer'lar bilgilendirilir. Event handling için. Java'da: Observable, Observer (deprecated), alternatif PropertyChangeListener.",
        explanation: "Observer loose coupling ile event-driven programlama sağlar."
      }
    },
    codeExample: {
      code: `// WITHOUT STRATEGY (hard-coded, inflexible)
class PaymentProcessor {
    public void processPayment(String type, double amount) {
        if (type.equals("credit")) {
            System.out.println("Processing credit card: $" + amount);
            // Credit card logic
        } else if (type.equals("paypal")) {
            System.out.println("Processing PayPal: $" + amount);
            // PayPal logic
        } else if (type.equals("bitcoin")) {
            System.out.println("Processing Bitcoin: $" + amount);
            // Bitcoin logic
        }
        // Adding new payment method requires modifying this class!
    }
}

// WITH STRATEGY PATTERN

// 1. Strategy interface
interface PaymentStrategy {
    void pay(double amount);
}

// 2. Concrete strategies (different algorithms)
class CreditCardStrategy implements PaymentStrategy {
    private String cardNumber;
    private String cvv;

    public CreditCardStrategy(String cardNumber, String cvv) {
        this.cardNumber = cardNumber;
        this.cvv = cvv;
    }

    @Override
    public void pay(double amount) {
        System.out.println("Paid $" + amount + " using Credit Card: " + cardNumber);
        // Credit card processing logic
    }
}

class PayPalStrategy implements PaymentStrategy {
    private String email;

    public PayPalStrategy(String email) {
        this.email = email;
    }

    @Override
    public void pay(double amount) {
        System.out.println("Paid $" + amount + " using PayPal: " + email);
        // PayPal processing logic
    }
}

class BitcoinStrategy implements PaymentStrategy {
    private String walletAddress;

    public BitcoinStrategy(String walletAddress) {
        this.walletAddress = walletAddress;
    }

    @Override
    public void pay(double amount) {
        System.out.println("Paid $" + amount + " using Bitcoin: " + walletAddress);
        // Bitcoin processing logic
    }
}

// 3. Context class (uses strategy)
class ShoppingCart {
    private List<Item> items = new ArrayList<>();
    private PaymentStrategy paymentStrategy;

    public void addItem(Item item) {
        items.add(item);
    }

    public void setPaymentStrategy(PaymentStrategy strategy) {
        this.paymentStrategy = strategy;
    }

    public void checkout() {
        double total = items.stream()
            .mapToDouble(Item::getPrice)
            .sum();

        if (paymentStrategy == null) {
            throw new IllegalStateException("Payment strategy not set");
        }

        paymentStrategy.pay(total);
    }
}

// 4. Client code
ShoppingCart cart = new ShoppingCart();
cart.addItem(new Item("Laptop", 1000));
cart.addItem(new Item("Mouse", 25));

// Choose payment strategy at runtime
cart.setPaymentStrategy(new CreditCardStrategy("1234-5678", "123"));
cart.checkout();  // Pays with credit card

// Change strategy
cart.setPaymentStrategy(new PayPalStrategy("user@email.com"));
cart.checkout();  // Pays with PayPal

// Easy to add new payment method without modifying existing code!
class ApplePayStrategy implements PaymentStrategy {
    @Override
    public void pay(double amount) {
        System.out.println("Paid $" + amount + " using Apple Pay");
    }
}

// Practical example: Sorting strategies
interface SortStrategy {
    void sort(int[] array);
}

class BubbleSort implements SortStrategy {
    @Override
    public void sort(int[] array) {
        System.out.println("Sorting using Bubble Sort");
        // Bubble sort implementation
    }
}

class QuickSort implements SortStrategy {
    @Override
    public void sort(int[] array) {
        System.out.println("Sorting using Quick Sort");
        // Quick sort implementation
    }
}

class Sorter {
    private SortStrategy strategy;

    public Sorter(SortStrategy strategy) {
        this.strategy = strategy;
    }

    public void setStrategy(SortStrategy strategy) {
        this.strategy = strategy;
    }

    public void sort(int[] array) {
        strategy.sort(array);
    }
}

// Usage:
int[] data = {5, 2, 8, 1, 9};

Sorter sorter = new Sorter(new QuickSort());
sorter.sort(data);  // Uses Quick Sort

sorter.setStrategy(new BubbleSort());
sorter.sort(data);  // Uses Bubble Sort

// Benefits:
// 1. Open/Closed Principle (open for extension, closed for modification)
// 2. Replaces complex conditionals
// 3. Easy to add new algorithms
// 4. Testable (can test strategies independently)
// 5. Runtime flexibility

// When to use:
// ✓ Multiple algorithms for same task
// ✓ Need to switch algorithms at runtime
// ✓ Want to avoid complex if-else/switch
// ✓ Different behaviors for different contexts`,
      language: 'java'
    },
    topic: 'design_patterns',
    difficulty: 'mid',
    tags: ['strategy', 'design-pattern', 'behavioral', 'polymorphism'],    commonPitfalls: ['Creating too many strategy classes', 'Not setting strategy before use', 'Strategies sharing too much state', 'Using when simple if-else suffices'],
    realWorldUse: 'Payment processing, sorting algorithms, validation rules, compression algorithms, routing strategies, pricing calculations.'
  },

  {
    id: 'pattern-005',
    question: "What is the Observer pattern? When would you use it?",
    answer: "Observer pattern defines one-to-many dependency: when one object changes state, all dependents are notified automatically. Components: 1) Subject (observable), 2) Observers (listeners). Used for event handling, pub-sub systems, MVC pattern.",
    explanation: "Observer enables loose coupling between objects. One subject can notify multiple observers. Foundation of event-driven programming. Common in GUI frameworks and reactive systems.",
    translations: {
      tr: {
        question: "Strategy pattern nedir?",
        answer: "Strategy algoritma ailesini tanımlar, kapsüller, birbirinin yerine kullanılabilir yapar. Runtime'da algoritma seçimi. Composition over inheritance.",
        explanation: "Strategy davranışları değiştirilebilir yapar - if-else yerine polymorphism."
      }
    },
    codeExample: {
      code: `// Observer Pattern - Event notification system

// 1. Observer interface (listener)
interface Observer {
    void update(String message);
}

// 2. Subject interface (observable)
interface Subject {
    void attach(Observer observer);
    void detach(Observer observer);
    void notifyObservers();
}

// 3. Concrete Subject
class NewsAgency implements Subject {
    private List<Observer> observers = new ArrayList<>();
    private String news;

    @Override
    public void attach(Observer observer) {
        observers.add(observer);
        System.out.println("Observer attached");
    }

    @Override
    public void detach(Observer observer) {
        observers.remove(observer);
        System.out.println("Observer detached");
    }

    @Override
    public void notifyObservers() {
        for (Observer observer : observers) {
            observer.update(news);
        }
    }

    // When news changes, notify all observers
    public void setNews(String news) {
        this.news = news;
        notifyObservers();
    }

    public String getNews() {
        return news;
    }
}

// 4. Concrete Observers
class EmailSubscriber implements Observer {
    private String email;

    public EmailSubscriber(String email) {
        this.email = email;
    }

    @Override
    public void update(String message) {
        System.out.println("Email to " + email + ": " + message);
        // Send email notification
    }
}

class SMSSubscriber implements Observer {
    private String phone;

    public SMSSubscriber(String phone) {
        this.phone = phone;
    }

    @Override
    public void update(String message) {
        System.out.println("SMS to " + phone + ": " + message);
        // Send SMS notification
    }
}

class MobileAppSubscriber implements Observer {
    private String userId;

    public MobileAppSubscriber(String userId) {
        this.userId = userId;
    }

    @Override
    public void update(String message) {
        System.out.println("Push notification to " + userId + ": " + message);
        // Send push notification
    }
}

// 5. Client code
NewsAgency agency = new NewsAgency();

// Subscribe observers
Observer emailSub = new EmailSubscriber("user@email.com");
Observer smsSub = new SMSSubscriber("123-456-7890");
Observer appSub = new MobileAppSubscriber("user123");

agency.attach(emailSub);
agency.attach(smsSub);
agency.attach(appSub);

// Publish news - all subscribers notified automatically!
agency.setNews("Breaking: Java 21 Released!");
// Output:
// Email to user@email.com: Breaking: Java 21 Released!
// SMS to 123-456-7890: Breaking: Java 21 Released!
// Push notification to user123: Breaking: Java 21 Released!

// Unsubscribe
agency.detach(smsSub);

agency.setNews("New update available");
// Only email and app subscribers notified

// Practical example: Stock price monitoring
class Stock implements Subject {
    private List<Observer> investors = new ArrayList<>();
    private String symbol;
    private double price;

    public Stock(String symbol) {
        this.symbol = symbol;
    }

    @Override
    public void attach(Observer observer) {
        investors.add(observer);
    }

    @Override
    public void detach(Observer observer) {
        investors.remove(observer);
    }

    @Override
    public void notifyObservers() {
        for (Observer investor : investors) {
            investor.update(symbol + " price: $" + price);
        }
    }

    public void setPrice(double price) {
        this.price = price;
        notifyObservers();  // Notify all investors
    }
}

class Investor implements Observer {
    private String name;

    public Investor(String name) {
        this.name = name;
    }

    @Override
    public void update(String message) {
        System.out.println(name + " notified: " + message);
        // Make trading decision
    }
}

// Usage:
Stock apple = new Stock("AAPL");

Investor investor1 = new Investor("Alice");
Investor investor2 = new Investor("Bob");

apple.attach(investor1);
apple.attach(investor2);

apple.setPrice(150.25);  // Both investors notified
apple.setPrice(152.00);  // Both investors notified

// Java built-in Observer (deprecated but educational)
import java.util.Observable;
import java.util.Observer;

class WeatherStation extends Observable {
    private float temperature;

    public void setTemperature(float temp) {
        this.temperature = temp;
        setChanged();  // Mark as changed
        notifyObservers(temperature);  // Notify observers
    }
}

// Benefits:
// 1. Loose coupling (subject doesn't know concrete observers)
// 2. Dynamic relationships (add/remove observers at runtime)
// 3. Broadcast communication
// 4. Open/Closed Principle

// When to use:
// ✓ Event handling systems
// ✓ MVC pattern (model notifies views)
// ✓ Pub-sub systems
// ✓ Monitoring/logging
// ✓ Real-time data feeds`,
      language: 'java'
    },
    topic: 'design_patterns',
    difficulty: 'mid',
    tags: ['observer', 'design-pattern', 'behavioral', 'event-driven'],    commonPitfalls: ['Memory leaks (not detaching observers)', 'Observer order dependency', 'Cascading updates', 'Thread safety issues'],
    realWorldUse: 'Event systems, GUI frameworks, stock monitoring, news feeds, chat applications, data binding, reactive programming.'
  },

  {
    id: 'pattern-006',
    question: "What is Dependency Injection? Why is it important?",
    answer: "Dependency Injection (DI): Providing dependencies from outside rather than creating them inside. Types: 1) Constructor injection (preferred), 2) Setter injection, 3) Field injection. Benefits: Loose coupling, testability, flexibility. Core of Spring framework.",
    explanation: "DI is a design principle (not traditional pattern) but crucial for modern Java development. Inverts control of dependency creation. Makes code testable and maintainable.",
    translations: {
      tr: {
        question: "Decorator pattern nedir?",
        answer: "Decorator nesneye dinamik olarak yeni sorumluluklar ekler. Inheritance'a alternatif. Wrapper kullanır. Java I/O stream'ler örneği (BufferedReader wraps FileReader).",
        explanation: "Decorator esneklik sağlar - subclass patlamasından kaçınır."
      }
    },
    codeExample: {
      code: `// WITHOUT DEPENDENCY INJECTION (tight coupling)
class UserService {
    private UserRepository repository;

    public UserService() {
        // Creating dependency inside - TIGHT COUPLING!
        this.repository = new MySQLUserRepository();
    }

    public User getUser(int id) {
        return repository.findById(id);
    }
}
// Problems:
// - Hard to test (can't mock repository)
// - Hard to switch database
// - Violates Single Responsibility (creates its own dependencies)

// WITH DEPENDENCY INJECTION

// 1. CONSTRUCTOR INJECTION (BEST)
class UserService {
    private final UserRepository repository;

    // Dependency injected via constructor
    public UserService(UserRepository repository) {
        this.repository = repository;
    }

    public User getUser(int id) {
        return repository.findById(id);
    }
}

// Usage: Dependency provided from outside
UserRepository repo = new MySQLUserRepository();
UserService service = new UserService(repo);

// Easy to test with mock
UserRepository mockRepo = new MockUserRepository();
UserService testService = new UserService(mockRepo);

// Easy to switch implementation
UserRepository postgresRepo = new PostgreSQLUserRepository();
UserService service2 = new UserService(postgresRepo);

// 2. SETTER INJECTION (optional dependencies)
class EmailService {
    private EmailValidator validator;
    private EmailSender sender;

    // Setter injection
    public void setValidator(EmailValidator validator) {
        this.validator = validator;
    }

    public void setSender(EmailSender sender) {
        this.sender = sender;
    }

    public void sendEmail(String to, String message) {
        if (validator != null && !validator.isValid(to)) {
            throw new IllegalArgumentException("Invalid email");
        }
        sender.send(to, message);
    }
}

// 3. INTERFACE INJECTION (rare)
interface DependencyInjector {
    void injectDependency(Dependency dep);
}

// Practical example: Payment processing
interface PaymentGateway {
    boolean processPayment(double amount);
}

class StripeGateway implements PaymentGateway {
    @Override
    public boolean processPayment(double amount) {
        System.out.println("Processing $" + amount + " via Stripe");
        return true;
    }
}

class PayPalGateway implements PaymentGateway {
    @Override
    public boolean processPayment(double amount) {
        System.out.println("Processing $" + amount + " via PayPal");
        return true;
    }
}

// Service with DI
class OrderService {
    private final PaymentGateway paymentGateway;
    private final NotificationService notificationService;

    // Constructor injection
    public OrderService(PaymentGateway paymentGateway,
                       NotificationService notificationService) {
        this.paymentGateway = paymentGateway;
        this.notificationService = notificationService;
    }

    public void placeOrder(Order order) {
        if (paymentGateway.processPayment(order.getTotal())) {
            System.out.println("Order placed successfully");
            notificationService.notify("Order confirmed");
        }
    }
}

// Usage: Wire dependencies manually
PaymentGateway gateway = new StripeGateway();
NotificationService notifier = new EmailNotificationService();
OrderService orderService = new OrderService(gateway, notifier);

// Easy to switch implementations
PaymentGateway paypal = new PayPalGateway();
OrderService orderService2 = new OrderService(paypal, notifier);

// Testing with mocks
PaymentGateway mockGateway = mock(PaymentGateway.class);
NotificationService mockNotifier = mock(NotificationService.class);
OrderService testService = new OrderService(mockGateway, mockNotifier);

// With Spring Framework (automatic DI)
@Service
public class UserService {
    private final UserRepository repository;

    @Autowired  // Spring injects dependency
    public UserService(UserRepository repository) {
        this.repository = repository;
    }
}

// DI Container manually
class DIContainer {
    private Map<Class<?>, Object> beans = new HashMap<>();

    public <T> void register(Class<T> type, T instance) {
        beans.put(type, instance);
    }

    @SuppressWarnings("unchecked")
    public <T> T resolve(Class<T> type) {
        return (T) beans.get(type);
    }
}

// Usage:
DIContainer container = new DIContainer();
container.register(PaymentGateway.class, new StripeGateway());
container.register(NotificationService.class, new EmailNotificationService());

PaymentGateway gateway = container.resolve(PaymentGateway.class);
NotificationService notifier = container.resolve(NotificationService.class);
OrderService service = new OrderService(gateway, notifier);

// Benefits:
// 1. Loose coupling
// 2. Easy testing (can inject mocks)
// 3. Flexibility (swap implementations)
// 4. Single Responsibility
// 5. Reusability

// When to use:
// ✓ Always! (for any dependency)
// ✓ Especially for services, repositories, clients
// ✓ When testing is important
// ✓ When flexibility is needed`,
      language: 'java'
    },
    topic: 'design_patterns',
    difficulty: 'mid',
    tags: ['dependency-injection', 'di', 'design-principle', 'testing', 'spring'],    commonPitfalls: ['Circular dependencies', 'Too many constructor parameters', 'Using field injection (hard to test)', 'Not using interfaces'],
    realWorldUse: 'Spring applications, testing, modular code, plugin systems, service layers, enterprise applications.'
  }
];
