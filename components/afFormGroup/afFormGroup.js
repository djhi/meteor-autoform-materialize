Template.afFormGroup_materialize.helpers({
  labelFirst: function() {
    var labelFirstTypes, result, type;
    labelFirstTypes = ['select', 'boolean-select', 'select-multiple'];
    type = AutoForm.getInputType(this);
    result = _.contains(labelFirstTypes, type);
    return result;
  },
  addInputField: function() {
    var result, skipInputType, type;
    skipInputType = ['select', 'select-multiple', 'switch'];
    type = AutoForm.getInputType(this);
    result = !_.contains(skipInputType, type);
    return result;
  },
  skipLabel: function() {
    var result, skipLabelTypes, type;
    skipLabelTypes = [
      'checkbox',
      'checkbox-group',
      'boolean-checkbox',
      'select-radio',
      'select-radio-group',
      'select-radio-group-inline',
      'boolean-radio',
      'boolean-radio-group',
      'toggle',
      'switch'
    ];
    type = AutoForm.getInputType(this);
    result = this.skipLabel || _.contains(skipLabelTypes, type);
    return result;
  }
});

Template.afFormGroup_materialize.rendered = function() {
  var formId;
  formId = AutoForm.getFormId();
  this.autorun((function(_this) {
    return function() {
      var value;
      value = AutoForm.getFieldValue(_this.data.name, formId);
      if (!!value) {
        return _this.$('.input-field > label:not(:focus)').addClass('active');
      } else {
        return _this.$('.input-field > label:not(:focus)').removeClass('active');
      }
    };
  })(this));
};
