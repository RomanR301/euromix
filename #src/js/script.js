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

});

$(document).on('mouseenter', '.table__content_item', function(e) {
  $(this).children('.table__content_toltip').addClass('hovered');
  setTimeout(function() {
    $('.table__content_item').children('.table__content_toltip').removeClass('hovered')
  }, 1000)
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 10) {
    $('header').addClass("scroll-header");
  } else {
  	$('header').removeClass("scroll-header");
  }
});


$(function () {
    $('.form-input, .form-textarea')
        .on('focusin', function(){
        $(this).parent().find('.label-name').addClass('active');
    })
        .on('focusout', function(){
          $(this).parent().find('.label-name').removeClass('active');
    })
    $(".form-control input, .form-control textarea").focusout(function() {
        let $this = $(this);
        let $label = $this.parent().find('.label-name')

        if ($this.val() != "") {
            $this.addClass("has-content");
            $label.addClass("active");
        }
        else {
            $this.removeClass("has-content");
            $label.removeClass("active");
        }

    })
    $("#uploadBtn").click(function() {
        $('#uploadFile').addClass("has-content");
    })
    $(document).on('click', '#uploadFile', function(){
        $('#uploadBtn').click();
    })
});


document.getElementById("uploadBtn").onchange = function () {
document.getElementById("uploadFile").value = this.value.replace("C:\\fakepath\\", "");
};


function menu() {
    var menuInner = $(".js-menu-inner"),
      menuTrigger = $(".js-menu-trigger"),
      menuInnerBackgroundItem = $(".js-menu-inner-background").find("i"),
      menuItem = $(".js-menu-items-list").find("li"),
      menuItemsShape = $(".js-menu-items-shape"),
      menuClose = $(".js-menu-close"),
      timeline = new TimelineMax({
        paused: true
      }),
      logoShape = $(".js-logo-shape"),
      logoShapePath =
        "M 189,80.37 C 243,66.12 307.3,87.28 350.9,124.1 389.3,156.6 417,211.2 418.1,263.4 419.1,305.7 401.8,355.6 368.5,379.1 298.8,428 179.2,446.4 117.6,386.3 65.4,335.3 78.55,230.3 105.5,160.5 119.7,123.6 152.6,89.85 189,80.37 Z",
      _self,
      linksWrapper = $(".js-menu-items-wrapper"),
      linksItems = $(".js-menu-items-list").find("li"),
      activeItem = $(".js-menu-item.is-active"),
      activeItemPosition = activeItem.position().top,
      menuItemsShapePath = $(".js-items-shape-path"),
      topOffset = 8;
  
    timeline
      .to(
        menuInner,
        1,
        {
          autoAlpha: 1,
          ease: Power4.easeOut
        },
        "start"
      )
      .fromTo(
        menuInnerBackgroundItem,
        0.25,
        {
          x: "-100%",
          autoAlpha: 0
        },
        {
          x: "0%",
          autoAlpha: 1,
          ease: Power1.easeOut
        },
        "start"
      )
      .staggerFromTo(
        menuItem,
        0.4,
        {
          x: -30,
          autoAlpha: 0
        },
        {
          x: 0,
          autoAlpha: 1,
          delay: 0.35,
          ease: Back.easeOut.config(1)
        },
        0.15,
        "start"
      )
      .fromTo(
        menuItemsShape,
        0.25,
        {
          scale: 0.7,
          autoAlpha: 0
        },
        {
          scale: 1,
          autoAlpha: 1,
          delay: 0.95,
          ease: Back.easeOut.config(1.7)
        },
        "start"
      )
      .fromTo(
        menuClose,
        0.2,
        {
          x: -10,
          autoAlpha: 0
        },
        {
          x: 0,
          autoAlpha: 1,
          delay: 1,
          ease: Power1.easeOut
        },
        "start"
      );
  
    function _logoShapeAnimation() {
      TweenMax.to(logoShape, 3, {
        attr: { d: logoShapePath },
        repeat: -1,
        yoyo: true,
        ease: Power0.easeNone
      });
    }
  
    function _hoverAnimation() {
      TweenMax.set(menuItemsShape, {
        y: activeItemPosition + topOffset
      });
  
      linksItems.on({
        mouseenter: function() {
          _self = $(this);
          var selfParent = _self.closest(linksWrapper),
            targetCircle = selfParent.find(menuItemsShape),
            circlePosition = _self.position().top;
  
          TweenMax.to(targetCircle, 0.4, {
            y: circlePosition + topOffset,
            ease: Power2.easeOut
          });
  
          TweenMax.to(menuItemsShapePath, 1, { morphSVG: this.dataset.morph });
        }
      });
  
      linksWrapper.on({
        mouseleave: function() {
          _self = $(this);
          var selfParent = _self.closest(linksWrapper),
            activeLink = selfParent.find(activeItem),
            targetCircle = selfParent.find(menuItemsShape),
            activeLinkPosition = activeLink.position().top;
  
          TweenMax.to(targetCircle, 0.4, {
            y: activeLinkPosition + topOffset,
            ease: Power2.easeOut
          });
  
          TweenMax.to(menuItemsShapePath, 1, { morphSVG: menuItemsShapePath });
        }
      });
    }
  
    menuTrigger.on("click", function() {
      timeline.play();
    });
  
    menuClose.on("click", function() {
      timeline.timeScale(1.25);
      timeline.reverse();
    });
    $(document).on('click', '.anchor-link', function(){
      timeline.timeScale(1.25);
      timeline.reverse();
    })
    _logoShapeAnimation();
    _hoverAnimation();
  }
  
  menu();

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

    const highlightScroll = () => {
      const scrollPos =  window.pageYOffset + 100
      const links = document.querySelectorAll('.header-nav a')
      
      links.forEach((link, index) => {
          const sections = document.querySelectorAll('section')
          const activeSection = sections[index]
          const compare = activeSection.offsetTop <= scrollPos && (activeSection.offsetTop + activeSection.offsetHeight > scrollPos)  
          
          if(scrollPos > 100) {
              compare ? link.classList.add('active') : link.classList.remove('active')  
          }
          
      })
  }
  window.addEventListener('scroll', highlightScroll)
    

// var animation = bodymovin.loadAnimation({
//   container: document.getElementById('anim'),
//   renderer: 'svg',
//   loop: true,
//   autoplay: true,
//   path: '../img/data.json'
// })
// var animation2 = bodymovin.loadAnimation({
//   container: document.getElementById('anim2'),
//   renderer: 'svg',
//   loop: true,
//   autoplay: true,
//   path: '../img/data2.json'
// })
// var animation2 = bodymovin.loadAnimation({
//   container: document.getElementById('anim3'),
//   renderer: 'svg',
//   loop: true,
//   autoplay: true,
//   path: '../img/data3.json'
// })




  var width = $(window).width();
  if (width >= '992') {

    let ctrl3 = new ScrollMagic.Controller();
    
    // each image
    [].forEach.call(document.querySelectorAll('.reveal'), function(e) {
      
      // gsap timeline
      let tl3 = new TimelineMax();
      tl3.from(e, 1, { xPercent: -100, ease: Expo.easeInOut }, 0);
      tl3.from(e.querySelector('.img'), 1, { xPercent: 100, ease: Expo.easeInOut }, 0);
      
      // scrollmagic scene
      let scene = new ScrollMagic.Scene({ triggerElement: e, triggerHook: .9,reverse:false })
      .setTween(tl3)
      .addTo(ctrl3);
      
    });

    // main animations 
    
    const callback = CSSRulePlugin.getRule(".home-callback:before");
    const headerCallback = CSSRulePlugin.getRule(".header-callback:before");

    gsap.to(callback, { duration: 1, width: "26vw", ease: Back.easeOut.config(1.7), delay: .7})
    gsap.to(headerCallback, { duration: 1, width: "21.3vw", ease: Back.easeOut.config(1.7), delay: .7})

    gsap.from('.header-logo-inner', {opacity: 0,y:140, duration: 1, ease: Power4.easeOut})
    gsap.from('.stagger-reveal', {opacity: 0, duration: .5, y: 15, stagger: 0.1,delay: 0.2, ease: Power4.easeOut})
    gsap.from('.text-inner-hero', {y: 140,opacity: 0,duration: .5,delay: 1,stagger: 0.1, ease: Power4.easeOut})
    gsap.from('.reveal-hero', {opacity: 0,duration: 0.5,delay: 1.4, ease: Power4.easeOut})
    gsap.from(".image", {duration: 1.3,ease: Power4.easeOut,opacity:0,delay: 1.2,y: 50});
    gsap.to(".image-reveal", {duration: 1.5,y: "110%",ease: Power4.easeOut,delay: 1.2,});



    var $revealY = $('.text-inner');

    $($revealY).each(function(i) {
      gsap.from($revealY[i], {
        scrollTrigger: {
          trigger: $revealY[i],
        },
        y: 140,
        opacity: 0,
        duration: .7,
        ease: Power4.easeOut
      })
    })

    var $revealWorkflow = $('.text-inner-workflow');

    $($revealWorkflow).each(function(i) {
      gsap.from($revealWorkflow[i], {
        scrollTrigger: {
          trigger: $revealWorkflow[i]
        },
        y: 100,
        opacity: 0,
        stagger: .3,
        duration: 1,
        ease: Power4.easeOut
      })
    })

    var $revealOpacty = $('.reveal-opacity');

    $($revealOpacty).each(function(i) {
      gsap.from($revealOpacty[i], {
        scrollTrigger: {
          trigger: $revealOpacty[i]
        },
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: Power4.easeOut
      })
    })

    var $tableItem = $('.table__content_item');

    $($tableItem).each(function(i) {
      gsap.from($tableItem[i], {
        scrollTrigger: {
          trigger: $tableItem[i]
        },
        opacity: 0,
        duration: 2,
        ease: Power4.easeOut
      })
    })

    var $portfolioText = $('.portfolio__item_text');

    $($portfolioText).each(function(i) {
      gsap.from($portfolioText[i], {
        scrollTrigger: {
          trigger: $portfolioText[i]
        },
        opacity: 0,
        duration: 1,
        y: 140,
        ease: Power4.easeOut
      })
    })


    var $competenceItem = $('.competence__item_right');

    $($competenceItem).each(function(i) {
      gsap.from($competenceItem[i], {
        scrollTrigger: {
          trigger: $competenceItem[i]
        },
        opacity: 0,
        x: 100,
        duration: 1,
        ease: Power4.easeOut
      })
    })

    gsap.from('.competence__item_left', {
      scrollTrigger: {
        trigger: '.competence__item_left'
      },
      opacity: 0,
      x: -100,
      duration: 1,
      ease: Power4.easeOut
    })


    // var rellax = new Rellax('.rellax-even', {
    //   speed: 1,
    //   center: true,
    //   wrapper: null,
    //   round: true,
    //   vertical: true,
    //   horizontal: false
    // });
  
    // var rellax = new Rellax('.rellax-odd', {
    //   speed: -1,
    //   center: true,
    //   wrapper: null,
    //   round: true,
    //   vertical: true,
    //   horizontal: false
    // });
  
  
  };
  




