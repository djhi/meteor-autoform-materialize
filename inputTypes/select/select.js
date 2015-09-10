Template.afSelect_materialize.helpers({
  attrs: Utility.attsToggleInvalidClass,
  optionAtts: Utility.optionAtts
});

Template.afSelect_materialize.onRendered(Utility.initializeSelect);
