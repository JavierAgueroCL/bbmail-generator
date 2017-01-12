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

$( ".wp_login" ).keyup(function() {
   var mail = $(this).val()
   $(".wp_login_in").html(mail);
})

$( ".wp_pass" ).keyup(function() {
   var mail = $(this).val()
   $(".wp_pass_in").html(mail);
})

$( ".wp_admin" ).keyup(function() {
   var mail = $(this).val()
   $(".wp_admin_in").html("<a href='http://" + mail + "' >http://" + mail + "</a>");
})

$( ".backup" ).keyup(function() {
   var mail = $(this).val()
   $(".backup_in").html("<a href='" + mail + "' >" + mail + "</a>");
})

$( ".tutorial" ).keyup(function() {
   var mail = $(this).val()
   $(".tutorial_in").html("<a href='" + mail + "' >" + mail + "</a>");
})

$( ".ana_admin" ).keyup(function() {
   var mail = $(this).val()
   $(".wp_admin_in").html("<a href='" + mail + "' >" + mail + "</a>");
})

$( ".ana_user" ).keyup(function() {
   var mail = $(this).val()
   $(".ana_user_in").html("<a href='" + mail + "' >" + mail + "</a>");
})

$( ".ana_pass" ).keyup(function() {
   var mail = $(this).val()
   $(".ana_pass_in").html("<a href='" + mail + "' >" + mail + "</a>");
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
