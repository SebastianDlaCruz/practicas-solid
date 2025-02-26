/* Ejercicio: Sistema de figuras geométricas

Descripción:
Tienes un sistema que calcula el área de diferentes figuras geométricas, como rectángulos y cuadrados. Inicialmente, el sistema funciona correctamente, pero al agregar una nueva figura (por ejemplo, un círculo), descubres que el código no cumple con el LSP.

Tu tarea es refactorizar el código para que cumpla con el LSP, permitiendo agregar nuevas figuras sin alterar el comportamiento del programa. */

interface IGeometricShapes {
  getArea(): number;
}


class Rectangle implements IGeometricShapes {

  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  setWidth(width: number) {
    this.width = width;
  }

  setHeight(height: number) {
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

class Square implements IGeometricShapes {

  private side: number;
  constructor(side: number) {
    this.side = side;
  }

  setSide(side: number) {
    this.side = side;

  }

  getArea(): number {
    return this.side * this.side;
  }

}


class Circle implements IGeometricShapes {
  private radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  setRadius(radius: number) {
    this.radius = radius;
  }


  getArea(): number {
    return Math.PI * (this.radius * this.radius);
  }
}
// Uso
function printArea(Geometric: IGeometricShapes) {
  console.log(`Área: ${Geometric.getArea()}`);
}

const rectangle = new Rectangle(2, 3);
printArea(rectangle); // Área: 20 (correcto)

const square = new Square(2);
printArea(square); // Área: 16 (incorrecto, debería ser 20)

const circle = new Circle(2);
printArea(circle); // Área: 12.566370614359172 (correcto)

/* Problema:

El código viola el LSP porque la clase Square no puede sustituir a Rectangle sin alterar el comportamiento esperado. Cuando se usa printArea, el cuadrado no se comporta como un rectángulo, ya que cambia tanto el ancho como el alto al modificar uno de ellos. */


/* Tu tarea:

    Refactoriza el código para que cumpla con el LSP.

    Crea una estructura que permita agregar nuevas figuras (por ejemplo, Circle) sin alterar el comportamiento del programa.

    Implementa al menos una nueva figura (por ejemplo, Circle) para demostrar que el sistema es extensible. */

/*     Pistas:

    Usa una interfaz o clase base para definir un contrato común para todas las figuras geométricas.

    Asegúrate de que las subclases no alteren el comportamiento esperado de la clase base.

    Considera usar el patrón de diseño Strategy para manejar el cálculo del área de cada figura. */



/* Ejercicio: Sistema de Gestión de Empleados

Descripción:
Tienes un sistema que gestiona empleados en una empresa. Inicialmente, el sistema funciona correctamente para empleados regulares y gerentes, pero al agregar un nuevo tipo de empleado (por ejemplo, un pasante), descubres que el código no cumple con el LSP.
 
Tu tarea:
Refactoriza el código para que cumpla con el LSP, permitiendo agregar nuevos tipos de empleados sin alterar el comportamiento del programa.
Código inicial (con problemas de LSP) */


interface IEmployee {
  calculateSalary(): number;

}

interface IManager extends IEmployee {
  manageTeam(): void; // Solo los gerentes pueden gestionar equipos
}

class Employee implements IEmployee {
  private name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  calculateSalary(): number {
    return this.baseSalary;
  }

  manageTeam(): void {
    throw new Error("Este empleado no puede gestionar equipos.");
  }
}

class Manager implements IEmployee {
  private name: string;
  private baseSalary: number;
  private bonus: number;

  constructor(name: string, baseSalary: number, bonus: number) {
    this.name = name;
    this.baseSalary = baseSalary;
    this.bonus = bonus;
  }

  calculateSalary(): number {
    return this.baseSalary + this.bonus;
  }

  manageTeam(): void {
    console.log(`${this.name} está gestionando un equipo.`);
  }
}

// Uso
function printEmployeeDetails(employee: IManager) {
  console.log(`Salario: ${employee.calculateSalary()}`);
  employee.manageTeam(); // Esto fallará para empleados regulares
}

const regularEmployee = new Employee("Juan", 30000);
printEmployeeDetails(regularEmployee); // Error: Este empleado no puede gestionar equipos.

const manager = new Manager("Ana", 50000, 10000);
printEmployeeDetails(manager); // Funciona correctamente