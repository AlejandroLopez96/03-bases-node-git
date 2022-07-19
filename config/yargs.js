const argv = require('yargs')
                .option('n', {
                    alias: 'number',
                    type: 'number',
                    demandOption: true,
                    description: 'Es el número del que se hace la tabla de multiplicar'
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    demandOption: true,
                    default: false,
                    description: 'Muestra la tabla en la consola'
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    demandOption: true,
                    description: 'Número hasta el que se va a multiplicar la tabla'
                })
                .check((argv, options) => {
                    if (isNaN(argv.n))
                        throw 'El numero debe ser numerico'
                    if (isNaN(argv.h))
                        throw 'El campo hasta debe ser numerico'
                    return true
                })
                .argv;


module.exports = argv;