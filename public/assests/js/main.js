$(function () {
  var top = $('#sidebar').offset().top - parseFloat($('#sidebar').css('marginTop').replace(/auto/, 0));
  var footTop = $('#footer').offset().top - parseFloat($('#footer').css('marginTop').replace(/auto/, 0));
  // footTop -= 150
  // top += 5
  var maxY = footTop - $('#sidebar').outerHeight();

  $(window).scroll(function (evt) {
    var y = $(this).scrollTop();
    if (y > top) {
      if (y < maxY) {
        $('#sidebar').addClass('fixed').removeAttr('style');
      } else {
        $('#sidebar').removeClass('fixed').css({
          position: 'relative',
          transform: 'translate3d(0px, 631.4px, 0px)'
          // top: (maxY - top) + 'px'.
          // top: 0
        });
      }
    } else {
      $('#sidebar').removeClass('fixed');
    }
  });
});

$(document).ready(function () {
  $('.testimonial-wrapper').slick({
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrow: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.podcasts-wrapper').slick({
    dots: true,
    infinite: false,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    loop: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  $('.inner-testimonial-wrapper').slick({
    dots: true,
    infinite: false,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    loop: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  $('.step-card-wrapper').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    loop: true,
    arrows: false,
    fade: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  new WOW().init();








  const accordionItemHeaders = document.querySelectorAll(
    ".accordion-item-header"
  );

  accordionItemHeaders.forEach((accordionItemHeader) => {
    accordionItemHeader.addEventListener("click", (event) => {
      // Uncomment in case you only want to allow for the display of only one collapsed item at a time!

      const currentlyActiveAccordionItemHeader = document.querySelector(
        ".accordion-item-header.active"
      );
      if (
        currentlyActiveAccordionItemHeader &&
        currentlyActiveAccordionItemHeader !== accordionItemHeader
      ) {
        currentlyActiveAccordionItemHeader.classList.toggle("active");
        currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
      }
      accordionItemHeader.classList.toggle("active");
      const accordionItemBody = accordionItemHeader.nextElementSibling;
      if (accordionItemHeader.classList.contains("active")) {
        accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
      } else {
        accordionItemBody.style.maxHeight = 0;
      }
    });
  });

})


window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("navbar").style.top = "-150px";
    // document.getElementById("social").style.opacity = "1";
  } else {
    document.getElementById("navbar").style.top = "0px";
    // document.getElementById("social").style.opacity = "0";
  }
}
let oldValue = 0;
window.addEventListener('scroll', function (e) {

  // Get the new Value
  newValue = window.pageYOffset;

  //Subtract the two and conclude
  if (oldValue - newValue < 0) {
    // console.log("Up");
  } else if (oldValue - newValue > 0) {
    document.getElementById("navbar").style.top = "0px";
  }

  // Update the old value
  oldValue = newValue;
})






// gsap.from(".season-card", {
//   opacity: 0,
//   duration: 2,
//   ease: "bounce.out",
//   delay: 1,
//   stagger: 0.1,
//   scrollTrigger: ".season-card",
//   // effects: true,
// });

// ScrollSmoother.create({
//   content: ".viewport",
//   smooth: 5,            // how long (in seconds) it takes to "catch up" to the native scroll position
//   effects: true,           // looks for data-speed and data-lag attributes on elements
//   smoothTouch: 8, 
//   lag: 0.5,
//    speed: 1,
//    scrub:true
// });
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  // console.log(e)
})

function raf(time) {
  lenis.raf(time * 0.1)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
