import Ember from 'ember';

export default Ember.Component.extend({
	store: Ember.inject.service('store'),
    classNames: ['c-mainAxes'],
    initialize: function(){
    	var store = this.get('store');
    	var selects = store.findAll('fieldChooseSelect');
        var filters = store.findAll('fieldFilter');

        this.set('selects', selects);
        // this.set('filters', filters);
    }.on("init")
});

