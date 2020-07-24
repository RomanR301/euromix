let front = {
  hamburger: $('.js-menu-trigger'),
  nav: $('.menu'),
  init: function () {
      this.events();
  },
  toggleNav: function () {
      if (!this.hamburger.hasClass('open')) {
          this.hamburger.addClass('open');
      } else {
          this.hamburger.removeClass('open');
          this.nav.toggleClass('active');
      }
  },


  openTab: function (element, tabName, parent) {
      let i, tab_content, tab_links;

      tab_content = $(element).closest(parent).find('.tab-content');

      for (i = 0; i < tab_content.length; i++) {
          tab_content[i].style.display = "none";
      }

      tab_links = $(element).closest('.tabs-ul').find('.tab-links');

      for (i = 0; i < tab_links.length; i++) {
          tab_links[i].className = tab_links[i].className.replace(" active", "");
      }

      document.getElementById(tabName).style.display = "block";
      $(element).addClass('active');
  },
  hoverTab: function (el, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    el.currentTarget.className += " active";
  },

  events: function () {
      let self = this;
      $(document).on('click', '.menu__trigger', function () {
          self.toggleNav();
      });
  }
};

let modal = {
  closeButton: $('.modal__close'),
  closeOverlay: $('.modal'),
  can: 1,
  init: function () {
      this.events();
  },
  openModal: function (id) {
      let modalWindow = $(id);
      modalWindow.fadeIn();
      modalWindow.find('.modal__content').removeClass('animate-away').addClass('animate-in');

      $('body, html').addClass('active');
  },

  closeModal: function (id) {
      let modalWindow = $(id);
      modalWindow.find('.modal__content').removeClass('animate-in').addClass('animate-away');
      modalWindow.fadeOut();
      $('body, html').removeClass('active');
  },

  events: function () {

      $(document).on('click', '.modalTrigger', function (e) {
          e.preventDefault();
          let self = $(this),
              target = self.attr('data-modal');
          modal.openModal(target);

      });

      $(document).on('click', '.modal', function (event) {
          let self = '#' + $(this).attr('id');
          if (event.target.className == 'modal__body') {
              modal.closeModal(self);
          }
      });

      $(document).on('click', '.modal__close', function () {
          let self = '#' + $(this).closest('.modal').attr('id');
          modal.closeModal(self);
      });
  }
};


jQuery(function () {
  front.init();
  modal.init();

    var swiper = new Swiper('.swiper-container', {
      cssMode: true,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
      },
      mousewheel: true,
      keyboard: true,
    });
 

});

$(window).scroll(function () {
  if ($(this).scrollTop() > 10) {
    $('header').addClass("scroll-header");
  } else {
  	$('header').removeClass("scroll-header");
  }
});


// $(function () {
//     $('.form-input, .form-textarea')
//         .on('focusin', function(){
//         $(this).parent().find('.label-name').addClass('active');
//     })
//         .on('focusout', function(){
//           $(this).parent().find('.label-name').removeClass('active');
//     })
//     $(".form-control input, .form-control textarea").focusout(function() {
//         let $this = $(this);
//         let $label = $this.parent().find('.label-name')

//         if ($this.val() != "") {
//             $this.addClass("has-content");
//             $label.addClass("active");
//         }
//         else {
//             $this.removeClass("has-content");
//             $label.removeClass("active");
//         }

//     })
//     $("#uploadBtn").click(function() {
//         $('#uploadFile').addClass("has-content");
//     })
//     $(document).on('click', '#uploadFile', function(){
//         $('#uploadBtn').click();
//     })
// });


// document.getElementById("uploadBtn").onchange = function () {
// document.getElementById("uploadFile").value = this.value.replace("C:\\fakepath\\", "");
// };



  $(document).ready(function () {
      $(document).on('click', '.anchor-link', function () {
          if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
              let target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              if (target.length) {
                  $('html,body').animate({
                      scrollTop: (target.offset().top) - $('.header').outerHeight()
                  }, 1000);
                  return false;
              }
          }
      });
    });
    
// ScrollSpy

//     const highlightScroll = () => {
//       const scrollPos =  window.pageYOffset + 100
//       const links = document.querySelectorAll('.header-nav a')
      
//       links.forEach((link, index) => {
//           const sections = document.querySelectorAll('section')
//           const activeSection = sections[index]
//           const compare = activeSection.offsetTop <= scrollPos && (activeSection.offsetTop + activeSection.offsetHeight > scrollPos)  
          
//           if(scrollPos > 100) {
//               compare ? link.classList.add('active') : link.classList.remove('active')  
//           }
          
//       })
//   }
//   window.addEventListener('scroll', highlightScroll)
    
