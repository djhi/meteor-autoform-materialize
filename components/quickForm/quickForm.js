/*jshint esversion: 6 */

import { Template } from 'meteor/templating';
import './quickForm.html';

Template.quickForm_materialize.helpers({
  submitButtonAtts: function() {
    var atts, qfAtts;
    qfAtts = this.atts;
    atts = {};
    if (typeof qfAtts.buttonClasses === 'string') {
      atts['class'] = qfAtts.buttonClasses;
    } else {
      atts['class'] = 'btn waves-effect waves-light';
    }
    return atts;
  }
});
