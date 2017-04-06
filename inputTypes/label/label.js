/*jshint esversion: 6 */

import { Template } from 'meteor/templating';
import './label.html';

Template.afLabel_materialize.helpers({
  atts: function() {
    var labelAtts;
    labelAtts = this.afFieldLabelAtts;
    return labelAtts;
  }
});
