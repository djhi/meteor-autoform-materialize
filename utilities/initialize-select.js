Utility.initializeSelect = function() {
  this.$('select').material_select();
  Tracker.autorun((function(_this) {
    return function() {
      var options, ref;
      options = (ref = _this.data) != null ? ref.items : void 0;
      return _this.$('select').material_select();
    };
  })(this));
};
