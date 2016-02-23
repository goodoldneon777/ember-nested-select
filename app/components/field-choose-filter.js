import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['c-fieldChooseFilter'],
	operators: ['No Filter', '=', '>', '>=', '<', '<=', 'Range', '!='],
	setFilterType: function(){
		console.log(this.get(''))
		// this.set('filterType', true);
	},
    initialize: function(){
    	// this.set('selected', 'No ')
        this.setFilterType;
    }.on("init")	
});
