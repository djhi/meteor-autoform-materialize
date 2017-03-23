Utility.optionAtts = function() {
  var atts = _.pick(this, 'value');

  if(this.selected) {
    atts.selected = '';
  }

  if (!_.isEmpty(this.htmlAtts)) {
    _.extend(atts, this.htmlAtts);
  }

  return atts;
};
