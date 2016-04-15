import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service('store'),
    classNames: ['c-fieldChooseSelect'],
	actions: {
		changedSelect: function(selected) {   //When a select is changed.
			this.set('optionName', selected);    //Set to the selected option.
			this.sendAction('filterToggle', true);	//Enable filter
            this.setOption();
		}
	},
    setSelect: function() {
        var store = this.get('store');
        var component = this;
console.log(this.get('selects'));
        // var select = this.get('selects').filter(function(item) {    //Filter for the target select.
        //     if (item.get('name') === component.get('name')) { return true; }
        // })[0];

        // var post = store.peekRecord('fieldChooseSelect', 2);
        // console.log(post);

        // var foo = store.find('fieldChooseSelect', {name: 'category'});
        // console.log(foo);

        store.queryRecord('fieldChooseSelect', { filter: { name: 'category', id: 2 } }).then(function(result) {
          console.log(result);
        });

        var select = this.get('selects').filter(function(item) {    //Filter for the target select.
            // if (item.get('name') === 'category') { return true; }
            return true;
        });
        console.log(select);    

        //DO NOT DELETE
        // var select = this.get('selects').filter(function(item) {    //Filter for the target select.
        //     if (item.get('name') === 'category') { return true; }
        // })[0];

//         this.set('select', select); //Set to the target select.
    },
    setOption: function() {
        var component = this;
console.log(component.get('select'));
        // if (!this.get('optionName')) {  //If the user didn't select an option...
        //     this.set('optionName', component.get('select').get('options')[0].value);    //Default to the first option.
        // }
        // console.log(this.get('optionName'));

        // var option = this.get('select').get('options').filter(function(item) {  //Filter for the target option.
        //     if (item.value === component.get('optionName')) { return true; }
        // })[0];

        // this.set('option', option); //Set to the target option.


        // if (this.get('option').filterEnable === false) {    //If the option shouldn't have a filter...
        //     this.sendAction('filterToggle', false); //Hide the filter.
        // }
    },
	initialize: function(){
        var store = this.get('store');
        var selects = store.findAll('fieldChooseSelect');
        var filters = store.findAll('fieldFilter');

        this.set('selects', selects);

        this.setSelect();
        this.setOption();
    }.on("init")
});

