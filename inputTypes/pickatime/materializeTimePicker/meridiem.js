/*jshint esversion: 6 */

import './meridiem.html';

Template.materializeTimePickerMeridiem.helpers({
  _value() {
    const instance = Template.instance();
    return instance.data.value.get();
  }
});

Template.materializeTimePickerMeridiem.events({
  'click .materialize-time-picker-meridiem-value'() {
    const instance = Template.instance();
    const meridiem = instance.data.value.get();
    if(meridiem == 'AM') {
      instance.data.value.set('PM');
    }
    else {
      instance.data.value.set('AM');
    }
  }
});
