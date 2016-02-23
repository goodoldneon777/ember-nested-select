import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['c-fieldChooseSelect'],
	actions: {
		changedSelect: function(selected) {   //When a select is changed.
			this.set('optionName', selected);    //Set to the selected option.
			this.sendAction('filterToggle', true);	//Enable filter
            this.setOption();
		}
	},
    setSelect: function() {
        var component = this;

        var select = this.get('selects').filter(function(item) {    //Filter for the target select.
            if (item.get('nameUnique') === component.get('nameUnique')) { return true; }
        })[0];

        this.set('select', select); //Set to the target select.
    },
    setOption: function() {
        var component = this;

        if (!this.get('optionName')) {  //If the user didn't select an option...
            this.set('optionName', component.get('select').get('options')[0].value);    //Default to the first option.
        }

        var option = this.get('select').get('options').filter(function(item) {  //Filter for the target option.
            if (item.value === component.get('optionName')) { return true; }
        })[0];

        this.set('option', option); //Set to the target option.


        if (this.get('option').filterEnable === false) {    //If the option shouldn't have a filter...
            this.sendAction('filterToggle', false); //Hide the filter.
        }
    },
	initialize: function(){
        this.setSelect();
        this.setOption();
    }.on("init")
});

