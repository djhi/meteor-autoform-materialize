Template.afBooleanSelect_materialize.helpers({
  attrs: Utility.helpers.attsToggleInvalidClass
});

Template.afBooleanSelect_materialize.helpers({
  optionAtts: Utility.helpers.optionAtts
});

Template.afBooleanSelect_materialize.onRendered(Utility.initializeSelect);
