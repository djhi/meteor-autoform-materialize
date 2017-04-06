/*jshint esversion: 6 */

import { Template } from 'meteor/templating';
import './datetime.html';

Template.afInputDateTime_materialize.helpers({
  atts: Utility.attsToggleInvalidClass
});
