class Mifooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML = /* html*/ 'Copyright &copy; 2020 Garcia Serna Gerardo.';
    }
}
customElements.define("mi-footer", Mifooter);
