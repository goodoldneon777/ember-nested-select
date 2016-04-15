import DS from 'ember-data';

export default DS.Model.extend({
  	text: DS.attr(),
	value: DS.attr(),
	filterEnable: DS.attr(),
	children: DS.attr(),
	fieldSelects: DS.hasMany('fieldSelect')
});
