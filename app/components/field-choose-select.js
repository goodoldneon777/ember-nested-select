import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		changedSelect: function(selected) {
			this.set('setOption', selected);
			// this.store.query('fieldChoose', {id: selected}).then((result) => {
	  //         this.set('model',result);
	  //       });
		}
	}
});

