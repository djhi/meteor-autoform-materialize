Template.afSelectMultiple_materialize.helpers({
  atts: Utility.attsToggleInvalidClass,
  optionAtts: Utility.optionAtts
});

Template.afSelectMultiple_materialize.onRendered(Utility.initializeSelect);
