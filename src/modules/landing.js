import $ from 'jquery'
import "slick-carousel"
import "./imports.js";
import "./mail.js"
import * as aos from "aos"
import Toggler from "../classes/Toggler.js"
import Modal from '../classes/modal.js';

const ACTIVE_CALSSNAME = "active";
const TOGGLER_TAG =  "navbar-toggler";
const NavToggle = new Toggler(TOGGLER_TAG, ACTIVE_CALSSNAME);
const modal = Modal;
const ReadMoreButtons = Array.from(document.querySelectorAll('.read-more'));
const RadioButtons = Array.from(document.querySelectorAll('.radio'))
const CourseContents = Array.from(document.querySelectorAll('.content-course'));
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
aos.init()

slick('.slider-content');
setReadMoreButtomOnClick();
setRadioButtonsOnClick();
setMenuDropdownItemsOnMouseup();