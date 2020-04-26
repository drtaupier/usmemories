import {UI} from './class'
//Instaciamos la clase
const ui = new UI();

window.onload = function(){
    ui.footer();
    ui.stickyNav();
    ui.animate();

    const texto = ['Aprende con nosotros','te esperamos'];
    //recorriendo el array
    for(const index in texto){
        ui.textInicio(texto[index]);
    };
}