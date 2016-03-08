import Ember from 'ember';


export default Ember.Route.extend({
  	model: function() {
  		

	    return Ember.RSVP.hash({
	        // fieldChooseSelects: this.store.findAll('fieldChooseSelect'),
	        // fieldChooseSelects: $.getJSON('../json/getSelects.json')
          	// fieldChooseFilters: this.store.findAll('fieldChooseFilter')
	    });
  	}
  	
  	// model() {
   //  	this.store.push({
   //  		data: [{
   //    			type: 'fieldChooseSelect',
			// 	id: 1,
			// 	attributes: {
			// 		name: 'root',
			// 		options: [{
			// 		  	text: 'Chemistry',
			// 		  	value: 'chem',
			// 		  	children: ['chem_type']
			// 		}, {
			// 			text: 'Temperature',
			// 			value: 'temp',
			// 			children: ['temp_type']
			// 		}, {
			// 		  	text: 'Equipment',
			// 		  	value: 'equipment',
			// 		  	children: ['equipment']
			// 		}]
			// 	}
   //    		}]
   //  	});
  	// }



});


