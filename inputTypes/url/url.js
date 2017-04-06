/*jshint esversion: 6 */

import { Template } from 'meteor/templating';
import './url.html';

Template.afInputUrl_materialize.helpers({
  atts: Utility.attsToggleInvalidClass
});
