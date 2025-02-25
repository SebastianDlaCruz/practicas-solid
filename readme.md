# Practica principios solid

Los principios SOLID son un conjunto de cinco directrices de diseño en programación orientada a objetos (POO) que ayudan a crear software más mantenible, escalable y robusto. Fueron introducidos por Robert C. Martin (también conocido como Uncle Bob) y son ampliamente utilizados en el desarrollo de software. A continuación, te explico cada uno de ellos:
1. S - Principio de Responsabilidad Única (Single Responsibility Principle, SRP)

    Definición: Una clase debe tener una única responsabilidad, es decir, debe hacer solo una cosa.

    Objetivo: Facilitar el mantenimiento y la comprensión del código, ya que cada clase tiene un propósito claro.

    Ejemplo: Si tienes una clase que maneja la lógica de negocio y la persistencia de datos, deberías separarla en dos clases: una para la lógica y otra para la persistencia.

2. O - Principio de Abierto/Cerrado (Open/Closed Principle, OCP)

    Definición: Las entidades de software (clases, módulos, funciones) deben estar abiertas para la extensión pero cerradas para la modificación.

    Objetivo: Permitir agregar nuevas funcionalidades sin modificar el código existente, reduciendo el riesgo de introducir errores.

    Ejemplo: Usar interfaces o clases abstractas para definir comportamientos, de modo que puedas agregar nuevas implementaciones sin cambiar el código base.

3. L - Principio de Sustitución de Liskov (Liskov Substitution Principle, LSP)

    Definición: Las clases derivadas deben poder sustituir a sus clases base sin alterar el comportamiento del programa.

    Objetivo: Garantizar que las subclases sean compatibles con el código que usa la clase base.

    Ejemplo: Si tienes una clase Pájaro y una subclase Avestruz, esta última no debería romper el comportamiento esperado de Pájaro (por ejemplo, no todos los pájaros vuelan).

4. I - Principio de Segregación de Interfaces (Interface Segregation Principle, ISP)

    Definición: Las interfaces deben ser específicas para las necesidades del cliente, evitando interfaces demasiado grandes o genéricas.

    Objetivo: Evitar que las clases implementen métodos que no necesitan.

    Ejemplo: En lugar de tener una interfaz Animal con métodos como volar(), nadar() y caminar(), crea interfaces más pequeñas como Volador, Nadador y Caminante.

5. D - Principio de Inversión de Dependencias (Dependency Inversion Principle, DIP)

    Definición: Los módulos de alto nivel no deben depender de módulos de bajo nivel, sino de abstracciones. Además, las abstracciones no deben depender de los detalles, sino al revés.

    Objetivo: Reducir el acoplamiento entre clases y facilitar la reutilización del código.

    Ejemplo: En lugar de que una clase Servicio dependa directamente de una clase BaseDeDatos, haz que dependa de una interfaz Repositorio, que luego puede ser implementada por BaseDeDatos o cualquier otra fuente de datos.

## Resumen de los principios SOLID:

    S: Una clase, una responsabilidad.

    O: Extiende, no modifiques.

    L: Las subclases deben ser sustituibles.

    I: Interfaces pequeñas y específicas.

    D: Depende de abstracciones, no de implementaciones.