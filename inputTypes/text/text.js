Template.afInputText_materialize.helpers({
    atts: function() {
        return Utility.helpers.attsToggleInvalidClass(this.atts);
    }
});

Template.afInputText_materialize.rendered = function() {
    this.$('textarea').characterCounter();
}
