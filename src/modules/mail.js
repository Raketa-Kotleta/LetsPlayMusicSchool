import $ from 'jquery'
import Modal from '../classes/modal';
$(".form").on("submit", function (e){
    e.preventDefault();
    let form = $(this); 
    const serialized = form.serialize();
    $.ajax({
        type: "POST",
        url: "./mailer.php",
        data: serialized,
        success: (data)=>{
            const modal = Modal;
            modal.show(modal.itemsToShow.length-1);
            console.log(data);
            $(".response-info-text")[0].innerHTML = "Ууупс! Что-то пошло не так! Технические неполадки"
            if (data.code == "200"){
                $(".response-info-text")[0].innerHTML = "Ваша заявка отправлена! Ждем Вас на занятиях"
            }
            if (data.code == "401"){
                $(".response-info-text")[0].innerHTML = "Вы ввели пустые данные! Заполните форму снова"
            }
        },
    });
})