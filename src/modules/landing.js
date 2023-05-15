import $ from 'jquery'
import "slick-carousel"
import "./imports.js";
import * as aos from "aos"
import Toggler from "../classes/Toggler.js"
import Modal from '../classes/modal.js';

const ACTIVE_CALSSNAME = "active";
const TOGGLER_TAG =  "navbar-toggler";
const NavToggle = new Toggler(TOGGLER_TAG, ACTIVE_CALSSNAME);
const modal = new Modal(".section-modal", ".modal-block");
const ReadMoreButtons = Array.from(document.querySelectorAll('.read-more'));
const RadioButtons = Array.from(document.querySelectorAll('.radio'))
const CourseContents = Array.from(document.querySelectorAll('.content-course'));
const Forms = Array.from(document.querySelectorAll(".form"));
const MenuDropdownItems = Array.from(document.querySelectorAll(".dropdown-link"))
const setReadMoreButtomOnClick = function(){
    ReadMoreButtons.forEach((btn,index)=>{
        btn.onclick = function (){
            return modal.show(index);
        };
    });
}
const setRadioButtonsOnClick = function(){
    RadioButtons.forEach((radio,index)=>{
        radio.onclick = function (e){
            CourseContents.forEach(content=>content.classList.remove("active"))
            CourseContents[index].classList.add("active");
        };
    });
}
const setMenuDropdownItemsOnMouseup = function (){
    console.log(MenuDropdownItems);
    MenuDropdownItems.forEach((item,index)=>{
        item.onmouseup= ()=>{
            RadioButtons[index].click();
            console.log("123");
        }
    });
}
const slick = function (tag){
    $(tag).slick({
        infinite: true,
        slidesToScroll: 3,
        centerMode: true,
        variableWidth: true,
    })
    return true;
}
const setFormOnSubmit = function(){
    Forms.forEach(item=>item.onsubmit = formSubmit)
}
const formSubmit = function(){
    const redirectPath = window.location.href.toString().split('#')[0];
    redirectTo(redirectPath);
}
const redirectTo = function(hreff){
    console.log(hreff);
    window.location.replace(hreff+'#');
    console.log(window.location.href);
}
aos.init()

slick('.slider-content');
setReadMoreButtomOnClick();
setRadioButtonsOnClick();
setFormOnSubmit();
setMenuDropdownItemsOnMouseup();