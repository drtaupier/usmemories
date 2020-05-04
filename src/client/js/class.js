export class UI{

    cursos(curso){
        const listaCursos = document.getElementById('cursos-lista');
        const element = document.createElement('element');
        element.classList.add('cursosDisponibles');
        listaCursos.appendChild(element);
        const imagen = document.createElement('div');
        imagen.classList.add('imagen-curso');
        imagen.innerHTML = `<img src="image/${curso.imagen}"></img>`;
        element.appendChild(imagen);
        const barra = document.createElement('div');
        barra.classList.add('barra');
        element.appendChild(barra);
        const info = document.createElement('div');
        info.classList.add('cursoName');
        info.innerHTML = `<h2>${curso.curso}</h2>`;
        info.innerHTML += `<h2>${curso.informe}</h2>`;
        info.innerHTML += `<h2>${curso.precio}</h2>`;
        element.appendChild(info);
    }

    stickyNav(){
        window.addEventListener('scroll', function(){
            const header = document.getElementById('header');
            let headerPositionTop = header.getBoundingClientRect().top;
            //console.log('Position Header top: ', headerPositionTop)
            let positionY = window.scrollY;
            //console.log('PositionY:', positionY)
            if(headerPositionTop < positionY){
                header.classList.add('sticky');
            }else{
                header.classList.remove('sticky');
            }
        })
    }

    textInicio(texto){
        const inicio = document.getElementById('inicio');
        const element = document.createElement('div');
        element.classList.add('textInicio');
        element.innerHTML = `${texto}`;
        inicio.appendChild(element);
    }

    animate(){
        window.addEventListener('scroll', function(){
            const title = document.getElementById('title');
            const titleTop = title.getBoundingClientRect().top;
            const cursos = document.querySelector('.cursos-lista');
            let screenSize = window.innerHeight/1.2;
            // console.log('scroll: ', screenSize);
            if(titleTop < screenSize){
                cursos.classList.add('cursos-disponibles-activo');
            }
        })
    }
    footer(){
        const today = new Date();
        const year = today.getFullYear();
        const footer = document.getElementById('footer');
        footer.innerHTML = `<h4>U.S. Memories</h4>`;
        footer.innerHTML += `<h5>Copyrigth &copy; ${year}</h5>`;
    }
}