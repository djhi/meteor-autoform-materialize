var DEFAULT_PICKADATE_FORMAT_SUBMIT = 'yyyy/mm/dd';

AutoForm.addInputType('pickadate', {
  template: 'afPickadate',
  valueIn: function(val, atts) {
    var result, timezoneId;
    result = val;
    timezoneId = atts.timezoneId;
    if (typeof timezoneId === 'string') {
      if (typeof moment.tz !== 'function') {
        throw new Error('If you specify a timezoneId, make sure that you\'ve added a moment-timezone package to your app');
      }
      if (val instanceof Date) {
        result = moment(
          AutoForm.Utility.dateToNormalizedLocalDateAndTimeString(val, timezoneId),
          'YYYY-MM-DD[T]HH:mm:ss.SSS'
        ).toDate();
      }
    }
    return result;
  },
  valueOut: function() {
    var picker = this.pickadate('picker');
    var item   = picker && picker.get('select');
    return item && item.obj;
  },
  valueConverters: {
    'string': function(val) {
      if (val instanceof Date) {
        return val.toString();
      } else {
        return val;
      }
    },
    'stringArray': function(val) {
      if (val instanceof Date) {
        return [val.toString()];
      }
      return val;
    },
    'number': function(val) {
      if (val instanceof Date) {
        return val.getTime();
      } else {
        return val;
      }
    },
    'numberArray': function(val) {
      if (val instanceof Date) {
        return [val.getTime()];
      }
      return val;
    },
    'dateArray': function(val) {
      if (val instanceof Date) {
        return [val];
      }
      return val;
    }
  },
  contextAdjust: function(context) {
    if (context.atts.timezoneId) {
      context.atts["data-timezone-id"] = context.atts.timezoneId;
    }
    delete context.atts.timezoneId;
    return context;
  }
});

Template['afPickadate'].rendered = function() {
  var input, opts, picker, userOptions;
  userOptions = this.data.atts.pickadateOptions || {};
  opts = _.defaults(userOptions, {
    format: DEFAULT_PICKADATE_FORMAT_SUBMIT,
    hiddenName: true,
    closeOnSelect: true
  });
  input = this.$('input').pickadate(opts);
  picker = input.pickadate('picker');
  this.$('input').on('change', function() {
    return $(this).pickadate('picker').close();
  });
  if (this.data.value) {
    this.$('input').parent().find('label').addClass('active');
  }
  this.autorun(function() {
    var data;
    data = Template.currentData();
    if (data.value instanceof Date) {
      picker.set('select', data.value);
    }
    if (data.min instanceof Date) {
      picker.set('min', data.min);
    }
    if (data.max instanceof Date) {
      return picker.set('max', data.max);
    }
  });
};

Template.afPickadate.helpers({
  atts: function() {
    var atts;
    atts = _.clone(this.atts);
    delete atts.dateTimePickerOptions;
    delete atts.pickadateOptions;
    return atts;
  }
});
