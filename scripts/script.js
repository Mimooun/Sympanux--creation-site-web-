$( document ).ready(function() {


    $(window).scroll(function(){
        if(this.scrollY > 20){
          $('nav').addClass('fixed');
        }else{
          $('nav').removeClass('fixed');
        }
    });

    $('.menu-mobile i').click(function(){
        $('.home nav .menu').toggleClass('active');
        $('.home nav .menu-mobile i').toggleClass('active');
    })

    var txt = "";

    $('.more .container .right-side ul li').click(function(){
        $('.more .container .right-side ul li').removeClass('active');
        $(this).addClass('active');
        txt = $(this).attr('id');

        $('.more .right-side .tab-content .tab-pane').removeClass('active');
        $('.more nav ul li hr').removeClass('active');

        switch (txt) {
            case "1":
                $('.more .right-side .tab-content #pane1').addClass('active');
                $('.more .right-side #1 hr').addClass('active');
                break;
            case "2":
                $('.more .right-side .tab-content #pane2').addClass('active');
                $('.more .right-side #2 hr').addClass('active');
                break;
            case "3":
                $('.more .right-side .tab-content #pane3').addClass('active');
                $('.more .right-side #3 hr').addClass('active');
                break;
            case "4":
                $('.more .right-side .tab-content #pane4').addClass('active');
                $('.more .right-side #4 hr').addClass('active');
                break;
        }

    });

    
});

