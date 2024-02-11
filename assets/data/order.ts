import { Order } from "@/src/types/types";

export const orders: Order[] = [
    {
      id: 1,
      created_at: '2024-02-11T12:00:00Z',
      total: 12,
      user_id: 'user1',
      status: 'Delivered',
      order_items: [
        {
          id: 1,
          product_id: 1,
          products: { id: 1, image : "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg", name: 'Pepperoni Pizza', price: 10  , },
          order_id: 1,
          size: 'L',
          quantity: 1,
        },
        {
          id: 2,
          product_id: 2,
          products: { id: 2, name: 'Soda', price: 2 , image : "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg" },
          order_id: 1,
          size: 'M',
          quantity: 2,
        },
      ],
    },
    {
      id: 2,
      created_at: '2024-02-10T15:30:00Z',
      total: 10,
      user_id: 'user2',
      status: 'Cooking',
      order_items: [
        {
          id: 3,
          product_id: 1,
          products: { id: 1, name: 'Pepperoni Pizza', price: 10 , image : "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg"  },
          order_id: 2,
          size: 'M',
          quantity: 1,
        },
      ],
    },
    // Additional orders to make up a total of 10
    {
      id: 3,
      created_at: '2024-02-09T14:45:00Z',
      total: 20,
      user_id: 'user3',
      status: 'Delivered',
      order_items: [
        {
          id: 4,
          product_id: 3,
          products: { id: 3, name: 'Cheese Pizza', price: 8 , image : "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg" },
          order_id: 3,
          size: 'L',
          quantity: 1,
        },
      ],
    },
    {
      id: 4,
      created_at: '2024-02-08T13:15:00Z',
      total: 15,
      user_id: 'user4',
      status: 'New',
      order_items: [
        {
          id: 5,
          product_id: 2,
          products: { id: 2, name: 'Soda', price: 2 , image : "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg" },
          order_id: 4,
          size: 'S',
          quantity: 2,
        },
      ],
    },
    {
      id: 5,
      created_at: '2024-02-07T12:30:00Z',
      total: 18,
      user_id: 'user5',
      status: 'Delivering',
      order_items: [
        {
          id: 6,
          product_id: 1,
          products: { id: 1, name: 'Pepperoni Pizza', price: 10 , image : "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg" },
          order_id: 5,
          size: 'M',
          quantity: 1,
        },
        {
          id: 7,
          product_id: 3,
          products: { id: 3, name: 'Cheese Pizza', price: 8 , image : "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg" },
          order_id: 5,
          size: 'M',
          quantity: 1,
        },
      ],
    },
    {
      id: 6,
      created_at: '2024-02-06T11:00:00Z',
      total: 22,
      user_id: 'user6',
      status: 'Delivered',
      order_items: [
        {
          id: 8,
          product_id: 1,
          products: { id: 1, name: 'Pepperoni Pizza', price: 10, image : "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg"  },
          order_id: 6,
          size: 'L',
          quantity: 1,
        },
        {
          id: 9,
          product_id: 2,
          products: { id: 2, name: 'Soda', price: 2 , image : "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg" },
          order_id: 6,
          size: 'M',
          quantity: 1,
        },
        {
          id: 10,
          product_id: 3,
          products: { id: 3, name: 'Cheese Pizza', price: 8, image : "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg"  },
          order_id: 6,
          size: 'S',
          quantity: 1,
        },
      ],
    },
    {
      id: 7,
      created_at: '2024-02-05T10:45:00Z',
      total: 16,
      user_id: 'user7',
      status: 'New',
      order_items: [
        {
          id: 11,
          product_id: 1,
          products: { id: 1, name: 'Pepperoni Pizza', price: 10 , image : "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg" },
          order_id: 7,
          size: 'M',
          quantity: 2,
        },
        {
          id: 12,
          product_id: 2,
          products: { id: 2, name: 'Soda', price: 2 , image : "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg"  },
          order_id: 7,
          size: 'L',
          quantity: 1,
        },
      ],
    },
    {
      id: 8,
      created_at: '2024-02-04T09:30:00Z',
      total: 14,
      user_id: 'user8',
      status: 'Delivered',
      order_items: [
        {
          id: 13,
          product_id: 1,
          products: { id: 1, name: 'Pepperoni Pizza', price: 10 , image : "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg" },
          order_id: 8,
          size: 'S',
          quantity: 1,
        },
        {
          id: 14,
          product_id: 3,
          products: { id: 3, name: 'Cheese Pizza', price: 8 , image : "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg" },
          order_id: 8,
          size: 'L',
          quantity: 1,
        },
      ],
    },
    {
      id: 9,
      created_at: '2024-02-03T08:00:00Z',
      total: 25,
      user_id: 'user9',
      status: 'Cooking',
      order_items: [
        {
          id: 15,
          product_id: 2,
          products: { id: 2, name: 'Soda', price: 2, image : "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg"  },
          order_id: 9,
          size: 'M',
          quantity: 3,
        },
        {
          id: 16,
          product_id: 3,
          products: { id: 3, name: 'Cheese Pizza', price: 8 , image : "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg" },
          order_id: 9,
          size: 'L',
          quantity: 2,
        },
      ],
    },
    {
      id: 10,
      created_at: '2024-02-02T07:30:00Z',
      total: 30,
      user_id: 'user10',
      status: 'Delivering',
      order_items: [
        {
          id: 17,
          product_id: 1,
          products: { id: 1, name: 'Pepperoni Pizza', price: 10 , image : "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg" },
          order_id: 10,
          size: 'L',
          quantity: 2,
        },
        {
          id: 18,
          product_id: 2,
          products: { id: 2, name: 'Soda', price: 2 , image : "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg" },
          order_id: 10,
          size: 'M',
          quantity: 1,
        },
        {
          id: 19,
          product_id: 3,
          products: { id: 3, name: 'Cheese Pizza', price: 8  , image : "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg" },
          order_id: 10,
          size: 'S',
          quantity: 1,
        },
      ],
    },
  ];
  
  console.log(orders);
  