var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(exampleVideoData);
    this.render();
  },


  render: function() {
    // html 
    this.$el.html(this.template());
    
    
    new SearchView({
      el: '.search', 
      collection: this.videos
    });
    
    new VideoListView({
      el: '.list', 
      collection: this.videos
    });
    
    new VideoPlayerView({
      el: '.player', 
      collection: this.videos
    });
    
    return this;
  },

  template: templateURL('src/templates/app.html')

});
