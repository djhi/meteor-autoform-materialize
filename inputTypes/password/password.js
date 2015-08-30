Template.afInputPassword_materialize.helpers({
    atts: function() {
        return Utility.helpers.attsToggleInvalidClass(this.atts);
    }
});

Template.afInputPassword_materialize.rendered = function() {
    this.$('textarea').characterCounter();
}
