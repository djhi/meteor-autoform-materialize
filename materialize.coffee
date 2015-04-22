###
* Template helpers for "materialize" template
###

removeClass = (atts, klass) ->
  if typeof atts["class"] == "string"
    atts["class"].replace klass , ''
  atts

toggleInvalidClass = (atts) ->
  formId = AutoForm.getFormId()
  ss = AutoForm.getFormSchema()
  context = ss.namedContext formId
  isInvalid = context.keyIsInvalid atts.name

  if isInvalid
    atts = AutoForm.Utility.addClass atts, "invalid"
  else
    atts = removeClass atts, "invalid"
  atts


Template['quickForm_materialize'].helpers
  submitButtonAtts: ->
    qfAtts = @atts
    atts = {}
    if typeof qfAtts.buttonClasses == 'string'
      atts['class'] = qfAtts.buttonClasses
    else
      atts['class'] = 'btn waves-effect waves-light'
    atts

Template['afFormGroup_materialize'].helpers
  labelFirst: ->
    skipLabelTypes = [
      'select'
      'boolean-select'
      'select-multiple'
    ]
    type = AutoForm.getInputType(@)
    result = _.contains(skipLabelTypes, type)
    result

  addInputField: ->
    skipLabelTypes = [
      'select'
    ]
    type = AutoForm.getInputType(@)
    result = !_.contains(skipLabelTypes, type)
    result

  skipLabel: ->
    skipLabelTypes = [
      'checkbox'
      'checkbox-group'
      'boolean-checkbox'
      'select-radio'
      'select-radio-group'
      'select-radio-group-inline'
      'boolean-radio'
      'boolean-radio-group'
      'toggle'
    ]
    type = AutoForm.getInputType(@)
    result = @skipLabel or _.contains(skipLabelTypes, type)
    result

Template.afLabel_materialize.helpers
  atts: ->
    # Use only atts beginning with label-
    labelAtts = @afFieldLabelAtts

    labelAtts

_.each [
  "afCheckbox_materialize"
  "afSelect_materialize"
  "afBooleanRadioGroup_materialize"
  "afBooleanSelect_materialize"
  "afSelectMultiple_materialize"
  "afSwitch"
  "afTextarea_materialize"
  "afInputText_materialize"
  "afInputPassword_materialize"
  "afInputButton_materialize"
  "afInputSubmit_materialize"
  "afInputReset_materialize"
  "afInputDateTime_materialize"
  "afInputDateTimeLocal_materialize"
  "afInputDate_materialize"
  "afInputMonth_materialize"
  "afInputTime_materialize"
  "afInputWeek_materialize"
  "afInputNumber_materialize"
  "afInputRange_materialize"
  "afInputEmail_materialize"
  "afInputUrl_materialize"
  "afInputSearch_materialize"
  "afInputTel_materialize"
  "afInputColor_materialize"
], (tmplName) ->
  Template[tmplName].helpers atts: ->
    atts = _.clone(@atts)
    atts = toggleInvalidClass atts
    atts
  return

_.each [
  'afInputButton_materialize'
  'afInputSubmit_materialize'
  'afInputReset_materialize'
], (tmplName) ->
  Template[tmplName].helpers atts: ->
    atts = _.clone(@atts)
    # Add bootstrap class
    atts = AutoForm.Utility.addClass(atts, 'btn waves-effect waves-light')
    atts
  return

Template['afTextarea_materialize'].helpers
  atts: ->
    atts = _.clone(@atts)
    atts = AutoForm.Utility.addClass(atts, "materialize-textarea")
    atts = toggleInvalidClass atts
    atts

_.each [
  'afRadio_materialize'
  'afCheckboxGroup_materialize'
  'afRadioGroup_materialize'
  'afCheckboxGroupInline_materialize'
  'afRadioGroupInline_materialize'
], (tmplName) ->
  Template[tmplName].helpers
    atts: ->
      atts = _.clone(@atts)
      atts = toggleInvalidClass atts
      if @selected
        atts.checked = ''
      # remove data-schema-key attribute because we put it
      # on the entire group
      delete atts['data-schema-key']
      return atts
    dsk: ->
      { 'data-schema-key': @atts['data-schema-key'] }
    itemAtts: ->
      atts = _.clone(@atts)
      atts.id = atts.id + "_" + @_id
      return atts
  return

selectHelpers = optionAtts: ->
  item = this
  atts = value: item.value
  if item.selected
    atts.selected = ''
  atts

Template['afSelect_materialize'].helpers selectHelpers
Template['afSelectMultiple_materialize'].helpers selectHelpers
Template['afBooleanSelect_materialize'].helpers selectHelpers

Template['afBooleanRadioGroup_materialize'].helpers
  falseAtts: ->
    atts = _.omit(@atts, 'trueLabel', 'falseLabel', 'data-schema-key')
    if @value == false
      atts.checked = ''
    atts
  trueAtts: ->
    atts = _.omit(@atts, 'trueLabel', 'falseLabel', 'data-schema-key')
    if @value == true
      atts.checked = ''
    atts
  dsk: ->
    { 'data-schema-key': @atts['data-schema-key'] }

Template['afSelectMultiple_materialize'].helpers
  atts: ->
    atts = _.clone(@atts)
    atts = AutoForm.Utility.addClass atts, 'browser-default'
    atts = toggleInvalidClass atts
    atts

Template.afSelect_materialize.rendered = ->
  @$('select').material_select()

  # ensure the dropdown is reset when options change
  Tracker.autorun =>
    options = @data?.items
    @$('select').material_select()

  return

Template.afBooleanSelect_materialize.rendered = ->
  @$('select').material_select()

  # ensure the dropdown is reset when options change
  Tracker.autorun =>
    options = @data?.items
    @$('select').material_select()

  return

Template.afFormGroup_materialize.rendered = ->
  formId = AutoForm.getFormId()

  @autorun =>
    value = AutoForm.getFieldValue @data.name, formId

    if !!value
      @$('.input-field > label:not(:focus)').addClass 'active'
    else
      @$('.input-field > label:not(:focus)').removeClass 'active'

  return

DEFAULT_PICKADATE_FORMAT = 'yyyy/mm/dd'
DEFAULT_PICKADATE_FORMAT_SUBMIT = 'yyyy/mm/dd'

AutoForm.addInputType 'pickadate',
  template: 'afPickadate'
  valueIn: (val, atts) ->
    result = val
    # datetimepicker expects the date to represent local time,
    # so we need to adjust it if there's a timezoneId specified
    timezoneId = atts.timezoneId
    if typeof timezoneId == 'string'
      if typeof moment.tz != 'function'
        throw new Error('If you specify a timezoneId, make sure that you\'ve added a moment-timezone package to your app')
      if val instanceof Date
        result = moment(AutoForm.Utility.dateToNormalizedLocalDateAndTimeString(val, timezoneId), 'YYYY-MM-DD[T]HH:mm:ss.SSS').toDate()
    result

  valueOut: ->
    item = this.pickadate('picker').get('select')
    if item then result = item.obj
    result
  valueConverters:
    'string': (val) ->
      if val instanceof Date then val.toString() else val
    'stringArray': (val) ->
      if val instanceof Date
        return [ val.toString() ]
      val
    'number': (val) ->
      if val instanceof Date then val.getTime() else val
    'numberArray': (val) ->
      if val instanceof Date
        return [ val.getTime() ]
      val
    'dateArray': (val) ->
      if val instanceof Date
        return [ val ]
      val
  contextAdjust: (context) ->
    if context.atts.timezoneId
      context.atts["data-timezone-id"] = context.atts.timezoneId

    delete context.atts.timezoneId
    context

Template['afPickadate'].rendered = ->
  userOptions = @data.atts.pickadateOptions or {}
  opts = _.defaults userOptions,
    format: DEFAULT_PICKADATE_FORMAT_SUBMIT,
    hiddenName: true
    closeOnSelect: true

  input = @$('input').pickadate opts
  picker = input.pickadate 'picker'

  @$('input').on 'change', ->
    $(this).pickadate('picker').close()

  if @data.value
    @$('input').parent().find('label').addClass 'active'

  # set and reactively update values
  @autorun ->
    data = Template.currentData()

    if data.value instanceof Date
      picker.set 'select', data.value
    else
      picker.set 'clear'

    # set start date if there's a min in the schema
    if data.min instanceof Date
      picker.set 'min', data.min

    # set end date if there's a max in the schema
    if data.max instanceof Date
      picker.set 'max', data.max

  return

Template.afPickadate.helpers
  atts: ->
    atts = _.clone @atts
    delete atts.dateTimePickerOptions
    delete atts.pickadateOptions
    atts

AutoForm.addInputType 'switch',
  template: 'afSwitch'
  valueIn: (value) ->
    return value
  valueOut: ->
    input = this[0]
    checked = input.checked
    if checked
      result = (input.attributes.trueValue?.value) || true
    else
      result = (input.attributes.falseValue?.value) || false

    result

Template.afSwitch.rendered = ->
  input = @$('input')
  @autorun =>
    data = Template.currentData()
    trueValue = (@data.atts.trueValue || true)
    input.prop 'checked', (data.value == trueValue)

Template.afSwitch.helpers
  atts: ->
    _.extend @atts, id: @atts.name
