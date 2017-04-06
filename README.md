Meteor Autoform Materialize templates
=========================
Adds [materialize](http://materializecss.com/) templates for autoform.

> **Important** I have recently taken over this project from @djhi. Thank you to @djhi and other contributors for getting this package up to this point. I will try my best to make it even better.

## Setup

1. `meteor add mozfet:autoform-materialize`
2. In a client file (ex: `/client/config/autoform.js`)
  ```
  AutoForm.setDefaultTemplate('materialize');
  ```

You must add materialize CSS and JavaScript yourself. Some packages can help:

- [materialize:materialize](https://atmospherejs.com/materialize/materialize) `meteor add materialize:materialize`
- [poetic:materialize-scss](https://atmospherejs.com/poetic/materialize-scss) `meteor add poetic:materialize-scss`

## Usage and demo

You can checkout [the playground](https://github.com/mozfet/meteor-autoform-materialize-playground)

## Additional type

### PickADate
Materialize uses [pickadate](https://github.com/amsul/pickadate.js) for date inputs.

You can apply it directly in your template:

```
{{> afFieldInput name='dateFieldName' type="pickadate"}}
```

You can also specify it at the schema level:
```
MySchema = new SimpleSchema({
  dateFieldName: {
    type: Date
    autoform: {
      type:"pickadate"
    }
  }
});
```
#### Choosing a Timezone

By default, the field's value will be a `Date` object representing the selected date and time in the browser's timezone (i.e., based on the user's computer time settings). In most cases, you probably want the `Date` object relative to some other timezone that you have previously stored. For example, if the form is setting the start date of an event, you want the date to be relative to the event venue's timezone. You can specify a different IANA timezone ID by adding a `timezoneId` attribute.

```js
{
  date: {
    type: Date,
    autoform: {
      type: "pickadate",
      timezoneId: "America/New_York"
    }
  }
}
```

Or:

```js
{{> afFieldInput name="typeTest" type="pickadate" timezoneId="America/New_York"}}
```

#### Automatic Type Conversions

This input type is intended to be used with `type: Date` schema keys, but it also works with other schema types. Here's a list:

* `Date`: Value is stored as a `Date` object representing the selected date and time in the timezone you specified with the `timezoneId` attribute. By default, the timezone is that of the browser (i.e., the user's computer time settings).
* `String`: Value is stored as a string representation of the selected date in ISO format, e.g., "2014-11-25T00:00:00".
* `Number`: Value is stored as the result of calling `getTime()` on the `Date` object (representing the selected date and time in the timezone you specified).
* `Array`: If the schema expects an array of `Date` or `String` or `Number`, the value is converted to a one-item array and stored.

To provide pickadate options, set a `pickadateOptions` attribute equal to a helper that returns the options object.

### Switch

You an also use [switches](http://materializecss.com/forms.html#switches)

At the template level:
```
{{> afFieldInput name='dateFieldName' type="switch"}}
```

At the schema level:
```
MySchema = new SimpleSchema({
  booleanFieldName: {
    type: Boolean
    autoform: {
      type:"switch"
    }
  }
});
```

You may specify the `trueLabel` or `falseLabel` options to customize the switch.

At the template level:
```
{{> afFieldInput name='dateFieldName' type="switch" trueLabel="Online" falseLabel="Offline"}}
```

At the schema level:
```
MySchema = new SimpleSchema({
  booleanFieldName: {
    type: Boolean
    autoform: {
      type:"switch"
      trueLabel:"Online"
      falseLabel:"Offline"
    }
  }
});
```
If you need other values than boolean, you may specify the `trueValue` or `falseValue` options to customize the switch.

At the template level:
```
{{> afFieldInput name='dateFieldName' type="switch" trueValue="online" falseValue="offline"}}
```

At the schema level:
```
MySchema = new SimpleSchema({
  booleanFieldName: {
    type: Boolean
    autoform: {
      type:"switch"
      trueValue:"online"
      falseValue:"offline"
    }
  }
});
```

### Time Picker
Time picker depends on foursever/meteor-scss for generating css. To use timepicker in your project, add the following somewhere in your sass import chain:
```
@import "{mozfet:meteor-autoform-materialize}/styles.scss";
```

### Input with prepended icon
You can add icon to any field like this:
```
{{> afQuickField name='subject' icon='person'}}
```
For blank space in place of icon, just use "none":
```
{{> afQuickField name='subject' icon='none'}}
```

It also works for textarea:
```
{{> afQuickField name='message' type='textarea' icon='person'}}
```

# Building (on a Mac)
This package uses https://github.com/fourseven/meteor-scss, a preprocessor taking scss files as input and producing css files.

Since fourseven:scss 3.9.0+ there are no pre-build binaries anymore. In order to build and publish this package you are required to set up the required toolchain yourselves as per https://github.com/nodejs/node-gyp.

Install xcode command line tools, then:
```
$ npm install -g node-gyp
$ cd myProjectPath
$ node-gyp configure
$ node-gyp build
```

# Publishing
Update version number in package.js.

Add, commit and push to git repo:
```
$ git add .
$ git commit -m "msg"
$ git push
```

Publish on atmosphere the first time, as per https://atmospherejs.com/i/publishing:
```
$ meteor publish --create
```

Republish on atmosphere, as per https://atmospherejs.com/i/publishing:
```
$ meteor publish
```

# Troubleshooting

## Extra carets on selects

This happen when using materialize version `0.97.0`. A fix has been released with version `0.97.1` but there are other issues.

You should use `poetic:materialize-scss` until those problems are corrected.

## Contributors
- Gildas Garcia (@djhi)
- Razvan Teslaru (@rteslaru)
- Chun Yang (@Chun-Yang)

## License
autoform-materialize is licensed under the [MIT Licence](LICENSE), courtesy of [marmelab](http://marmelab.com).
