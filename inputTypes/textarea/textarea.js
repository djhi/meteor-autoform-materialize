Template.afTextarea_materialize.helpers({
  atts: function() {
    var atts = Utility.attsToggleInvalidClass.call(this);
    return AutoForm.Utility.addClass(atts, "materialize-textarea");
  }
});

Template.afTextarea_materialize.rendered = function() {
    this.$('textarea').characterCounter();
};
