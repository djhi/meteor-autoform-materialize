Template.afSelect_materialize.helpers({
  attrs: Utility.helpers.attsToggleInvalidClass
});
Template.afSelect_materialize.helpers({
  optionAtts: Utility.helpers.optionAtts
});

Template.afSelect_materialize.onRendered(Utility.initializeSelect);
