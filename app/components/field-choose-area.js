import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['c-fieldChooseArea'],
    actions: {
        filterToggle: function(param){
            if (param === true) {
                this.set('filterFlag', true);
            } else if (param === false) {
                this.set('filterFlag', false);
            }
        }
    },
    initialize: function(){
        this.set('filterFlag', true);
    }.on("init")	
});
