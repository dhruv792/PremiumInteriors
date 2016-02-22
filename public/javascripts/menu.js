$(document).ready(function(){
    var $form = $('form');
    var $form_heading = $('.form_heading');
    $form.submit(function(){
        $.post($(this).attr('action'), $(this).serialize(), function(response){},'json');
        $form.remove();
        $form_heading.html("Your form has been submitted. We will contact you soon.");
        return false;
    });
    $(".nav").on("click", "li", function(){
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
    });
});