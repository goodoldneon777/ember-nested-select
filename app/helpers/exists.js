import Ember from 'ember';

// export function exists(params/*, hash*/) {
export function exists(variable) {
  	if (typeof variable !== 'undefined') {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
}

export default Ember.Helper.helper(exists);
