Template.afInputText_materialize.helpers({
  attrs: Utility.helpers.attsToggleInvalidClass
});

Template.afInputText_materialize.rendered = function() {
    this.$('textarea').characterCounter();
}
