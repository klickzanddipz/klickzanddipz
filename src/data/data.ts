export type MenuItem = {
  id: string;
  name: string;
  price: number;
};

export type MenuCategory = {
  title: string;
  items: MenuItem[];
};

export type MenuSectionData = {
  id: string;
  title: string;
  image: string;
  categories: MenuCategory[];
};

export type MenuType = {
  id: string;
  title: string;
  sections: MenuSectionData[];
};

export const MENU_DATA: MenuType[] = [
  {
    id: 'food',
    title: 'Food Menu',
    sections: [
      {
        "id": "burgers",
        "title": "Burgers",
        "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
        "categories": [
          {
            "title": "Classic",
            "items": [
              {
                "id": "bu01",
                "name": "01. Classic Veg Burger",
                "price": 229
              },
              {
                "id": "bu02",
                "name": "02. Classic Chicken Burger",
                "price": 249
              }
            ]
          },
          {
            "title": "Flavoured",
            "items": [
              {
                "id": "bu03",
                "name": "03. Mexican Veg Burger",
                "price": 269
              },
              {
                "id": "bu04",
                "name": "04. Italian Veg Burger",
                "price": 269
              },
              {
                "id": "bu05",
                "name": "05. Schezwan Veg Burger",
                "price": 269
              },
              {
                "id": "bu06",
                "name": "06. Tandoori Veg Burger",
                "price": 269
              },
              {
                "id": "bu07",
                "name": "07. Mexican Chicken Burger",
                "price": 289
              },
              {
                "id": "bu08",
                "name": "08. Italian Chicken Burger",
                "price": 289
              },
              {
                "id": "bu09",
                "name": "09. Schezwan Chicken Burger",
                "price": 289
              },
              {
                "id": "bu10",
                "name": "10. Tandoori Chicken Burger",
                "price": 289
              }
            ]
          },
          {
            "title": "Momo",
            "items": [
              {
                "id": "bu11",
                "name": "11. Veg Momo Burger",
                "price": 329
              },
              {
                "id": "bu12",
                "name": "12. Schezwan Veg Momo Burger",
                "price": 329
              },
              {
                "id": "bu13",
                "name": "13. Tandoori Veg Momo Burger",
                "price": 329
              },
              {
                "id": "bu14",
                "name": "14. Mexican Veg Momo Burger",
                "price": 329
              },
              {
                "id": "bu15",
                "name": "15. Chicken Momo Burger",
                "price": 369
              },
              {
                "id": "bu16",
                "name": "16. Chicken Schezwan Momo Burger",
                "price": 369
              },
              {
                "id": "bu17",
                "name": "17. Chicken Tandoori Momo Burger",
                "price": 369
              },
              {
                "id": "bu18",
                "name": "18. Chicken Mexican Momo Burger",
                "price": 369
              }
            ]
          },
          {
            "title": "Paneer",
            "items": [
              {
                "id": "bu19",
                "name": "19. Paneer Burger",
                "price": 279
              },
              {
                "id": "bu20",
                "name": "20. Paneer Mexican Burger",
                "price": 279
              },
              {
                "id": "bu21",
                "name": "21. Paneer Italian Burger",
                "price": 279
              },
              {
                "id": "bu22",
                "name": "22. Paneer Schezwan Burger",
                "price": 279
              },
              {
                "id": "bu23",
                "name": "23. Paneer Tandoori Burger",
                "price": 279
              },
              {
                "id": "bu24",
                "name": "24. Exotic Paneer Burger",
                "price": 279
              },
              {
                "id": "bu25",
                "name": "25. Farm House Paneer Burger",
                "price": 279
              },
              {
                "id": "bu26",
                "name": "26. Jumbo Paneer Burger",
                "price": 279
              }
            ]
          },
          {
            "title": "Special",
            "items": [
              {
                "id": "bu27",
                "name": "27. Farm House Burger",
                "price": 389
              },
              {
                "id": "bu28",
                "name": "28. Exotic Veg Burger",
                "price": 389
              },
              {
                "id": "bu29",
                "name": "29. Jumbo Veg Burger",
                "price": 389
              },
              {
                "id": "bu30",
                "name": "30. Farm House Chicken Burger",
                "price": 399
              },
              {
                "id": "bu31",
                "name": "31. Exotic Chicken Burger",
                "price": 399
              },
              {
                "id": "bu32",
                "name": "32. Jumbo Chicken Burger",
                "price": 399
              },
              {
                "id": "bu33",
                "name": "33. Chicken Cheese Burger",
                "price": 399
              },
              {
                "id": "bu34",
                "name": "34. Chicken Mexican Cheese Burger",
                "price": 399
              },
              {
                "id": "bu35",
                "name": "35. Chicken Italian Cheese Burger",
                "price": 399
              },
              {
                "id": "bu36",
                "name": "36. Chicken Schezwan Cheese Burger",
                "price": 399
              },
              {
                "id": "bu37",
                "name": "37. Chicken Tandoori Cheese Burger",
                "price": 399
              },
              {
                "id": "bu38",
                "name": "38. Exotic Chicken Burger Deluxe",
                "price": 399
              },
              {
                "id": "bu39",
                "name": "39. Jumbo Chicken Supreme",
                "price": 399
              }
            ]
          }
        ]
      },
      {
        "id": "korean-noodles",
        "title": "Korean Noodles",
        "image": "https://images.unsplash.com/photo-1582878826629-29b7ad1cb431?auto=format&fit=crop&w=800&q=80",
        "categories": [
          {
            "title": "Veg",
            "items": [
              {
                "id": "ko01",
                "name": "01. Korean Ramen - Spicy Veg",
                "price": 389
              },
              {
                "id": "ko02",
                "name": "02. Korean Ramen - Spicy Kimchi",
                "price": 389
              },
              {
                "id": "ko03",
                "name": "03. Korean Ramen - Spicy 2X",
                "price": 389
              },
              {
                "id": "ko04",
                "name": "04. Korean Ramen - Creamy Cheese",
                "price": 389
              },
              {
                "id": "ko05",
                "name": "05. Korean Ramen - Cheesy Creamy",
                "price": 389
              },
              {
                "id": "ko06",
                "name": "06. Korean Ramen - Chilli Cheese",
                "price": 389
              },
              {
                "id": "ko07",
                "name": "07. Korean Ramen - Creamy Hot Sauce",
                "price": 389
              },
              {
                "id": "ko08",
                "name": "08. Korean Ramen - Creamy Masala",
                "price": 389
              },
              {
                "id": "ko09",
                "name": "09. Korean Ramen - Hot & Sauce Cheesy",
                "price": 389
              }
            ]
          },
          {
            "title": "Non-Veg",
            "items": [
              {
                "id": "ko10",
                "name": "10. Hot Chicken - Spicy",
                "price": 489
              },
              {
                "id": "ko11",
                "name": "11. Hot Chicken - Jjajang",
                "price": 489
              },
              {
                "id": "ko12",
                "name": "12. Hot Chicken - Buldak Fire",
                "price": 489
              },
              {
                "id": "ko13",
                "name": "13. Hot Chicken - Cheese",
                "price": 489
              },
              {
                "id": "ko14",
                "name": "14. Hot Chicken - Carbonara",
                "price": 489
              },
              {
                "id": "ko15",
                "name": "15. Hot Chicken - Habanero Lime",
                "price": 489
              },
              {
                "id": "ko16",
                "name": "16. Hot Chicken - Creamy Carbonara",
                "price": 489
              },
              {
                "id": "ko17",
                "name": "17. Hot Chicken - Rose",
                "price": 489
              }
            ]
          }
        ]
      },
      {
        "id": "pasta",
        "title": "Pasta",
        "image": "https://images.unsplash.com/photo-1621996311210-9113a96092b3?auto=format&fit=crop&w=800&q=80",
        "categories": [
          {
            "title": "Classic",
            "items": [
              {
                "id": "pa01",
                "name": "01. Chilli Garlic Pasta",
                "price": 389
              },
              {
                "id": "pa02",
                "name": "02. Pink Penne Pasta",
                "price": 389
              },
              {
                "id": "pa03",
                "name": "03. Red Pasta",
                "price": 389
              },
              {
                "id": "pa04",
                "name": "04. Veg Pasta",
                "price": 389
              },
              {
                "id": "pa05",
                "name": "05. White Pasta",
                "price": 389
              },
              {
                "id": "pa06",
                "name": "06. Chicken Pasta",
                "price": 429
              },
              {
                "id": "pa07",
                "name": "07. Chilli Garlic Chicken Pasta",
                "price": 429
              },
              {
                "id": "pa08",
                "name": "08. Egg Pasta",
                "price": 429
              },
              {
                "id": "pa09",
                "name": "09. Red Chicken Pasta",
                "price": 429
              },
              {
                "id": "pa10",
                "name": "10. White Chicken Pasta",
                "price": 429
              }
            ]
          },
          {
            "title": "Cheese",
            "items": [
              {
                "id": "pa11",
                "name": "11. Cheese Pasta",
                "price": 429
              },
              {
                "id": "pa12",
                "name": "12. Double Cheese Pasta",
                "price": 449
              },
              {
                "id": "pa13",
                "name": "13. Italian Corn Cheese Pasta",
                "price": 449
              },
              {
                "id": "pa14",
                "name": "14. Italian Paneer Cheese Pasta",
                "price": 449
              },
              {
                "id": "pa15",
                "name": "15. Mexican Corn Cheese Pasta",
                "price": 449
              },
              {
                "id": "pa16",
                "name": "16. Mexican Paneer Cheese Pasta",
                "price": 449
              },
              {
                "id": "pa17",
                "name": "17. Mix Cheese Pasta",
                "price": 449
              },
              {
                "id": "pa18",
                "name": "18. Schezwan Corn Cheese Pasta",
                "price": 449
              },
              {
                "id": "pa19",
                "name": "19. Schezwan Paneer Cheese Pasta",
                "price": 449
              },
              {
                "id": "pa20",
                "name": "20. Cheese Chicken Pasta",
                "price": 469
              },
              {
                "id": "pa21",
                "name": "21. Double Cheese Chicken Pasta",
                "price": 469
              },
              {
                "id": "pa22",
                "name": "22. Italian Chicken Cheese Pasta",
                "price": 469
              },
              {
                "id": "pa23",
                "name": "23. Mexican Chicken Cheese Pasta",
                "price": 469
              },
              {
                "id": "pa24",
                "name": "24. Mix Cheese Chicken Pasta",
                "price": 469
              },
              {
                "id": "pa25",
                "name": "25. Peri Peri Chicken Cheese Pasta",
                "price": 469
              },
              {
                "id": "pa26",
                "name": "26. Schezwan Chicken Cheese Pasta",
                "price": 469
              },
              {
                "id": "pa27",
                "name": "27. Tandoori Chicken Cheese Pasta",
                "price": 469
              }
            ]
          },
          {
            "title": "Baked",
            "items": [
              {
                "id": "pa28",
                "name": "28. Cheese Baked Pasta",
                "price": 479
              },
              {
                "id": "pa29",
                "name": "29. Italian Corn Cheese Baked Pasta",
                "price": 479
              },
              {
                "id": "pa30",
                "name": "30. Italian Paneer Cheese Baked Pasta",
                "price": 479
              },
              {
                "id": "pa31",
                "name": "31. Mexican Corn Cheese Baked Pasta",
                "price": 479
              },
              {
                "id": "pa32",
                "name": "32. Mexican Paneer Cheese Baked Pasta",
                "price": 479
              },
              {
                "id": "pa33",
                "name": "33. Schezwan Corn Cheese Baked Pasta",
                "price": 479
              },
              {
                "id": "pa34",
                "name": "34. Schezwan Paneer Cheese Baked Pasta",
                "price": 479
              },
              {
                "id": "pa35",
                "name": "35. Chicken Cheese Baked Pasta",
                "price": 499
              },
              {
                "id": "pa36",
                "name": "36. Italian Chicken Cheese Baked Pasta",
                "price": 499
              },
              {
                "id": "pa37",
                "name": "37. Mexican Chicken Cheese Baked Pasta",
                "price": 499
              },
              {
                "id": "pa38",
                "name": "38. Schezwan Chicken Cheese Baked Pasta",
                "price": 499
              },
              {
                "id": "pa39",
                "name": "39. Tandoori Chicken Cheese Baked Pasta",
                "price": 499
              }
            ]
          },
          {
            "title": "Signature",
            "items": [
              {
                "id": "pa40",
                "name": "40. Maggi Masala Pasta",
                "price": 449
              },
              {
                "id": "pa41",
                "name": "41. Chicken Loaded Pasta",
                "price": 469
              },
              {
                "id": "pa42",
                "name": "42. Chicken Supreme Pasta",
                "price": 489
              }
            ]
          },
          {
            "title": "Specialty",
            "items": [
              {
                "id": "pa43",
                "name": "43. Italian Corn Pasta",
                "price": 449
              },
              {
                "id": "pa44",
                "name": "44. Italian Paneer Pasta",
                "price": 449
              },
              {
                "id": "pa45",
                "name": "45. Mexican Corn Pasta",
                "price": 449
              },
              {
                "id": "pa46",
                "name": "46. Mexican Paneer Pasta",
                "price": 449
              },
              {
                "id": "pa47",
                "name": "47. Mexican Pasta",
                "price": 449
              },
              {
                "id": "pa48",
                "name": "48. Peri Peri Pasta",
                "price": 449
              },
              {
                "id": "pa49",
                "name": "49. Schezwan Corn Pasta",
                "price": 449
              },
              {
                "id": "pa50",
                "name": "50. Schezwan Paneer Pasta",
                "price": 449
              },
              {
                "id": "pa51",
                "name": "51. Tandoori Paneer Pasta",
                "price": 449
              },
              {
                "id": "pa52",
                "name": "52. Italian Chicken Pasta",
                "price": 479
              },
              {
                "id": "pa53",
                "name": "53. Mexican Chicken Pasta",
                "price": 479
              },
              {
                "id": "pa54",
                "name": "54. Peri Peri Chicken Pasta",
                "price": 479
              },
              {
                "id": "pa55",
                "name": "55. Schezwan Chicken Pasta",
                "price": 479
              },
              {
                "id": "pa56",
                "name": "56. Tandoori Chicken Pasta",
                "price": 479
              }
            ]
          }
        ]
      },
      {
        "id": "value-meals",
        "title": "Value Meals",
        "image": "https://images.unsplash.com/photo-1512152272829-e3139592d56f?auto=format&fit=crop&w=800&q=80",
        "categories": [
          {
            "title": "5+ Options",
            "items": [
              {
                "id": "ve01",
                "name": "01. Classic Start",
                "price": 289
              },
              {
                "id": "ve02",
                "name": "02. Morning Boost",
                "price": 289
              },
              {
                "id": "ve03",
                "name": "03. Sweet Sunrise",
                "price": 289
              },
              {
                "id": "ve04",
                "name": "04. Nutella Delight",
                "price": 289
              },
              {
                "id": "ve05",
                "name": "05. Chocolate Dream",
                "price": 289
              },
              {
                "id": "ve06",
                "name": "06. Peanut Power",
                "price": 289
              },
              {
                "id": "ve07",
                "name": "07. Cheesy Morning",
                "price": 289
              },
              {
                "id": "ve08",
                "name": "08. Garlic Energy",
                "price": 289
              }
            ]
          }
        ]
      },
      {
        "id": "fries",
        "title": "Fries",
        "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=800&q=80",
        "categories": [
          {
            "title": "Classic Fries",
            "items": [
              {
                "id": "fr01",
                "name": "01. Salty Fries",
                "price": 169
              },
              {
                "id": "fr02",
                "name": "02. Peri Peri Fries",
                "price": 169
              },
              {
                "id": "fr03",
                "name": "03. Cheesy Fries",
                "price": 169
              },
              {
                "id": "fr04",
                "name": "04. Cheese Masala Fries",
                "price": 169
              }
            ]
          },
          {
            "title": "Flavoured Fries",
            "items": [
              {
                "id": "fr05",
                "name": "05. Tandoori Fries",
                "price": 219
              },
              {
                "id": "fr06",
                "name": "06. Italian Fiesta Fries",
                "price": 219
              },
              {
                "id": "fr07",
                "name": "07. Mexican Fiesta Fries",
                "price": 219
              },
              {
                "id": "fr08",
                "name": "08. Schezwan Fries",
                "price": 219
              }
            ]
          },
          {
            "title": "Veg Loaded Fries",
            "items": [
              {
                "id": "fr09",
                "name": "09. Veg Loaded Fries",
                "price": 249
              },
              {
                "id": "fr10",
                "name": "10. Cheese Veg Loaded Fries",
                "price": 249
              },
              {
                "id": "fr11",
                "name": "11. Peri Peri Veg Loaded Fries",
                "price": 249
              },
              {
                "id": "fr12",
                "name": "12. Tandoori Veg Loaded Fries",
                "price": 249
              },
              {
                "id": "fr13",
                "name": "13. Italian Veg Loaded Fries",
                "price": 249
              },
              {
                "id": "fr14",
                "name": "14. Mexican Veg Loaded Fries",
                "price": 249
              },
              {
                "id": "fr15",
                "name": "15. Schezwan Veg Loaded Fries",
                "price": 249
              }
            ]
          },
          {
            "title": "Paneer Loaded Fries",
            "items": [
              {
                "id": "fr16",
                "name": "16. Paneer Loaded Fries",
                "price": 279
              },
              {
                "id": "fr17",
                "name": "17. Cheese Paneer Loaded Fries",
                "price": 279
              },
              {
                "id": "fr18",
                "name": "18. Peri Peri Paneer Loaded Fries",
                "price": 279
              },
              {
                "id": "fr19",
                "name": "19. Tandoori Paneer Loaded Fries",
                "price": 279
              },
              {
                "id": "fr20",
                "name": "20. Italian Paneer Loaded Fries",
                "price": 279
              },
              {
                "id": "fr21",
                "name": "21. Mexican Paneer Loaded Fries",
                "price": 279
              },
              {
                "id": "fr22",
                "name": "22. Schezwan Paneer Loaded Fries",
                "price": 279
              }
            ]
          },
          {
            "title": "Chicken Loaded Fries",
            "items": [
              {
                "id": "fr23",
                "name": "23. Chicken Loaded Fries",
                "price": 299
              },
              {
                "id": "fr24",
                "name": "24. Chicken Cheese Loaded Fries",
                "price": 299
              },
              {
                "id": "fr25",
                "name": "25. Peri Peri Chicken Loaded Fries",
                "price": 299
              },
              {
                "id": "fr26",
                "name": "26. Tandoori Chicken Loaded Fries",
                "price": 299
              },
              {
                "id": "fr27",
                "name": "27. Italian Chicken Loaded Fries",
                "price": 299
              },
              {
                "id": "fr28",
                "name": "28. Mexican Chicken Loaded Fries",
                "price": 299
              },
              {
                "id": "fr29",
                "name": "29. Schezwan Chicken Loaded Fries",
                "price": 299
              },
              {
                "id": "fr30",
                "name": "30. Desi Loaded Fries",
                "price": 299
              },
              {
                "id": "fr31",
                "name": "31. Ultimate Chicken Loaded Fries",
                "price": 299
              }
            ]
          },
          {
            "title": "Baked Fries",
            "items": [
              {
                "id": "fr32",
                "name": "32. Cheesy Baked Fries",
                "price": 339
              },
              {
                "id": "fr33",
                "name": "33. Cheese Masala Baked Fries",
                "price": 339
              },
              {
                "id": "fr34",
                "name": "34. Peri Peri Baked Fries",
                "price": 339
              },
              {
                "id": "fr35",
                "name": "35. Tandoori Baked Fries",
                "price": 339
              },
              {
                "id": "fr36",
                "name": "36. Italian Fiesta Baked Fries",
                "price": 339
              },
              {
                "id": "fr37",
                "name": "37. Mexican Fiesta Baked Fries",
                "price": 339
              },
              {
                "id": "fr38",
                "name": "38. Schezwan Baked Fries",
                "price": 339
              },
              {
                "id": "fr39",
                "name": "39. Veg Loaded Baked Fries",
                "price": 339
              },
              {
                "id": "fr40",
                "name": "40. Cheese Veg Loaded Baked Fries",
                "price": 339
              },
              {
                "id": "fr41",
                "name": "41. Paneer Loaded Baked Fries",
                "price": 339
              },
              {
                "id": "fr42",
                "name": "42. Cheese Paneer Baked Fries",
                "price": 339
              },
              {
                "id": "fr43",
                "name": "43. Peri Peri Paneer Baked Fries",
                "price": 339
              },
              {
                "id": "fr44",
                "name": "44. Tandoori Paneer Baked Fries",
                "price": 339
              },
              {
                "id": "fr45",
                "name": "45. Mexican Paneer Baked Fries",
                "price": 339
              },
              {
                "id": "fr46",
                "name": "46. Schezwan Paneer Baked Fries",
                "price": 339
              },
              {
                "id": "fr47",
                "name": "47. Chicken Baked Fries",
                "price": 369
              },
              {
                "id": "fr48",
                "name": "48. Chicken Cheese Baked Fries",
                "price": 369
              },
              {
                "id": "fr49",
                "name": "49. Peri Peri Chicken Baked Fries",
                "price": 369
              },
              {
                "id": "fr50",
                "name": "50. Tandoori Chicken Baked Fries",
                "price": 369
              },
              {
                "id": "fr51",
                "name": "51. Italian Chicken Baked Fries",
                "price": 369
              },
              {
                "id": "fr52",
                "name": "52. Mexican Chicken Baked Fries",
                "price": 369
              },
              {
                "id": "fr53",
                "name": "53. Schezwan Chicken Baked Fries",
                "price": 369
              },
              {
                "id": "fr54",
                "name": "54. Desi Chicken Baked Fries",
                "price": 369
              },
              {
                "id": "fr55",
                "name": "55. Ultimate Chicken Baked Fries",
                "price": 369
              }
            ]
          }
        ]
      },
      {
        "id": "garlic-bread",
        "title": "Garlic Bread",
        "image": "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?auto=format&fit=crop&w=800&q=80",
        "categories": [
          {
            "title": "Veg",
            "items": [
              {
                "id": "ga01",
                "name": "01. Garlic Bread",
                "price": 249
              },
              {
                "id": "ga02",
                "name": "02. Cheesy Garlic Bread",
                "price": 269
              },
              {
                "id": "ga03",
                "name": "03. Chilli Cheese Garlic Bread",
                "price": 289
              },
              {
                "id": "ga04",
                "name": "04. Exotic Garlic Bread",
                "price": 319
              }
            ]
          },
          {
            "title": "Non Veg",
            "items": [
              {
                "id": "ga05",
                "name": "05. Chicken Garlic Bread",
                "price": 349
              }
            ]
          }
        ]
      },
      {
        "id": "sandwiches",
        "title": "Sandwiches",
        "image": "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80",
        "categories": [
          {
            "title": "Classic Sandwich",
            "items": [
              {
                "id": "sa01",
                "name": "01. Veg Sandwich",
                "price": 199
              },
              {
                "id": "sa02",
                "name": "02. Corn Sandwich",
                "price": 199
              },
              {
                "id": "sa03",
                "name": "03. Chicken Sandwich",
                "price": 249
              },
              {
                "id": "sa04",
                "name": "04. Chicken Corn Sandwich",
                "price": 249
              },
              {
                "id": "sa05",
                "name": "05. Egg Sandwich",
                "price": 249
              }
            ]
          },
          {
            "title": "Flavoured Sandwich",
            "items": [
              {
                "id": "sa06",
                "name": "06. Italian Veg Sandwich",
                "price": 239
              },
              {
                "id": "sa07",
                "name": "07. Mexican Veg Sandwich",
                "price": 239
              },
              {
                "id": "sa08",
                "name": "08. Tandoori Veg Sandwich",
                "price": 239
              },
              {
                "id": "sa09",
                "name": "09. Schezwan Veg Sandwich",
                "price": 239
              },
              {
                "id": "sa10",
                "name": "10. Italian Chicken Sandwich",
                "price": 279
              },
              {
                "id": "sa11",
                "name": "11. Mexican Chicken Sandwich",
                "price": 279
              },
              {
                "id": "sa12",
                "name": "12. Tandoori Chicken Sandwich",
                "price": 279
              },
              {
                "id": "sa13",
                "name": "13. Schezwan Chicken Sandwich",
                "price": 279
              },
              {
                "id": "sa14",
                "name": "14. Italian Egg Sandwich",
                "price": 279
              },
              {
                "id": "sa15",
                "name": "15. Mexican Egg Sandwich",
                "price": 279
              },
              {
                "id": "sa16",
                "name": "16. Tandoori Egg Sandwich",
                "price": 279
              },
              {
                "id": "sa17",
                "name": "17. Schezwan Egg Sandwich",
                "price": 279
              }
            ]
          },
          {
            "title": "Cheese Sandwich",
            "items": [
              {
                "id": "sa18",
                "name": "18. Cheese Sandwich",
                "price": 249
              },
              {
                "id": "sa19",
                "name": "19. Veg Cheese Sandwich",
                "price": 249
              },
              {
                "id": "sa20",
                "name": "20. Corn Cheese Sandwich",
                "price": 249
              },
              {
                "id": "sa21",
                "name": "21. Double Cheese Veg Sandwich",
                "price": 249
              },
              {
                "id": "sa22",
                "name": "22. Chicken Cheese Sandwich",
                "price": 299
              },
              {
                "id": "sa23",
                "name": "23. Chicken Cheese Corn Sandwich",
                "price": 299
              },
              {
                "id": "sa24",
                "name": "24. Double Cheese Chicken Sandwich",
                "price": 299
              },
              {
                "id": "sa25",
                "name": "25. Egg Cheese Sandwich",
                "price": 299
              },
              {
                "id": "sa26",
                "name": "26. Egg Corn Cheese Sandwich",
                "price": 299
              }
            ]
          },
          {
            "title": "Paneer Sandwich",
            "items": [
              {
                "id": "sa27",
                "name": "27. Paneer Sandwich",
                "price": 299
              },
              {
                "id": "sa28",
                "name": "28. Paneer Cheese Sandwich",
                "price": 299
              },
              {
                "id": "sa29",
                "name": "29. Italian Paneer Sandwich",
                "price": 299
              },
              {
                "id": "sa30",
                "name": "30. Mexican Paneer Sandwich",
                "price": 299
              },
              {
                "id": "sa31",
                "name": "31. Tandoori Paneer Sandwich",
                "price": 299
              },
              {
                "id": "sa32",
                "name": "32. Schezwan Paneer Sandwich",
                "price": 299
              }
            ]
          },
          {
            "title": "Club & Premium Sandwich",
            "items": [
              {
                "id": "sa33",
                "name": "33. Club Veg Sandwich",
                "price": 349
              },
              {
                "id": "sa34",
                "name": "34. Club Paneer Sandwich",
                "price": 349
              },
              {
                "id": "sa35",
                "name": "35. Exotic Veg Sandwich",
                "price": 349
              },
              {
                "id": "sa36",
                "name": "36. Exotic Paneer Sandwich",
                "price": 349
              },
              {
                "id": "sa37",
                "name": "37. Club Chicken Sandwich",
                "price": 389
              },
              {
                "id": "sa38",
                "name": "38. Exotic Chicken Sandwich",
                "price": 389
              },
              {
                "id": "sa39",
                "name": "39. Club Egg Sandwich",
                "price": 389
              }
            ]
          }
        ]
      },
      {
        "id": "omelettes",
        "title": "Omelettes",
        "image": "https://images.unsplash.com/photo-1510693202936-398df9959f63?auto=format&fit=crop&w=800&q=80",
        "categories": [
          {
            "title": "Veg Omelette",
            "items": [
              {
                "id": "om01",
                "name": "01. Omelette",
                "price": 139
              },
              {
                "id": "om02",
                "name": "02. Masala Omelette",
                "price": 169
              },
              {
                "id": "om03",
                "name": "03. Bread Omelette",
                "price": 199
              },
              {
                "id": "om04",
                "name": "04. Masala Bread Omelette",
                "price": 229
              },
              {
                "id": "om05",
                "name": "05. Veg Loaded Omelette",
                "price": 229
              },
              {
                "id": "om06",
                "name": "06. Mexican Veg Bread Omelette",
                "price": 269
              },
              {
                "id": "om07",
                "name": "07. Schezwan Veg Loaded Bread Omelette",
                "price": 269
              },
              {
                "id": "om08",
                "name": "08. Italian Veg Bread Omelette",
                "price": 269
              },
              {
                "id": "om09",
                "name": "09. Cheese Bread Omelette",
                "price": 289
              },
              {
                "id": "om10",
                "name": "10. Exotic Bread Omelette",
                "price": 299
              }
            ]
          },
          {
            "title": "Non-Veg Omelette",
            "items": [
              {
                "id": "om11",
                "name": "11. Chicken Loaded Bread Omelette",
                "price": 329
              },
              {
                "id": "om12",
                "name": "12. Mexican Chicken Bread Omelette",
                "price": 369
              },
              {
                "id": "om13",
                "name": "13. Schezwan Chicken Loaded Bread Omelette",
                "price": 369
              },
              {
                "id": "om14",
                "name": "14. Italian Chicken Bread Omelette",
                "price": 369
              },
              {
                "id": "om15",
                "name": "15. Chicken Cheese Bread Omelette",
                "price": 389
              },
              {
                "id": "om16",
                "name": "16. Exotic Chicken Bread Omelette",
                "price": 399
              }
            ]
          }
        ]
      },
      {
        "id": "wraps",
        "title": "Wraps",
        "image": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80",
        "categories": [
          {
            "title": "Veg Wraps",
            "items": [
              {
                "id": "wr01",
                "name": "01. Chilli Cheese Wrap",
                "price": 289
              },
              {
                "id": "wr02",
                "name": "02. Veg Wrap",
                "price": 289
              },
              {
                "id": "wr03",
                "name": "03. Tandoori Veg Wrap",
                "price": 289
              },
              {
                "id": "wr04",
                "name": "04. Schezwan Veg Wrap",
                "price": 289
              },
              {
                "id": "wr05",
                "name": "05. Veg Cheesy Wrap",
                "price": 289
              },
              {
                "id": "wr06",
                "name": "06. Mexican Veg Wrap",
                "price": 289
              },
              {
                "id": "wr07",
                "name": "07. Italian Veg Wrap",
                "price": 289
              },
              {
                "id": "wr08",
                "name": "08. Peri Peri Veg Wrap",
                "price": 289
              }
            ]
          },
          {
            "title": "Corn Wraps",
            "items": [
              {
                "id": "wr09",
                "name": "09. Corn Wrap",
                "price": 339
              },
              {
                "id": "wr10",
                "name": "10. Corn Cheese Wrap",
                "price": 339
              },
              {
                "id": "wr11",
                "name": "11. Tandoori Corn Wrap",
                "price": 339
              },
              {
                "id": "wr12",
                "name": "12. Schezwan Corn Wrap",
                "price": 339
              },
              {
                "id": "wr13",
                "name": "13. Mexican Corn Wrap",
                "price": 339
              },
              {
                "id": "wr14",
                "name": "14. Italian Corn Wrap",
                "price": 339
              },
              {
                "id": "wr15",
                "name": "15. Peri Peri Corn Wrap",
                "price": 339
              },
              {
                "id": "wr16",
                "name": "16. Corn & Paneer Wrap",
                "price": 339
              },
              {
                "id": "wr17",
                "name": "17. Corn Chilli Cheese Wrap",
                "price": 339
              },
              {
                "id": "wr18",
                "name": "18. Corn Tandoori Paneer Wrap",
                "price": 339
              }
            ]
          },
          {
            "title": "Momo Wraps",
            "items": [
              {
                "id": "wr19",
                "name": "19. Veg Momo Wrap",
                "price": 369
              },
              {
                "id": "wr20",
                "name": "20. Chicken Momo Wrap",
                "price": 389
              },
              {
                "id": "wr21",
                "name": "21. Paneer Wrap",
                "price": 369
              },
              {
                "id": "wr22",
                "name": "22. Tandoori Paneer Wrap",
                "price": 369
              },
              {
                "id": "wr23",
                "name": "23. Schezwan Paneer Wrap",
                "price": 369
              },
              {
                "id": "wr24",
                "name": "24. Mexican Paneer Wrap",
                "price": 369
              },
              {
                "id": "wr25",
                "name": "25. Italian Paneer Wrap",
                "price": 369
              },
              {
                "id": "wr26",
                "name": "26. Peri Peri Paneer Wrap",
                "price": 369
              },
              {
                "id": "wr27",
                "name": "27. Corn Paneer Wrap",
                "price": 369
              }
            ]
          },
          {
            "title": "Chicken Wraps",
            "items": [
              {
                "id": "wr28",
                "name": "28. Chicken Wrap",
                "price": 429
              },
              {
                "id": "wr29",
                "name": "29. Schezwan Chicken Wrap",
                "price": 429
              },
              {
                "id": "wr30",
                "name": "30. Chicken Cheese Wrap",
                "price": 429
              },
              {
                "id": "wr31",
                "name": "31. Mexican Chicken Wrap",
                "price": 429
              },
              {
                "id": "wr32",
                "name": "32. Italian Chicken Wrap",
                "price": 429
              },
              {
                "id": "wr33",
                "name": "33. Peri Peri Chicken Wrap",
                "price": 429
              },
              {
                "id": "wr34",
                "name": "34. Tandoori Chicken Wrap",
                "price": 429
              },
              {
                "id": "wr35",
                "name": "35. Crispy Chicken Wrap",
                "price": 429
              }
            ]
          }
        ]
      },
      {
        "id": "momos",
        "title": "Momos",
        "image": "https://images.unsplash.com/photo-1625220194771-7eb5a29f7367?auto=format&fit=crop&w=800&q=80",
        "categories": [
          {
            "title": "Veg",
            "items": [
              {
                "id": "mo01",
                "name": "01. Veg Momo Fried (6 pcs)",
                "price": 249
              },
              {
                "id": "mo02",
                "name": "02. Schezwan Saucy Momo (5 pcs)",
                "price": 349
              },
              {
                "id": "mo03",
                "name": "03. Chilli Garlic Volcano Saucy Momo (5 pcs)",
                "price": 349
              },
              {
                "id": "mo04",
                "name": "04. Butter Masala Saucy Momo (5 pcs)",
                "price": 349
              }
            ]
          },
          {
            "title": "Non Veg",
            "items": [
              {
                "id": "mo05",
                "name": "05. Chicken Momo Fried (6 pcs)",
                "price": 349
              },
              {
                "id": "mo06",
                "name": "06. Schezwan Saucy Momo (5 pcs)",
                "price": 389
              },
              {
                "id": "mo07",
                "name": "07. Chilli Garlic Volcano Saucy Momo (5 pcs)",
                "price": 389
              },
              {
                "id": "mo08",
                "name": "08. Butter Masala Saucy Momo (5 pcs)",
                "price": 389
              }
            ]
          }
        ]
      },
      {
        "id": "bread-pizza",
        "title": "Bread Pizza",
        "image": "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=800&q=80",
        "categories": [
          {
            "title": "Veg",
            "items": [
              {
                "id": "br01",
                "name": "01. Veg Bread Pizza",
                "price": 269
              },
              {
                "id": "br02",
                "name": "02. Schezwan Veg Bread Pizza",
                "price": 289
              },
              {
                "id": "br03",
                "name": "03. Cheesy Veg Bread Pizza",
                "price": 289
              },
              {
                "id": "br04",
                "name": "04. Chilli Cheese Bread Pizza",
                "price": 289
              },
              {
                "id": "br05",
                "name": "05. Corn Cheese Bread Pizza",
                "price": 289
              },
              {
                "id": "br06",
                "name": "06. Paneer Bread Pizza",
                "price": 289
              },
              {
                "id": "br07",
                "name": "07. Exotic Veg Bread Pizza",
                "price": 289
              },
              {
                "id": "br08",
                "name": "08. Tandoori Paneer Bread Pizza",
                "price": 289
              },
              {
                "id": "br09",
                "name": "09. Mexican Veg Loaded Pizza",
                "price": 289
              }
            ]
          },
          {
            "title": "Non Veg",
            "items": [
              {
                "id": "br10",
                "name": "10. Italian Veg Loaded Pizza",
                "price": 289
              },
              {
                "id": "br11",
                "name": "11. Chicken Bread Pizza",
                "price": 299
              },
              {
                "id": "br12",
                "name": "12. Schezwan Non Veg Bread Pizza",
                "price": 339
              },
              {
                "id": "br13",
                "name": "13. Cheesy Chicken Bread Pizza",
                "price": 339
              },
              {
                "id": "br14",
                "name": "14. Tandoori Chicken Bread Pizza",
                "price": 339
              },
              {
                "id": "br15",
                "name": "15. Exotic Chicken Bread Pizza",
                "price": 339
              },
              {
                "id": "br16",
                "name": "16. Mexican Chicken Loaded Pizza",
                "price": 339
              },
              {
                "id": "br17",
                "name": "17. Italian Chicken Loaded Pizza",
                "price": 339
              }
            ]
          }
        ]
      },
      {
        "id": "make-your-own-bag",
        "title": "Make Your Own Bag",
        "image": "https://images.unsplash.com/photo-1599599811467-3e117188d3e7?auto=format&fit=crop&w=800&q=80",
        "categories": [
          {
            "title": "Veg",
            "items": [
              {
                "id": "ma01",
                "name": "01. Veg Loaded Bag",
                "price": 199
              },
              {
                "id": "ma02",
                "name": "02. Corn Loaded Bag",
                "price": 199
              },
              {
                "id": "ma03",
                "name": "03. Veg Cheese Loaded Bag",
                "price": 239
              },
              {
                "id": "ma04",
                "name": "04. Double Cheese Loaded Bag",
                "price": 269
              },
              {
                "id": "ma05",
                "name": "05. Mexican Veg Loaded Bag",
                "price": 289
              },
              {
                "id": "ma06",
                "name": "06. Italian Veg Loaded Bag",
                "price": 289
              },
              {
                "id": "ma07",
                "name": "07. Schezwan Veg Loaded Bag",
                "price": 289
              },
              {
                "id": "ma08",
                "name": "08. Exotic Veg Loaded Bag",
                "price": 299
              }
            ]
          },
          {
            "title": "Non Veg",
            "items": [
              {
                "id": "ma09",
                "name": "09. Chicken Loaded Bag",
                "price": 299
              },
              {
                "id": "ma10",
                "name": "10. Cheese Chicken Loaded Bag",
                "price": 329
              },
              {
                "id": "ma11",
                "name": "11. Mexican Chicken Loaded Bag",
                "price": 379
              },
              {
                "id": "ma12",
                "name": "12. Italian Chicken Loaded Bag",
                "price": 379
              },
              {
                "id": "ma13",
                "name": "13. Schezwan Chicken Loaded Bag",
                "price": 379
              },
              {
                "id": "ma14",
                "name": "14. Exotic Non-Veg Loaded Bag",
                "price": 399
              }
            ]
          }
        ]
      },
      {
        "id": "quick-bites",
        "title": "Quick Bites",
        "image": "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=800&q=80",
        "categories": [
          {
            "title": "Veg",
            "items": [
              {
                "id": "qu01",
                "name": "01. Veg Cutlet (3 pcs)",
                "price": 179
              },
              {
                "id": "qu02",
                "name": "02. Smiley (5 pcs)",
                "price": 189
              },
              {
                "id": "qu03",
                "name": "03. Veg Nugget (5 pcs)",
                "price": 189
              },
              {
                "id": "qu04",
                "name": "04. Cheese Ball (5 pcs)",
                "price": 219
              },
              {
                "id": "qu05",
                "name": "05. Corn Cheese Nugget (5 pcs)",
                "price": 219
              }
            ]
          },
          {
            "title": "Non Veg",
            "items": [
              {
                "id": "qu06",
                "name": "06. Chicken Nugget (5 pcs)",
                "price": 239
              },
              {
                "id": "qu07",
                "name": "07. Chicken Popcorn (8 pcs)",
                "price": 239
              },
              {
                "id": "qu08",
                "name": "08. Chicken Cutlet (3 pcs)",
                "price": 239
              },
              {
                "id": "qu09",
                "name": "09. Chicken Cheese Balls (5 pcs)",
                "price": 269
              },
              {
                "id": "qu10",
                "name": "10. Chicken Wings (3 pcs)",
                "price": 299
              },
              {
                "id": "qu11",
                "name": "11. Chicken Lollipop (3 pcs)",
                "price": 299
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "drinks",
    "title": "Drinks Menu",
    "sections": [
      {
        "id": "mojitos",
        "title": "Mojitos",
        "image": "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=800&q=80",
        "categories": [
          {
            "title": "Berry",
            "items": [
              {
                "id": "m01",
                "name": "01. Veri Beri Mojito",
                "price": 179
              },
              {
                "id": "m02",
                "name": "02. Blueberry Mojito",
                "price": 179
              },
              {
                "id": "m03",
                "name": "03. Raspberry Mojito",
                "price": 179
              },
              {
                "id": "m04",
                "name": "04. Black Currant Mojito",
                "price": 179
              },
              {
                "id": "m05",
                "name": "05. Cranberry Mojito",
                "price": 179
              },
              {
                "id": "m06",
                "name": "06. Pomegranate Mojito",
                "price": 179
              }
            ]
          },
          {
            "title": "Candy & Fun",
            "items": [
              {
                "id": "m07",
                "name": "07. Bubble Gum Mojito",
                "price": 189
              },
              {
                "id": "m08",
                "name": "08. Cotton Candy Mojito",
                "price": 189
              },
              {
                "id": "m09",
                "name": "09. Marshmallow Mojito",
                "price": 189
              },
              {
                "id": "m10",
                "name": "10. Bubble Gum & Cotton Candy Mojito",
                "price": 189
              },
              {
                "id": "m11",
                "name": "11. Marshmallow Berry Mojito",
                "price": 189
              },
              {
                "id": "m12",
                "name": "12. Cotton Candy & Strawberry Mojito",
                "price": 189
              },
              {
                "id": "m13",
                "name": "13. Bubble Gum & Blue Curacao Mojito",
                "price": 189
              }
            ]
          },
          {
            "title": "Citrus",
            "items": [
              {
                "id": "m14",
                "name": "14. Limette Mojito",
                "price": 169
              },
              {
                "id": "m15",
                "name": "15. Orange Mojito",
                "price": 169
              },
              {
                "id": "m16",
                "name": "16. Orange & Lime Mojito",
                "price": 169
              },
              {
                "id": "m17",
                "name": "17. Ginger Orange Mojito",
                "price": 169
              },
              {
                "id": "m18",
                "name": "18. Citrus Punch Mojito",
                "price": 169
              }
            ]
          },
          {
            "title": "Soft Drinks",
            "items": [
              {
                "id": "m19",
                "name": "19. Coca cola",
                "price": 179
              },
              {
                "id": "m20",
                "name": "20. Fanta",
                "price": 179
              },
              {
                "id": "m21",
                "name": "21. Sprite",
                "price": 179
              }
            ]
          },
          {
            "title": "Berry Combo",
            "items": [
              {
                "id": "m22",
                "name": "22. Pomegranate & Cranberry Mojito",
                "price": 179
              },
              {
                "id": "m23",
                "name": "23. Blueberry Raspberry Mojito",
                "price": 179
              },
              {
                "id": "m24",
                "name": "24. Blueberry Cranberry Mojito",
                "price": 179
              },
              {
                "id": "m25",
                "name": "25. Raspberry Cranberry Mojito",
                "price": 179
              },
              {
                "id": "m26",
                "name": "26. Black Currant Blueberry Mojito",
                "price": 179
              },
              {
                "id": "m27",
                "name": "27. Veri Beri & Blueberry Mojito",
                "price": 179
              },
              {
                "id": "m28",
                "name": "28. Veri Beri & Raspberry Mojito",
                "price": 179
              },
              {
                "id": "m29",
                "name": "29. Veri Beri & Cranberry Mojito",
                "price": 179
              },
              {
                "id": "m30",
                "name": "30. Veri Beri & Black Currant Mojito",
                "price": 179
              },
              {
                "id": "m31",
                "name": "31. Blueberry & Pomegranate Mojito",
                "price": 179
              },
              {
                "id": "m32",
                "name": "32. Black Currant & Cranberry Mojito",
                "price": 179
              },
              {
                "id": "m33",
                "name": "33. Black Currant & Raspberry Mojito",
                "price": 179
              },
              {
                "id": "m34",
                "name": "34. Blueberry & Pomegranate Mojito",
                "price": 179
              },
              {
                "id": "m35",
                "name": "35. Raspberry & Pomegranate Mojito",
                "price": 179
              },
              {
                "id": "m36",
                "name": "36. Cranberry & Mint Mojito",
                "price": 179
              },
              {
                "id": "m37",
                "name": "37. Berry Citrus Blast Mojito",
                "price": 179
              },
              {
                "id": "m38",
                "name": "38. Pomegranate Berry Splash Mojito",
                "price": 179
              },
              {
                "id": "m39",
                "name": "39. Mixed Berry Punch Mojito",
                "price": 179
              },
              {
                "id": "m40",
                "name": "40. Berry & Mint Blast Mojito",
                "price": 179
              },
              {
                "id": "m41",
                "name": "41. Triple Berry Twist Mojito",
                "price": 179
              },
              {
                "id": "m42",
                "name": "42. Berry Mint Fusion Mojito",
                "price": 179
              }
            ]
          },
          {
            "title": "Citrus Combo",
            "items": [
              {
                "id": "m43",
                "name": "43. Orange & Mint Mojito",
                "price": 169
              },
              {
                "id": "m44",
                "name": "44. Orange & Ginger Mint Mojito",
                "price": 169
              },
              {
                "id": "m45",
                "name": "45. Sweet Lime & Ginger Mojito",
                "price": 169
              },
              {
                "id": "m46",
                "name": "46. Citrus Cooler Mojito",
                "price": 169
              }
            ]
          },
          {
            "title": "Classic",
            "items": [
              {
                "id": "m47",
                "name": "47. Sweet Lime Soda",
                "price": 169
              },
              {
                "id": "m48",
                "name": "48. Sweet & Salt Soda",
                "price": 169
              },
              {
                "id": "m49",
                "name": "49. Sweet Soda",
                "price": 169
              },
              {
                "id": "m50",
                "name": "50. Salt Soda",
                "price": 169
              },
              {
                "id": "m51",
                "name": "51. Kala Khatta Mojito",
                "price": 169
              },
              {
                "id": "m52",
                "name": "52. Red Rose Mojito",
                "price": 169
              },
              {
                "id": "m53",
                "name": "53. Ginger & Lime Mojito",
                "price": 169
              },
              {
                "id": "m54",
                "name": "54. Mint & Lime Mojito",
                "price": 169
              },
              {
                "id": "m55",
                "name": "55. Jaljeera Soda",
                "price": 169
              },
              {
                "id": "m56",
                "name": "56. Original Mojito",
                "price": 169
              },
              {
                "id": "m57",
                "name": "57. Kala Khatta & Lime Mojito",
                "price": 169
              },
              {
                "id": "m58",
                "name": "58. Ginger Mint Punch Mojito",
                "price": 169
              }
            ]
          },
          {
            "title": "Classic Twist",
            "items": [
              {
                "id": "m59",
                "name": "59. Kala Khatta & Mint Mojito",
                "price": 169
              },
              {
                "id": "m60",
                "name": "60. Jaljeera & Lime Mojito",
                "price": 169
              },
              {
                "id": "m61",
                "name": "61. Ginger Jaljeera Mojito",
                "price": 169
              },
              {
                "id": "m62",
                "name": "62. Ginger Kala Khatta Mojito",
                "price": 169
              },
              {
                "id": "m63",
                "name": "63. Rose & Lime Mojito",
                "price": 169
              },
              {
                "id": "m64",
                "name": "64. Rose & Mint Mojito",
                "price": 169
              },
              {
                "id": "m65",
                "name": "65. Rose Ginger Mojito",
                "price": 169
              },
              {
                "id": "m66",
                "name": "66. Original Berry Mojito",
                "price": 169
              },
              {
                "id": "m67",
                "name": "67. Original Tropical Mojito",
                "price": 169
              },
              {
                "id": "m68",
                "name": "68. Honey Lemon Mojito",
                "price": 169
              },
              {
                "id": "m69",
                "name": "69. Honey Mint Mojito",
                "price": 169
              }
            ]
          },
          {
            "title": "Fruit Combo",
            "items": [
              {
                "id": "m70",
                "name": "70. Chickoo Banana Mojito",
                "price": 179
              },
              {
                "id": "m71",
                "name": "71. Orange Pineapple Mojito",
                "price": 179
              },
              {
                "id": "m72",
                "name": "72. Watermelon Mint Mojito",
                "price": 179
              },
              {
                "id": "m73",
                "name": "73. Green Apple & Lime Mojito",
                "price": 179
              },
              {
                "id": "m74",
                "name": "74. Muskmelon Watermelon Mojito",
                "price": 179
              },
              {
                "id": "m75",
                "name": "75. Banana Strawberry Mojito",
                "price": 179
              },
              {
                "id": "m76",
                "name": "76. Jamun Guava Mojito",
                "price": 179
              },
              {
                "id": "m77",
                "name": "77. Mixed Fruit Mojito",
                "price": 179
              },
              {
                "id": "m78",
                "name": "78. Mango Pineapple Mojito",
                "price": 179
              },
              {
                "id": "m79",
                "name": "79. Mango Passion Fruit Mojito",
                "price": 179
              },
              {
                "id": "m80",
                "name": "80. Kiwi Pineapple Mojito",
                "price": 179
              },
              {
                "id": "m81",
                "name": "81. Litchi Pineapple Mojito",
                "price": 179
              },
              {
                "id": "m82",
                "name": "82. Kiwi & Mint Mojito",
                "price": 179
              },
              {
                "id": "m83",
                "name": "83. Guava & Mint Mojito",
                "price": 179
              },
              {
                "id": "m84",
                "name": "84. Jamun & Mint Mojito",
                "price": 179
              },
              {
                "id": "m85",
                "name": "85. Passion Fruit & Pineapple Mojito",
                "price": 179
              },
              {
                "id": "m86",
                "name": "86. Kiwi & Passion Fruit Mojito",
                "price": 179
              },
              {
                "id": "m87",
                "name": "87. Mango Strawberry Mojito",
                "price": 179
              },
              {
                "id": "m88",
                "name": "88. Guava Pineapple Mojito",
                "price": 179
              },
              {
                "id": "m89",
                "name": "89. Mango & Guava Mojito",
                "price": 179
              },
              {
                "id": "m90",
                "name": "90. Mango & Litchi Mojito",
                "price": 179
              },
              {
                "id": "m91",
                "name": "91. Mango & Watermelon Mojito",
                "price": 179
              },
              {
                "id": "m92",
                "name": "92. Mango & Peach Mojito",
                "price": 179
              },
              {
                "id": "m93",
                "name": "93. Mango & Jamun Mojito",
                "price": 179
              },
              {
                "id": "m94",
                "name": "94. Kiwi & Strawberry Mojito",
                "price": 179
              },
              {
                "id": "m95",
                "name": "95. Kiwi & Watermelon Mojito",
                "price": 179
              },
              {
                "id": "m96",
                "name": "96. Kiwi & Guava Mojito",
                "price": 179
              },
              {
                "id": "m97",
                "name": "97. Kiwi & Peach Mojito",
                "price": 179
              },
              {
                "id": "m98",
                "name": "98. Kiwi & Litchi Mojito",
                "price": 179
              },
              {
                "id": "m99",
                "name": "99. Strawberry & Litchi Mojito",
                "price": 179
              },
              {
                "id": "m100",
                "name": "100. Strawberry & Peach Mojito",
                "price": 179
              },
              {
                "id": "m101",
                "name": "101. Strawberry & Guava Mojito",
                "price": 179
              },
              {
                "id": "m102",
                "name": "102. Strawberry & Passion Fruit Mojito",
                "price": 179
              },
              {
                "id": "m103",
                "name": "103. Pineapple & Watermelon Mojito",
                "price": 179
              },
              {
                "id": "m104",
                "name": "104. Pineapple & Peach Mojito",
                "price": 179
              },
              {
                "id": "m105",
                "name": "105. Pineapple & Guava Mojito",
                "price": 179
              },
              {
                "id": "m106",
                "name": "106. Pineapple & Pomegranate Mojito",
                "price": 179
              },
              {
                "id": "m107",
                "name": "107. Watermelon & Litchi Mojito",
                "price": 179
              },
              {
                "id": "m108",
                "name": "108. Watermelon & Passion Fruit Mojito",
                "price": 179
              },
              {
                "id": "m109",
                "name": "109. Guava & Passion Fruit Mojito",
                "price": 179
              },
              {
                "id": "m110",
                "name": "110. Guava & Pomegranate Mojito",
                "price": 179
              },
              {
                "id": "m111",
                "name": "111. Jamun & Strawberry Mojito",
                "price": 179
              },
              {
                "id": "m112",
                "name": "112. Jamun & Pineapple Mojito",
                "price": 179
              },
              {
                "id": "m113",
                "name": "113. Peach & Passion Fruit Mojito",
                "price": 179
              },
              {
                "id": "m114",
                "name": "114. Peach & Litchi Mojito",
                "price": 179
              },
              {
                "id": "m115",
                "name": "115. Green Apple & Kiwi Mojito",
                "price": 179
              },
              {
                "id": "m116",
                "name": "116. Green Apple & Strawberry Mojito",
                "price": 179
              },
              {
                "id": "m117",
                "name": "117. Green Apple & Mango Mojito",
                "price": 179
              },
              {
                "id": "m118",
                "name": "118. Green Apple & Pineapple Mojito",
                "price": 179
              },
              {
                "id": "m119",
                "name": "119. Green Apple & Guava Mojito",
                "price": 179
              },
              {
                "id": "m120",
                "name": "120. Grape & Kiwi Mojito",
                "price": 179
              },
              {
                "id": "m121",
                "name": "121. Grape & Strawberry Mojito",
                "price": 179
              },
              {
                "id": "m122",
                "name": "122. Grape & Pineapple Mojito",
                "price": 179
              },
              {
                "id": "m123",
                "name": "123. Grape & Mango Mojito",
                "price": 179
              },
              {
                "id": "m124",
                "name": "124. Banana & Mango Mojito",
                "price": 179
              },
              {
                "id": "m125",
                "name": "125. Banana & Pineapple Mojito",
                "price": 179
              },
              {
                "id": "m126",
                "name": "126. Banana & Kiwi Mojito",
                "price": 179
              },
              {
                "id": "m127",
                "name": "127. Chickoo & Mango Mojito",
                "price": 179
              },
              {
                "id": "m128",
                "name": "128. Chickoo & Strawberry Mojito",
                "price": 179
              }
            ]
          },
          {
            "title": "Fruit",
            "items": [
              {
                "id": "m129",
                "name": "129. Grape Mojito",
                "price": 179
              },
              {
                "id": "m130",
                "name": "130. Green Apple Mojito",
                "price": 179
              },
              {
                "id": "m131",
                "name": "131. Chickoo Mojito Mojito",
                "price": 179
              },
              {
                "id": "m132",
                "name": "132. Muskmelon Mojito",
                "price": 179
              },
              {
                "id": "m133",
                "name": "133. Banana Mojito Mojito",
                "price": 179
              },
              {
                "id": "m134",
                "name": "134. Kiwi Mojito",
                "price": 179
              },
              {
                "id": "m135",
                "name": "135. Watermelon Mojito",
                "price": 179
              },
              {
                "id": "m136",
                "name": "136. Pineapple Mojito",
                "price": 179
              },
              {
                "id": "m137",
                "name": "137. Mango Mojito",
                "price": 179
              },
              {
                "id": "m138",
                "name": "138. Strawberry Mojito",
                "price": 179
              },
              {
                "id": "m139",
                "name": "139. Litchi Mojito",
                "price": 179
              },
              {
                "id": "m140",
                "name": "140. Peach Mocktail Mojito",
                "price": 179
              },
              {
                "id": "m141",
                "name": "141. Jamun Mojito",
                "price": 179
              },
              {
                "id": "m142",
                "name": "142. Guava Mojito",
                "price": 179
              },
              {
                "id": "m143",
                "name": "143. Passion Fruit Mojito",
                "price": 179
              }
            ]
          },
          {
            "title": "Tropical",
            "items": [
              {
                "id": "m144",
                "name": "144. Coconut Mojito",
                "price": 179
              },
              {
                "id": "m145",
                "name": "145. Coconut Lime Mojito",
                "price": 179
              },
              {
                "id": "m146",
                "name": "146. Coconut Pineapple Mojito",
                "price": 179
              }
            ]
          },
          {
            "title": "Exotic",
            "items": [
              {
                "id": "m147",
                "name": "147. Blue Curacao Mojito",
                "price": 219
              },
              {
                "id": "m148",
                "name": "148. Red Curacao Mojito",
                "price": 219
              },
              {
                "id": "m149",
                "name": "149. Triple Sec Mojito",
                "price": 219
              },
              {
                "id": "m150",
                "name": "150. Pina Colada Mojito",
                "price": 219
              },
              {
                "id": "m151",
                "name": "151. Triple Sec & Cranberry Mojito",
                "price": 219
              },
              {
                "id": "m152",
                "name": "152. Triple Sec & Lime Mojito",
                "price": 219
              },
              {
                "id": "m153",
                "name": "153. Triple Sec & Orange Mojito",
                "price": 219
              },
              {
                "id": "m154",
                "name": "154. Blue Curacao & Strawberry Mojito",
                "price": 219
              },
              {
                "id": "m155",
                "name": "155. Red Curacao & Orange Mojito",
                "price": 219
              },
              {
                "id": "m156",
                "name": "156. Blue Curacao & Pineapple Mojito",
                "price": 219
              }
            ]
          },
          {
            "title": "Exotic Combo",
            "items": [
              {
                "id": "m157",
                "name": "157. Blue Curacao & Kiwi Mojito",
                "price": 219
              },
              {
                "id": "m158",
                "name": "158. Blue Curacao & Mango Mojito",
                "price": 219
              },
              {
                "id": "m159",
                "name": "159. Blue Curacao & Passion Fruit Mojito",
                "price": 219
              },
              {
                "id": "m160",
                "name": "160. Blue Curacao & Litchi Mojito",
                "price": 219
              },
              {
                "id": "m161",
                "name": "161. Blue Curacao & Green Apple Mojito",
                "price": 219
              },
              {
                "id": "m162",
                "name": "162. Red Curacao & Pineapple Mojito",
                "price": 219
              },
              {
                "id": "m163",
                "name": "163. Red Curacao & Strawberry Mojito",
                "price": 219
              },
              {
                "id": "m164",
                "name": "164. Red Curacao & Mango Mojito",
                "price": 219
              },
              {
                "id": "m165",
                "name": "165. Triple Sec & Orange Mojito",
                "price": 219
              },
              {
                "id": "m166",
                "name": "166. Triple Sec & Pineapple Mojito",
                "price": 219
              },
              {
                "id": "m167",
                "name": "167. Triple Sec & Passion Fruit Mojito",
                "price": 219
              },
              {
                "id": "m168",
                "name": "168. Triple Sec & Mango Mojito",
                "price": 219
              },
              {
                "id": "m169",
                "name": "169. Triple Sec & Kiwi Mojito",
                "price": 219
              },
              {
                "id": "m170",
                "name": "170. Blue Curacao Tropical Mojito",
                "price": 219
              },
              {
                "id": "m171",
                "name": "171. Sunset Splash Mojito",
                "price": 219
              },
              {
                "id": "m172",
                "name": "172. Rose Lychee Mojito",
                "price": 219
              }
            ]
          },
          {
            "title": "Traditional",
            "items": [
              {
                "id": "m173",
                "name": "173. Sarbathi",
                "price": 179
              },
              {
                "id": "m174",
                "name": "174. Jaljeera & Mint Mojito",
                "price": 179
              },
              {
                "id": "m175",
                "name": "175. Panha Mojito (Raw Mango)",
                "price": 179
              },
              {
                "id": "m176",
                "name": "176. Kuluki Sarbath",
                "price": 179
              },
              {
                "id": "m177",
                "name": "177. Panha & Mint Mojito",
                "price": 179
              },
              {
                "id": "m178",
                "name": "178. Paan Shot Mojito",
                "price": 179
              }
            ]
          },
          {
            "title": "Signature",
            "items": [
              {
                "id": "m179",
                "name": "179. Blue Lagoon Mojito",
                "price": 219
              },
              {
                "id": "m180",
                "name": "180. Galaxy Mojito",
                "price": 219
              },
              {
                "id": "m181",
                "name": "181. Rainbow Mojito",
                "price": 219
              },
              {
                "id": "m182",
                "name": "182. Sunset Mojito",
                "price": 219
              },
              {
                "id": "m183",
                "name": "183. Ocean Breeze Mojito",
                "price": 219
              },
              {
                "id": "m184",
                "name": "184. Emerald Mint Mojito",
                "price": 219
              },
              {
                "id": "m185",
                "name": "185. Tropical Sunrise Mojito",
                "price": 219
              },
              {
                "id": "m186",
                "name": "186. Paradise Punch Mojito",
                "price": 219
              }
            ]
          },
          {
            "title": "Premium Fruit Combo",
            "items": [
              {
                "id": "m187",
                "name": "187. Kiwi Strawberry Mojito",
                "price": 179
              },
              {
                "id": "m188",
                "name": "188. Blueberry Kiwi Mojito",
                "price": 179
              },
              {
                "id": "m189",
                "name": "189. Peach Passion Mojito",
                "price": 179
              }
            ]
          },
          {
            "title": "Spicy",
            "items": [
              {
                "id": "m190",
                "name": "190. Chilli Mojito",
                "price": 179
              },
              {
                "id": "m191",
                "name": "191. Chilli Mango Mojito",
                "price": 179
              },
              {
                "id": "m192",
                "name": "192. Chilli Pineapple Mojito",
                "price": 179
              },
              {
                "id": "m193",
                "name": "193. Chilli Guava Mojito",
                "price": 179
              }
            ]
          }
        ]
      },
      {
        "id": "milkshakes",
        "title": "Milkshakes",
        "image": "https://images.unsplash.com/photo-1572490122747-3968b75bb875?auto=format&fit=crop&w=800&q=80",
        "categories": [
          {
            "title": "Berry",
            "items": [
              {
                "id": "s01",
                "name": "01. Black Currant Shake",
                "price": 249
              },
              {
                "id": "s02",
                "name": "02. Cranberry Shake",
                "price": 249
              },
              {
                "id": "s03",
                "name": "03. Blueberry Shake",
                "price": 249
              },
              {
                "id": "s04",
                "name": "04. Very Berry Shake",
                "price": 249
              },
              {
                "id": "s05",
                "name": "05. Blueberry Strawberry Shake",
                "price": 249
              },
              {
                "id": "s06",
                "name": "06. Cranberry Strawberry Shake",
                "price": 249
              },
              {
                "id": "s07",
                "name": "07. Cranberry Blueberry Shake",
                "price": 249
              },
              {
                "id": "s08",
                "name": "08. Raspberry Strawberry Shake",
                "price": 249
              },
              {
                "id": "s09",
                "name": "09. Mixed Berry Shake",
                "price": 249
              },
              {
                "id": "s10",
                "name": "10. Berry Blast Shake",
                "price": 249
              }
            ]
          },
          {
            "title": "Caramel",
            "items": [
              {
                "id": "s11",
                "name": "11. Caramel Banana Shake",
                "price": 249
              },
              {
                "id": "s12",
                "name": "12. Caramel Cold Coffee",
                "price": 249
              },
              {
                "id": "s13",
                "name": "13. Caramel Chocolate Shake",
                "price": 249
              }
            ]
          },
          {
            "title": "Classic",
            "items": [
              {
                "id": "s14",
                "name": "14. Vanilla Shake",
                "price": 209
              },
              {
                "id": "s15",
                "name": "15. Butterscotch Shake",
                "price": 209
              },
              {
                "id": "s16",
                "name": "16. Rose Shake",
                "price": 209
              },
              {
                "id": "s17",
                "name": "17. Custard Shake",
                "price": 209
              },
              {
                "id": "s18",
                "name": "18. Vanilla Cold Coffee",
                "price": 209
              },
              {
                "id": "s19",
                "name": "19. Vanilla Caramel Shake",
                "price": 209
              },
              {
                "id": "s20",
                "name": "20. Vanilla Strawberry Shake",
                "price": 209
              },
              {
                "id": "s21",
                "name": "21. Vanilla Blueberry Shake",
                "price": 209
              },
              {
                "id": "s22",
                "name": "22. Honey Vanilla Shake",
                "price": 209
              }
            ]
          },
          {
            "title": "Chocolate",
            "items": [
              {
                "id": "s23",
                "name": "23. Chocolate Shake",
                "price": 239
              },
              {
                "id": "s24",
                "name": "24. Oreo Shake",
                "price": 239
              },
              {
                "id": "s25",
                "name": "25. Chocolate Chip Shake",
                "price": 239
              },
              {
                "id": "s26",
                "name": "26. Snickers Shake",
                "price": 239
              },
              {
                "id": "s27",
                "name": "27. KitKat Shake",
                "price": 239
              },
              {
                "id": "s28",
                "name": "28. Chocolate Banana Shake",
                "price": 239
              },
              {
                "id": "s29",
                "name": "29. Chocolate Strawberry Shake",
                "price": 239
              },
              {
                "id": "s30",
                "name": "30. Oreo Banana Shake",
                "price": 239
              },
              {
                "id": "s31",
                "name": "31. Oreo Strawberry Shake",
                "price": 239
              },
              {
                "id": "s32",
                "name": "32. Double Chocolate Shake",
                "price": 239
              },
              {
                "id": "s33",
                "name": "33. Chocolate Blueberry Shake",
                "price": 239
              },
              {
                "id": "s34",
                "name": "34. KitKat Oreo Shake",
                "price": 239
              },
              {
                "id": "s35",
                "name": "35. Caramel KitKat Shake",
                "price": 239
              },
              {
                "id": "s36",
                "name": "36. KitKat Oreo Chocolate Shake",
                "price": 239
              },
              {
                "id": "s37",
                "name": "37. Snickers Oreo Shake",
                "price": 239
              },
              {
                "id": "s38",
                "name": "38. Chocolate Passion Fruit Shake",
                "price": 239
              },
              {
                "id": "s39",
                "name": "39. Chocolate Cherry Shake",
                "price": 239
              },
              {
                "id": "s40",
                "name": "40. Oreo Blueberry Shake",
                "price": 239
              },
              {
                "id": "s41",
                "name": "41. Oreo Cherry Shake",
                "price": 239
              },
              {
                "id": "s42",
                "name": "42. Oreo Mango Shake",
                "price": 239
              },
              {
                "id": "s43",
                "name": "43. Snickers Chocolate Shake",
                "price": 239
              },
              {
                "id": "s44",
                "name": "44. Chocolate Caramel Banana Shake",
                "price": 239
              },
              {
                "id": "s45",
                "name": "45. KitKat Banana Chocolate Shake",
                "price": 239
              },
              {
                "id": "s46",
                "name": "46. KitKat Strawberry Chocolate Shake",
                "price": 239
              }
            ]
          },
          {
            "title": "Coffee",
            "items": [
              {
                "id": "s47",
                "name": "47. Cold Coffee",
                "price": 249
              },
              {
                "id": "s48",
                "name": "48. Oreo Cold Coffee",
                "price": 249
              },
              {
                "id": "s49",
                "name": "49. KitKat Cold Coffee",
                "price": 249
              },
              {
                "id": "s50",
                "name": "50. Snickers Cold Coffee",
                "price": 249
              },
              {
                "id": "s51",
                "name": "51. Chocolate Cold Coffee",
                "price": 249
              },
              {
                "id": "s52",
                "name": "52. Hazelnut Cold Coffee Shake",
                "price": 249
              }
            ]
          },
          {
            "title": "Fruit",
            "items": [
              {
                "id": "s53",
                "name": "53. Grape Shake",
                "price": 249
              },
              {
                "id": "s54",
                "name": "54. Chickoo Shake",
                "price": 249
              },
              {
                "id": "s55",
                "name": "55. Guava Shake",
                "price": 249
              },
              {
                "id": "s56",
                "name": "56. Green Apple Shake",
                "price": 249
              },
              {
                "id": "s57",
                "name": "57. Jamun Shake",
                "price": 249
              },
              {
                "id": "s58",
                "name": "58. Banana Shake",
                "price": 249
              },
              {
                "id": "s59",
                "name": "59. Muskmelon Shake",
                "price": 249
              },
              {
                "id": "s60",
                "name": "60. Pineapple Shake",
                "price": 249
              },
              {
                "id": "s61",
                "name": "61. Litchi Shake",
                "price": 249
              },
              {
                "id": "s62",
                "name": "62. Mango Shake",
                "price": 249
              },
              {
                "id": "s63",
                "name": "63. Strawberry Shake",
                "price": 249
              },
              {
                "id": "s64",
                "name": "64. Passion Fruit Shake",
                "price": 249
              },
              {
                "id": "s65",
                "name": "65. Mixed Fruit Shake",
                "price": 249
              },
              {
                "id": "s66",
                "name": "66. Kiwi Shake",
                "price": 249
              },
              {
                "id": "s67",
                "name": "67. Cherry Shake",
                "price": 249
              }
            ]
          },
          {
            "title": "Nutella Special",
            "items": [
              {
                "id": "s68",
                "name": "68. Nutella Cold Coffee",
                "price": 299
              },
              {
                "id": "s69",
                "name": "69. Nutella Berry Shake",
                "price": 299
              },
              {
                "id": "s70",
                "name": "70. Nutella Banana Shake",
                "price": 299
              },
              {
                "id": "s71",
                "name": "71. Nutella Strawberry Shake",
                "price": 299
              },
              {
                "id": "s72",
                "name": "72. Nutella Snickers Shake",
                "price": 299
              },
              {
                "id": "s73",
                "name": "73. Nutella Oreo Shake",
                "price": 299
              },
              {
                "id": "s74",
                "name": "74. Nutella KitKat Shake",
                "price": 299
              },
              {
                "id": "s75",
                "name": "75. Nutella Hazelnut Shake",
                "price": 299
              },
              {
                "id": "s76",
                "name": "76. Nutella Chocolate Shake",
                "price": 299
              },
              {
                "id": "s77",
                "name": "77. Nutella Blueberry Shake",
                "price": 299
              },
              {
                "id": "s78",
                "name": "78. Nutella Cherry Shake",
                "price": 299
              }
            ]
          },
          {
            "title": "Fruit Combo",
            "items": [
              {
                "id": "s79",
                "name": "79. Chickoo Banana Shake",
                "price": 249
              },
              {
                "id": "s80",
                "name": "80. Muskmelon Banana Shake",
                "price": 249
              },
              {
                "id": "s81",
                "name": "81. Custard Banana Shake",
                "price": 249
              },
              {
                "id": "s82",
                "name": "82. Pineapple Banana Shake",
                "price": 249
              },
              {
                "id": "s83",
                "name": "83. Guava Pineapple Shake",
                "price": 249
              },
              {
                "id": "s84",
                "name": "84. Jamun Grape Shake",
                "price": 249
              },
              {
                "id": "s85",
                "name": "85. Mango Banana Shake",
                "price": 249
              },
              {
                "id": "s86",
                "name": "86. Strawberry Banana Shake",
                "price": 249
              },
              {
                "id": "s87",
                "name": "87. Mango Pineapple Shake",
                "price": 249
              },
              {
                "id": "s88",
                "name": "88. Honey Banana Shake",
                "price": 249
              },
              {
                "id": "s89",
                "name": "89. Mango Strawberry Shake",
                "price": 249
              },
              {
                "id": "s90",
                "name": "90. Litchi Mango Shake",
                "price": 249
              },
              {
                "id": "s91",
                "name": "91. Cherry Strawberry Shake",
                "price": 249
              },
              {
                "id": "s92",
                "name": "92. Kiwi Strawberry Shake",
                "price": 249
              },
              {
                "id": "s93",
                "name": "93. Mango Passion Fruit Shake",
                "price": 249
              },
              {
                "id": "s94",
                "name": "94. Mango Kiwi Shake",
                "price": 249
              },
              {
                "id": "s95",
                "name": "95. Mango Cherry Shake",
                "price": 249
              },
              {
                "id": "s96",
                "name": "96. Pineapple Strawberry Shake",
                "price": 249
              },
              {
                "id": "s97",
                "name": "97. Pineapple Kiwi Shake",
                "price": 249
              },
              {
                "id": "s98",
                "name": "98. Pineapple Passion Fruit Shake",
                "price": 249
              },
              {
                "id": "s99",
                "name": "99. Guava Mango Shake",
                "price": 249
              },
              {
                "id": "s100",
                "name": "100. Guava Strawberry Shake",
                "price": 249
              },
              {
                "id": "s101",
                "name": "101. Guava Kiwi Shake",
                "price": 249
              },
              {
                "id": "s102",
                "name": "102. Kiwi Banana Shake",
                "price": 249
              },
              {
                "id": "s103",
                "name": "103. Cherry Banana Shake",
                "price": 249
              },
              {
                "id": "s104",
                "name": "104. Cherry Mango Shake",
                "price": 249
              },
              {
                "id": "s105",
                "name": "105. Passion Fruit Banana Shake",
                "price": 249
              },
              {
                "id": "s106",
                "name": "106. Passion Fruit Strawberry Shake",
                "price": 249
              },
              {
                "id": "s107",
                "name": "107. Passion Fruit Kiwi Shake",
                "price": 249
              }
            ]
          },
          {
            "title": "Nut / Dry Fruit",
            "items": [
              {
                "id": "s108",
                "name": "108. Pista Shake",
                "price": 279
              },
              {
                "id": "s109",
                "name": "109. Kesar Badam Shake",
                "price": 279
              },
              {
                "id": "s110",
                "name": "110. Kesar Pista Shake",
                "price": 279
              },
              {
                "id": "s111",
                "name": "111. Honey Pista Shake",
                "price": 279
              },
              {
                "id": "s112",
                "name": "112. Badam Pista Shake",
                "price": 279
              },
              {
                "id": "s113",
                "name": "113. Honey Almond Shake",
                "price": 279
              }
            ]
          },
          {
            "title": "Fruit Kulfi Special",
            "items": [
              {
                "id": "s114",
                "name": "114. Mango Kesar Kulfi Shake",
                "price": 289
              },
              {
                "id": "s115",
                "name": "115. Mango Badam Kulfi Shake",
                "price": 289
              },
              {
                "id": "s116",
                "name": "116. Mango Pista Kulfi Shake",
                "price": 289
              },
              {
                "id": "s117",
                "name": "117. Mango Rose Kulfi Shake",
                "price": 289
              },
              {
                "id": "s118",
                "name": "118. Strawberry Kulfi Shake",
                "price": 289
              },
              {
                "id": "s119",
                "name": "119. Strawberry Kesar Kulfi Shake",
                "price": 289
              },
              {
                "id": "s120",
                "name": "120. Strawberry Pista Kulfi Shake",
                "price": 289
              },
              {
                "id": "s121",
                "name": "121. Strawberry Badam Kulfi Shake",
                "price": 289
              },
              {
                "id": "s122",
                "name": "122. Banana Kesar Kulfi Shake",
                "price": 289
              },
              {
                "id": "s123",
                "name": "123. Banana Pista Kulfi Shake",
                "price": 289
              },
              {
                "id": "s124",
                "name": "124. Banana Badam Kulfi Shake",
                "price": 289
              },
              {
                "id": "s125",
                "name": "125. Chickoo Kulfi Shake",
                "price": 289
              },
              {
                "id": "s126",
                "name": "126. Chickoo Badam Kulfi Shake",
                "price": 289
              },
              {
                "id": "s127",
                "name": "127. Chickoo Pista Kulfi Shake",
                "price": 289
              },
              {
                "id": "s128",
                "name": "128. Chickoo Banana Kulfi Shake",
                "price": 289
              },
              {
                "id": "s129",
                "name": "129. Litchi Kulfi Shake",
                "price": 289
              },
              {
                "id": "s130",
                "name": "130. Litchi Rose Kulfi Shake",
                "price": 289
              },
              {
                "id": "s131",
                "name": "131. Litchi Kesar Kulfi Shake",
                "price": 289
              },
              {
                "id": "s132",
                "name": "132. Pineapple Kesar Kulfi Shake",
                "price": 289
              },
              {
                "id": "s133",
                "name": "133. Guava Kulfi Shake",
                "price": 289
              },
              {
                "id": "s134",
                "name": "134. Guava Rose Kulfi Shake",
                "price": 289
              },
              {
                "id": "s135",
                "name": "135. Kiwi Kulfi Shake",
                "price": 289
              },
              {
                "id": "s136",
                "name": "136. Kiwi Strawberry Kulfi Shake",
                "price": 289
              },
              {
                "id": "s137",
                "name": "137. Kiwi Mango Kulfi Shake",
                "price": 289
              },
              {
                "id": "s138",
                "name": "138. Cherry Kulfi Shake",
                "price": 289
              },
              {
                "id": "s139",
                "name": "139. Cherry Strawberry Kulfi Shake",
                "price": 289
              },
              {
                "id": "s140",
                "name": "140. Mixed Fruit Kulfi Shake",
                "price": 289
              },
              {
                "id": "s141",
                "name": "141. Passion Fruit Kulfi Shake",
                "price": 289
              },
              {
                "id": "s142",
                "name": "142. Passion Fruit Mango Kulfi Shake",
                "price": 289
              }
            ]
          },
          {
            "title": "Tropical Kulfi Special",
            "items": [
              {
                "id": "s143",
                "name": "143. Pineapple Kulfi Shake",
                "price": 289
              },
              {
                "id": "s144",
                "name": "144. Pineapple Coconut Kulfi Shake",
                "price": 289
              },
              {
                "id": "s145",
                "name": "145. Coconut Mango Kulfi Shake",
                "price": 289
              },
              {
                "id": "s146",
                "name": "146. Coconut Strawberry Kulfi Shake",
                "price": 289
              },
              {
                "id": "s147",
                "name": "147. Coconut Litchi Kulfi Shake",
                "price": 289
              }
            ]
          },
          {
            "title": "Traditional",
            "items": [
              {
                "id": "s148",
                "name": "148. Rasmalai Shake",
                "price": 249
              },
              {
                "id": "s149",
                "name": "149. Kesar Shake",
                "price": 249
              },
              {
                "id": "s150",
                "name": "150. Kulfi Shake",
                "price": 249
              },
              {
                "id": "s151",
                "name": "151. Kesar Kulfi Shake",
                "price": 249
              },
              {
                "id": "s152",
                "name": "152. Pista Kulfi Shake",
                "price": 249
              },
              {
                "id": "s153",
                "name": "153. Kesar Rasmalai Shake",
                "price": 249
              },
              {
                "id": "s154",
                "name": "154. Rose Pistachio Shake",
                "price": 249
              },
              {
                "id": "s155",
                "name": "155. Rose Badam Shake",
                "price": 249
              },
              {
                "id": "s156",
                "name": "156. Mango Kulfi Shake",
                "price": 249
              },
              {
                "id": "s157",
                "name": "157. Rose Vanilla Shake",
                "price": 249
              },
              {
                "id": "s158",
                "name": "158. Rose Kesar Shake",
                "price": 249
              },
              {
                "id": "s159",
                "name": "159. Rose Kulfi Shake",
                "price": 249
              },
              {
                "id": "s160",
                "name": "160. Badam Kulfi Shake",
                "price": 249
              },
              {
                "id": "s161",
                "name": "161. Pista Rasmalai Shake",
                "price": 249
              }
            ]
          },
          {
            "title": "Premium",
            "items": [
              {
                "id": "s162",
                "name": "162. Figs & Honey Shake",
                "price": 319
              },
              {
                "id": "s163",
                "name": "163. Dry Fruit Shake (Kesar + Badam + Pista)",
                "price": 319
              },
              {
                "id": "s164",
                "name": "164. Figs & Pista Shake",
                "price": 319
              },
              {
                "id": "s165",
                "name": "165. Dates Badam Shake",
                "price": 319
              },
              {
                "id": "s166",
                "name": "166. Dates Pista Shake",
                "price": 319
              },
              {
                "id": "s167",
                "name": "167. Dates Honey Shake",
                "price": 319
              },
              {
                "id": "s168",
                "name": "168. Dates Banana Shake",
                "price": 319
              },
              {
                "id": "s169",
                "name": "169. Brownie Chocolate Shake",
                "price": 319
              },
              {
                "id": "s170",
                "name": "170. Brownie Oreo Shake",
                "price": 319
              },
              {
                "id": "s171",
                "name": "171. Brownie Nutella Shake",
                "price": 319
              },
              {
                "id": "s172",
                "name": "172. Chocolate Brownie KitKat Shake",
                "price": 319
              }
            ]
          },
          {
            "title": "Tropical",
            "items": [
              {
                "id": "s173",
                "name": "173. Coconut Shake",
                "price": 249
              },
              {
                "id": "s174",
                "name": "174. Coconut Banana Shake",
                "price": 249
              },
              {
                "id": "s175",
                "name": "175. Coconut Pineapple Shake",
                "price": 249
              },
              {
                "id": "s176",
                "name": "176. Litchi Pineapple Shake",
                "price": 249
              },
              {
                "id": "s177",
                "name": "177. Litchi Kiwi Shake",
                "price": 249
              },
              {
                "id": "s178",
                "name": "178. Coconut Mango Shake",
                "price": 249
              },
              {
                "id": "s179",
                "name": "179. Coconut Passion Fruit Shake",
                "price": 249
              },
              {
                "id": "s180",
                "name": "180. Coconut Strawberry Shake",
                "price": 249
              },
              {
                "id": "s181",
                "name": "181. Coconut Kiwi Shake",
                "price": 249
              }
            ]
          }
        ]
      }
    ]
  }
];
