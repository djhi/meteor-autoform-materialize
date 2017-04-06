/*jshint esversion: 6 */

import { Template } from 'meteor/templating';
import './datetime-local.html';

Template.afInputDateTimeLocal_materialize.helpers({
  atts: Utility.attsToggleInvalidClass
});
