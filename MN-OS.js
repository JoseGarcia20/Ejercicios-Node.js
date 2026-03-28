//Modulos Nativos - OS - Sistema Operativo
const os = require('node:os');

console.log('Informacion del sistema operativo');
console.log('Sistema operativo:', os.platform());
console.log('Arquitectura del sistema:', os.arch());
console.log('Memoria total:', os.totalmem());
console.log('Version del sistema operativo:', os.release());
console.log('Usuario actual:', os.userInfo().username);
console.log('Tiempo de actividad del sistema:', os.uptime() /60 /60, 'horas');



