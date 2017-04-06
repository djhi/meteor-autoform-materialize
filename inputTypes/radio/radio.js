/*jshint esversion: 6 */

import { Template } from 'meteor/templating';
import './radio.html';

Template.afRadio_materialize.helpers({
  atts:     Utility.attsCheckSelected,
  dsk:      Utility.dsk,
});
