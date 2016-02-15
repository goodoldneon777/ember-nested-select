import Ember from 'ember';

export function getFieldChooseObject([input]/*, hash*/) {
	console.log(input);
	console.log(1);
	this.store.query('field-choose-object', {name_id: input}).then((result) => {
		// this.set('fieldChooseObject',result);
		// return result.text;
    });

  	return input;
}

export default Ember.Helper.helper(getFieldChooseObject);
