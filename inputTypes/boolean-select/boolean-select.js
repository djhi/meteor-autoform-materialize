Template.afBooleanSelect_materialize.helpers({
    atts: function() {
        return Utility.helpers.attsToggleInvalidClass(this.atts);
    },
    optionAtts: Utility.helpers.optionAtts
});

Template.afBooleanSelect_materialize.onRendered(Utility.initializeSelect);
