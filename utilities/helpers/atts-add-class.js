Utility.helpers.attsAddClass = function(atts) {
  var result;
  result = _.clone(atts);
  result = AutoForm.Utility.addClass(atts, 'btn waves-effect waves-light');
  return result;
};
