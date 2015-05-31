Utility.helpersGroup = {
  atts: function() {
    var atts;
    atts = _.clone(this.atts);
    atts = Utility.toggleInvalidClass(atts);
    if (this.selected) {
      atts.checked = '';
    }
    delete atts['data-schema-key'];
    return atts;
  },
  dsk: function() {
    return {
      'data-schema-key': this.atts['data-schema-key']
    };
  },
  itemAtts: function() {
    var atts;
    atts = _.clone(this.atts);
    atts.id = atts.id + "_" + this._id;
    return atts;
  }
};
