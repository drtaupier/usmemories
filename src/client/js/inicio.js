import { UI } from './class'
//Instaciamos la clase
const ui = new UI();

window.onload = function () {
    ui.footer();
    ui.stickyNav();
    ui.animate();
    //Texto de inicio
    const texto = ['Aprende con nosotros', 'te esperamos'];
    //recorriendo el array
    for (const index in texto) {
        ui.textInicio(texto[index]);
    }
    getData('/getCursos', '{}');
}

const getData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST', //*GET, POST, PUT, DELETE, etc.
        credentials: 'same-origin',
        body: JSON.stringify(data),
    });
    try {
        const newData = await response.json();
        for (const index in newData.cursos){
            ui.cursos(newData.cursos[index]);
        }
    } catch (error) {
        console.log('Error: ', error);
    }
}

