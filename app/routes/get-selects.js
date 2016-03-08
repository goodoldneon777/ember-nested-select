import Ember from 'ember';

export default Ember.Route.extend({
// 	redirect: function() {
//      	window.location.replace("http://localhost/ember/data-chart/php/get-selects.php");
//   	}




// function retrieveData(callback){
// jQuery.ajax({
//             url: 'http://localhost/ember/data-chart/php/get-selects.php',
//             timeout: ajaxTimeOut,
//             success: function(data){
// /* here you store this data somewhere
// it could be helpful to have a callback that you call so that this class/controller
// is not coupled with specific logic*/
//                 if(callback!=null){
//                     callback(data);
//                 }
//             }
//         });
// }


    model: function() {
        // var data = $.getJSON("http://localhost/ember/data-chart/php/get-selects.php");
        // var data = $.getJSON("https://github.com/goodoldneon777/go-mysql-test/blob/master/foo.json");

        var store = this.store;
        $.post("http://localhost/ember/data-chart/php/get-selects.php", function(data) {
            data = JSON.parse(data);

            store.push({
                data: data.data
            });
          });

        // console.log(data);   
    }


 //  	model() {
 //    	this.store.push({
            

	// 	});
	// }


});
