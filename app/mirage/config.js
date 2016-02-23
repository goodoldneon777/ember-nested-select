export default function() {
  this.get('/field-choose-selects', function(db,request) {
    let fieldChooseSelects = [{
      type: 'fieldChooseSelects',
      id: 1,
      attributes: {
        'name-unique': 'root',
        'foo': 'bar',
        options: [{
          text: 'Chemistry',
          value: 'chem',
          children: ['chem_type']
        }, {
          text: 'Temperature',
          value: 'temp',
          children: ['temp_type']
        }, {
          text: 'Equipment',
          value: 'equipment',
          children: ['equipment']
        }]
      }
    }, {
      type: 'fieldChooseSelects',
      id: 2,
      attributes: {
        'name-unique': 'chem_test',
        options: [{
          text: 'HM Bottle Avg',
          value: 'HM_btl_avg',
          children: null
        }, {
          text: 'BLAD (HM hole OES)',
          value: 'BLAD',
          children: null
        }]
      }
    }, {
      type: 'fieldChooseSelects',
      id: 3,
      attributes: {
        'name-unique': 'chem_elem',
        options: [{
          text: 'C',
          value: 'C',
          children: null
        }, {
          text: 'Mn',
          value: 'MN',
          children: null
        }]
      }
    }, {
      type: 'fieldChooseSelects',
      id: 4,
      attributes: {
        'name-unique': 'chem_type',
        options: [{
          text: 'Single Test',
          value: 'chem_single',
          children: ['chem_test', 'chem_elem']
        }, {
          text: 'Two Test Difference',
          value: 'chem_diff',
          children: ['chem_test', 'chem_test', 'chem_elem']
        }]
      }
    }, {
      type: 'fieldChooseSelects',
      id: 5,
      attributes: {
        'name-unique': 'temp_type',
        options: [{
          text: 'Single Test',
          value: 'temp_single',
          children: ['temp_test']
        }, {
          text: 'Two Test Difference',
          value: 'temp_diff',
          children: ['temp_test', 'temp_test']
        }]
      }
    }, {
      type: 'fieldChooseSelects',
      id: 6,
      attributes: {
        'name-unique': 'temp_test',
        options: [{
          text: 'HM Ladle',
          value: 'HM_ldl',
          children: null
        }, {
          text: 'Tap (final bomb)',
          value: 'tap',
          children: null
        }]
      }
    }, {
      type: 'fieldChooseSelects',
      id: 7,
      attributes: {
        'name-unique': 'equipment',
        options: [{
          text: 'BOP Vessel',
          value: 'BOP_vsl',
          filterEnable: false,
          children: ['BOP_vsl']
        }, {
          text: 'Degas Vessel',
          value: 'RH_vsl',
          filterEnable: false,
          children: ['RH_vsl']
        }]
      }
    }, {
      type: 'fieldChooseSelects',
      id: 8,
      attributes: {
        'name-unique': 'BOP_vsl',
        options: [{
          text: '25 Vessel',
          value: '25',
          children: null
        }, {
          text: '26 Vessel',
          value: '26',
          children: null
        }]
      }
    }, {
      type: 'fieldChooseSelects',
      id: 8,
      attributes: {
        'name-unique': 'BOP_vsl',
        options: [{
          text: '1 Vessel',
          value: '1',
          children: null
        }, {
          text: '2 Vessel',
          value: '2',
          children: null
        }]
      }
    }];


    return { data: fieldChooseSelects };
  });
}