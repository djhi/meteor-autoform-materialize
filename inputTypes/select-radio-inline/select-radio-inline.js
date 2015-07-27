Template.afRadioGroupInline_materialize.helpers({
  dsk:      Utility.helpers.dsk,
  itemAtts: Utility.helpers.itemAttsWithUniqId
});

Template.afRadioGroupInline_materialize.onRendered(function () {
    var template = this;
    if (this.data.value) {
      var selector = 'input[value="' + this.data.value + '"]';
      template.$(selector).prop('checked', true);
    }
});
