var VideoListView = Backbone.View.extend({
  
  el: '.list', 
  initialize: function () {
    this.render();
    //pass in model into VideoListEntryView()
    //this.videoListEntries = new VideoListEntryView(/*{collection: exampleVideoData}*/);
    // this.videoListEntry = new VideoListEntryView({
    //   el: '.video-list', 
    //   collection: this.videos
    // });
    // console.log('VIDEO LIST VIEW RENDERED');
  }, 

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
