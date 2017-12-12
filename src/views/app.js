var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.render();
  },


  render: function() {
    
    this.videoList = new VideoListView({
      collection: this.videos
    });
    console.log(this.videoList);
    
    
    this.searchBar = new SearchView({
      el: '.navbar', 
      collection: this.videos
    });
    console.log('SEARCHBAR WAS RENDERED');
    
    
    this.videoPlayer = new VideoPlayerView({
      el: '.player', 
      collection: this.videos
    });
    console.log('VIDEO PLAYER WAS RENDERED');
    
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
