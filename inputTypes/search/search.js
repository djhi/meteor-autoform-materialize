/*jshint esversion: 6 */

import { Template } from 'meteor/templating';
import './search.html';

Template.afInputSearch_materialize.helpers({
  atts: Utility.attsToggleInvalidClass
});
