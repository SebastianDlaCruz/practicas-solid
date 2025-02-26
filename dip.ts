/* Descripción:
Tienes un sistema de procesamiento de pedidos en una tienda en línea. Inicialmente, el sistema depende directamente de una clase que maneja el envío de pedidos por correo. Sin embargo, esto hace que el sistema sea rígido y difícil de extender si quieres agregar nuevos métodos de envío (por ejemplo, envío por mensajería o recogida en tienda).

Tu tarea:
Refactoriza el código para cumplir con el DIP, de modo que el sistema de procesamiento de pedidos dependa de una abstracción (interfaz) en lugar de una implementación concreta. */

interface IMailService {
  sendMail(orderDetails: string): void;
}



class MailService implements IMailService {
  sendMail(orderDetails: string): void {
    console.log(`Enviando pedido por correo: ${orderDetails}`);
  }
}

class OrderProcessor {
  private mailService: MailService;

  constructor(mialService: MailService) {
    this.mailService = mialService // Dependencia concreta
  }

  processOrder(orderDetails: string): void {
    console.log("Procesando pedido...");
    this.mailService.sendMail(orderDetails);
    console.log("Pedido procesado con éxito.");
  }
}

// Uso
const mail = new MailService();
const orderProcessor = new OrderProcessor(mail);
orderProcessor.processOrder("Producto: Libro, Cantidad: 1");


/* 
Problema:

El código viola el DIP porque la clase OrderProcessor (módulo de alto nivel) depende directamente de la clase MailService (módulo de bajo nivel). Esto hace que el sistema sea difícil de extender si queremos agregar nuevos métodos de envío. */

/* 
Tu tarea:

    Refactoriza el código para cumplir con el DIP.

    Introduce una abstracción (interfaz) para el envío de pedidos.

    Haz que OrderProcessor dependa de la abstracción en lugar de la implementación concreta.

    Permite la inyección de dependencias para que el método de envío pueda ser cambiado fácilmente.

Pistas:

    Crea una interfaz, por ejemplo, IShippingService, que defina un método para enviar pedidos.

    Haz que MailService implemente esta interfaz.

    Modifica OrderProcessor para que dependa de IShippingService en lugar de MailService.

    Usa la inyección de dependencias para pasar la implementación concreta de IShippingService a OrderProcessor. */