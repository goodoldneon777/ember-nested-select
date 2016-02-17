import Ember from 'ember';


export default Ember.Route.extend({
  // model() {
  // 	return this.store.findAll('fieldChooseSelect');
  // },
  	model: function() {
  		// var foo = this.store.filter('fieldChooseFilter', {value: 'all'}).then((result) => {
    //       return result;
    //     });
  		// console.log('.', foo);
	    return Ember.RSVP.hash({
	        fieldChooseSelects: this.store.findAll('fieldChooseSelect')
	    });
  	}
});