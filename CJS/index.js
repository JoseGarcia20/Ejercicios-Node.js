//Llamar ficheros para ejecutar funciones (Forma tradicional) CommonJS
const { suma } = require('./suma');


//Mensajes de prueba - CONSOLA
console.log('Hola Mundo');
console.info('Esto es un mensaje informativo');
console.warn('Esto es una advertencia');
console.error('Esto es un mensaje de error');

//typeof -> Devuelve el tipo de dato de una variable o expresión
console.log(typeof window);

//GlobalThis -> Hace referencia al objeto global en cualquier entorno (navegador, Node.js, etc.)
//En navegadores windows, en node.js global.
//Se puede usar para configuracion de apis IA, conexion bd, herramientas compartidas, etc.
console.log(globalThis);

//Importar la función suma desde el archivo suma.js
console.log(suma(5,3));

