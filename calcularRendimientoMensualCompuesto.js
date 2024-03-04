/*Función para calcular el rendimiento mensual compuesto*/
function calcularGanancias( montoInicial, porcentaje, cantidadMeses, sumaDolar){
    let nuevoTotal  = montoInicial;
    let ganancia    = 0;
    let dolarExtra  = (sumaDolar) ? 1 : 0;
    
    for( i=1; i<=cantidadMeses; i++ ){
        ganancia    = porcentaje * nuevoTotal;
        nuevoTotal  = nuevoTotal + ganancia + dolarExtra;
        console.log( "Mes:" + i + ", Ganancia:" + ganancia.toFixed(2) + ", Nuevo Total:" + nuevoTotal.toFixed(2) );
    }
}

calcularGanancias( 400, .013, 30, true );