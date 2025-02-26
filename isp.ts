/* Ejercicio: Sistema de Notificaciones

Descripción:
Tienes un sistema que envía notificaciones a los usuarios a través de diferentes canales, como correo electrónico, SMS y notificaciones push. Inicialmente, el sistema tiene una interfaz única que maneja todos los tipos de notificaciones, pero esto obliga a las clases a implementar métodos que no necesitan.

Tu tarea:
Refactoriza el código para cumplir con el ISP, dividiendo la interfaz única en interfaces más pequeñas y específicas. */

interface INotification {
  sendEmail(message: string): void;
  sendSMS(message: string): void;
  sendPushNotification(message: string): void;
}

class EmailNotification implements INotification {
  sendEmail(message: string): void {
    console.log(`Enviando correo electrónico: ${message}`);
  }

  sendSMS(message: string): void {
    throw new Error("Método no soportado: sendSMS");
  }

  sendPushNotification(message: string): void {
    throw new Error("Método no soportado: sendPushNotification");
  }
}

class SMSNotification implements INotification {
  sendEmail(message: string): void {
    throw new Error("Método no soportado: sendEmail");
  }

  sendSMS(message: string): void {
    console.log(`Enviando SMS: ${message}`);
  }

  sendPushNotification(message: string): void {
    throw new Error("Método no soportado: sendPushNotification");
  }
}

class PushNotification implements INotification {
  sendEmail(message: string): void {
    throw new Error("Método no soportado: sendEmail");
  }

  sendSMS(message: string): void {
    throw new Error("Método no soportado: sendSMS");
  }

  sendPushNotification(message: string): void {
    console.log(`Enviando notificación push: ${message}`);
  }
}

// Uso
const emailNotification = new EmailNotification();
emailNotification.sendEmail("Hola, este es un correo electrónico.");

const smsNotification = new SMSNotification();
smsNotification.sendSMS("Hola, este es un SMS.");

const pushNotification = new PushNotification();
pushNotification.sendPushNotification("Hola, esta es una notificación push.");



/* Problema:

El código viola el ISP porque la interfaz INotification obliga a todas las clases a implementar métodos que no necesitan. Por ejemplo:

    EmailNotification no necesita implementar sendSMS ni sendPushNotification.

    SMSNotification no necesita implementar sendEmail ni sendPushNotification.

    PushNotification no necesita implementar sendEmail ni sendSMS.

Esto genera métodos innecesarios y lanza errores cuando se intenta usarlos. */


/* Tu tarea:

    Refactoriza el código para cumplir con el ISP.

    Divide la interfaz INotification en interfaces más pequeñas y específicas.

    Asegúrate de que cada clase solo implemente los métodos que necesita. */

/* 
    Pistas:

    Crea interfaces separadas para cada tipo de notificación, por ejemplo:

        IEmailNotification para correos electrónicos.

        ISMSNotification para SMS.

        IPushNotification para notificaciones push.

    Elimina los métodos innecesarios de las clases.

    Asegúrate de que cada clase solo implemente las interfaces que necesita. */