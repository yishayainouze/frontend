import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Product {
  _id: {
    $oid: string;
  };
  user_id: number;
  username: string;
  password: string;
  name: string;
  email: string;
  address: string;
  cart: {
    product_id: number;
    quantity: number;
    price: string;
    image: string;
  }[];
}

export interface GlobalState {
  mode: string;
  userId: number;
  products: Product[];
}

const initialState: GlobalState = {
  mode: "dark",
  userId: 1,
  products: [
    {
      _id: {
        $oid: "655090443df12112f4773509",
      },
      user_id: 1,
      username: "user1",
      password: "password1",
      name: "John Doe",
      email: "johndoe@example.com",
      address: "123 Maple Street",
      cart: [
        {
          product_id: 1,
          quantity: 2,
          price: "1200",
          image: "https://example.com/4k-television.jpg",
        },
        {
          product_id: 3,
          quantity: 1,
          price: "499.99",
          image: "https://example.com/refrigerator.jpg",
        },
      ],
    },
    {
      _id: {
        $oid: "655090443df12112f477350a",
      },
      user_id: 2,
      username: "user2",
      password: "password2",
      name: "Alice Smith",
      email: "alicesmith@example.com",
      address: "456 Oak Road",
      cart: [
        {
          product_id: 2,
          quantity: 1,
          price: "899.99",
          image: "https://example.com/laptop-computer.jpg",
        },
        {
          product_id: 4,
          quantity: 1,
          price: "149.99",
          image: "https://example.com/bluetooth-speaker.jpg",
        },
      ],
    },
    {
      _id: {
        $oid: "655090bc3df12112f477350c",
      },
      user_id: 3,
      username: "user3",
      password: "password3",
      name: "Bob Johnson",
      email: "bobjohnson@example.com",
      address: "789 Birch Lane",
      cart: [
        {
          product_id: 5,
          quantity: 1,
          price: "199.99",
          image: "https://example.com/smart-watch.jpg",
        },
        {
          product_id: 6,
          quantity: 1,
          price: "129.99",
          image: "https://example.com/electric-drill.jpg",
        },
      ],
    },
    {
      _id: {
        $oid: "655090bc3df12112f477350d",
      },
      user_id: 4,
      username: "user4",
      password: "password4",
      name: "Sara Connor",
      email: "saraconnor@example.com",
      address: "1020 Elm Street",
      cart: [
        {
          product_id: 7,
          quantity: 2,
          price: "399.99",
          image: "https://example.com/gaming-console.jpg",
        },
        {
          product_id: 8,
          quantity: 1,
          price: "950",
          image: "https://example.com/hdr-smart-tv.jpg",
        },
      ],
    },
    {
      _id: {
        $oid: "655090bc3df12112f477350e",
      },
      user_id: 5,
      username: "user5",
      password: "password5",
      name: "Mike Ross",
      email: "mikeross@example.com",
      address: "550 Pine Road",
      cart: [
        {
          product_id: 9,
          quantity: 1,
          price: "1200",
          image: "https://example.com/gaming-laptop.jpg",
        },
        {
          product_id: 10,
          quantity: 1,
          price: "700",
          image: "https://example.com/double-door-refrigerator.jpg",
        },
      ],
    },
  ],
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode(state, action: PayloadAction<string>) {
      state.mode = action.payload;
    },
  },
});

export const { setMode } = globalSlice.actions;
export default globalSlice.reducer;

