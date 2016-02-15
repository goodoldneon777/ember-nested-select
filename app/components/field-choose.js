import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		changedSelect: function(selected) {
			console.log(selected);
			// this.store.query('fieldChoose', {id: selected}).then((result) => {
	  //         this.set('model',result);
	  //       });
		}
	}
});
