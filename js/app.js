
const hamburger_menu = document.querySelector(".hamburger-menu");
const navbar = document.querySelector("header nav");



function closeMenu() {
  navbar.classList.remove("open");
  document.body.classList.remove("stop-scrolling");
}

hamburger_menu.addEventListener("click", () => {
  if (!navbar.classList.contains("open")) {
    navbar.classList.add("open");
    document.body.classList.add("stop-scrolling");
  } else {
    closeMenu();
  }
});




// scroling faq



function raf(time) {
  lenis.raf(time);
  ScrollTrigger.update();
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const section_1 = document.getElementById("vertical");
const col_left = document.querySelector(".col_left");
const timeln = gsap.timeline({ paused: true });

timeln.fromTo(col_left, {y: 0}, {y: '143vh', duration: 1, ease: 'none'}, 0);

const scroll_1 = ScrollTrigger.create({
  animation: timeln,
  trigger: section_1,
  start: 'top top',
  end: 'bottom center',
  scrub: true
});


var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});




var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  // css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #000}";
  document.body.appendChild(css);
};






// timeline
// (function(){
//   // Vertical Timeline - by CodyHouse.co
// 	function VerticalTimeline( element ) {
// 		this.element = element;
// 		this.blocks = this.element.getElementsByClassName("cd-timeline__block");
// 		this.images = this.element.getElementsByClassName("cd-timeline__img");
// 		this.contents = this.element.getElementsByClassName("cd-timeline__content");
// 		this.offset = 0.8;
// 		this.hideBlocks();
// 	};

// 	VerticalTimeline.prototype.hideBlocks = function() {
// 		if ( !"classList" in document.documentElement ) {
// 			return; // no animation on older browsers
// 		}
// 		//hide timeline blocks which are outside the viewport
// 		var self = this;
// 		for( var i = 0; i < this.blocks.length; i++) {
// 			(function(i){
// 				if( self.blocks[i].getBoundingClientRect().top > window.innerHeight*self.offset ) {
// 					self.images[i].classList.add("cd-timeline__img--hidden"); 
// 					self.contents[i].classList.add("cd-timeline__content--hidden"); 
// 				}
// 			})(i);
// 		}
// 	};

// 	VerticalTimeline.prototype.showBlocks = function() {
// 		if ( ! "classList" in document.documentElement ) {
// 			return;
// 		}
// 		var self = this;
// 		for( var i = 0; i < this.blocks.length; i++) {
// 			(function(i){
// 				if( self.contents[i].classList.contains("cd-timeline__content--hidden") && self.blocks[i].getBoundingClientRect().top <= window.innerHeight*self.offset ) {
// 					// add bounce-in animation
// 					self.images[i].classList.add("cd-timeline__img--bounce-in");
// 					self.contents[i].classList.add("cd-timeline__content--bounce-in");
// 					self.images[i].classList.remove("cd-timeline__img--hidden");
// 					self.contents[i].classList.remove("cd-timeline__content--hidden");
// 				}
// 			})(i);
// 		}
// 	};

// 	var verticalTimelines = document.getElementsByClassName("js-cd-timeline"),
// 		verticalTimelinesArray = [],
// 		scrolling = false;
// 	if( verticalTimelines.length > 0 ) {
// 		for( var i = 0; i < verticalTimelines.length; i++) {
// 			(function(i){
// 				verticalTimelinesArray.push(new VerticalTimeline(verticalTimelines[i]));
// 			})(i);
// 		}

// 		//show timeline blocks on scrolling
// 		window.addEventListener("scroll", function(event) {
// 			if( !scrolling ) {
// 				scrolling = true;
// 				(!window.requestAnimationFrame) ? setTimeout(checkTimelineScroll, 250) : window.requestAnimationFrame(checkTimelineScroll);
// 			}
// 		});
// 	}

// 	function checkTimelineScroll() {
// 		verticalTimelinesArray.forEach(function(timeline){
// 			timeline.showBlocks();
// 		});
// 		scrolling = false;
// 	};
// })();





