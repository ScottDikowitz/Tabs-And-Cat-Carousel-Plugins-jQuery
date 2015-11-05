$.Carousel = function (el) {
  this.$el = $(el);
  this.activeIdx = 0;
  this.transitioning = false;
  // debugger
  $("ul.items li:first-child").addClass("active");
  // debugger;

  this.$el.on('click', 'button.slide-left', this.slideLeft.bind(this));
  this.$el.on('click', 'button.slide-right', this.slideRight.bind(this));

  // $("slide-left").on("click", this.slideLeft.bind(this));
  // $("slide-right").on("click", this.slideRight.bind(this));
// debugger;
};
//
$.fn.carousel = function () {
  return this.each(function () {
    new $.Carousel(this);
  });
};

$.Carousel.prototype.slideLeft = function(e){
  this.slide(1);
}

$.Carousel.prototype.slideRight = function(e){
  this.slide(-1);
}

$.Carousel.prototype.slide = function(dir){
  if (this.transitioning === true){
    return;
  }
  this.transitioning = true;
  // debugger;
  if (dir === -1){
    var newClass = "right";
    var oldClass = "left";
  }
  else{
    var newClass = "left";
    var oldClass = "right";
  }
  var currentActive = this.$el.find(".active").addClass(oldClass);
  // debugger
  currentActive.one("transitionend", function () {
    currentActive.removeClass("active left right");
    this.transitioning = false;
  }.bind(this));
  this.activeIdx += dir;
  if (this.activeIdx === this.$el.find(".items").children().length){
    this.activeIdx = 0;
  }
  else if(this.activeIdx < 0){
    this.activeIdx = this.$el.find(".items").children().length - 1;

  }
  var image = $(this.$el.find(".items").children()[this.activeIdx]).addClass(newClass);
  image.addClass("active");
  setTimeout( function(){
    image.removeClass("left");
    image.removeClass("right");

  }.bind(this), 0);
}
