Package.describe({
  name: "gildaspk:autoform-materialize",
  summary: "Materialize theme for Autoform",
  version: "0.0.6",
  git: "https://github.com/djhi/meteor-autoform-materialize.git"
});

Package.onUse(function(api) {
  api.versionsFrom("1.0");
  api.use(["templating", "underscore", "coffeescript"], "client");
  api.use("aldeed:autoform@4.2.0");
  api.addFiles([
    "materialize.html",
    "materialize.coffee",
  ], "client");
});
