var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.render();
    this.searchBar = new SearchView();
    this.videoPlayer = new VideoPlayerView();
    this.videoList = new VideoListView();
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
