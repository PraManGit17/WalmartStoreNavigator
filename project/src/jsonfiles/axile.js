

export const axile = [

  {
    name: 'Diary-Axile', x: 286, y: 40,
    next: ['Frozen Food-Axile', 'Diary', 'Kitchen Ware-Axile', 'Grocery-Axile',
      'Vegetables & Fruits-Axile'
    ]
  },

  {

    name: 'Frozen Food-Axile', x: 286, y: 120,
    next: ['Diary-Axile', 'Frozen Food', 'Kitchen Ware-Axile',
      'InfantsSection', 'Electronics', 'Shoes',
      'WBGENTS-UP-Axile', 'WBLADIES-UP-Axile', 'Paint',
      'Tools&Hardware', 'Automotive', 'Grocery-Axile', 'Vegetables & Fruits-Axile'
    ]
  },

  {
    name: 'Kitchen Ware-Axile', x: 286, y: 200,
    next: ['Kitchen Ware', 'Meat-Axile', 'Grocery-Axile',
      'Boys Wear', 'Fiitng Room', 'Frozen Food-Axile',
      'Girls Wear', 'Diary-Axile', 'Vegetables & Fruits-Axile'
    ]
  },

  {
    name: 'Meat-Axile', x: 106, y: 200,
    next: ['Meat', 'Meat-Axile-Down', 'Kitchen Ware-Axile',
      'Boys Wear', 'Fiitng Room',
      'Girls Wear'
    ]
  },

  {
    name: 'Meat-Axile-Down', x: 106, y: 328,
    next: ['Meat', 'Meat-Axile', 'Grocery', 'Grocery-Axile'
    ]
  },
  {
    name: 'Grocery-Axile', x: 286, y: 328,
    next: ['Kitchen Ware-Axile', 'Meat-Axile-Down', 'Grocery',
      'Frozen Food-Axile', 'Diary-Axile', 'Vegetables & Fruits-Axile'
    ]
  },

  {
    name: 'Snacks1-Axile', x: 286, y: 376,
    next: ['Vegetables & Fruits-Axile', 'Kitchen Ware-Axile',
      'Grocery-Axile', 'Frozen Food-Axile', 'Diary-Axile',
      'Snacks1', 'Snacks2', 'Snacks3'
    ]
  },

  {
    name: 'Vegetables & Fruits-Axile', x: 286, y: 408,
    next: ['Vegetables & Fruits', 'Kitchen Ware-Axile',
      'Grocery-Axile', 'Frozen Food-Axile', 'Diary-Axile',
      'Snacks1-Axile'
    ]
  },

  {
    name: 'Entrance-Axile', x: 286, y: 456,
    next: ['Vegetables & Fruits-Axile', 'Kitchen Ware-Axile',
      'Grocery-Axile', 'Frozen Food-Axile', 'Diary-Axile',
      'Snacks1-Axile', 'Carts', 'Entrance', 'Cosmetics', 
      'Food Court', 'CustomerService'
    ]
  },

  {
    name : 'WBGENTS-UP-Axile', x: 865, y: 120,
    next : ['WBGENTS-UP', 'WBLADIES-UP-Axile','Sweets', 'Cutlinary',
      'Paint', 'Shoes', 'Electronics', 'Tools&Hardware',
      'Automotive', 'Electronics', 'InfantsSection',
      'Frozen Food-Axile', 'Snacks3-Axile'
    ]
  },

  
  {
    name : 'WBLADIES-UP-Axile', x: 950, y: 120,
    next : ['WBLADIES-UP', 'WBGENTS-UP-Axile','Sweets', 'Cutlinary',
      'Paint', 'Shoes', 'Electronics', 'Tools&Hardware',
      'Automotive', 'Electronics', 'InfantsSection',
      'Frozen Food-Axile'
    ]
  },

  
  {
    name : 'Snacks3-Axile', x: 865, y: 376,
    next : ['WBGENTS-UP-Axile','Sweets', 'Cutlinary',
      'Snacks1', 'Snacks2', 'Snacks3', 'Snacks1-Axile'
    ]
  }
];
