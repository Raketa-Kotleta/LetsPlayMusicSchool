class Toggler{
    constructor(togglerTag, activeClassName){
        this.togglerElement = document.querySelector('.'+togglerTag);
        this.activeClassName = activeClassName;
        this.toggleObjectElement = document.querySelector(this.togglerElement.getAttribute("toggle")) ?? "";
        this.togglerElement.onclick = this.toggle(this.toggleObjectElement, this.activeClassName);
        this.toggleObjectElementLinks = Array.from(this.toggleObjectElement.querySelectorAll("a"));
        this.toggleObjectElementLinks.forEach(link=>link.onclick = this.close(this.activeClassName));
    }
    toggle(toggleObjectElement, activeClassName){
        return function(){
            toggleObjectElement.classList.toggle(activeClassName);
        }
    }
    close(activeClassName){
        const toggleObjectElement = this.toggleObjectElement; 
        return function(){
            toggleObjectElement.classList.remove(activeClassName);
        }
    }
}
export default Toggler;

