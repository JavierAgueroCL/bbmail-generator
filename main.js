new Clipboard('.btn');

$( ".devname1" ).keyup(function() {
   var mail = $(this).val()
   $(".devname1_in").html(mail);
})

$( ".clientname1" ).keyup(function() {
   var mail = $(this).val()
   $(".clientname1_in").html(mail);
})

$( ".devurl" ).keyup(function() {
   var mail = $(this).val()
   $(".devurl_in").html("<a href='http://developers.bigbuda.cl/" + mail + "' >http://developers.bigbuda.cl/" + mail + "</a>");
})


$(".dev_start_btn").on('click', function(event) {
   event.preventDefault();
   $(".content-block").hide();
   $(".dev_start").show();
   $(".titulo").html($(this).html());
})

$(".dev_demo_btn").on('click', function(event) {
   event.preventDefault();
   $(".content-block").hide();
   $(".dev_demo").show();
   $(".titulo").html($(this).html());
})

$(".dev_end_btn").on('click', function(event) {
   event.preventDefault();
   $(".content-block").hide();
   $(".dev_end").show();
   $(".titulo").html($(this).html());
})
