//Modulos Nativos - File System
//const fs = require('node:fs');

//Importar utilidad para usar promesas (Solo ebn modulos nativos que no tienen promesas nativas)
//const { promisify } = require('node:util');

//Modulos Nativos - File System con Promesas
//const fs = require('node:fs/promises');

//Obtener informacion del archivo
const info = fs.statSync('./archivo.txt');
console.log(
    info.isFile(), // Es un archivo
    info.isDirectory(), // Es un directorio
    info.isSymbolicLink(), // Es un enlace simbolico
    info.size, // Tamaño del archivo en bytes
)

//--------------------------------------------------------------------------------------------------
//Proceso Sincrono: Realiza proceosos de forma secuencial, bloqueando el hilo de ejecucion
//Leer el contenido del archivo
console.log('-----Leyendo el primer archivo-----');
const texto = fs.readFileSync('./archivo.txt', 'utf-8');
console.log(texto);
//Leer el contenido del archivo
console.log('-----Leyendo el segundo archivo-----');
const texto2 = fs.readFileSync('./archivo2.txt', 'utf-8');
console.log(texto2);

//Proceso Asincrono: Permite realizar procesos de forma concurrente, sin bloquear el hilo de ejecucion
//Se agrega como tercer parametro un callback, que se ejecuta una vez que se ha completado la lectura del archivo
console.log('-----Leyendo el primer archivo-----');
fs.readFile('./archivo.txt', 'utf-8', (err, texto) => {
    console.log(texto);
});

console.log('-----Haciendo otras cosas mientras se lee el archivo-----');

console.log('-----Leyendo el segundo archivo-----');
fs.readFile('./archivo2.txt', 'utf-8', (err, texto) => {
    console.log(texto);
});

//--------------------------------------------------------------------------------------------------
//Manejo de Promesas: Permite manejar procesos asincronos de forma mas sencilla, evitando el callback hell
console.log('-----Leyendo el primer archivo con promesas-----');
fs.readFile('./archivo.txt', 'utf-8')
    .then(texto => {
        console.log('Primer Texto: ', texto)
    })

console.log('-----Haciendo otras cosas mientras se lee el archivo-----');

console.log('-----Leyendo el segundo archivo con promesas-----');
fs.readFile('./archivo2.txt', 'utf-8')
    .then(texto => {
        console.log('Segundo Texto: ', texto)
    })

//Menejo e promesas con promisify: Permite convertir funciones que utilizan callbacks en funciones que retornan promesas
//const leerArchivo = promisify(fs.readFile);

//--------------------------------------------------------------------------------------------------

//async / await: Permite manejar procesos asincronos de forma mas sencilla, evitando el callback hell
async function leer() {
  const contenido = await fs.readFile("archivo.txt", "utf8");
  console.log(contenido);
}
leer();

//--------------------------------------------------------------------------------------------------
//Realizar trabajos en paralelo con las promesas
import { readFile } from 'node:fs/promises';

Promise.all([
    readFile('./archivo.txt', 'utf-8'),
    readFile('./archivo2.txt', 'utf-8')
]).then(([texto1, texto2]) => {
    console.log('Texto 1: ', texto1);
    console.log('Texto 2: ', texto2);
})

