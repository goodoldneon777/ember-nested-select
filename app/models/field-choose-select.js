import DS from 'ember-data';

export default DS.Model.extend({
	nameUnique: DS.attr(),
	options: DS.attr()
});
