export default function() {
  this.get('/field-choose-objects', function(db,request) {
    let fieldChooseObjects = [{
      type: 'fieldChooseObjects',
      id: 1,
      attributes: {
        'name-unique': 'root',
        options: [{
          text: 'Select 1',
          children: ['select_1']
        }, {
          text: 'Select 2',
          children: ['select_2']
        }]
      }
    }, {
      type: 'fieldChooseObjects',
      id: 2,
      attributes: {
        'name-unique': 'select_1',
        options: [{
          text: 'Select 3',
          children: ['select_3']
        }, {
          text: 'None',
          children: null
        }]
      }
    }, {
      type: 'fieldChooseObjects',
      id: 3,
      attributes: {
        'name-unique': 'select_3',
        options: [{
          text: 'Select 4 & 5',
          children: ['select_4', 'select_5']
        }, {
          text: 'None',
          children: null
        }]
      }
    }, {
      type: 'fieldChooseObjects',
      id: 4,
      attributes: {
        'name-unique': 'select_4',
        options: [{
          text: 'None',
          children: null
        }]
      }
    }, {
      type: 'fieldChooseObjects',
      id: 5,
      attributes: {
        'name-unique': 'select_5',
        options: [{
          text: 'None',
          children: null
        }]
      }
    }];


    return { data: fieldChooseObjects };

    // let fieldChooseRoot = fieldChooseObjects.filter(function(i) {
    //   return i.attributes.name_id.toLowerCase().indexOf('root') !== -1;
    // })[0];

    // return { data: fieldChooseRoot };


    // if(request.queryParams.name_id !== undefined) {
    //   let fieldChooseObject = fieldChooseObjects.filter(function(i) {
    //     return i.attributes.name_id.toLowerCase().indexOf(request.queryParams.name_id.toLowerCase()) !== -1;
    //   });
      
    //   return { data: fieldChooseObject[0] };
    // } else {
    //   let fieldChooseObject = fieldChooseObjects.filter(function(i) {
    //     return i.attributes.name_id.toLowerCase().indexOf('root') !== -1;
    //   });

    //   return { data: fieldChooseObject[0] };
    // }
  });
}