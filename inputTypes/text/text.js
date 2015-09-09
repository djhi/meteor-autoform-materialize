Template.afInputText_materialize.helpers({
  attrs: Utility.attsToggleInvalidClass
});

Template.afInputText_materialize.rendered = function() {
    this.$('textarea').characterCounter();
}
