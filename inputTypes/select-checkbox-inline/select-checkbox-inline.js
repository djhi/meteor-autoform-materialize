Template.afCheckboxGroupInline_materialize.helpers({
    dsk:      Utility.helpers.dsk,
    itemAtts: function() {
        var atts = Utility.helpers.itemAttsWithUniqId(this);
        return Utility.helpers.attsCheckSelected(this);
    }
});
