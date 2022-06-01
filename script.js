$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrolly > 10){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
    // toggle menu 
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active")
    })
});