/*jshint esversion: 6 */

import './unit.html';

const padLeft = (nr, n, str) => {
  return Array(n-String(nr).length+1).join(str||'0')+nr;
};

const _str = (instance, number) => {
  let result = number.toString();
  if(instance.data.pad) {
    result = padLeft(result,instance.data.pad,'0');
  }
  return result;
};

const _num = (string) => {
  return Number(string);
};

const _inc = (inc, max, num) => {
  let result;

  //if incrementor exists
  if(inc!==undefined) {

    //increment with incrementor
    result = inc?num+inc:num+1;

    //round up to next modulus of increment
    const mod = result%inc;
    if(mod>0) {
      const nudge = inc-mod;
      result += nudge;
    }
  }
  //else - increment with one
  else {
    result=num+1;
  }

  //limit
  if(max!==undefined) {
    result = result>=max?max:result;
  }

  //return
  return result;
};

const _dec = (dec, min, num) => {
  let result;

  //if decrementor exisit
  if(dec!==undefined) {

    //decrement with decrementor
    result = dec?num-dec:num-1;

    //round down to previous modulus of increment
    const mod = result%dec;
    if(mod>0) {
      const nudge = dec-mod;
      result += nudge;
    }
  }
  //else - decrement with one
  else {
    result=num-1;
  }

  //limit
  if(min!==undefined) {
    result = result<=min?min:result;
  }

  //return
  return result;
};

Template.materializeTimePickerUnit.helpers({
  //display
  _value() {
    const instance = Template.instance();
    return _str(instance, instance.data.value.get());
  }
});

Template.materializeTimePickerUnit.events({
  'click .materialize-time-picker-unit-increase'(event, instance) {
    const value =
      _inc(instance.data.dlt, instance.data.max, instance.data.value.get());
    instance.data.value.set(value);
  },
  'click .materialize-time-picker-unit-decrease'(event, instance) {
     const value =
       _dec(instance.data.dlt, instance.data.min, instance.data.value.get());
     instance.data.value.set(value);
  }
});
