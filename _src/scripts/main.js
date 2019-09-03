/*
 * barba js transitions
 */

barba.init({
  transitions: [{
    leave(data) {
      // do something with `current.container` for your leave transition
      // then return a promise or use `this.async()`
      data.current.container.fadeOut(200);
    },
    enter(data) {
      // do something with `next.container` for your enter transition
      // then return a promise or use `this.async()`
      data.next.container.fadeIn(800);
    }
  }]
});
