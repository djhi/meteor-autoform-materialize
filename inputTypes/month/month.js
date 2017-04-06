/*jshint esversion: 6 */

import { Template } from 'meteor/templating';
import './month.html';

Template.afInputMonth_materialize.helpers({
  atts: Utility.attsToggleInvalidClass
});
