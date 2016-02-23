import Ember from 'ember';


export default Ember.Route.extend({
  	model: function() {
  		// var foo = this.store.filter('fieldChooseFilter', {value: 'all'}).then((result) => {
    //       return result;
    //     });
  		// console.log('.', foo);
	    return Ember.RSVP.hash({
	        fieldChooseSelects: this.store.findAll('fieldChooseSelect')
          // fieldChooseSelects: this.store.findAll('fieldChooseSelect')
          // fieldChooseSelects: this.store.filter('fieldChooseSelect', function() {
          //   // if (fieldChooseSelect.get('foo') !== 'bafrf') { return true; }
          //   return true;
          // })
          // filteredPosts: Ember.computed('fieldChooseSelects.@each.isPublished', function() {
          //   return this.get('fieldChooseSelects').filterBy('isPublished');
          // })
	    });
  	}
});