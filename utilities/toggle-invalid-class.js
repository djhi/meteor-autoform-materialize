Utility.toggleInvalidClass = function(atts) {
  var context, formId, isInvalid, ss;
  formId = AutoForm.getFormId();
  ss = AutoForm.getFormSchema();
  context = ss.namedContext(formId);
  isInvalid = context.keyIsInvalid(atts.name);
  if (isInvalid) {
    atts = AutoForm.Utility.addClass(atts, "invalid");
  } else {
    atts = removeClass(atts, "invalid");
  }
  return atts;
};

function removeClass(atts, klass) {
  if (typeof atts["class"] === "string") {
    atts["class"].replace(klass, '');
  }
  return atts;
};
