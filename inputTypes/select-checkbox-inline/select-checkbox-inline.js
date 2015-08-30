Template.afCheckboxGroupInline_materialize.helpers({
    dsk:      Utility.helpers.dsk,
    itemAtts: function() {
        var atts = Utility.helpers.itemAttsWithUniqId(this);
        return Utility.helpers.attsCheckSelected(this);
    }
});

Template.afCheckboxGroupInline_materialize.onRendered(function () {
    var template = this;
    if (this.data.value) {
        this.data.value.forEach(function (value) {
            var selector = 'input[value="' + value + '"]';
            template.$(selector).prop('checked', true);
        });
    }
});
