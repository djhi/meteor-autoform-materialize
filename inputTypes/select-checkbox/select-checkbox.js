Template.afCheckboxGroup_materialize.helpers({
    dsk: Utility.helpers.dsk,
    itemAtts: function() {
        var atts = Utility.helpers.itemAttsWithUniqId(this.atts);
        atts = Utility.helpers.attsToggleInvalidClass(atts);
        return Utility.helpers.attsCheckSelected(atts, this.selected);
    }
});
