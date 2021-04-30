$(document).ready(function(){

    $(window).scroll(function(){
        if(this.scrollY>20)
        {
           $(".navbar").addClass("navbar-scrolll");
           $(".navbar-brand").addClass("navbar-brand-scroll");
           $(".nidhi ").addClass("span-scroll");
        }
        else{
            $(".navbar").removeClass("navbar-scrolll");
            $(".navbar-brand").removeClass("navbar-brand-scroll");
            $(".nidhi ").removeClass("span-scroll");

        }

    })
    $(".menu-btn").click(function(){
        $(".navbar-nav").toggleClass("navbar-nav-active");
        $(".menu-btn i ").toggleClass("active");

    })

    
})