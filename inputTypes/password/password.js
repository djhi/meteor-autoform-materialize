Template.afInputPassword_materialize.helpers({
  atts: Utility.attsToggleInvalidClass
});

Template.afInputPassword_materialize.rendered = function() {
    this.$('textarea').characterCounter();
}
