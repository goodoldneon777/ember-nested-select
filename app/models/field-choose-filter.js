import DS from 'ember-data';

export default DS.Model.extend({
	type: DS.attr(),
  	operators: DS.attr()
});
