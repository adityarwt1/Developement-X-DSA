# Java Roadmap for JavaScript Developers

> Complete guide to mastering Java syntax, data structures, and Spring Boot coming from a JavaScript background

---

## Table of Contents

1. [Java Environment Setup](#1-java-environment-setup)
2. [JavaScript vs Java: Syntax Comparison](#2-javascript-vs-java-syntax-comparison)
3. [Data Structures in Java](#3-data-structures-in-java)
4. [Object-Oriented Programming in Java](#4-object-oriented-programming-in-java)
5. [Spring Boot Setup & Tutorial](#5-spring-boot-setup--tutorial)
6. [Building REST APIs with Spring Boot](#6-building-rest-apis-with-spring-boot)
7. [Practice Projects](#7-practice-projects)

---

## 1. Java Environment Setup

### Step 1: Install Java Development Kit (JDK)

**For Windows:**
```bash
# Download JDK 17 or later from:
# https://www.oracle.com/java/technologies/downloads/
# or use OpenJDK: https://adoptium.net/

# After installation, verify:
java -version
javac -version
```

**For macOS:**
```bash
# Using Homebrew
brew install openjdk@17

# Add to PATH (add to ~/.zshrc or ~/.bash_profile)
export PATH="/opt/homebrew/opt/openjdk@17/bin:$PATH"

# Verify installation
java -version
javac -version
```

**For Linux (Ubuntu/Debian):**
```bash
sudo apt update
sudo apt install openjdk-17-jdk

# Verify installation
java -version
javac -version
```

### Step 2: Set JAVA_HOME Environment Variable

**Windows:**
```bash
# Set in System Environment Variables
JAVA_HOME=C:\Program Files\Java\jdk-17
PATH=%JAVA_HOME%\bin;%PATH%
```

**macOS/Linux:**
```bash
# Add to ~/.zshrc or ~/.bashrc
export JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64  # Linux
export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Home  # macOS

export PATH=$JAVA_HOME/bin:$PATH
```

### Step 3: Install Maven (Build Tool)

**Windows:**
```bash
# Download from: https://maven.apache.org/download.cgi
# Extract and add to PATH
MAVEN_HOME=C:\Program Files\Apache\maven
PATH=%MAVEN_HOME%\bin;%PATH%
```

**macOS:**
```bash
brew install maven
mvn -version
```

**Linux:**
```bash
sudo apt install maven
mvn -version
```

### Step 4: Choose an IDE

**Recommended IDEs:**
- **IntelliJ IDEA** (Community Edition - Free): https://www.jetbrains.com/idea/download/
- **Eclipse**: https://www.eclipse.org/downloads/
- **VS Code** with Java Extension Pack

**VS Code Setup:**
```bash
# Install VS Code Java Extension Pack
# Extensions to install:
# - Extension Pack for Java (Microsoft)
# - Spring Boot Extension Pack
# - Maven for Java
```

---

## 2. JavaScript vs Java: Syntax Comparison

### 2.1 Variables and Constants

**JavaScript:**
```javascript
// Variable declarations
let name = "John";
const age = 25;
var oldStyle = "avoid this";

// Dynamic typing
let value = 42;
value = "now I'm a string";  // OK in JS
```

**Java:**
```java
// Variable declarations (static typing required)
String name = "John";
final int age = 25;  // final = const

// Type must be declared and cannot change
int value = 42;
value = "now I'm a string";  // ❌ Compilation error!

// Type inference (Java 10+)
var inferredName = "John";  // Still strongly typed as String
```

### 2.2 Data Types Comparison

| JavaScript | Java | Notes |
|------------|------|-------|
| `number` | `int`, `long`, `double`, `float` | Java has multiple numeric types |
| `string` | `String` | Java String is a class (capital S) |
| `boolean` | `boolean` | Same concept, lowercase in Java |
| `null` | `null` | Similar concept |
| `undefined` | N/A | Java doesn't have undefined |
| `object` | `Object`, custom classes | Everything extends Object |
| `Array` | `int[]`, `String[]`, `ArrayList` | Arrays and Lists |

**JavaScript:**
```javascript
let num = 42;                    // number
let decimal = 3.14;              // number
let text = "Hello";              // string
let flag = true;                 // boolean
let nothing = null;              // null
let notDefined;                  // undefined
```

**Java:**
```java
int num = 42;                    // 32-bit integer
long bigNum = 42L;               // 64-bit integer
double decimal = 3.14;           // 64-bit floating point
float smallDecimal = 3.14f;      // 32-bit floating point
String text = "Hello";           // String object
boolean flag = true;             // boolean
String nothing = null;           // null (for objects only)
// No undefined in Java!

// Primitive types vs Objects
int primitive = 42;              // Stored directly in memory
Integer objectInt = 42;          // Wrapper class, stored as object
```

### 2.3 Functions vs Methods

**JavaScript:**
```javascript
// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Arrow function
const greetArrow = (name) => `Hello, ${name}!`;

// Function with default parameters
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}

// Rest parameters
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}
```

**Java:**
```java
// Method declaration (must be inside a class)
public class MyClass {
    // Basic method
    public String greet(String name) {
        return "Hello, " + name + "!";
    }
    
    // Method with default parameters (use overloading)
    public String greet() {
        return greet("Guest");
    }
    
    public String greet(String name) {
        return "Hello, " + name + "!";
    }
    
    // Varargs (variable arguments - like rest parameters)
    public int sum(int... numbers) {
        int total = 0;
        for (int num : numbers) {
            total += num;
        }
        return total;
    }
    
    // Lambda expression (Java 8+)
    Function<String, String> greetLambda = (name) -> "Hello, " + name + "!";
}
```

### 2.4 Control Structures

**JavaScript:**
```javascript
// If-else
if (age >= 18) {
    console.log("Adult");
} else if (age >= 13) {
    console.log("Teen");
} else {
    console.log("Child");
}

// Switch
switch (day) {
    case "Monday":
        console.log("Start of week");
        break;
    case "Friday":
        console.log("Weekend coming!");
        break;
    default:
        console.log("Regular day");
}

// For loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// For-of (arrays)
for (const item of array) {
    console.log(item);
}

// For-in (objects)
for (const key in object) {
    console.log(key, object[key]);
}

// While
while (condition) {
    // code
}
```

**Java:**
```java
// If-else (exactly the same!)
if (age >= 18) {
    System.out.println("Adult");
} else if (age >= 13) {
    System.out.println("Teen");
} else {
    System.out.println("Child");
}

// Switch (traditional)
switch (day) {
    case "Monday":
        System.out.println("Start of week");
        break;
    case "Friday":
        System.out.println("Weekend coming!");
        break;
    default:
        System.out.println("Regular day");
}

// Switch expression (Java 14+)
String message = switch (day) {
    case "Monday" -> "Start of week";
    case "Friday" -> "Weekend coming!";
    default -> "Regular day";
};

// For loop (exactly the same!)
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}

// Enhanced for loop (for-each)
for (String item : array) {
    System.out.println(item);
}

// While (exactly the same!)
while (condition) {
    // code
}
```

### 2.5 Arrays

**JavaScript:**
```javascript
// Array creation
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "two", true, null];  // Can mix types

// Array methods
numbers.push(6);              // Add to end
numbers.pop();                // Remove from end
numbers.shift();              // Remove from start
numbers.unshift(0);           // Add to start
numbers.length;               // Get length

// Array iteration
numbers.forEach(num => console.log(num));
let doubled = numbers.map(num => num * 2);
let evens = numbers.filter(num => num % 2 === 0);
let sum = numbers.reduce((acc, num) => acc + num, 0);
```

**Java:**
```java
// Fixed-size array
int[] numbers = {1, 2, 3, 4, 5};
int[] numbers2 = new int[5];  // Declare size, all zeros
String[] names = new String[3];

// Cannot mix types in standard arrays
// int[] mixed = {1, "two", true};  // ❌ Compilation error

// Array properties
int length = numbers.length;  // Property, not method!

// Array iteration
for (int num : numbers) {
    System.out.println(num);
}

// Traditional for loop
for (int i = 0; i < numbers.length; i++) {
    System.out.println(numbers[i]);
}

// Dynamic arrays using ArrayList (more like JS arrays)
import java.util.ArrayList;

ArrayList<Integer> list = new ArrayList<>();
list.add(1);                  // Add to end
list.add(2);
list.remove(0);               // Remove by index
list.get(0);                  // Get by index
list.size();                  // Get size

// Stream API (functional operations - Java 8+)
import java.util.stream.Collectors;

list.stream()
    .forEach(num -> System.out.println(num));
    
List<Integer> doubled = list.stream()
    .map(num -> num * 2)
    .collect(Collectors.toList());
    
List<Integer> evens = list.stream()
    .filter(num -> num % 2 == 0)
    .collect(Collectors.toList());
    
int sum = list.stream()
    .reduce(0, (acc, num) -> acc + num);
```

### 2.6 Objects and Classes

**JavaScript:**
```javascript
// Object literal
const person = {
    name: "John",
    age: 30,
    greet: function() {
        return `Hi, I'm ${this.name}`;
    }
};

// ES6 Class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        return `Hi, I'm ${this.name}`;
    }
}

const john = new Person("John", 30);
```

**Java:**
```java
// No object literals - must use classes
public class Person {
    // Fields (properties)
    private String name;
    private int age;
    
    // Constructor
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    // Getter methods
    public String getName() {
        return name;
    }
    
    public int getAge() {
        return age;
    }
    
    // Setter methods
    public void setName(String name) {
        this.name = name;
    }
    
    public void setAge(int age) {
        this.age = age;
    }
    
    // Method
    public String greet() {
        return "Hi, I'm " + this.name;
    }
}

// Creating instance
Person john = new Person("John", 30);
john.greet();
```

### 2.7 String Operations

**JavaScript:**
```javascript
let str = "Hello";
let str2 = 'World';
let template = `Hello ${name}!`;

// String methods
str.length;
str.toUpperCase();
str.toLowerCase();
str.substring(0, 3);
str.includes("ell");
str.split(" ");
str.replace("Hello", "Hi");
str.trim();
```

**Java:**
```java
String str = "Hello";
String str2 = "World";
// No template literals (until Java 21+ with String Templates preview)
String template = "Hello " + name + "!";
String formatted = String.format("Hello %s!", name);

// String methods
str.length();              // Method, not property!
str.toUpperCase();
str.toLowerCase();
str.substring(0, 3);
str.contains("ell");
str.split(" ");
str.replace("Hello", "Hi");
str.trim();

// String concatenation
String result = str + " " + str2;
String result2 = str.concat(" ").concat(str2);

// StringBuilder for efficient concatenation
StringBuilder sb = new StringBuilder();
sb.append("Hello");
sb.append(" ");
sb.append("World");
String result3 = sb.toString();
```

### 2.8 Error Handling

**JavaScript:**
```javascript
try {
    // Code that might throw error
    throw new Error("Something went wrong");
} catch (error) {
    console.error(error.message);
} finally {
    console.log("Always runs");
}

// Async error handling
async function fetchData() {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}
```

**Java:**
```java
try {
    // Code that might throw exception
    throw new Exception("Something went wrong");
} catch (Exception e) {
    System.err.println(e.getMessage());
    e.printStackTrace();
} finally {
    System.out.println("Always runs");
}

// Specific exception types
try {
    int result = 10 / 0;
} catch (ArithmeticException e) {
    System.err.println("Cannot divide by zero");
} catch (Exception e) {
    System.err.println("Other error");
}

// Throwing exceptions
public void riskyMethod() throws IOException {
    throw new IOException("File not found");
}

// Multiple catch blocks
try {
    // code
} catch (IOException e) {
    // handle IO exception
} catch (SQLException e) {
    // handle SQL exception
} catch (Exception e) {
    // handle any other exception
}
```

---

## 3. Data Structures in Java

### 3.1 ArrayList (Like JavaScript Array)

**JavaScript:**
```javascript
let list = [];
list.push(1);
list.push(2);
list.pop();
list[0] = 10;
let size = list.length;
```

**Java:**
```java
import java.util.ArrayList;
import java.util.List;

// Creating ArrayList
List<Integer> list = new ArrayList<>();
ArrayList<String> names = new ArrayList<>();

// Basic operations
list.add(1);              // Add to end
list.add(0, 10);          // Add at index
list.get(0);              // Access by index
list.set(0, 20);          // Update by index
list.remove(0);           // Remove by index
list.size();              // Get size
list.contains(10);        // Check if contains
list.clear();             // Remove all

// Iteration
for (int item : list) {
    System.out.println(item);
}

// Stream operations (functional style)
list.stream()
    .filter(x -> x > 5)
    .map(x -> x * 2)
    .forEach(System.out::println);
```

### 3.2 HashMap (Like JavaScript Object/Map)

**JavaScript:**
```javascript
// Object
let obj = {
    name: "John",
    age: 30
};

// Map
let map = new Map();
map.set("name", "John");
map.set("age", 30);
let value = map.get("name");
```

**Java:**
```java
import java.util.HashMap;
import java.util.Map;

// Creating HashMap
Map<String, Integer> map = new HashMap<>();
HashMap<String, String> strMap = new HashMap<>();

// Basic operations
map.put("age", 30);           // Add/update
map.get("age");               // Get value
map.containsKey("age");       // Check key exists
map.containsValue(30);        // Check value exists
map.remove("age");            // Remove by key
map.size();                   // Get size
map.clear();                  // Remove all

// Iteration
for (Map.Entry<String, Integer> entry : map.entrySet()) {
    System.out.println(entry.getKey() + ": " + entry.getValue());
}

// Only keys
for (String key : map.keySet()) {
    System.out.println(key);
}

// Only values
for (Integer value : map.values()) {
    System.out.println(value);
}

// Lambda iteration
map.forEach((key, value) -> {
    System.out.println(key + ": " + value);
});
```

### 3.3 HashSet (Like JavaScript Set)

**JavaScript:**
```javascript
let set = new Set();
set.add(1);
set.add(2);
set.add(1);  // Duplicate ignored
set.has(1);
set.delete(1);
set.size;
```

**Java:**
```java
import java.util.HashSet;
import java.util.Set;

// Creating HashSet
Set<String> set = new HashSet<>();
HashSet<Integer> numbers = new HashSet<>();

// Basic operations
set.add("apple");          // Add element
set.add("banana");
set.add("apple");          // Duplicate ignored
set.contains("apple");     // Check exists
set.remove("apple");       // Remove element
set.size();                // Get size
set.clear();               // Remove all

// Iteration
for (String item : set) {
    System.out.println(item);
}

// Stream
set.stream()
    .filter(s -> s.startsWith("a"))
    .forEach(System.out::println);
```

### 3.4 LinkedList (Doubly Linked List)

**Java:**
```java
import java.util.LinkedList;
import java.util.List;

// Creating LinkedList
LinkedList<String> list = new LinkedList<>();

// Operations at ends
list.addFirst("first");       // Add to beginning
list.addLast("last");         // Add to end
list.getFirst();              // Get first
list.getLast();               // Get last
list.removeFirst();           // Remove first
list.removeLast();            // Remove last

// Regular list operations
list.add("middle");
list.get(0);
list.set(0, "updated");
list.remove(0);

// Use as Queue
list.offer("item");           // Add to end
list.poll();                  // Remove from beginning

// Use as Stack
list.push("item");            // Add to beginning
list.pop();                   // Remove from beginning
```

### 3.5 Queue and Stack

**Java:**
```java
import java.util.Queue;
import java.util.LinkedList;
import java.util.Stack;

// Queue (FIFO)
Queue<String> queue = new LinkedList<>();
queue.offer("first");         // Add to end
queue.offer("second");
queue.peek();                 // Look at front
queue.poll();                 // Remove from front

// Stack (LIFO)
Stack<Integer> stack = new Stack<>();
stack.push(1);                // Add to top
stack.push(2);
stack.peek();                 // Look at top
stack.pop();                  // Remove from top
stack.isEmpty();
```

### 3.6 Complete Data Structures Example

**Java:**
```java
import java.util.*;
import java.util.stream.Collectors;

public class DataStructuresDemo {
    public static void main(String[] args) {
        // ArrayList - Dynamic array
        List<String> fruits = new ArrayList<>();
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Cherry");
        
        // HashMap - Key-value pairs
        Map<String, Integer> ages = new HashMap<>();
        ages.put("John", 30);
        ages.put("Jane", 25);
        ages.put("Bob", 35);
        
        // HashSet - Unique values
        Set<String> uniqueTags = new HashSet<>();
        uniqueTags.add("java");
        uniqueTags.add("python");
        uniqueTags.add("java");  // Duplicate ignored
        
        // Stream operations (functional programming)
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        
        // Filter, map, reduce
        int sum = numbers.stream()
            .filter(n -> n % 2 == 0)           // Even numbers
            .map(n -> n * 2)                    // Double them
            .reduce(0, Integer::sum);           // Sum them
        
        System.out.println("Sum of doubled evens: " + sum);
        
        // Collect to list
        List<Integer> evenDoubled = numbers.stream()
            .filter(n -> n % 2 == 0)
            .map(n -> n * 2)
            .collect(Collectors.toList());
        
        System.out.println("Even doubled: " + evenDoubled);
    }
}
```

---

## 4. Object-Oriented Programming in Java

### 4.1 Classes and Objects

**Java:**
```java
// Basic class
public class Car {
    // Fields (instance variables)
    private String brand;
    private String model;
    private int year;
    
    // Constructor
    public Car(String brand, String model, int year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    
    // Getters and Setters
    public String getBrand() {
        return brand;
    }
    
    public void setBrand(String brand) {
        this.brand = brand;
    }
    
    public String getModel() {
        return model;
    }
    
    public void setModel(String model) {
        this.model = model;
    }
    
    public int getYear() {
        return year;
    }
    
    public void setYear(int year) {
        this.year = year;
    }
    
    // Methods
    public void start() {
        System.out.println(brand + " " + model + " is starting...");
    }
    
    public String getInfo() {
        return year + " " + brand + " " + model;
    }
    
    // toString method (like toString in JS)
    @Override
    public String toString() {
        return "Car{" +
                "brand='" + brand + '\'' +
                ", model='" + model + '\'' +
                ", year=" + year +
                '}';
    }
}

// Using the class
Car myCar = new Car("Toyota", "Camry", 2022);
myCar.start();
System.out.println(myCar.getInfo());
```

### 4.2 Inheritance

**Java:**
```java
// Parent class
public class Vehicle {
    protected String brand;
    protected int year;
    
    public Vehicle(String brand, int year) {
        this.brand = brand;
        this.year = year;
    }
    
    public void honk() {
        System.out.println("Beep beep!");
    }
    
    public String getInfo() {
        return year + " " + brand;
    }
}

// Child class
public class Car extends Vehicle {
    private String model;
    private int doors;
    
    public Car(String brand, String model, int year, int doors) {
        super(brand, year);  // Call parent constructor
        this.model = model;
        this.doors = doors;
    }
    
    // Override parent method
    @Override
    public String getInfo() {
        return super.getInfo() + " " + model + " (" + doors + " doors)";
    }
    
    // Car-specific method
    public void openTrunk() {
        System.out.println("Trunk is open");
    }
}

// Using inheritance
Car car = new Car("Honda", "Civic", 2023, 4);
car.honk();        // Inherited from Vehicle
car.openTrunk();   // Car-specific
System.out.println(car.getInfo());  // Overridden method
```

### 4.3 Interfaces

**Java:**
```java
// Interface definition
public interface Drivable {
    void start();
    void stop();
    void accelerate(int speed);
    
    // Default method (Java 8+)
    default void honk() {
        System.out.println("Beep!");
    }
}

// Implementing interface
public class Car implements Drivable {
    private boolean isRunning = false;
    
    @Override
    public void start() {
        isRunning = true;
        System.out.println("Car started");
    }
    
    @Override
    public void stop() {
        isRunning = false;
        System.out.println("Car stopped");
    }
    
    @Override
    public void accelerate(int speed) {
        if (isRunning) {
            System.out.println("Accelerating to " + speed + " km/h");
        }
    }
}

// Multiple interfaces
public interface Electric {
    void charge();
    int getBatteryLevel();
}

public class TeslaCar implements Drivable, Electric {
    private int batteryLevel = 100;
    
    @Override
    public void start() {
        System.out.println("Tesla starting silently...");
    }
    
    @Override
    public void charge() {
        batteryLevel = 100;
        System.out.println("Charging complete");
    }
    
    @Override
    public int getBatteryLevel() {
        return batteryLevel;
    }
    
    // Implement other Drivable methods...
}
```

### 4.4 Abstract Classes

**Java:**
```java
// Abstract class
public abstract class Animal {
    protected String name;
    
    public Animal(String name) {
        this.name = name;
    }
    
    // Abstract method (must be implemented by subclass)
    public abstract void makeSound();
    
    // Concrete method (can be used as-is)
    public void sleep() {
        System.out.println(name + " is sleeping");
    }
}

// Concrete class
public class Dog extends Animal {
    public Dog(String name) {
        super(name);
    }
    
    @Override
    public void makeSound() {
        System.out.println(name + " says: Woof!");
    }
    
    public void fetch() {
        System.out.println(name + " is fetching the ball");
    }
}

public class Cat extends Animal {
    public Cat(String name) {
        super(name);
    }
    
    @Override
    public void makeSound() {
        System.out.println(name + " says: Meow!");
    }
}

// Usage
Animal dog = new Dog("Buddy");
dog.makeSound();  // Woof!
dog.sleep();      // Buddy is sleeping
```

### 4.5 Encapsulation and Access Modifiers

**Java:**
```java
public class BankAccount {
    // Private fields (encapsulated)
    private String accountNumber;
    private double balance;
    private String ownerName;
    
    // Public constructor
    public BankAccount(String accountNumber, String ownerName) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = 0.0;
    }
    
    // Public methods to access/modify private fields
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited: $" + amount);
        }
    }
    
    public boolean withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawn: $" + amount);
            return true;
        }
        System.out.println("Insufficient funds");
        return false;
    }
    
    // Getter for balance (read-only)
    public double getBalance() {
        return balance;
    }
    
    // Getter for account number (read-only)
    public String getAccountNumber() {
        return accountNumber;
    }
}

// Access Modifiers:
// public    - accessible from anywhere
// private   - only within the same class
// protected - within same package and subclasses
// (default) - within same package only
```

---

## 5. Spring Boot Setup & Tutorial

### 5.1 What is Spring Boot?

Spring Boot is to Java what Express.js is to Node.js - a framework for building web applications and REST APIs quickly.

**JavaScript (Express):**
```javascript
const express = require('express');
const app = express();
app.get('/api/users', (req, res) => {
    res.json({ message: 'Hello' });
});
app.listen(3000);
```

**Java (Spring Boot):**
```java
@RestController
public class UserController {
    @GetMapping("/api/users")
    public Map<String, String> getUsers() {
        return Map.of("message", "Hello");
    }
}
```

### 5.2 Create Spring Boot Project

**Method 1: Using Spring Initializr (Recommended)**

1. Go to: https://start.spring.io/
2. Configure:
   - Project: **Maven**
   - Language: **Java**
   - Spring Boot: **3.2.0** (or latest)
   - Project Metadata:
     - Group: `com.example`
     - Artifact: `demo`
     - Name: `demo`
     - Package name: `com.example.demo`
     - Packaging: **Jar**
     - Java: **17** or **21**
3. Dependencies to add:
   - **Spring Web** (for REST APIs)
   - **Spring Boot DevTools** (hot reload)
   - **Spring Data JPA** (database)
   - **H2 Database** (in-memory database for testing)
   - **Lombok** (reduces boilerplate code)
   - **Validation** (for request validation)
4. Click **Generate** to download zip
5. Extract and open in your IDE

**Method 2: Using Spring Boot CLI**

```bash
# Install Spring Boot CLI
sdk install springboot

# Create new project
spring init --dependencies=web,data-jpa,h2,lombok,devtools my-app
cd my-app
```

**Method 3: Using Maven**

```bash
mvn archetype:generate \
  -DgroupId=com.example \
  -DartifactId=demo \
  -DarchetypeArtifactId=maven-archetype-quickstart \
  -DinteractiveMode=false
```

### 5.3 Project Structure

```
my-spring-app/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/
│   │   │       └── example/
│   │   │           └── demo/
│   │   │               ├── DemoApplication.java       # Main entry point
│   │   │               ├── controller/                # REST controllers (like Express routes)
│   │   │               │   └── UserController.java
│   │   │               ├── model/                     # Data models/entities
│   │   │               │   └── User.java
│   │   │               ├── repository/                # Database access (like ORMs)
│   │   │               │   └── UserRepository.java
│   │   │               ├── service/                   # Business logic
│   │   │               │   └── UserService.java
│   │   │               └── dto/                       # Data Transfer Objects
│   │   │                   └── UserDTO.java
│   │   └── resources/
│   │       ├── application.properties                 # Configuration
│   │       └── static/                                # Static files
│   └── test/                                          # Test files
├── pom.xml                                            # Maven dependencies (like package.json)
└── README.md
```

### 5.4 Main Application File

**DemoApplication.java:**
```java
package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication  // This annotation does everything!
public class DemoApplication {
    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
}
```

### 5.5 Configuration File

**application.properties:**
```properties
# Server configuration
server.port=8080
server.servlet.context-path=/api

# Database configuration (H2 in-memory)
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=

# JPA/Hibernate
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

# H2 Console (for viewing database)
spring.h2.console.enabled=true
spring.h2.console.path=/h2-console

# Logging
logging.level.root=INFO
logging.level.com.example.demo=DEBUG
```

**Or use application.yml:**
```yaml
server:
  port: 8080
  servlet:
    context-path: /api

spring:
  datasource:
    url: jdbc:h2:mem:testdb
    driver-class-name: org.h2.Driver
    username: sa
    password:
  
  jpa:
    database-platform: org.hibernate.dialect.H2Dialect
    hibernate:
      ddl-auto: update
    show-sql: true
  
  h2:
    console:
      enabled: true
      path: /h2-console

logging:
  level:
    root: INFO
    com.example.demo: DEBUG
```

### 5.6 Running the Application

**Command line:**
```bash
# Using Maven
./mvnw spring-boot:run

# Or if you have Maven installed
mvn spring-boot:run

# Build JAR and run
./mvnw clean package
java -jar target/demo-0.0.1-SNAPSHOT.jar
```

**IDE:**
- IntelliJ IDEA: Right-click `DemoApplication.java` → Run
- VS Code: Click "Run" above the `main` method
- Eclipse: Right-click project → Run As → Spring Boot App

**Access:**
- Application: http://localhost:8080/api
- H2 Console: http://localhost:8080/api/h2-console

---

## 6. Building REST APIs with Spring Boot

### 6.1 Basic REST Controller

**JavaScript (Express):**
```javascript
const express = require('express');
const app = express();
app.use(express.json());

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello World' });
});

app.post('/api/users', (req, res) => {
    const user = req.body;
    res.status(201).json(user);
});

app.listen(3000);
```

**Java (Spring Boot):**
```java
package com.example.demo.controller;

import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class HelloController {
    
    @GetMapping("/hello")
    public Map<String, String> hello() {
        return Map.of("message", "Hello World");
    }
    
    @PostMapping("/users")
    @ResponseStatus(HttpStatus.CREATED)
    public User createUser(@RequestBody User user) {
        return user;
    }
}
```

### 6.2 Complete CRUD REST API

**Model (Entity):**
```java
package com.example.demo.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Entity
@Table(name = "users")
@Data                    // Lombok: generates getters, setters, toString, etc.
@NoArgsConstructor      // Lombok: generates no-args constructor
@AllArgsConstructor     // Lombok: generates all-args constructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String name;
    
    @Column(unique = true, nullable = false)
    private String email;
    
    private int age;
}
```

**Repository:**
```java
package com.example.demo.repository;

import com.example.demo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // JpaRepository provides: save, findAll, findById, delete, etc.
    
    // Custom query methods
    Optional<User> findByEmail(String email);
    List<User> findByAgeGreaterThan(int age);
    boolean existsByEmail(String email);
}
```

**Service:**
```java
package com.example.demo.service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    
    @Autowired
    private UserRepository userRepository;
    
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
    
    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }
    
    public User createUser(User user) {
        return userRepository.save(user);
    }
    
    public User updateUser(Long id, User userDetails) {
        User user = userRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("User not found"));
        
        user.setName(userDetails.getName());
        user.setEmail(userDetails.getEmail());
        user.setAge(userDetails.getAge());
        
        return userRepository.save(user);
    }
    
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}
```

**Controller:**
```java
package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")  // Enable CORS
public class UserController {
    
    @Autowired
    private UserService userService;
    
    // GET /api/users - Get all users
    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }
    
    // GET /api/users/{id} - Get user by ID
    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        return userService.getUserById(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }
    
    // POST /api/users - Create new user
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public User createUser(@RequestBody User user) {
        return userService.createUser(user);
    }
    
    // PUT /api/users/{id} - Update user
    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(
            @PathVariable Long id,
            @RequestBody User user) {
        try {
            return ResponseEntity.ok(userService.updateUser(id, user));
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
    
    // DELETE /api/users/{id} - Delete user
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
    }
}
```

### 6.3 Request/Response Examples

**Express.js equivalent:**
```javascript
// GET all users
app.get('/api/users', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
});

// GET user by ID
app.get('/api/users/:id', async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: 'Not found' });
    res.json(user);
});

// POST create user
app.post('/api/users', async (req, res) => {
    const user = await User.create(req.body);
    res.status(201).json(user);
});

// PUT update user
app.put('/api/users/:id', async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    if (!user) return res.status(404).json({ error: 'Not found' });
    res.json(user);
});

// DELETE user
app.delete('/api/users/:id', async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.status(204).send();
});
```

### 6.4 Request Validation

**Add validation dependency in pom.xml:**
```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-validation</artifactId>
</dependency>
```

**Model with validation:**
```java
import jakarta.validation.constraints.*;

@Entity
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotBlank(message = "Name is required")
    @Size(min = 2, max = 50, message = "Name must be between 2 and 50 characters")
    private String name;
    
    @NotBlank(message = "Email is required")
    @Email(message = "Email must be valid")
    private String email;
    
    @Min(value = 0, message = "Age must be positive")
    @Max(value = 150, message = "Age must be realistic")
    private int age;
}
```

**Controller with validation:**
```java
import jakarta.validation.Valid;

@PostMapping
public ResponseEntity<?> createUser(@Valid @RequestBody User user) {
    return ResponseEntity.status(HttpStatus.CREATED)
        .body(userService.createUser(user));
}
```

### 6.5 Exception Handling

**Custom Exception:**
```java
package com.example.demo.exception;

public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(Long id) {
        super("User not found with id: " + id);
    }
}
```

**Global Exception Handler:**
```java
package com.example.demo.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {
    
    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<Map<String, Object>> handleUserNotFound(
            UserNotFoundException ex) {
        Map<String, Object> body = new HashMap<>();
        body.put("timestamp", LocalDateTime.now());
        body.put("message", ex.getMessage());
        
        return new ResponseEntity<>(body, HttpStatus.NOT_FOUND);
    }
    
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, Object>> handleValidationErrors(
            MethodArgumentNotValidException ex) {
        Map<String, Object> body = new HashMap<>();
        Map<String, String> errors = new HashMap<>();
        
        ex.getBindingResult().getFieldErrors().forEach(error -> {
            errors.put(error.getField(), error.getDefaultMessage());
        });
        
        body.put("timestamp", LocalDateTime.now());
        body.put("errors", errors);
        
        return new ResponseEntity<>(body, HttpStatus.BAD_REQUEST);
    }
}
```

**Express.js equivalent:**
```javascript
// Error handling middleware
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        return res.status(400).json({
            timestamp: new Date(),
            errors: err.errors
        });
    }
    
    if (err.name === 'NotFoundError') {
        return res.status(404).json({
            timestamp: new Date(),
            message: err.message
        });
    }
    
    res.status(500).json({
        timestamp: new Date(),
        message: 'Internal server error'
    });
});
```

### 6.6 Query Parameters and Path Variables

**Controller:**
```java
@RestController
@RequestMapping("/api/users")
public class UserController {
    
    // Path variable: /api/users/123
    @GetMapping("/{id}")
    public User getUserById(@PathVariable Long id) {
        return userService.getUserById(id);
    }
    
    // Query parameters: /api/users/search?name=John&age=30
    @GetMapping("/search")
    public List<User> searchUsers(
            @RequestParam String name,
            @RequestParam(required = false) Integer age) {
        return userService.searchUsers(name, age);
    }
    
    // Multiple path variables: /api/users/123/posts/456
    @GetMapping("/{userId}/posts/{postId}")
    public Post getUserPost(
            @PathVariable Long userId,
            @PathVariable Long postId) {
        return userService.getUserPost(userId, postId);
    }
    
    // Optional query param with default
    @GetMapping
    public List<User> getUsers(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        return userService.getUsers(page, size);
    }
}
```

**Express.js equivalent:**
```javascript
// Path parameter
app.get('/api/users/:id', (req, res) => {
    const id = req.params.id;
    res.json(userService.getUserById(id));
});

// Query parameters
app.get('/api/users/search', (req, res) => {
    const { name, age } = req.query;
    res.json(userService.searchUsers(name, age));
});

// Multiple path parameters
app.get('/api/users/:userId/posts/:postId', (req, res) => {
    const { userId, postId } = req.params;
    res.json(userService.getUserPost(userId, postId));
});
```

### 6.7 Testing REST APIs

**Using curl:**
```bash
# GET all users
curl http://localhost:8080/api/users

# GET user by ID
curl http://localhost:8080/api/users/1

# POST create user
curl -X POST http://localhost:8080/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","age":30}'

# PUT update user
curl -X PUT http://localhost:8080/api/users/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"John Updated","email":"john@example.com","age":31}'

# DELETE user
curl -X DELETE http://localhost:8080/api/users/1
```

**Using Postman or HTTPie:**
```bash
# Install HTTPie
pip install httpie

# GET
http GET http://localhost:8080/api/users

# POST
http POST http://localhost:8080/api/users \
  name="John Doe" email="john@example.com" age:=30

# PUT
http PUT http://localhost:8080/api/users/1 \
  name="John Updated" email="john@example.com" age:=31

# DELETE
http DELETE http://localhost:8080/api/users/1
```

### 6.8 Database Configuration (PostgreSQL/MySQL)

**For PostgreSQL:**

**pom.xml:**
```xml
<dependency>
    <groupId>org.postgresql</groupId>
    <artifactId>postgresql</artifactId>
    <scope>runtime</scope>
</dependency>
```

**application.properties:**
```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/mydb
spring.datasource.username=postgres
spring.datasource.password=yourpassword
spring.jpa.database-platform=org.hibernate.dialect.PostgreSQLDialect
spring.jpa.hibernate.ddl-auto=update
```

**For MySQL:**

**pom.xml:**
```xml
<dependency>
    <groupId>com.mysql</groupId>
    <artifactId>mysql-connector-j</artifactId>
    <scope>runtime</scope>
</dependency>
```

**application.properties:**
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/mydb
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.jpa.database-platform=org.hibernate.dialect.MySQLDialect
spring.jpa.hibernate.ddl-auto=update
```

---

## 7. Practice Projects

### Project 1: Simple REST API
Build a basic CRUD API for managing tasks:
- Create, read, update, delete tasks
- Each task has: title, description, completed status
- Use H2 database

### Project 2: Blog API
Build a blog with:
- Users can create accounts
- Users can write posts
- Posts can have comments
- Implement authentication with JWT

### Project 3: E-commerce Backend
Build an e-commerce API with:
- Products with categories
- Shopping cart
- Order management
- User authentication

---

## Quick Reference Card

### Common Annotations

```java
// Class-level
@RestController          // REST API controller
@Service                 // Service layer
@Repository              // Data access layer
@Entity                  // JPA entity
@Configuration           // Configuration class

// Method-level
@GetMapping("/path")     // GET request
@PostMapping("/path")    // POST request
@PutMapping("/path")     // PUT request
@DeleteMapping("/path")  // DELETE request
@RequestMapping("/path") // Any request method

// Parameter-level
@PathVariable            // URL path parameter
@RequestParam            // Query parameter
@RequestBody             // Request body
@Valid                   // Enable validation

// Field-level
@Autowired              // Dependency injection
@Value("${prop}")       // Inject from properties
@Id                     // Primary key
@GeneratedValue         // Auto-generate ID
@Column                 // Database column
```

### Maven Commands

```bash
./mvnw clean            # Clean build directory
./mvnw compile          # Compile source code
./mvnw test             # Run tests
./mvnw package          # Create JAR file
./mvnw spring-boot:run  # Run application
./mvnw clean install    # Clean, compile, test, package
```

### Running Commands

```bash
# Run with Maven
./mvnw spring-boot:run

# Run JAR directly
java -jar target/app-name.jar

# Run with specific profile
./mvnw spring-boot:run -Dspring-boot.run.profiles=dev

# Run with environment variable
SPRING_PROFILES_ACTIVE=prod java -jar app.jar
```

---

## Next Steps

1. **Practice Java syntax daily** - Convert your JavaScript projects to Java
2. **Build 3-5 REST APIs** - Start simple, gradually add complexity
3. **Learn Spring Security** - Add authentication/authorization
4. **Explore Spring Data JPA** - Advanced database operations
5. **Study design patterns** - Singleton, Factory, Builder, etc.
6. **Learn testing** - JUnit, Mockito for unit/integration tests
7. **Microservices** - Spring Cloud, Docker, Kubernetes

---

## Helpful Resources

- **Official Documentation**: https://spring.io/guides
- **Java API Docs**: https://docs.oracle.com/en/java/javase/17/docs/api/
- **Spring Boot Reference**: https://docs.spring.io/spring-boot/docs/current/reference/html/
- **Baeldung**: https://www.baeldung.com/ (Great tutorials)
- **Java Design Patterns**: https://refactoring.guru/design-patterns/java

---

**Good luck with your Java journey! 🚀**

*Remember: The best way to learn is by building. Start coding today!*