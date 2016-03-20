import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        var store = this.store;
        $.post("http://localhost/ember/data-chart/php/get-selects.php", function(data) {
            data = JSON.parse(data);

            store.push({
                data: data.data
            });
        });
    }


    // model: function() {
    //     var store = this.store;
    //     $.post("http://localhost:8080/items", function(data) {
    //         data = JSON.parse(data);

    //         store.push({
    //             data: data.data
    //         });
    //     });
    // }
});
