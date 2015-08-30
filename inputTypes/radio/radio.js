Template.afRadio_materialize.helpers({
    dsk: Utility.helpers.dsk,
    atts: function() {
        return Utility.helpers.attsCheckSelected(this.atts, this.selected);
    }
});
