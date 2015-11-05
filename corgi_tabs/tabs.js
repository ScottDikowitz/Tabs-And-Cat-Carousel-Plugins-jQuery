$.Tabs = function (el) {
  this.$el = $(el);
  this.$contentTabs = $(this.$el.data('content-tabs'));

  this.$activeTab = $(this.$contentTabs.children(".active"));
  this.$el.on('click', 'a', this.clickTab);

};

$.fn.tabs = function () {
  return this.each(function () {
    new $.Tabs(this);
  });
};

$.Tabs.prototype.clickTab = function(e){
  var article = $("article.active");
  $(".active").removeClass();
  article.addClass("transitioning");
  // debugger;
article.one("transitionend", function() {
  article.removeClass("transitioning");
  $(e.currentTarget).addClass("active");
  this.$activeTab = $(e.currentTarget);
  var dogName = this.$activeTab.attr('href');
  $($.find(dogName)[0]).addClass("active transitioning");
  setTimeout( function (){
    $($.find(dogName)[0]).removeClass("transitioning");
    $($.find(dogName)[0]).css('transition', "opacity .5s linear");
  }, 0)

}.bind(this));
}
