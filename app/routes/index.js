import Ember from 'ember';


export default Ember.Route.extend({
  	model: function() {
  		// var promiseArray = $.getJSON('https://github.com/goodoldneon777/go-mysql-test/blob/master/getSelects.json');

	    return Ember.RSVP.hash({
	        fieldChooseSelects: this.store.findAll('fieldChooseSelect'),
	        // fieldChooseSelects: $.getJSON('../json/getSelects.json')
          	fieldChooseFilters: this.store.findAll('fieldChooseFilter')
	    });
  	}
});


