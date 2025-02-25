/* Descripción:
Tienes un sistema que calcula descuentos para diferentes tipos de clientes. Actualmente, el sistema soporta dos tipos de clientes: Regular y Premium. Sin embargo, el código actual viola el OCP porque cada vez que se agrega un nuevo tipo de cliente, debes modificar la clase DiscountCalculator.

Tu tarea es refactorizar el código para que cumpla con el OCP, permitiendo agregar nuevos tipos de clientes sin modificar la clase DiscountCalculator. */

interface ICalculate {
  discount(amount: number): number;
}

class Regular implements ICalculate {
  discount(amount: number): number {
    return amount * 0.1; // 10% de descuento
  }
}

class Premium implements ICalculate {
  discount(amount: number): number {
    return amount * 0.2; // 20% de descuento
  }
}

class Gold implements ICalculate {

  discount(amount: number): number {
    return amount * 0.3; // 30% de descuento
  }
}


class DiscountCalculator {
  calculateDiscount(customerType: Premium | Regular | Gold, amount: number): number {
    return customerType.discount(amount);
  }
}

// Uso
const calculator = new DiscountCalculator();
console.log(calculator.calculateDiscount("Regular", 100)); // 10
console.log(calculator.calculateDiscount("Premium", 100)); // 20

/* Tu tarea:

    Refactoriza el código para que cumpla con el OCP.

    Crea una estructura que permita agregar nuevos tipos de clientes (por ejemplo, Gold, VIP, etc.) sin modificar la clase DiscountCalculator.

    Implementa al menos un nuevo tipo de cliente (por ejemplo, Gold con un 30% de descuento) para demostrar que el sistema es extensible.

Pistas:

    Usa clases base o interfaces para definir un contrato común para todos los tipos de clientes.

    Aplica el principio de inyección de dependencias para permitir que DiscountCalculator trabaje con cualquier tipo de cliente sin conocer sus detalles.

    Considera usar el patrón de diseño Strategy para manejar los diferentes algoritmos de descuento. */