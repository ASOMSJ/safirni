import '@laylazi/bootstrap-rtl/dist/js/bootstrap.min.js';
import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min';
import '../sass/style.scss';
import '@fortawesome/fontawesome-free/js/all.min';


$(function() {
    

    var pathname = window.location.pathname;//إحضار المسار المتواجدين فيه
    console.log(pathname);
    $('.navbar-nav > li > a[href="'+pathname+'"]').parent().addClass('active');
    
    //إضافة الصنف الفعال للصفحات المتعلقة بصفحة المدونة
    if (pathname == "/login.html" || pathname == "/login.html") {
      $('.navbar-nav > li > a[href="/login.html"]').parent().addClass('active');
    }

    //  تغيير خلفية القائمة العلويه عند التمرير أكثر من 50 بكسل
    $(window).scroll(function () {
      if ($(this).scrollTop() > 50) { 
          $(".navbar").addClass("scrolled");
      } else {
          $(".navbar").removeClass("scrolled");
      }
  });

   
    
 
});

var date = new Date();
var year = date.getFullYear();
document.getElementById("date").innerHTML = year;
