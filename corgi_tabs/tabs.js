$.Tabs = function (el) {
  this.$el = $(el);
  this.$contentTabs = $(this.$el.data('content-tabs'));

  this.$activeTab = $(this.$contentTabs.children(".active"));
  this.$el.on('click', 'a', this.clickTab.bind(this));

};

$.fn.tabs = function () {
  return this.each(function () {
    new $.Tabs(this);
  });
};

$.Tabs.prototype.clickTab = function(e){
  var article = this.$contentTabs.find("article.active").removeClass("active");
  this.$el.find(".active").removeClass();
  article.addClass("transitioning");
  // debugger;
  article.one("transitionend", function() {
    article.removeClass("transitioning");
    $(e.currentTarget).addClass("active");
    this.$activeTab = $(e.currentTarget);
    var dogName = this.$activeTab.attr('href');
    this.$contentTabs.find(dogName).addClass("active transitioning");
    setTimeout( function (){
      this.$contentTabs.find(dogName).removeClass("transitioning");
    }.bind(this), 0)

  }.bind(this));
}
