export class UI{
    footer(){
        const today = new Date();
        const year = today.getFullYear();
        const footer = document.getElementById('footer');
        footer.innerHTML = `<h3>U.S. Memories</h3>`;
        footer.innerHTML += `<h2>Copyrigth &copy; ${year}</h2>`;
    }
}