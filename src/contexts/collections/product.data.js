const PRODUCT_DATA = {
  fruits_vegetables:{
    id: 1,
    title: 'Fruits and Vegetables',
    routeName: 'fruits_vegetables',
    items: [
      {
        id: 1,
        name: 'Banana',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/27270000/muz-yerli-kg-9d3d01-1650x1650.jpg',
        price: 1.1,
        unit: 'Kg',
        path:'fruits_vegetables/banana'
      },
      {
        id: 2,
        name: 'Avacado',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/28010004/28010004-10a053-1650x1650.jpg',
        price: 0.90,
        unit: 'Piece',
        path:'fruits_vegetables/avacado'
      },
      {
        id: 3,
        name: 'Mango',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/27580003/mango-adet-604864-1650x1650.jpg',
        price: 1.5,
        unit: 'Piece',
        path:'fruits_vegetables/mango'
      },
      {
        id: 4,
        name: 'Onion',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/28420000/sogan-kuru-dokme-kg-25131e-1650x1650.jpg',
        price: 0.5,
        unit: 'Kg',
        path:'fruits_vegetables/onion'
      },
      {
        id: 5,
        name: 'Tomato',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/28080000/domates-kg-c7462d-1650x1650.jpg',
        price: 0.82,
        unit: 'Kg',
        path:'fruits_vegetables/tomato'
      },
      {
        id: 6,
        name: 'Aubergine',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/28303000/patlican-kemer-kg-2ac52c-1650x1650.jpg',
        price: 1.2,
        unit: 'Kg',
        path:'fruits_vegetables/aubergine'
      },
      {
        id: 7,
        name: 'Zucchini',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/28160000/kabak-sakiz-kg-31919c-1650x1650.jpg',
        price: 1.3,
        unit: 'Kg',
        path:'fruits_vegetables/zucchini'
      },
      {
        id: 8,
        name: 'Paprika',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/28053000/biber-kirmizi-kg-4ad206-1650x1650.jpg',
        price: 0.9,
        unit: 'Kg',
        path:'fruits_vegetables/paprika'
      },
      {
        id: 9,
        name: 'Grapefruit',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/27161000/greyfurt-kg-96423c-1650x1650.jpg',
        price: 1.2,
        unit: 'Kg',
        path:'fruits_vegetables/grapefruit'
      },
      {
        id: 10,
        name: 'Lemon',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/27260002/limon-kg-fbc52a-1650x1650.jpg',
        price: 0.3,
        unit: 'Piece',
        path:'fruits_vegetables/lemon'
      },
      {
        id: 11,
        name: 'Appel Granny',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/27133000/elma-granny-smith-kg-0e9183.jpg',
        price: 0.8,
        unit: 'Kg',
        path:'fruits_vegetables/appel_granny'
      },
      {
        id: 12,
        name: 'Pear',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/27023000/armut-ankara-kg-b3f795-1650x1650.jpg',
        price: 0.9,
        unit: 'Kg',
        path:'fruits_vegetables/pear'
      },
      {
        id: 13,
        name: 'Quince',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/27030000/ayva-kg-6ac82d.jpg',
        price: 1.3,
        unit: 'Kg',
        path:'fruits_vegetables/quince'
      },
      {
        id: 14,
        name: 'Carrot',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/28129037/havuc-beypazari-paket-kg-b3accf.jpg',
        price: 0.6,
        unit: 'Piece',
        path:'fruits_vegetables/carrot'
      },
      {
        id: 15,
        name: 'Kiwi',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/27251234/dogu-karadeniz-kivisi-kg-8d9fb6.jpg',
        price: 1.9,
        unit: 'Kg',
        path:'fruits_vegetables/kiwi'
      },
      {
        id: 16,
        name: 'pineapple',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/27501003/-ananas-adet-c1fa49.jpg',
        price: 1.4,
        unit: 'Piece',
        path:'fruits_vegetables/pineapple'
      },
      {
        id: 17,
        name: 'Strawberry',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/27081000/27081000-7e292e.jpg',
        price: 4.5,
        unit: 'Kg',
        path:'fruits_vegetables/strawberry'
      },
      {
        id: 18,
        name: 'Mandarin',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/27286003/27286003-49e7ca.jpg',
        price: 1.4,
        unit: 'Kg',
        path:'fruits_vegetables/mandarin'
      },
    ]
  },
  meat_chicken_fish: {
    id: 2,
    title: 'Meat, Chicken and Fish',
    routeName: 'meat_chicken_fish',
    items: [
      {
        id: 19,
        name: 'Pinar illaki meatball',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/17401133/17401133-90b7a1-1650x1650.png',
        price: 3.6,
        unit: 'Piece'
      },
      {
        id: 20,
        name: 'Beef Lamb Chop',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/25010560/25010560-9a64ab-1650x1650.jpg',
        price: 4.5,
        unit: 'Kg'
      },
      {
        id: 21,
        name: 'Specialist Butcher Beef Cubes',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/25509037/25509037-b43982-1650x1650.jpg',
        price: 4.7,
        unit: 'Kg'
      },
      {
        id: 22,
        name: 'Bolez Köylüm Half Chicken',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/13019530/13019530-31347f-1650x1650.jpg',
        price: 2.1,
        unit: 'Kg'
      },
      {
        id: 23,
        name: 'Bolez Köylüm Tenderloin',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/13019505/13019505-a0b79e-1650x1650.jpg',
        price: 3.2,
        unit: 'Kg'
      },
      {
        id: 24,
        name: 'Banvit Chicken Grill',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/46040101/46040101-dacafe-1650x1650.jpg',
        price: 3.6,
        unit: 'Kg'
      },
      {
        id: 25,
        name: 'Banvit Chicken Nugget 700 G',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/46040053/46040053-497568-1650x1650.jpg',
        price: 1.1,
        unit: 'Piece'
      },
      {
        id: 26,
        name: 'Beypiliç Plate Leg Chops',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/13019037/13019037-a8dc7d-1650x1650.jpg',
        price: 1.9,
        unit: 'Kg'
      },
      {
        id: 27,
        name: 'Bolez Köylüm Chicken',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/13019530/13019530-31347f-1650x1650.jpg',
        price: 3.1,
        unit: 'Kg'
      },
      {
        id: 28,
        name: 'Bolez Tenderloin',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/13019505/13019505-a0b79e-1650x1650.jpg',
        price: 3.1,
        unit: 'Kg'
      },
      {
        id: 29,
        name: 'Banvit Grill',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/46040101/46040101-dacafe-1650x1650.jpg',
        price: 3.5,
        unit: 'Kg'
      },
      {
        id: 30,
        name: 'Banvit Chicken',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/46040053/46040053-497568-1650x1650.jpg',
        price: 1.2,
        unit: 'Piece'
      },
      {
        id: 31,
        name: 'Beypiliç Plate Chops',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/13019037/13019037-a8dc7d-1650x1650.jpg',
        price: 1.4,
        unit: 'Kg'
      },
      {
        id: 32,
        name: 'Polonez Salami',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/14109223/polonez-macar-salam-kg-cb43dd.jpg',
        price: 8,
        unit: 'Kg'
      },
      {
        id: 33,
        name: 'Polonez Roasting',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/14401502/14401502-2ad4b6.jpg',
        price: 5,
        unit: 'Piece'
      },
      {
        id: 34,
        name: 'Dardanel Mussel Meat',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/17501041/17501041-6bbd78.jpg',
        price: 3.5,
        unit: 'Piece'
      },
      {
        id: 35,
        name: 'Dardanel Salmon',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/17501038/17501038-83fb91.jpg',
        price: 5.4,
        unit: 'Piece'
      },
      {
        id: 36,
        name: 'Polonez Turkey Salami',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/14109162/14109162-e8af3a.jpg',
        price: 4.2,
        unit: 'Piece'
      }
    ]
  },
  milk_breakfast:{
    id: 3,
    title: 'Milk and Breakfast',
    routeName: 'milk_breakfast',
    items: [
      {
        id: 37,
        name: 'Taciroglu Kasgaval Cheese',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/10403145/taciroglu-kaskaval-peyniri-kg-ef5184.jpg',
        price: 5.1,
        unit: 'Piece'
      },
      {
        id: 38,
        name: 'SütBon Goat Cheese',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/10019163/10019163-8573d9.jpg',
        price: 7.8,
        unit: 'Piece'
      },
      {
        id: 39,
        name: 'Bahcivan White Cheese',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/10019208/10019208-4fb9f4.jpg',
        price: 4.7,
        unit: 'Piece'
      },
      {
        id: 40,
        name: 'Akpinar Tulum Cheese',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/10202003/akpinar-t-y-olgunlastirilmis-tulum-peyniri-kg-cec091.jpg',
        price: 6.1,
        unit: 'Piece'
      },
      {
        id: 41,
        name: 'Akpinar Old Yellow Cheese',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/10108663/akpinar-tam-yagli-eski-kasar-peyniri-kg-ec8bfa.jpg',
        price: 7.1,
        unit: 'Piece'
      },
      {
        id: 42,
        name: '20x Egg',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/20001992/20001992-f01488.jpg',
        price: 3.1,
        unit: 'Piece'
      },
      {
        id: 43,
        name: '10x Egg',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/20001994/20001994-1e60db.jpg',
        price: 1.7,
        unit: 'Piece'
      },
      {
        id: 44,
        name: '30x Egg',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/20001976/20001976-2e0cb2.jpg',
        price: 3.7,
        unit: 'Piece'
      },
      {
        id: 45,
        name: 'Ilyada Black Olives',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/16011965/16011965-596691.jpg',
        price: 3.5,
        unit: 'Kg'
      },
      {
        id: 46,
        name: 'Fora Olives Paste',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/16011941/fora-sade-siyah-zeytin-ezmesi-340-gr-261087.jpg',
        price: 1.1,
        unit: 'Piece'
      },
      {
        id: 47,
        name: 'Whole Green Olives 400G',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/16020236/16020236-31c5ee.jpg',
        price: 2.4,
        unit: 'Piece'
      },
      {
        id: 48,
        name: 'Oncü Black Olives 1000G',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/16011995/16011995-6a8fe2.jpg',
        price: 6.5,
        unit: 'Piece'
      },
      {
        id: 49,
        name: 'Balparmak Honig Mix 180G',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/07209847/07209847-8c5235.jpg',
        price: 2.2,
        unit: 'Piece'
      },
      {
        id: 50,
        name: 'Koska Kürek Halvah 350G',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/07081988/07081988-811659.jpg',
        price: 1.5,
        unit: 'Piece'
      },
      {
        id: 51,
        name: 'Koska Halvah with Pistachio 350G',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/07081990/07081990-148999.jpg',
        price: 2.5,
        unit: 'Piece'
      },
      {
        id: 52,
        name: 'Fomilk Milk Vegan 1Lt',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/11010836/11010836-861360.jpg',
        price: 0.7,
        unit: 'Piece'
      },
      {
        id: 53,
        name: 'Sek Macchiato 330Ml',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/11015687/11015687-994755.jpg',
        price: 0.47,
        unit: 'Piece'
      },
      {
        id: 54,
        name: 'Activia Smoothie 200Ml',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/11015689/11015689-7c03f4.jpg',
        price: 0.55,
        unit: 'Piece'
      }
    ]
  },
  food: {
    id: 4,
    title: 'Food',
    routeName: 'food',
    items: [
      {
        id: 55,
        name: 'Pastavilla Rotini 500G',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/05030711/05030711-9e2123-1650x1650.JPG',
        price: 1,
        unit: 'Piece'
      },
      {
        id: 56,
        name: 'ankara Pasta 500G',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/05030215/nuh-un-ankara-boncuk-makarna-500-gr-d86176-1650x1650.jpg',
        price: 0.6,
        unit: 'Piece'
      },
      {
        id: 57,
        name: 'Burgu Pasta 500G',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/05030185/05030185-188ee1-1650x1650.jpg',
        price: 0.4,
        unit: 'Piece'
      },
      {
        id: 58,
        name: 'Pastavilla Mezzanelli 500G',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/05030727/05030727-f018c1-1650x1650.jpg',
        price: 0.7,
        unit: 'Piece'
      },
      {
        id: 59,
        name: 'Veronelli Penne 500G',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/05030256/05030256-87d667-1650x1650.jpg',
        price: 0.8,
        unit: 'Piece'
      },
      {
        id: 60,
        name: 'Filiz Kuskus Pasta 500G',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/05030350/05030350-8c671a-1650x1650.jpg',
        price: 0.7,
        unit: 'Piece'
      },
      {
        id: 61,
        name: 'Filiz Spagetti Pasta 500G',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/05030363/05030363-670533-1650x1650.jpg',
        price: 0.9,
        unit: 'Piece'
      },
      {
        id: 62,
        name: 'Barilla Farfalle 500G',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/05030347/05030347-f6feba-1650x1650.jpg',
        price: 1.4,
        unit: 'Piece'
      },
      {
        id: 63,
        name: 'Duru Pilavlik Bulgur 1000G',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/01075029/01075029-dd57e7-1650x1650.jpg',
        price: 1.5,
        unit: 'Piece'
      },
      {
        id: 64,
        name: 'Noba Chickpeas 1KG',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/01041003/01041003-da5453-1650x1650.JPG',
        price: 1.6,
        unit: 'Piece'
      },
      {
        id: 65,
        name: 'Green Lentil 1KG',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/01051801/01051801-7c61e6-1650x1650.jpg',
        price: 1.5,
        unit: 'Piece'
      },
      {
        id: 66,
        name: 'Danem Rice 2KG',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/01010139/01010139-76004d-1650x1650.jpg',
        price: 1.8,
        unit: 'Piece'
      },
      {
        id: 67,
        name: 'Noba Osmancik Rice 1 Kg',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/01010020/01010020-d5cdfc-1650x1650.jpg',
        price: 1.5,
        unit: 'Piece'
      },
      {
        id: 68,
        name: 'Noba Cranberry Beans 1000G',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/01030011/01030011-99d54b-1650x1650.JPG',
        price: 20,
        unit: 'Piece'
      },
      {
        id: 69,
        name: 'Torku Bulgur 1Kg',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/01089962/torku-koftelik-bulgur-1-kg-732b82-1650x1650.jpg',
        price: 0.72,
        unit: 'Piece'
      },
      {
        id: 70,
        name: 'Ipek Pilavlik Bulgur 1Kg',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/01075130/01075130-b61ff7-1650x1650.jpg',
        price: 0.8,
        unit: 'Piece'
      },
      {
        id: 71,
        name: 'Yayla Dermason Beans 2Kg',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/01020099/01020099-d4e0be-1650x1650.jpg',
        price: 3.9,
        unit: 'Piece'
      },
      {
        id: 72,
        name: 'Danem Lentil 2Kg',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/01060005/01060005-ae37cf-1650x1650.jpg',
        price: 2.4,
        unit: 'Piece'
      },
    ]
  },
  beverage:{
    id: 5,
    title: 'Beverage',
    routeName: 'beverage',
    items: [
      {
        id: 73,
        name: 'Erikli Water 330ml',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/08062200/erikli-su-dogal-kaynak-suyu-0-33-l-b5c2be.jpg',
        price: 0.2,
        unit: 'Piece'
      },
      {
        id: 74,
        name: 'Erikli Water 5L',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/08062203/08062203-2f4ec4.jpg',
        price: 0.7,
        unit: 'Piece'
      },
      {
        id: 75,
        name: 'Erikli Water 0.5L',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/08062201/08062201-3aa86b.jpg',
        price: 0.3,
        unit: 'Piece'
      },
      {
        id: 76,
        name: 'Damla Water 330ml',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/08060314/08060314-3569b1.jpg',
        price: 0.35,
        unit: 'Piece'
      },
      {
        id: 77,
        name: 'Sirma Form 0.5L',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/08028232/08028232-175ace.png',
        price: 0.4,
        unit: 'Piece'
      },
      {
        id: 78,
        name: 'Nestle Pure Life 1.5L',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/08061655/nestle-pure-life-su-1-5-l-27412d.jpg',
        price: 0.25,
        unit: 'Piece'
      },
      {
        id: 79,
        name: 'Erikli Glass 750ml',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/08065172/08065172-aa5c24.png',
        price: 0.69,
        unit: 'Piece'
      },
      {
        id: 80,
        name: 'Hayat Frozen Special 0.33L',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/08060570/08060570-e9f453.jpg',
        price: 0.17,
        unit: 'Piece'
      },
      {
        id: 81,
        name: 'Tchibo Cafissimo Caffe Crema Colombia 96x 768G',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/03272013/03272013-ba9506.png',
        price: 21,
        unit: 'Piece'
      },
      {
        id: 82,
        name: 'Tchibo Barista Espresso 1Kg',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/03242957/03242957-498d22.jpg',
        price: 12.9,
        unit: 'Piece'
      },
      {
        id: 83,
        name: 'Tchibo Barista Caffe Crema 1000G',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/03242958/03242958-f15ac8.png',
        price: 12.9,
        unit: 'Piece'
      },
      {
        id: 84,
        name: 'Tchibo Gold Selection 50G',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/03231566/03231566-c5cf8d.jpg',
        price: 1.7,
        unit: 'Piece'
      },
      {
        id: 85,
        name: 'Sirma Mandarin 6x',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/08040143/08040143-0e20bf.jpg',
        price: 3.1,
        unit: 'Piece'
      },
      {
        id: 86,
        name: 'Akmina Lemon Flavored 6x',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/08040943/08040943-286413.png',
        price: 4.2,
        unit: 'Piece'
      },
      {
        id: 87,
        name: 'Dogus Tee 500G',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/03118005/dogus-rize-cay-500-gr-86f410.jpg',
        price: 2,
        unit: 'Piece'
      },
      {
        id: 88,
        name: 'Caykur Cay Cicegi 200G',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/03111309/03111309-559360.jpg',
        price: 1.6,
        unit: 'Piece'
      },
      {
        id: 89,
        name: 'Pinar Kefir Probiyotik 200ml',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/11559500/11559500-facfb1.jpg',
        price: 1.7,
        unit: 'Piece'
      },
      {
        id: 90,
        name: 'Eker Ayran 293ml',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/11552678/11552678-a46684.jpg',
        price: 0.5,
        unit: 'Piece'
      },
    ]
  },
  detergent_cleaning: {
    id: 6,
    title: 'Detergent and Cleaning',
    routeName: 'detergent_cleaning',
    items: [
      {
        id: 91,
        name: 'Calgon Ekolojik Kireç Önleyici 750 Ml',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/30348325/30348325-88ea41-1650x1650.jpg',
        price: 3,
        unit: 'Piece'
      },
      {
        id: 92,
        name: 'Calgon Ekstra Hijyen Toz 500 G',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/30348324/30348324-84ffa4-1650x1650.jpg',
        price: 2,
        unit: 'Piece'
      },
      {
        id: 93,
        name: 'Marc Çamaşır Makinesi Temizleyici Floral',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/30628720/30628720-2754b7-1650x1650.jpg',
        price: 2,
        unit: 'Piece'
      },
      {
        id: 94,
        name: 'Finish Çift Etkili Makine Temizleyici Limon 250 Ml',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/30403281/30403281-83a65f-1650x1650.jpg',
        price: 2.5,
        unit: 'Piece'
      },
      {
        id: 95,
        name: 'Finish Makine Temizleyici Tablet',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/30431847/30431847-f82a50-1650x1650.jpg',
        price: 4,
        unit: 'Piece'
      },
      {
        id: 96,
        name: 'Pril Makine Temizleyici Kapsül 3X19 G',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/30431848/30431848-b6debf-1650x1650.jpg',
        price: 2.1,
        unit: 'Piece'
      },
      {
        id: 97,
        name: 'Bulaşık Makinesi Temizleyici 2X20 G',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/30403301/30403301-8209ef-1650x1650.jpg',
        price: 2.5,
        unit: 'Piece'
      },
      {
        id: 98,
        name: 'Vanish Oxi Action Multi Power Leke Çıkarıcı 750 Ml',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/30569745/30569745-101912-1650x1650.png',
        price: 2.5,
        unit: 'Piece'
      },
      {
        id: 99,
        name: 'Vanish Sıvı Gold Beyaz 1000 Ml',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/30569718/30569718-201e88-1650x1650.jpg',
        price: 2.5,
        unit: 'Piece'
      },
      {
        id: 100,
        name: 'Detan 60 Gece Elektrolikit Cihaz + Yedek',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/31556040/31556040-d1a423-1650x1650.jpg',
        price: 1.5,
        unit: 'Piece'
      },
      {
        id: 101,
        name: 'Detan Maxi Böcek İlacı 250 Ml',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/31552045/31552045-7d7286-1650x1650.jpg',
        price: 1.8,
        unit: 'Piece'
      },
      {
        id: 102,
        name: 'Bion Böceklere Karşı Etkili Aerosol 405 Ml',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/31550010/31550010-0677fe-1650x1650.jpg',
        price: 2.5,
        unit: 'Piece'
      },
      {
        id: 103,
        name: 'Raid Sinek Öldürücü Sprey 300Ml',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/31550120/31550120-b9d208-1650x1650.jpg',
        price: 2.5,
        unit: 'Piece'
      },
      {
        id: 104,
        name: 'Raid Elektro Likit',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/31556000/31556000-dad2fd-1650x1650.jpg',
        price: 1.4,
        unit: 'Piece'
      },
      {
        id: 105,
        name: 'Solo Tüm Yüzeyler Islak Temizlik Bezi 40x',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/31163669/31163669-f3d1b2-1650x1650.jpg',
        price: 0.5,
        unit: 'Piece'
      },
      {
        id: 106,
        name: 'Parex Mikrofiber Yer Bezi',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/31163651/parex-mikrofiber-yer-bezi-05432a-1650x1650.jpg',
        price: 1,
        unit: 'Piece'
      },
      {
        id: 107,
        name: 'Yer Bezi 50x60cm',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/31160019/31160019-c9727c-1650x1650.jpg',
        price: 0.9,
        unit: 'Piece'
      },
      {
        id: 108,
        name: 'Scotch Brite Islak Banyo Bezi 50x',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/31030014/31030014-5d4534-1650x1650.jpg',
        price: 0.5,
        unit: 'Piece'
      },
    ]
  },
  paper_cosmetics: {
    id: 7,
    title: 'Paper and Cosmetics',
    routeName: 'paper_cosmetics',
    items: [
      {
        id: 109,
        name: 'Papia Kutu Mendil 100x',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/31030057/31030057-6cf202-1650x1650.jpg',
        price: 0.8,
        unit: 'Piece'
      },
      {
        id: 110,
        name: 'Duni Masa Örtüsü 120X180 Cm',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/31049130/duni-masa-ortusu-120-180cm-fe47da-1650x1650.jpg',
        price: 2,
        unit: 'Piece'
      },
      {
        id: 111,
        name: 'Sofia Renk Renk Desenli Peçete 20x',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/31049138/31049138-f332de-1650x1650.jpg',
        price: 1.1,
        unit: 'Piece'
      },
      {
        id: 112,
        name: 'Selpak Trend Peçete 20x',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/31049135/31049135-f197d8-1650x1650.jpg',
        price: 0.3,
        unit: 'Piece'
      },
      {
        id: 113,
        name: 'Duni 40X40 Elegance Kumaş Dokulu Peçete 10x',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/31040952/duni-elegance-pecete-40x40-10-lu-fc9428-1650x1650.jpg',
        price: 0.7,
        unit: 'Piece'
      },
      {
        id: 114,
        name: 'Papia Decor Peçete 20x',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/31041704/31041704-eb13ef-1650x1650.jpg',
        price: 1.2,
        unit: 'Piece'
      },
      {
        id: 115,
        name: 'Selpak Deluxe Peçete 20x',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/31049162/31049162-a35e70-1650x1650.jpg',
        price: 1.4,
        unit: 'Piece'
      },
      {
        id: 116,
        name: 'Selpak Tuvalet Kağıdı 32x',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/31014105/31014105-fff360-1650x1650.png',
        price: 2.5,
        unit: 'Piece'
      },
      {
        id: 117,
        name: 'Papia Tuvalet Kağıdı 32x',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/31019960/31019960-757421-1650x1650.jpg',
        price: 3.1,
        unit: 'Piece'
      },
      {
        id: 118,
        name: 'Mare Ultra Tuvalet Kağıdı 16x',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/31010880/31010880-65eadc-1650x1650.jpg',
        price: 1.8,
        unit: 'Piece'
      },
      {
        id: 119,
        name: 'BSolo Tuvalet Kağıdı 16x',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/31011314/31011314-e08c47-1650x1650.png',
        price: 2.9,
        unit: 'Piece'
      },
      {
        id: 120,
        name: 'Familia Plus Bambu Tuvalet Kağıdı 16x',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/31010026/31010026-da5bf3-1650x1650.jpg',
        price: 2.1,
        unit: 'Piece'
      },
      {
        id: 121,
        name: 'Ecco Yeşil Dünya Tuvalet Kağıdı 12x',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/31011983/31011983-943887-1650x1650.jpg',
        price: 4.1,
        unit: 'Piece'
      },
      {
        id: 122,
        name: 'Uni Baby Classic Islak Havlu 3X56',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/31030044/31030044-f0a0f1-1650x1650.jpg',
        price: 3.1,
        unit: 'Piece'
      },      {
        id: 123,
        name: 'Uni Baby Simple Clean Islak Havlu 3X52',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/31030047/31030047-1474c1.jpg',
        price: 1.5,
        unit: 'Piece'
      },
      {
        id: 124,
        name: 'Pastel Oje 19',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/35990115/35990115-adf566-1650x1650.jpg',
        price: 0.5,
        unit: 'Piece'
      },
      {
        id: 125,
        name: 'Lionesse 12445 Sivri Uçlu Et Pensi',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/35479137/35479137-e9c02e-1650x1650.png',
        price: 1.4,
        unit: 'Piece'
      },
      {
        id: 126,
        name: 'Palmolive Duş Jeli 500 Ml',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/34379305/34379305-18cc37-1650x1650.jpg',
        price: 1.3,
        unit: 'Piece'
      },
    ]
  },
  baby_toys: {
    id: 8,
    title: 'Baby and Toys',
    routeName: 'baby_toys',
    items: [
      {
        id: 127,
        name: 'Pritt Oyun Hamuru 4X100 G',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/36034543/pritt-oyun-hamuru-4x100-gr-4-renk-840ac0-1650x1650.jpg',
        price: 2,
        unit: 'Piece'
      },
      {
        id: 128,
        name: 'Fisher Price Şekilleri Öğreniyorum Oyun Seti',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/36060859/36060859-a4378c-1650x1650.jpg',
        price: 2.8,
        unit: 'Piece'
      },
      {
        id: 129,
        name: 'Playdoh 4x Hamur 4X112 G',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/36036305/36036305-59a68d-1650x1650.jpg',
        price: 1.8,
        unit: 'Piece'
      },
      {
        id: 130,
        name: 'Yılbaşı Oyun Hamur Seti',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/36060852/36060852-9c6cec-1650x1650.jpg',
        price: 2.9,
        unit: 'Piece'
      },
      {
        id: 131,
        name: 'Karlar Ülkesi/Cars Kinetik Kum 2X200 G',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/36037712/36037712-45726f-1650x1650.jpg',
        price: 2.6,
        unit: 'Piece'
      },
      {
        id: 132,
        name: 'Hotwheels Tekli Arabalar',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/36252238/atm-tekli-arabalar-b3b535-1650x1650.jpg',
        price: 1,
        unit: 'Piece'
      },
      {
        id: 133,
        name: 'Matchbox Tekli Arabalar',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/36036065/36036065-5b2093-1650x1650.jpg',
        price: 1.2,
        unit: 'Piece'
      },
      {
        id: 134,
        name: 'Prima Pure Bebek Bezi 5 Beden 17x',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/31100224/31100224-b3a891-1650x1650.jpg',
        price: 6.4,
        unit: 'Piece'
      },
      {
        id: 135,
        name: 'Prima 5 Beden Premium Care Junior Ekonomik 42 Adet',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/31108181/31108181-136e3e-1650x1650.jpg',
        price: 8,
        unit: 'Piece'
      },
      {
        id: 136,
        name: 'Koroplast Pudra Kokulu Bebek Bezi Torbası 50x',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/31108203/31108203-1d624d-1650x1650.jpg',
        price: 1.4,
        unit: 'Piece'
      },
      {
        id: 137,
        name: 'Nivea Bebek Pişik Kremi 100 Ml',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/35320401/35320401-c35b72-1650x1650.jpg',
        price: 4,
        unit: 'Piece'
      },
      {
        id: 138,
        name: 'Sebamed Bebek Pişik Önleyici Krem 100 Ml',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/35325125/sebamed-baby-pisik-onleyici-krem-100-ml-fc16a1-1650x1650.jpg',
        price: 4.6,
        unit: 'Piece'
      },
      {
        id: 139,
        name: 'Wee Baby Renkli Sulu Diş Halkası',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/46024633/wee-bbay-renkli-sulu-dis-halkasi-201-55fe4f-1650x1650.jpg',
        price: 1.8,
        unit: 'Piece'
      },
      {
        id: 140,
        name: 'Sma Comfort Bebek Devam Sütü 1 400 G',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/05040550/05040550-8c2f70-1650x1650.jpg',
        price: 9,
        unit: 'Piece'
      },
      {
        id: 141,
        name: 'Aptamil Conformil 1 Bebek Sütü 300 G',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/05046816/aptamil-conformil-1-bebek-sutu-300-gr-c78314-1650x1650.jpg',
        price: 6,
        unit: 'Piece'
      },
      {
        id: 142,
        name: 'Aptamil 1 Bebek Sütü 350 G 0-6 Ay Akıllı Kutu',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/05040563/05040563-021ace-1650x1650.jpg',
        price: 9,
        unit: 'Piece'
      },
      {
        id: 143,
        name: 'Elite Naturel Karşık Meyveli Soğuk Anne Çayı 200 Ml',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/05040548/05040548-b5c1ca-1650x1650.jpg',
        price: 0.6,
        unit: 'Piece'
      },
      {
        id: 144,
        name: 'Hero Baby Şeftali Muz Püreli Kavanoz Mama 125 G',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/05046694/05046694-c52993-1650x1650.jpg',
        price: 0.7,
        unit: 'Piece'
      },
    ]
  },
  home_pet: {
    id: 9,
    title: 'Home and Pet',
    routeName: 'home_pet',
    items: [
      {
        id: 145,
        name: 'Şnorkel +14',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/36807297/snorkel-14-df0f92-1650x1650.jpg',
        price: 2.3,
        unit: 'Piece'
      },
      {
        id: 146,
        name: 'Nk Yoga Matı 155 X 60 Cm X 5Mm',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/38017717/38017717-41ae78-1650x1650.jpg',
        price: 10,
        unit: 'Piece'
      },
      {
        id: 147,
        name: 'Bestway Spiderman Can Yeleği 51x46 Cm',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/36807283/spiderman-can-yelegi-20-x-18-51-cm-x-46-cm-swim-v-48d749.jpg',
        price: 4.6,
        unit: 'Piece'
      },
      {
        id: 148,
        name: 'Axentia Sugar Yazılı Cam Kavanoz 1700 Ml',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/33037703/33037703-c7bdbc-1650x1650.jpg',
        price: 3,
        unit: 'Piece'
      },
      {
        id: 149,
        name: 'Paşabahçe Woody Bambu Kapaklı Kavanoz 575 Cc',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/33010696/33010696-3cc05f-1650x1650.jpg',
        price: 1.6,
        unit: 'Piece'
      },
      {
        id: 150,
        name: 'Paşabahçe Woody Bambu Kapaklı Kavanoz 860Cc',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/33010697/33010697-2577d7-1650x1650.jpg',
        price: 1.7,
        unit: 'Piece'
      },
      {
        id: 151,
        name: 'Koroplast Büyük Boy Buzdolabı Poşeti 20x',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/32095005/korozo-buyuk-boy-buzdolabi-poseti-0eabe9-1650x1650.jpg',
        price: 0.6,
        unit: 'Piece'
      },
      {
        id: 152,
        name: 'Koroplast Buzdolabı Poşeti Orta Boy 4 Al 3 Öde 120x',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/32090020/koroplast-buzdolabi-poseti-orta-boy-4-al-3-ode-paketinde-0fb9b1-1650x1650.jpg',
        price: 1.3,
        unit: 'Piece'
      },
      {
        id: 153,
        name: 'Cook Orta Boy Buzdolabı Poşeti',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/32095097/32095097-bb7946-1650x1650.jpg',
        price: 0.5,
        unit: 'Piece'
      },
      {
        id: 154,
        name: 'Filpa Körüklü Pipet 40x',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/32300425/filpa-koruklu-pipet-40-li-e0b1f9.jpg',
        price: 0.3,
        unit: 'Piece'
      },
      {
        id: 155,
        name: 'Leva Koli Bandı 100 M',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/44257028/44257028-8300de.jpg',
        price: 0.7,
        unit: 'Piece'
      },
      {
        id: 156,
        name: 'Duck Şeffaf Koli Bandı 45Mmx40m',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/44108152/44108152-22e376.jpg',
        price: 0.65,
        unit: 'Piece'
      },
      {
        id: 157,
        name: 'Nilson 3lü 1 Metre Topraklı Grup Priz',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/39149214/39149214-bfbb0f.jpg',
        price: 2.5,
        unit: 'Piece'
      },
      {
        id: 158,
        name: 'Leva House 136 Parça Vida/Montaj Seti',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/44050707/44050707-094d81-1650x1650.jpg',
        price: 1.9,
        unit: 'Piece'
      },
      {
        id: 159,
        name: 'Sıcak Su Torbası 2 L',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/44251522/sicak-su-torbasi-2-l-d57f2c.jpg',
        price: 2,
        unit: 'Piece'
      },
      {
        id: 160,
        name: 'Kazaklı Sıcak Su Torbası 2 L',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/44251535/44251535-6c7f6a-1650x1650.jpg',
        price: 2.5,
        unit: 'Piece'
      },
      {
        id: 161,
        name: 'Homebasix Çok Amaçlı Kaydırmaz 45X100 Cm',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/44251477/44251477-7831d8-1650x1650.jpg',
        price: 1.3,
        unit: 'Piece'
      },
      {
        id: 162,
        name: 'Leva Şeffaf Raf Örtüsü 45X90 Cm',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/44253333/44253333-4c1d09-1650x1650.jpg',
        price: 1.7,
        unit: 'Piece'
      },
    ]
  },
  electronic: {
    id: 10,
    title: 'Electronic',
    routeName: 'electronic',
    items: [
      {
        id: 163,
        name: 'Bood Bluetooth Kulaklık Ls-15',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/39280726/39280726-0bd443.jpg',
        price: 21,
        unit: 'Piece'
      },
      {
        id: 164,
        name: 'Bood Kablosuz Kulaklık M-62',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/39280725/39280725-3e4055.jpg',
        price: 16,
        unit: 'Piece'
      },
      {
        id: 165,
        name: 'Bood Kablosuz Renkli Kulaklık P-4',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/39280724/39280724-2fe0da.jpg',
        price: 12,
        unit: 'Piece'
      },
      {
        id: 166,
        name: 'Think New Universal Mikrofonlu Kulaklık',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/39183033/39183033-9daf65.jpg',
        price: 5,
        unit: 'Piece'
      },
      {
        id: 167,
        name: 'Think Type-C Şarj & Data Kablo 1 Metre',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/39182415/39182415-8439bf.jpg',
        price: 2,
        unit: 'Piece'
      },
      {
        id: 168,
        name: 'Aprilla Exclusive Ahd-2127 Saç Kurutma Makinesi',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/39066188/39066188-f228e9.jpg',
        price: 9,
        unit: 'Piece'
      },
      {
        id: 169,
        name: 'Kiwi Ksm-2405w Waffle Makinesi',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/39026022/39026022-bdd91f.jpg',
        price: 12,
        unit: 'Piece'
      },
      {
        id: 170,
        name: 'Urban Mood Ultrasonic Şarjlı Yüz Temizleme Cihazı',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/39090288/39090288-a560c6.png',
        price: 6,
        unit: 'Piece'
      },
      {
        id: 171,
        name: 'Rowell 2000W Elektrikli Fan Isıtıcı Lq-501',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/39151230/39151230-6af964.jpg',
        price: 7,
        unit: 'Piece'
      },
      {
        id: 172,
        name: 'Kumtel Lx-2832 1500W Delux Siyah Isıtıcı',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/39155992/39155992-5017b8.jpg',
        price: 10,
        unit: 'Piece'
      },
      {
        id: 173,
        name: 'My Style Dekoratif Led Işık Yıldız/Kalp',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/39119935/39119935-c7c133.jpg',
        price: 8,
        unit: 'Piece'
      },
      {
        id: 174,
        name: 'Urban Mood Dekoratif Işık Zinciri 8 Mod',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/39119939/39119939-e908d9.jpg',
        price: 5,
        unit: 'Piece'
      },
      {
        id: 175,
        name: 'Urban Mood 16 Dekoratif Led Top Işık Zinciri',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/39119940/39119940-0ceb66.jpg',
        price: 8,
        unit: 'Piece'
      },
      {
        id: 176,
        name: 'Mystyle 12li Led Işıklı Foto Mandal',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/39119924/39119924-e84216.jpg',
        price: 4,
        unit: 'Piece'
      },
      {
        id: 177,
        name: 'Urban Mood Retro Dekoratif Led Işık Top 4lü',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/39119938/39119938-b03d61.jpg',
        price: 8,
        unit: 'Piece'
      },
      {
        id: 178,
        name: 'General Home El Feneri Df-25',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/39109970/39109970-131a6c.jpg',
        price: 2,
        unit: 'Piece'
      },
      {
        id: 179,
        name: 'Nilson 3lü Golyat - Topraklı Fiş Priz (Siyah)',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/46064715/46064715-9f5ef1.jpg',
        price: 1.3,
        unit: 'Piece'
      },
      {
        id: 180,
        name: 'Glow-worm 3lü Anahtarlı  5 M',
        imageUrl: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/39100264/glow-worm-3-lu-anahtarli-5-mt-315f11.jpg',
        price: 5,
        unit: 'Piece'
      },
    ]
  },
  discounts: {
    id: 11,
    title: 'Discounts',
    routeName: 'discounts',
    items: [
      {
        id: 72,
        name: 'Camo Down Vest',
        imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
        price: 325,
        unit: 'Piece'
      },
      {
        id: 73,
        name: 'Floral T-shirt',
        imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
        price: 20,
        unit: 'Piece'
      },
      {
        id: 74,
        name: 'Black & White Longsleeve',
        imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
        price: 25,
        unit: 'Piece'
      },
      {
        id: 75,
        name: 'Pink T-shirt',
        imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
        price: 25,
        unit: 'Piece'
      },
      {
        id: 76,
        name: 'Jean Long Sleeve',
        imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
        price: 40,
        unit: 'Piece'
      },
      {
        id: 77,
        name: 'Burgundy T-shirt',
        imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
        price: 25,
        unit: 'Piece'
      }
    ]
  },
  hakanskop: {
    id: 12,
    title: 'hakanskop',
    routeName: 'hakanskop',
    items: [
      {
        id: 78,
        name: 'Camo Down Vest',
        imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
        price: 325,
        unit: 'Piece'
      },
      {
        id: 79,
        name: 'Floral T-shirt',
        imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
        price: 20,
        unit: 'Piece'
      },
      {
        id: 80,
        name: 'Black & White Longsleeve',
        imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
        price: 25,
        unit: 'Piece'
      },
      {
        id: 81,
        name: 'Pink T-shirt',
        imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
        price: 25,
        unit: 'Piece'
      },
      {
        id: 82,
        name: 'Jean Long Sleeve',
        imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
        price: 40,
        unit: 'Piece'
      },
      {
        id: 83,
        name: 'Burgundy T-shirt',
        imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
        price: 25,
        unit: 'Piece'
      }
    ]
  }
};

export default PRODUCT_DATA;