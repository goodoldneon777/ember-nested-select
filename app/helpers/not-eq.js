import Ember from 'ember';

const notEq = (params) => params[0] !== params[1];

export default Ember.Helper.helper(notEq);
