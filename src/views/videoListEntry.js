//move
var VideoListEntryView = Backbone.View.extend({

  el: '.video-list', 
  
  
  initialize: function () {
    //loop over collection
      //call new video
    this.render();
  },
  
  render: function() {
    // console.dir(this);
    //this.model = Video, need to direct this to Video (works with Video.attributes)
    this.$el.html(this.template(this.model.attributes));
    // this.$el.html(/*this.template(this.model.attributes)*/'<div> hello </div>');
    return this;
  },


  // render: function() {
  //   new MoviesView({
  //     el: this.$('#movies'),
  //     collection: this.collection
  //   }).render();
  // }

  template: templateURL('src/templates/videoListEntry.html')

});
