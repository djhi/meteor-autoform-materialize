/*jshint esversion: 6 */

import { Template } from 'meteor/templating';
import './boolean-select.html';

Template.afBooleanSelect_materialize.helpers({
  atts: Utility.attsToggleInvalidClass
});

Template.afBooleanSelect_materialize.helpers({
  optionAtts: Utility.optionAtts
});

Template.afBooleanSelect_materialize.onRendered(Utility.initializeSelect);
