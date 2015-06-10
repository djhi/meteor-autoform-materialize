AutoForm.addInputType('switch', {
  template: 'afSwitch',
  valueIn: function(value) {
    return value;
  },
  valueOut: function() {
    var checked, input, ref, ref1, result;
    input = this[0];
    checked = input.checked;
    if (checked) {
      result = ((ref = input.attributes.trueValue) != null ? ref.value : void 0) || true;
    } else {
      result = ((ref1 = input.attributes.falseValue) != null ? ref1.value : void 0) || false;
    }
    return result;
  }
});

Template.afSwitch.onRendered(function() {
  var input;
  input = this.$('input');
  return this.autorun((function(_this) {
    return function() {
      var data, trueValue;
      data = Template.currentData();
      trueValue = _this.data.atts.trueValue || true;
      return input.prop('checked', data.value === trueValue);
    };
  })(this));
});

Template.afSwitch.helpers({
  atts: function() {
    return _.extend(this.atts, {
      id: this.atts.name
    });
  }
});
