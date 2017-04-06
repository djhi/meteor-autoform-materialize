/*jshint esversion: 6 */

import { Template } from 'meteor/templating';
import './week.html';

Template.afInputWeek_materialize.helpers({
  atts: Utility.attsToggleInvalidClass
});
