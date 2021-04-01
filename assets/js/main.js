$(document).ready(function() {

  /*Nav Toggle*/
  $('.nav-toggle').click(function() {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      $(this).addClass('active');
    }
  });

	// Masonry
	var $container = $('.masonry-grid');
  // initialize Masonry after all images have loaded
  $container.imagesLoaded(function() {
    $container.masonry({
      itemSelector: '.masonry-grid-item', // use a separate class for itemSelector, other than .col-
      columnWidth: '.masonry-grid-sizer',
      percentPosition: true
    });
  });

	// Wow
  var wow = new WOW({
	  boxClass:	'wow',	// animated element css class (default is wow)
	  offset:	0,	// distance to the element when triggering the animation (default is 0)
	  mobile:	false,	// trigger animations on mobile devices (true is default)
	  tablet:	false	// trigger animations on tablet devices (true is default)
	});
	wow.init();

	// Swiper Clients
  var swiperClients = new Swiper('.swiper-clients', {
    slidesPerView: 5,
    spaceBetween: 100,
    loop: true,
    autoplay: 2000,
    speed: 2000,
    breakpoints: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 50
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 40
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 0
      }
    }
  });

  // Swiper Testimonials
  var swiperTestimonials = new Swiper('.swiper-testimonials', {
    speed: 1000,
    autoplay: 10000,
    slidesPerView: 1,
    loop: true,
  });

  // Back To Top
  // browser window scroll (in pixels) after which the "back to top" link is shown
  var offset = 300,
	    //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
	    offset_opacity = 1200,
	    //duration of the top scrolling animation (in ms)
	    scroll_top_duration = 700,
	    //grab the "back to top" link
	    $back_to_top = $('.js-back-to-top');

  //hide or show the "back to top" link
  $(window).scroll(function(){
    ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('back-to-top-is-visible') : $back_to_top.removeClass('back-to-top-is-visible');
    ( $(this).scrollTop() > offset_opacity ) ? $back_to_top.addClass('back-to-top-fade-out') : $back_to_top.removeClass('back-to-top-fade-out');

  });

  //smooth scroll to top
  $back_to_top.on('click', function(event){
    event.preventDefault();
    $('body,html').animate({
    	scrollTop: 0 ,
    }, scroll_top_duration);
  });

  // $(window).scroll(function(){
  // 	if ($(this).scrollTop() > offset) {
  // 		$back_to_top.addClass('back-to-top-is-visible');
  // 	} else {
  // 		$back_to_top.removeClass('back-to-top-is-visible');
  // 	}

  // 	if ($(this).scrollTop() > offset_opacity) {
  // 		$back_to_top.addClass('back-to-top-fade-out');
  // 	} else {
  // 		$back_to_top.removeClass('back-to-top-fade-out');
  // 	}
  // });

  // $back_to_top.on('click', function(event){
  //   $('body,html').animate({
  //   	scrollTop: 0 ,
  //   }, 700);
  // });

});

// Form Validation
var nameStyle = $('#name');
var emailStyle = $('#email');
var phoneStyle = $('#phone');
var messageStyle = $('#message');

var erorrMegName = $('#erorrMegName');
var erorrMegEmail = $('#erorrMegEmail');
var erorrMegPhone = $('#erorrMegPhone');
var erorrMegMessage = $('#erorrMegMessage');

var validEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

nameStyle.focusout(function(){
	erorrMegName.text('Please Enter Your Name');
  erorrMegName.addClass('mt-2 alert alert-danger');
  nameStyle.css({ 
  	borderColor: '#aa0000',
    boxShadow: '0 0 9px rgba(170, 0, 0, 0.25)'
  });

  validation();
});

emailStyle.focusout(function(){
	erorrMegEmail.text('Please Enter Your Email');
  erorrMegEmail.addClass('mt-2 alert alert-danger');
  emailStyle.css({ 
  	borderColor: '#aa0000',
  	boxShadow: '0 0 9px rgba(170, 0, 0, 0.25)'
  });

  validation();
});

phoneStyle.focusout(function(){
	erorrMegPhone.text('Please Enter Your Phone Number');
  erorrMegPhone.addClass('mt-2 alert alert-danger');
  phoneStyle.css({ 
  	borderColor: '#aa0000',
  	boxShadow: '0 0 9px rgba(170, 0, 0, 0.25)'
  });

  validation();
});

messageStyle.focusout(function(){
	erorrMegMessage.text('Please Enter Your Message');
  erorrMegMessage.addClass('mt-2 alert alert-danger');
  messageStyle.css({ 
  	borderColor: '#aa0000',
  	boxShadow: '0 0 9px rgba(170, 0, 0, 0.25)'
  });

  validation();
});

function validation(){
  var nameValue = document.getElementById("name").value;
  var emailValue = document.getElementById("email").value;
  var phoneValue = document.getElementById("phone").value;
  var messageValue = document.getElementById("message").value;
  
  if( nameValue=="null" || nameValue=="" ){
    erorrMegName.text('Please Enter Your Name');
	  erorrMegName.addClass('mt-2 alert alert-danger');
	  nameStyle.css({ 
	  	borderColor: '#aa0000',
	  	boxShadow: '0 0 9px rgba(170, 0, 0, 0.25)'
	  });
    return false;
  }
  else if( emailValue=="null" || emailValue=="" ){
  	erorrMegName.text('');
	  erorrMegName.removeClass('mt-2 alert alert-danger');
	  nameStyle.css({ 
	  	borderColor: '#28a745',
	  	boxShadow: '0 0 9px rgba(40, 167, 69, 0.25)'
	  });

    erorrMegEmail.text('Please Enter Your Email');
		erorrMegEmail.addClass('mt-2 alert alert-danger');
		emailStyle.css({ 
			borderColor: '#aa0000',
			boxShadow: '0 0 9px rgba(170, 0, 0, 0.25)'
		});
    return false;
  }
  else if(validEmail.test(emailValue)==false){
    erorrMegEmail.text('Please Enter Your Valid Email');
    return false;
  }
  else if(phoneValue=="null" || phoneValue==""){
    erorrMegEmail.text('');
		erorrMegEmail.removeClass('mt-2 alert alert-danger');
		emailStyle.css({ 
			borderColor: '#28a745',
			boxShadow: '0 0 9px rgba(40, 167, 69, 0.25)'
		});

    erorrMegPhone.text('Please Enter Your Phone Number');
		erorrMegPhone.addClass('mt-2 alert alert-danger');
		phoneStyle.css({ 
			borderColor: '#aa0000',
			boxShadow: '0 0 9px rgba(170, 0, 0, 0.25)'
		});
		return false;
	}
  else if(messageValue=="null" || messageValue==""){
    erorrMegPhone.text('');
		erorrMegPhone.removeClass('mt-2 alert alert-danger');
		phoneStyle.css({ 
			borderColor: '#28a745',
			boxShadow: '0 0 9px rgba(40, 167, 69, 0.25)'
		});

    erorrMegMessage.text('Please Enter Your Message');
		erorrMegMessage.addClass('mt-2 alert alert-danger');
		messageStyle.css({ 
			borderColor: '#aa0000',
			boxShadow: '0 0 9px rgba(170, 0, 0, 0.25)'
		});
    return false;
  }
  else{
  	erorrMegMessage.text('');
		erorrMegMessage.removeClass('mt-2 alert alert-danger');
		messageStyle.css({ 
			borderColor: '#28a745',
			boxShadow: '0 0 9px rgba(40, 167, 69, 0.25)'
		});

    return true;
  }
}

// Subscribe Form validation
var subEmailStyle = $('#subEmail');
var erorrMegSubEmail = $('#erorrmegsubemail');

// var hi = document.createElement('div');
// hi.setAttribute('id', 'erorrMegSubEmail');

subEmailStyle.focusout(function(){
  // $('.subscribeForm > div').prepend(hi);
  erorrMegSubEmail.text('Please Enter Your Email');
  erorrMegSubEmail.addClass('error-sub-email');
  subEmailStyle.css({ 
    borderColor: '#aa0000',
    boxShadow: '0 0 9px rgba(170, 0, 0, 0.25)'
  });

  subValidation();
});


function subValidation(){
  var subEmailValue = document.getElementById('subEmail').value;

  if ( subEmailValue=='null' || subEmailValue=='' ) {
    erorrMegSubEmail.text('Please Enter Your Email');
    erorrMegSubEmail.addClass('error-sub-email');
    subEmailStyle.css({ 
      borderColor: '#aa0000',
      boxShadow: '0 0 9px rgba(170, 0, 0, 0.25)'
    });

    return false;
  }
  else if ( validEmail.test(subEmailValue)==false ) {
    erorrMegSubEmail.text('Please Enter Your Valid Email');
    return false;
  }
  else {
    erorrMegSubEmail.text('');
    erorrMegSubEmail.removeClass('error-sub-email');
    subEmailStyle.css({ 
      borderColor: '#28a745',
      boxShadow: '0 0 9px rgba(40, 167, 69, 0.25)'
    });
  }

}

// function validation(){
//   var name = document.getElementById("name").value;
//   var email = document.getElementById("email").value;
//   var phone = document.getElementById("phone").value;
//   var message = document.getElementById("message").value;
//   var validEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  
//   var nameStyle = document.getElementById("name");
// 	var emailStyle = document.getElementById("email");
// 	var phoneStyle = document.getElementById("phone");
// 	var messageStyle = document.getElementById("message");

// 	var erorrMegName = document.getElementById("erorrMegName");
// 	var erorrMegEmail = document.getElementById("erorrMegEmail");
// 	var erorrMegPhone = document.getElementById("erorrMegPhone");
// 	var erorrMegMessage = document.getElementById("erorrMegMessage");

//   if( name=="null" || name=="" ){
//     erorrMegName.textContent = 'Please Enter Your Name';
// 	  erorrMegName.className = 'mt-2 alert alert-danger';
// 	  nameStyle.style.borderColor = '#aa0000';
// 	  nameStyle.style.boxShadow = '0 0 9px rgba(170, 0, 0, 0.25)';
//     return false;
//   }
//   else if(email=="null" || email==""){
//   	erorrMegName.textContent = '';
// 	  erorrMegName.className = '';
// 	  nameStyle.style.borderColor = '#28a745';
// 	  nameStyle.style.boxShadow = '0 0 9px rgba(40, 167, 69, 0.25)';

//     erorrMegEmail.textContent = 'Please Enter Your Email';
// 	  erorrMegEmail.className = 'mt-2 alert alert-danger';
// 	  emailStyle.style.borderColor = '#aa0000';
// 	  emailStyle.style.boxShadow = '0 0 9px rgba(170, 0, 0, 0.25)';
//     return false;
//   }
//   else if(validEmail.test(email)==false){
//     erorrMegEmail.textContent = 'Please Enter Your Valid Email';
//     return false;
//   }
//   else if(phone=="null" || phone==""){
//     erorrMegEmail.textContent = '';
// 	  erorrMegEmail.className = '';
// 	  emailStyle.style.borderColor = '#28a745';
// 	  emailStyle.style.boxShadow = '0 0 9px rgba(40, 167, 69, 0.25)';

//     erorrMegPhone.textContent = 'Please Enter Your Phone Number';
// 	  erorrMegPhone.className = 'mt-2 alert alert-danger';
// 	  phoneStyle.style.borderColor = '#aa0000';
// 	  phoneStyle.style.boxShadow = '0 0 9px rgba(170, 0, 0, 0.25)';
// 		return false;
// 	}
//   else if(message=="null" || message==""){
//     erorrMegPhone.textContent = '';
// 	  erorrMegPhone.className = '';
// 	  phoneStyle.style.borderColor = '#28a745';
// 	  phoneStyle.style.boxShadow = '0 0 9px rgba(40, 167, 69, 0.25)';

//     erorrMegMessage.textContent = 'Please Enter Your Message';
// 	  erorrMegMessage.className = 'mt-2 alert alert-danger';
// 	  messageStyle.style.borderColor = '#aa0000';
// 	  messageStyle.style.boxShadow = '0 0 9px rgba(170, 0, 0, 0.25)';
//     return false;
//   }
//   else{
//   	erorrMegMessage.textContent = '';
// 	  erorrMegMessage.className = '';
// 	  messageStyle.style.borderColor = '#28a745';
// 	  messageStyle.style.boxShadow = '0 0 9px rgba(40, 167, 69, 0.25)';

//     return true;
//   }
// }

// var nameStyle = document.getElementById("name");
// var emailStyle = document.getElementById("email");
// var phoneStyle = document.getElementById("phone");
// var messageStyle = document.getElementById("message");

// var erorrMegName = document.getElementById("erorrMegName");
// var erorrMegEmail = document.getElementById("erorrMegEmail");
// var erorrMegPhone = document.getElementById("erorrMegPhone");
// var erorrMegMessage = document.getElementById("erorrMegMessage");

// nameStyle.addEventListener('focusout', function(){
// 	erorrMegName.textContent = 'Please Enter Your Name';
//   erorrMegName.className = 'mt-2 alert alert-danger';
//   nameStyle.style.borderColor = '#aa0000';
//   nameStyle.style.boxShadow = '0 0 9px rgba(170, 0, 0, 0.25)';

//   validation();
// });

// emailStyle.addEventListener('focusout', function(){
// 	erorrMegEmail.textContent = 'Please Enter Your Email';
//   erorrMegEmail.className = 'mt-2 alert alert-danger';
//   emailStyle.style.borderColor = '#aa0000';
//   emailStyle.style.boxShadow = '0 0 9px rgba(170, 0, 0, 0.25)';

//   validation();
// });

// phoneStyle.addEventListener('focusout', function(){
// 	erorrMegPhone.textContent = 'Please Enter Your Phone Number';
//   erorrMegPhone.className = 'mt-2 alert alert-danger';
//   phoneStyle.style.borderColor = '#aa0000';
//   phoneStyle.style.boxShadow = '0 0 9px rgba(170, 0, 0, 0.25)';

//   validation();
// });

// messageStyle.addEventListener('focusout', function(){
// 	erorrMegMessage.textContent = 'Please Enter Your Message';
//   erorrMegMessage.className = 'mt-2 alert alert-danger';
//   messageStyle.style.borderColor = '#aa0000';
//   messageStyle.style.boxShadow = '0 0 9px rgba(170, 0, 0, 0.25)';

//   validation();
// });
