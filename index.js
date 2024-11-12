import{
    metrosAKilometros,kilometrosAMillas,millasAMetros
} from "./conversorLongitud.js";
import{
    gramosAKilogramos,kilogramosALibras,librasAGramos
} from "./conversorPeso.js";

let iniciar=true;
while(iniciar){
    var opcion=Number(prompt('Calculadora de conversion de unidades:\n1.Metros a Kilometros\n2.kilometros a millos\n3.Millas a metros\n4.Gramos a Kilogramos\n5.Kilogramos a Libras\n6.Libras a Gramos\n7.Salir'));
switch(opcion){
    case 1:
        console.log(`${metrosAKilometros()} kilometros`);
        break
    case 2:
       console.log(`${kilometrosAMillas()} Millas`);
        break
    case 3:
       console.log(`${millasAMetros()} metros`);
        break
    case 4:
        console.log(`${gramosAKilogramos()} kilogramos`);
        break
    case 5:
        console.log(`${kilogramosALibras()} libras`);
        break
    case 6:
        console.log(`${librasAGramos()} gramos`);
        break
    case 7:
        console.log('Saliendo de la calculadora');
        iniciar=false
        break
    default:
        console.log('Opcion invalida, eliga nuevamente');
}
}