export default function() {
  this.get('/field-choose-selects', function(db,request) {
    let fieldChooseSelects = [{
      type: 'fieldChooseSelects',
      id: 1,
      attributes: {
        'name-unique': 'root',
        options: [{
          text: 'Chemistry',
          value: 'chem',
          children: ['chem_type']
        }, {
          text: 'Temperature',
          value: 'temp',
          children: ['temp_type']
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
    }];


    return { data: fieldChooseSelects };
  });
}