/*
Theme Name:     FabTheme
Version:        1.0
Description:    Custom JS for the theme
*/
/* 
	All custom ids and classes used for the theme, starts with "fabtheme".
*/
/* TABLE OF CONTENTS
	1. owl carousel
		1.1 .fabtheme-owl-1
		1.2 .fabtheme-owl-2
	2. counter up
		2.1 .fabtheme-counter-up
	3. wow
	4. navigation
		4.1 #fabtheme-navbar
	5. scroll top
		5.1 .fabtheme-scrolltop
		5.2 .fabtheme-sroll
		5.3 .fabtheme-thetop
END OF TABLE OF CONTENTS */
/* CUSTOM JS */
/* OWL CAROUSEL */

$(document).ready(function () {
	$(".fabtheme-owl-1").owlCarousel({
		autoWidth: false,
		items: 1,
		loop: true,
		margin: 10,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: false
			},
			576: {
				items: 1,
				nav: false
			},
			992: {
				items: 1,
				nav: false
			},
			1200: {
				items: 1,
				nav: false
			}
		}
	});
});
$(document).ready(function(){
	$(".fabtheme-owl-2").owlCarousel({
		items: 3,
		loop: true,
		margin: 10,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: true
			},
			576: {
				items: 1,
				nav: true
			},
			992: {
				items: 3,
				nav: true
			},
			1200: {
				items: 3,
				nav: true
			}
		}
	});
	var owl = $('.owl-carousel');
	owl.on('mousewheel', '.owl-stage', function (e) {
		if (e.deltaY>0) {
			owl.trigger('next.owl');
		} else {
			owl.trigger('prev.owl');
		}
		e.preventDefault();
	});
});
/* END OF OWL CAROUSEL */
/* COUNTER UP */
$(document).ready(function () {
	$('.fabtheme-counter-up').counterUp({
		delay: 10,
		time: 5000,
		offset: 100,
		beginAt: 0,
		formatter: function (n) {
			return n.replace(/,/g, '.');
		}
	});
});
/* END OF COUNTER UP */
/* WOW */
$(document).ready(function(){
	new WOW().init();
});
/* END OF WOW */
/* NAVIGATION BAR */
$(document).ready(function(){
	$(window).scroll(function() {
	    if ($(this).scrollTop() > 10 ) {
	        $('#fabtheme-navbar').addClass('solid');
	    } else {
	        $('#fabtheme-navbar').removeClass('solid');
	    }
	    if ($(this).scrollTop() <= 0 ) {
	    	$('#fabtheme-navbar').hide();
	    }
	    else{
	    	$('#fabtheme-navbar').show();
	    }
	});
});
/* SMOOTH SCROLL */
	$(document).ready(function(){
		// Add smooth scrolling to all links
		$("a").on('click', function(event) {
			if (this.hash !== "") {
			  event.preventDefault();
			  var hash = this.hash;
			  $('html, body').animate({
			    scrollTop: $(hash).offset().top
			  }, 800, function(){
			    window.location.hash = hash;
			  });
			}
		});
	});
/* END OF SMOOTH SCROLL */
/* END OF NAVIGATION BAR */
/* SCROLL TOP */
$(window).scroll(function() {
    if ($(this).scrollTop() > 50 ) {
        $('.fabtheme-scrolltop:hidden').stop(true, true).fadeIn();
    } else {
        $('.fabtheme-scrolltop').stop(true, true).fadeOut();
    }
});
$(function(){
	$(".fabtheme-scroll").click(function(){
		$("html,body").animate({
			scrollTop:$(".fabtheme-thetop").offset().top - 0
		},3000, 'easeInOutExpo');
		return false;
	})
});
/* END OF SCROLL TOP */
/* END OF CUSTOM JS */

window.recaptcha = {

	isReady:function(){

        return typeof grecaptcha !== 'undefined';
    },
	verify:function(action){

		return new Promise(function(resolve, reject){

            grecaptcha.ready(function(){

            	console.log("action:".concat(action))

                grecaptcha.execute('6Lew6CchAAAAAG2u41SxBEmAtBUbJ7xzOiJoJ5gW', {"action": action}).then(function(token){
                
                	console.log("token:".concat(token))

                    return resolve(token);
                })
            })
        });
	}
}

// window.ajax = {

// 	send: function(options){

// 		return new Promise(function(resolve, reject){

// 			$.ajax({

// 				url: options.url,
// 				type: options.method,
// 				data: options.data,
// 				success: function (data) {
					
// 					resolve(data)
// 				},
// 				error: function (error) {
					
// 					reject(error)
// 				},
// 			})
// 		})
// 	}
// }

// window.contactForm = {

// 	enable:function(message){

// 		$("#form_btn")
// 			.attr("disabled", false)
// 			.val(message)

// 		$("#form_name, #form_lastname, #form_email, #form_message")
// 			.attr("disabled", false)
// 	},
// 	disable:function(message){

// 		$("#form_name, #form_lastname, #form_email, #form_message")
// 			.attr("disabled", true)
		
// 		$("#form_btn").val(message)
// 			.attr("disabled", true);
// 	},
// 	clear:function(message){

// 		$("#form_btn")
// 			.css({backgroundColor:"grey"})
// 			.attr("disable", true)
// 			.val(message)

// 		$("#form_name, #form_lastname, #form_email, #form_message").val("")
// 	},
// 	validate:function(data){

// 		var invalid = [];
// 		for(idx in data){

// 			if(data[idx].trim() == ""){

// 				invalid.push(data[idx]);

// 				$("#form_".concat(idx))
// 					.css({backgroundColor: "#dc143c"})
// 					.focus(function(e){

// 						$(this).css({backgroundColor:"white"})
// 					})
// 			}
// 		}

// 		if(!validator.isEmail(data["email"])){

// 			invalid.push("email");

// 			$("#form_email")
// 				.css({backgroundColor: "#dc143c"})
// 				.focus(function(e){

// 					$(this).css({backgroundColor:"white"})
// 				})
// 		}

// 		return invalid;
// 	}
// }

// $("#form_btn").click(function(){

// 	var data = {

// 		"name":$("#form_name").val(),
// 		"lastname":$("#form_lastname").val(),
// 		"email":$("#form_email").val(),
// 		"message":$("#form_message").val()
// 	}

// 	if($.isEmptyObject(contactForm.validate(data))){

// 		if(recaptcha.isReady()){

// 			contactForm.disable("Wait..");
			
// 			recaptcha.verify("contact_send").then(function(token){

// 				data.token = token;

// 				ajax.send({method:"POST", url:"/contact/send", data:data}).then(function(data){

// 					var resp = JSON.parse(data)

// 					if(!resp.success){

// 						contactForm.enable("Send Again.");
// 					}

// 					if(resp.success){

// 						contactForm.clear("Message Sent.")
// 					}
// 				})
// 				.catch(function(error){

// 					contactForm.enable("Failed: Try Again");
// 				})	
// 			})
// 			.catch(function(error){

// 		      	contactForm.enable("Failed: Try Again");
// 	    	})
// 		}
// 		else{

// 			contactForm.enable("Failed: Try Again");
// 		}
// 	}
// })