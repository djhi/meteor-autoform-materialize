Template.afCheckboxGroup_materialize.helpers({
  dsk:      Utility.helpers.dsk,
  itemAtts: Utility.helpers.itemAttsWithUniqId,
});

Template.afCheckboxGroup_materialize.onRendered(function () {
    var template = this;
    if (this.data.value) {
        this.data.value.forEach(function (value) {
            var selector = 'input[value="' + value + '"]';
            template.$(selector).prop('checked', true);
        });
    }
});
