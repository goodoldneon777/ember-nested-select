import DS from 'ember-data';

export default DS.Model.extend({
	nameUnique: DS.attr(),
	filter: DS.attr({defaultValue: true}),
	options: DS.attr()
	// options: {
	// 	text: DS.attr(),
	// 	value: DS.attr(),
	// 	children: DS.attr()
	// }
});
