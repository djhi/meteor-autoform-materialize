Template.afBooleanRadioGroup_materialize.helpers(Utility.helpersAttrsToggleInvalidClass);

Template.afBooleanRadioGroup_materialize.helpers({
  falseAtts: function() {
    var atts;
    atts = _.omit(this.atts, 'trueLabel', 'falseLabel', 'data-schema-key');
    if (this.value === false) {
      atts.checked = '';
    }
    return atts;
  },
  trueAtts: function() {
    var atts;
    atts = _.omit(this.atts, 'trueLabel', 'falseLabel', 'data-schema-key');
    if (this.value === true) {
      atts.checked = '';
    }
    return atts;
  },
  dsk: function() {
    return {
      'data-schema-key': this.atts['data-schema-key']
    };
  }
});
