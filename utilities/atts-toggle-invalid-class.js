Utility.attsToggleInvalidClass = function() {
  var atts    = _.clone(this.atts);
  var context = AutoForm.getFormSchema().namedContext(AutoForm.getFormId());

  if (context.keyIsInvalid(atts.name)) {
    atts = AutoForm.Utility.addClass(atts, 'invalid');
  }

  return atts;
}
