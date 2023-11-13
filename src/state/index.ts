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
      _id: { $oid: "655090443df12112f4773509" },
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
    // ... (other products)
  ],
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state, action: PayloadAction<string>) => {
      state.mode = action.payload;
    },
  },
});

export const { setMode } = globalSlice.actions;
export default globalSlice.reducer;
