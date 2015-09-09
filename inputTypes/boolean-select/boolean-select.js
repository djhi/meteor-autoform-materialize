Template.afBooleanSelect_materialize.helpers({
  attrs: Utility.attsToggleInvalidClass
});

Template.afBooleanSelect_materialize.helpers({
  optionAtts: Utility.optionAtts
});

Template.afBooleanSelect_materialize.onRendered(Utility.initializeSelect);
