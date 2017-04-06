/*jshint esversion: 6 */

import { Template } from 'meteor/templating';
import './select.html';

Template.afSelect_materialize.helpers({
  atts: Utility.attsToggleInvalidClass,
  optionAtts: Utility.optionAtts
});

Template.afSelect_materialize.onRendered(Utility.initializeSelect);
