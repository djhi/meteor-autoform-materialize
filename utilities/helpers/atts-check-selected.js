Utility.helpers.attsCheckSelected = function() {
  var atts = Utility.helpers.attsToggleInvalidClass.call(this);
  if (this.selected) {
    atts.checked = '';
  }
  return atts;
};
