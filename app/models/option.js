import DS from 'ember-data';

export default DS.Model.extend({
  	text: DS.attr(),
	value: DS.attr(),
	children: DS.attr(),
	select: DS.belongsTo('field-choose-select')
});
