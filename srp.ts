/* Ejercicio 1: Refactorizar una clase que maneja usuarios

Código inicial: */

class DBModel {
  saveName(name: string) {
    console.log(`Usuario ${name} guardado en la base de datos `);
  }
  saveOrder() {
    console.log(`Pedido guardado en la base de datos`);
  }
}

class Email {
  send(email: string) {
    console.log(`Enviando correo de bienvenida a ${email}`);
  }
}


class Validators {

  validateUser(user: { name: string, email: string }) {
    if (!user.name || !user.email) {
      throw new Error("Nombre y email son requeridos");
    }

  }

  validateOrder(order: { id: number, items: string[] }) {
    if (!order.id || order.items.length === 0) {
      throw new Error("Pedido inválido");
    }
  }
}

class Calculate {
  total(items: string[], cost: number) {
    const total = items.length * cost; // Supongamos que cada item cuesta 10
    console.log(`Total del pedido: ${total}`);
  }
}



class UserManager {
  private db: DBModel;
  private email: Email;
  private validators: Validators;

  constructor() {
    this.db = new DBModel();
    this.email = new Email();
    this.validators = new Validators();
  }

  createUser(user: { name: string, email: string }) {
    // Validación
    this.validators.validateUser(user);

    this.db.saveName(user.name);

    this.email.send(user.email);
  }
}

class UserServices {
  private user: UserManager;
  private data: any;

  constructor() {
    this.user = new UserManager();
    this.data = { name: 'Juan', email: 'juan@gmail.com' }
  }

  create() {
    this.user.createUser(this.data);
  }
}

/* Tu tarea:

    Separa las responsabilidades de validación, persistencia y envío de correos en clases distintas.

    Crea una clase UserService que use estas nuevas clases para mantener la funcionalidad original. */


