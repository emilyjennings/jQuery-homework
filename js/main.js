$(document).ready(function(){

  console.log('ready!');

  $('body').click(function(){
        $('h1').show(1500);
        $('p').slideUp(6000);
        $('h2').slideDown(3000);
        $('p.para1').hide(2000);
      })

  $('h1').click(function(){
        $('body').animate({
          opacity: .4,
          width: 10,
        }), 5000})

/*  $('h2').click(function(){
    $('h2').animate({
          width: 900,
          position: 'absolute',
          float: 'right'
        }), 4000})
      }); */

    $('h2').click(function(){
      $('h2').animate({
        width: 900,
        position: 'absolute',
        float: 'right'
      }, 4000)
    })

/*  $(function(){
      $("body").click(function(){
            if ($("h1").is(":visible"))
                $("p").slideUp(1000);
            else
                $("h1").slideDown(1000);
        }) */

      $("body").click(function(){
        if ($('h1').is(":visible")){
            $('p').slideUp(1000);
         }else{
          $('h1').slideDown(1000);
        }
      })

});
