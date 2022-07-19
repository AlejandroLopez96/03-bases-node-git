const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (number = 5, listar = false, hasta = 10) => {

    try {
        const nombreArchivo = `tabla-${number}.txt`;
        
        let salida = await tablaMultiplicar(number, listar, hasta);
        
        fs.writeFileSync(`./salida/${nombreArchivo}`, salida);
        console.log(`Tabla del ${number} creada!`.rainbow);

        return nombreArchivo;
        
    } catch (error) {
        throw error;
    }
    
}

const tablaMultiplicar = ( numero, listar, hasta ) => {
    let salida = '';
    let consola = '';

    return new Promise(( resolve, reject ) => {

        for (let i = 1; i <= hasta; i++) {
            salida += `${numero} x ${i} = ${multiplicacion(numero,i)}\n`;
            consola += `${numero} ${'x'.cyan} ${i} ${'='.cyan} ${multiplicacion(numero,i)}\n`;

        }

        if (listar) {
            console.log('========================='.trap.bgYellow.bold);
            console.log(`      TABLA DEL ${colors.blue(numero)}`);
            console.log('========================='.trap.bgYellow.bold);
            console.log(consola);
        }

        ( salida && numero )
            ? resolve( salida )
            : reject( `Problemas al realizar el cálculo` )
    });
    
}

const multiplicacion = (a , b) => a*b;

module.exports = {
    crearArchivo
}