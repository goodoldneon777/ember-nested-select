import Ember from 'ember';


export default Ember.Route.extend({
    // model: function(params) {
    //     return this.store.findAll('fieldChooseSelect');
    // }


	// model: function() {
 //        var store = this.store;
 //        $.get("http://localhost/ember/data-chart/php/get-selects.php", function(data) {
 //            data = JSON.parse(data);

 //            store.push({
 //                data: data.data
 //            });
 //        });
 //    }


    // model: function() {
    //     var store = this.store;
    //     console.log(1);
    //     $.post("http://localhost:8080/items", function(data) {
    //         console.log(data);
    //         data = JSON.parse(data);

    //         store.push({
    //             data: data.data
    //         });
    //     });
    // }




    // model: function() {
    //     var store = this.store;

    //     $.get("http://localhost/api/field-choose-selects", function(result) {
    //         store.push({
    //             data: result.data
    //         });
    //         // this.set('blah', data);
    //     });


    //     // $.get("http://localhost/api/field-choose-selects", function(data) {
    //         store.push({
    //             data: [
    //                 {
    //                     type: 'fieldChooseFilter',
    //                     id: 1,
    //                         attributes: {
    //                         options: [{
    //                             text: 'No Filter',
    //                             value: 'none'
    //                         }, {
    //                             text: '=',
    //                             value: '='
    //                         }, {
    //                             text: '>',
    //                             value: '>'
    //                         }]
    //                     }
    //                 }
    //             ]
    //         });
    //     // });
    // }

});


