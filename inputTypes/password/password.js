Template.afInputPassword_materialize.helpers({
  attrs: Utility.attsToggleInvalidClass
});

Template.afInputPassword_materialize.rendered = function() {
    this.$('textarea').characterCounter();
}
