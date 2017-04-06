/*jshint esversion: 6 */

import { Template } from 'meteor/templating';
import './time.html';

Template.afInputTime_materialize.helpers({
  atts: Utility.attsToggleInvalidClass
});
