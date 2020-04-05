console.log('%cEmmanuel Honoré%c —- %cart direction, design & code','color:#60C2E5','color:black','color:#60C2E5; font-style:italic');

/*
 * Barba transitions
 */
barba.init({
  transitions: [{
    leave({ current, next, trigger }) {
      // do something with `current.container` for your leave transition
      // then return a promise or use `this.async()`
    },
    enter({ current, next, trigger }) {
      // do something with `next.container` for your enter transition
      // then return a promise or use `this.async()`
    }
  }]
});

// // selectors => p, img, figcaption, li, blockquote, h1, h2, h3, h4, h5, h6
// var selectall = 'h1, h2, h3, h4, h5, h6, p, span, img, figcaption, li, blockquote';

// // define a global hook
// barba.hooks.leave((data) => {
//   // this hook will be called for each transitions
//   $('body').removeClass(function (index, className) {
//     return (className.match (/(^|\s)theme-\S+/g) || []).join(' ');
//   });

//   if($(data.next.container).data('theme')) {
//     var theme = $(data.next.container).data('theme');
//     $('body').addClass('theme-'+theme);
//     $(data.next.container).addClass('theme-'+theme);
//   }
// });
// // init barba
// barba.init({
//   transitions: [{
//     name: 'home-project-transition',
//     from: {
//       namespace:'home'
//     },
//     to: {
//       namespace:'project'
//     },
//     before(data){
//     },
//     leave(data){
//       const done = this.async();

//       var $thumbnail = $(data.trigger).find('.thumbnail');
//       var $thumbnail_img = $(data.trigger).find('.thumbnail, .thumbnail--img');
//       var $all = $(data.current.container).find(selectall).not($thumbnail_img);

//       var top = -($thumbnail.offset().top - $(window).scrollTop()),
//           left = -$thumbnail.offset().left;

//       var animation = new TimelineLite﻿()
//       animation
//       .to($all, .25, {
//           opacity: 0,
//           top: +20,
//           ease:Quart.easeOut,
//       })
//       .to($thumbnail, .4, {
//           delay: .1,
//           top: top,
//           left: left,
//           width: "100vw",
//           height: "100vh",
//           ease:Quart.easeIn,
//           onComplete: done,
//       })
//     },
//     enter(data){
//       var done = this.async();
//       TweenLite.from(data.next.container, .2, {
//           delay: .1,
//           opacity: 0,
//           onComplete: done,
//       });
//     }
//   },{
//     name: 'default-transition',
//     before(data) {
//       // add class current to the menu if needed
//       $('.navigation__link--current').removeClass('navigation__link--current');
//       if($(data.trigger).hasClass('navigation__link')){
//         $(data.trigger).addClass('navigation__link--current');
//       }
//       $(data.trigger).addClass('');
//     },
//     leave(data) {
//       // do something with `current.container` for your leave transition
//       // then return a promise or use `this.async()`
//       const done = this.async();
//       TweenLite.to(data.current.container, .2, {
//           opacity: 0,
//           top: +20,
//           onComplete: done,
//       });

//     },
//     enter(data) {
//       // do something with `next.container` for your enter transition
//       // then return a promise or use `this.async()`
//       var done = this.async();
//       TweenLite.from(data.next.container, .2, {
//           opacity: 0,
//           top: +20,
//           onComplete: done,
//       });
//     }
//   }]
// });