Template.afBooleanSelect_materialize.helpers({
  attrs: Utility.attsToggleInvalidClass,
  optionAtts: Utility.optionAtts
});

Template.afBooleanSelect_materialize.onRendered(Utility.initializeSelect);
