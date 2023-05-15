class Modal{
    #closeBtnHtml
    constructor(ModalSelector, itemsSelector){
        this.modal = document.querySelector(ModalSelector);
        this.itemsToShow = Array.from(document.querySelectorAll(itemsSelector));
        this.setCloseButtonsToModal();
    }
    createCloseButton(){
        const btn = document.createElement("button");
        btn.classList.add("background-image");
        btn.classList.add("close-btn");
        btn.style.backgroundColor = "transparent";
        btn.onclick = ()=>{this.close()}
        return btn;
    }
    setCloseButtonsToModal(){
        this.itemsToShow.forEach(
            item=>item.appendChild(this.createCloseButton())
            );
    }
    show(ItemNumber){
        this.modal.classList.add("active");
        this.showItem(ItemNumber);
    }
    showItem(itemNumber){
        itemNumber = Math.floor(itemNumber);
        this.itemsToShow[itemNumber].classList.add("active");
        
    }
    close(){
        const showingItem = this.itemsToShow.find(item => item.classList.contains("active"));
        showingItem.classList.remove("active");
        this.modal.classList.remove("active");
    }
}
export default Modal;