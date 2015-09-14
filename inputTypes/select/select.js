Template.afSelect_materialize.helpers({
  atts: Utility.attsToggleInvalidClass
});
Template.afSelect_materialize.helpers({
  optionAtts: Utility.optionAtts
});

Template.afSelect_materialize.onRendered(Utility.initializeSelect);
