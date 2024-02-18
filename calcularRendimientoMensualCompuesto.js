/*Función para calcular el rendimiento mensual compuesto*/
function calcularGanancias( montoInicial, porcentaje, cantidadMeses){
    let nuevoTotal  = montoInicial;
    let ganancia    = 0;
    
    for( i=1; i<=cantidadMeses; i++ ){
        ganancia    = porcentaje * nuevoTotal;
        nuevoTotal  = nuevoTotal + ganancia;
        console.log( "Mes:" + i + ", Ganancia:" + ganancia.toFixed(2) + ", Nuevo Total:" + nuevoTotal.toFixed(2) );
    }
}

calcularGanancias( 1000, .055, 24 );