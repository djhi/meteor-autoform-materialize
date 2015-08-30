CfsAutoForm = CfsAutoForm || {};
// CfsAutoForm.Util = Util;
// CfsAutoForm.Hooks = Hooks;

CfsAutoForm.deleteUploadedFiles = function(template) {
  template.$('.cfsaf-hidden').each(function () {
    var uploadedFiles = $(this).data("cfsaf_uploaded-files") || [];
    _.each(uploadedFiles, function ( f ) {
      f.remove();
    });
  });
};


if (Meteor.isClient) {
    // Adds a custom "cfs-file" input type that AutoForm will recognize
  AutoForm.addInputType("cfs-file", {
    template:"cfsFileField",
    valueOut: function () {
      return "dummyId";
    },
    contextAdjust: function (context) {
      context.atts.placeholder = context.atts.placeholder || "Click to upload a file or drop it here";
      context.atts["class"] = (context.atts["class"] || "") + " cfsaf-field";
      return context;
    }
  });

  // Adds a custom "cfs-files" input type that AutoForm will recognize
  AutoForm.addInputType("cfs-files", {
    template:"cfsFilesField",
    valueOut: function () {
      return ["dummyId"];
    },
    contextAdjust: function (context) {
      context.atts.placeholder = context.atts.placeholder || "Click to upload files or drop them here";
      context.atts["class"] = (context.atts["class"] || "") + " cfsaf-field";
      return context;
    }
  });

  function textInputAtts() {
    var atts = _.clone(this.atts);
    delete atts.collection;
    // we want the schema key tied to the hidden file field only
    delete atts["data-schema-key"];
    atts["class"] = (atts["class"] || "") + " form-control";
    return atts;
  }

  function fileInputAtts() {
    return {'data-schema-key': this.atts["data-schema-key"]};
  }

  Template.cfsFileField_materialize.helpers({
    textInputAtts: textInputAtts,
    fileInputAtts: fileInputAtts
  });

  Template.cfsFilesField_materialize.helpers({
    textInputAtts: textInputAtts,
    fileInputAtts: fileInputAtts
  });

  var hookTracking = {};
  Template.cfsFileField_materialize.rendered =
  Template.cfsFilesField_materialize.rendered = function () {
    var formId;

    // backwards compatibility with pre 5.0 autoform
    if (typeof AutoForm.find === 'function') {
      formId = AutoForm.find().formId;
    } else {
      formId = AutoForm.getFormId();
    }

    // By adding hooks dynamically on render, hopefully any user hooks will have
    // been added before so we won't disrupt expected behavior.
    if (!hookTracking[formId]) {
      hookTracking[formId] = true;
      addAFHook(formId);
    }
  };

  var singleHandler = function (event, template) {
    var fileList = [];
    FS.Utility.eachFile(event, function (f) {
      fileList.push(f.name);
    });
    template.$('.cfsaf-field').val(fileList.join(", "));
    var fileList = event.originalEvent.dataTransfer ? event.originalEvent.dataTransfer.files : event.currentTarget.files;
    // Store the FileList on the file input for later
    template.$('.cfsaf-hidden').data("cfsaf_files", fileList);
  };

  Template.cfsFileField_materialize.events({
    'click .cfsaf-field': function (event, template) {
      template.$('.cfsaf-hidden').click();
    },
    'change .cfsaf-hidden': singleHandler,
    'dropped .cfsaf-field': singleHandler
  });

  var multipleHandler = function (event, template) {
    // Get the FileList object from the event object
    var fileList = event.originalEvent.dataTransfer ? event.originalEvent.dataTransfer.files : event.currentTarget.files;

    // Store the FileList on the file input for later. We store an array of
    // separate FileList objects. Browsers don't let you add/remove items from
    // an existing FileList.
    var fileListList = template.$('.cfsaf-hidden').data("cfsaf_files_multi") || [];
    fileListList.push(fileList);
    template.$('.cfsaf-hidden').data("cfsaf_files_multi", fileListList);

    // Get full list of files to display in the visible, read-only field
    var fullNameList = [];
    _.each(fileListList, function (fileList) {
      _.each(fileList, function (f) {
        fullNameList.push(f.name);
      });
    });
    template.$('.cfsaf-field').val(fullNameList.join(", "));
  };

  Template.cfsFilesField_materialize.events({
    'click .cfsaf-field': function (event, template) {
      template.$('.cfsaf-hidden').click();
    },
    'change .cfsaf-hidden': multipleHandler,
    'dropped .cfsaf-field': multipleHandler
  });

  function addAFHook(formId) {
    AutoForm.addHooks(formId, {
      before: {
        // We add a before.insert hook to upload all the files in the form.
        // This hook doesn't allow the form to continue submitting until
        // all the files are successfully uploaded.
        insert: CfsAutoForm.Hooks.beforeInsert,
        update: CfsAutoForm.Hooks.beforeUpdate
      },
      after: {
        // We add an after.insert hook to delete uploaded files if the doc insert fails.
        insert: CfsAutoForm.Hooks.afterInsert,
        update: CfsAutoForm.Hooks.afterUpdate
      }
    });
  }
}
