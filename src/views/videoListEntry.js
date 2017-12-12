var VideoListEntryView = Backbone.View.extend({

  el: '.video-list', 
  
  
  initialize: function () {
    this.render();
  },
  
  render: function() {
    // console.dir(this);
    //this.model = Video, need to direct this to Video
    this.$el.html(this.template(Video.attributes));
    // this.$el.html(/*this.template(this.model.attributes)*/'<div> hello </div>');
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
