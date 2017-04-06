Package.describe({
  name: 'mozfet:autoform-materialize',
  summary: 'Materialize theme for Autoform',
  version: '0.1.19',
  git: 'https://github.com/mozfet/meteor-autoform-materialize.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.3.2');
  api.use(['templating@1.3.2', 'underscore@1.0.10', 'reactive-var@1.0.11', 'blaze@2.3.2'], 'client');
  api.use('ecmascript@0.6.3');
  api.use('momentjs:moment@2.18.1');
  api.use('aldeed:autoform@6.0.0');
  api.use('fourseven:scss@3.13.0', 'client');
  // api.use('poetic:materialize-scss@1.97.6_1', 'client')
  api.addFiles([
    // utility
    'utilities/utility.js',
    'utilities/initialize-select.js',
    // utility template helpers
    'utilities/dsk.js',
    'utilities/selected-atts-adjust.js',
    'utilities/atts-toggle-invalid-class.js',
    'utilities/atts-check-selected.js',
    'utilities/option-atts.js',
    // input types
    'inputTypes/boolean-checkbox/boolean-checkbox.html',
    'inputTypes/boolean-checkbox/boolean-checkbox.js',
    'inputTypes/boolean-radios/boolean-radios.html',
    'inputTypes/boolean-radios/boolean-radios.js',
    'inputTypes/boolean-select/boolean-select.html',
    'inputTypes/boolean-select/boolean-select.js',
    'inputTypes/button/button.html',
    'inputTypes/color/color.html',
    'inputTypes/color/color.js',
    'inputTypes/contenteditable/contenteditable.html',
    'inputTypes/date/date.html',
    'inputTypes/date/date.js',
    'inputTypes/datetime/datetime.html',
    'inputTypes/datetime/datetime.js',
    'inputTypes/datetime-local/datetime-local.html',
    'inputTypes/datetime-local/datetime-local.js',
    'inputTypes/email/email.html',
    'inputTypes/email/email.js',
    'inputTypes/file/file.html',
    'inputTypes/hidden/hidden.html',
    'inputTypes/icon/icon.html',
    'inputTypes/image/image.html',
    'inputTypes/month/month.html',
    'inputTypes/month/month.js',
    'inputTypes/number/number.html',
    'inputTypes/number/number.js',
    'inputTypes/password/password.html',
    'inputTypes/password/password.js',
    'inputTypes/radio/radio.html',
    'inputTypes/radio/radio.js',
    'inputTypes/range/range.html',
    'inputTypes/reset/reset.html',
    'inputTypes/search/search.html',
    'inputTypes/select/select.html',
    'inputTypes/select/select.js',
    'inputTypes/select-checkbox/select-checkbox.html',
    'inputTypes/select-checkbox/select-checkbox.js',
    'inputTypes/select-checkbox-inline/select-checkbox-inline.html',
    'inputTypes/select-checkbox-inline/select-checkbox-inline.js',
    'inputTypes/select-multiple/select-multiple.html',
    'inputTypes/select-multiple/select-multiple.js',
    'inputTypes/select-radio/select-radio.html',
    'inputTypes/select-radio/select-radio.js',
    'inputTypes/select-radio-inline/select-radio-inline.html',
    'inputTypes/select-radio-inline/select-radio-inline.js',
    'inputTypes/submit/submit.html',
    'inputTypes/tel/tel.html',
    'inputTypes/tel/tel.js',
    'inputTypes/text/text.html',
    'inputTypes/text/text.js',
    'inputTypes/textarea/textarea.html',
    'inputTypes/textarea/textarea.js',
    'inputTypes/time/time.html',
    'inputTypes/time/time.js',
    'inputTypes/url/url.html',
    'inputTypes/url/url.js',
    'inputTypes/week/week.html',
    'inputTypes/week/week.js',
    'inputTypes/switch/switch.html',
    'inputTypes/switch/switch.js',

    // 'inputTypes/pickatime/pickatime.html',
    // 'inputTypes/pickatime/materializeTimePicker/style.scss',  //https://guide.meteor.com/writing-atmosphere-packages.html
    // 'inputTypes/pickatime/materializeTimePicker/meridiem.html',
    // 'inputTypes/pickatime/materializeTimePicker/meridiem.js',
    // 'inputTypes/pickatime/materializeTimePicker/modal.html',
    // 'inputTypes/pickatime/materializeTimePicker/modal.js',
    // 'inputTypes/pickatime/materializeTimePicker/picker.html',
    // 'inputTypes/pickatime/materializeTimePicker/picker.js',
    // 'inputTypes/pickatime/materializeTimePicker/unit.html',
    // 'inputTypes/pickatime/materializeTimePicker/unit.js',
    // 'inputTypes/pickatime/pickatime.js',

    'inputTypes/pickadate/pickadate.html',
    'inputTypes/pickadate/pickadate.js',
    'inputTypes/label/label.html',
    'inputTypes/label/label.js',
    // components that render a form
    'components/autoForm/autoForm.html',
    'components/quickForm/quickForm.html',
    'components/quickForm/quickForm.js',
    // components that render controls within a form
    'components/afArrayField/afArrayField.html',
    'components/afFormGroup/afFormGroup.html',
    'components/afFormGroup/afFormGroup.js',
    'components/afObjectField/afObjectField.html',
    'components/afQuickField/afQuickField.html'
  ], "client");
});
