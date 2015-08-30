Template.afSelect_materialize.helpers({
    atts: function() {
        return Utility.helpers.attsToggleInvalidClass(this.atts);
    },
    optionAtts: Utility.helpers.optionAtts
});

Template.afSelect_materialize.onRendered(Utility.initializeSelect);
