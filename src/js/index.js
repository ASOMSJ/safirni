import '@laylazi/bootstrap-rtl/dist/js/bootstrap.min.js';
import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min';
import '../sass/style.scss';
import '@fortawesome/fontawesome-free/js/all.min';



$(function () {

   //  تغيير خلفية القائمة العلويه عند التمرير أكثر من 50 بكسل
   $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $(".navbar").addClass("scrolled");
    } else {
      $(".navbar").removeClass("scrolled");
    }
  });


  //  تحديد العنصر الذي يتم النقر عليه
  if (window.location.pathname.endsWith('index.html')) {
    $(window).on('scroll', function () {
      var scrollPos = $(document).scrollTop();
      $('.navbar-nav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
          $('.navbar-nav li').removeClass("active");
          currLink.parent().addClass("active");
        } else {
          currLink.parent().removeClass("active");
        }
      });
    });
  }


 




});


//  تحريك الصفحة بسلاسة عند النقر على الروابط
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function () {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

$(function () {
  // فتح النافذة وتكبير الصورة
  function openModal(img) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    modal.style.display = "block";
    modalImg.src = img.src;
  }

  // إغلاق النافذة
  function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }


  // إضافة الأحداث للنقر على الصور
  $('.tour-gallery img').on('click', function () {
    openModal(this);
  });

  // إضافة الحدث للنقر على زر الإغلاق
  $('.close').on('click', function () {
    closeModal();
  });
});

// تحديد السنة الحالية
var date = new Date();
var year = date.getFullYear();
document.getElementById("date").innerHTML = year;



