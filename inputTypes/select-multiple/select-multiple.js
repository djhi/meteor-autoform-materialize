Template.afSelectMultiple_materialize.helpers({
  optionAtts: Utility.optionAtts
});

Template.afSelectMultiple_materialize.helpers({
  atts: function() {
    var atts = Utility.attsToggleInvalidClass.call(this);
    return AutoForm.Utility.addClass(atts, 'browser-default');
  }
});
