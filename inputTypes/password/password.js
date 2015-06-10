Template.afInputPassword_materialize.helpers({
  attrs: Utility.helpers.attsToggleInvalidClass
});

Template.afInputPassword_materialize.rendered = function() {
    this.$('textarea').characterCounter();
}
