var SearchView = Backbone.View.extend({

  el: '.navbar', 

  initialize: function () {
    this.render();
  }, 
  
  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
