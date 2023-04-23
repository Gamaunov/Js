// =============  Инкапсуляция и сокрытие  ====================
class Rectangle {
  private _width;
  private readonly _height;

  constructor(w, h) {
    this._width = w;
    this._height = h;
  }

  public get width() {
    return this._width;
  }

  private set width(value) {
    if (value < 0) {
      this._width = 1;
    } else {
      this._width = value;
    }
  }

  calcArea() {
    return this._width * this._height * 2;
  }
}

const rect = new Rectangle(5, 10);

class User {
  private _username;
  private _password;
  private _id;

  constructor(username, password) {
    this._username = username;
    this._password = password;
    this._id = this.generateRandomId();
  }

  public generateRandomId() {
    Math.random().toString().split("").slice(1, 5);
  }

  get username() {
    return this._username;
  }

  set username(value) {
    this._username = value;
  }

  get password() {
    return this._password;
  }

  set password(value) {
    this._password = value;
  }

  get id() {
    return this._id;
  }
}

const someUser = new User("Denis", "0011");

class DataBase {
  private _url;
  private _port;
  private _username;
  private _password;
  private _tables;

  constructor(url, port, username, password) {
    this._url = url;
    this._port = port;
    this._username = username;
    this._password = password;
  }

  public createNewTable(table) {
    this._tables.push(table);
  }
  public clearTables() {
    this._tables = [];
  }

  get url() {
    return this._url;
  }

  get port() {
    return this._port;
  }

  get username() {
    return this._username;
  }

  get password() {
    return this._password;
  }
}

const db = new DataBase(1, 2, 3, 4);
db.createNewTable({ name: "db" });
db.createNewTable({ name: "db_2" });
db.clearTables();

// ====================  Наследование  ===========================
class Person {
  private _firstName;
  private _lastName;
  private _age;

  constructor(firstName, lastName, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
  }

  public get fullName() {
    return `Last Name: ${this._lastName} Name: ${this.firstName}`;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    this._lastName = value;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    if (value < 0) {
      this._age = 0;
    } else {
      this._age = value;
    }
  }
}

class Employee extends Person {
  private passportData;

  constructor(firstName, lastName, age, passportData) {
    super(firstName, lastName, age);
    this.passportData = this.passportData;
  }
}

const emp1 = new Employee("Barbara", "Liskov", 18, 8541584756);

class Developer extends Employee {
  private level;
  constructor(firstName, lastName, age, passportData, level) {
    super(firstName, lastName, age, passportData);
    this.level = level;
  }
}
const developerJS = new Developer("Den", "Developer", 18, 1223232323, "middle");

// =================== Композиция и агрегация =========================
class Engine {
  drive() {
    return `Engine +`;
  }
}
class Wheel {
  drive() {
    return `Wheel +`;
  }
}
class Freshener {}

class Car {
  engine: Engine;
  wheels: Wheel[];
  freshener: Freshener;

  constructor(freshener) {
    // агрегация
    this.freshener = freshener;
    // композиция
    this.engine = new Engine();
    this.wheels.push(new Wheel());
    this.wheels.push(new Wheel());
    this.wheels.push(new Wheel());
    this.wheels.push(new Wheel());
  }
  // делегирование
  drive() {
    this.engine.drive();
    for (let i = 0; i < this.wheels.length; i++) {
      this.wheels[i].drive();
    }
  }
}
