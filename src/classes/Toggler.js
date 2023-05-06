class Toggler{
    constructor(togglerTag, activeClassName){
        this.togglerElement = document.querySelector('.'+togglerTag);
        this.activeClassName = activeClassName;
        this.toggleObjectElement = document.querySelector(this.togglerElement.getAttribute("toggle")) ?? "";
        this.togglerElement.onclick = this.toggle(this.toggleObjectElement, this.activeClassName);
    }
    toggle(toggleObjectElement, activeClassName){
        return function(){
            toggleObjectElement.classList.toggle(activeClassName);
        }
        
    }
}
export default Toggler;

