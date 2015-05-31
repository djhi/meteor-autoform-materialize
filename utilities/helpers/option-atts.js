Utility.helpers.optionAtts = {
  optionAtts: function() {
    var atts, item;
    item = this;
    atts = {
      value: item.value
    };
    if (item.selected) {
      atts.selected = '';
    }
    return atts;
  }
};
