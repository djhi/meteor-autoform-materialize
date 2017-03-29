/*jshint esversion: 6 */

import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import moment from 'moment';

import './unit.js';
import './meridiem.js';
import './picker.html';

//format helpers
const TIME_FORMAT = 'h:mm A';
const timeString = (hour, minute, meridiem) => {
  return hour+':'+padLeft(minute.toString(),2,'0')+' '+meridiem;
};
const padLeft = (nr, n, str) => {
  return Array(n-String(nr).length+1).join(str||'0')+nr;
};

// when template is created
Template.materializeTimePicker.onCreated(function () {

  //get current time
  let inValue = this.data.value.get();
  const now = moment();
  if(inValue) {
    inValue = now.format('YYYY/MM/DD ')+inValue;
  }
  const value = inValue?moment(inValue, 'YYYY/MM/DD '+TIME_FORMAT):now;
  const currentHour = Number(value.format('h'));
  const currentMinute = Number(value.format('mm'));
  const currentMeridiem = value.format('A');

  //init reactive vars
  this.hour = new ReactiveVar(currentHour);
  this.minute = new ReactiveVar(currentMinute);
  this.meridiem = new ReactiveVar(currentMeridiem);

  //reactively calculate the time
  this.autorun(() => {

    //parse the value of the component
    const hourValue = this.hour.get();
    const minuteValue = this.minute.get();
    const meridiemValue = this.meridiem.get();
    const timeValue = timeString(hourValue, minuteValue, meridiemValue);
    
    //set the value of the reactive out var in instance data
    this.data.value.set(timeValue);
  });
});

//helpers
Template.materializeTimePicker.helpers({
  hour() {
    const instance = Template.instance();
    return instance.hour;
  },
  minute() {
    const instance = Template.instance();
    return instance.minute;
  },
  meridiem() {
    const instance = Template.instance();
    return instance.meridiem;
  }
});
