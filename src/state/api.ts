import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Category } from "./interface";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://server-tpja.onrender.com/" }),
  reducerPath: "adminApi",
  tagTypes: ["Products", "Users", "Categories"],
  endpoints: (build) => ({
    getProducts: build.query({
      query: () => "api/products",
      providesTags: ["Products"],
    }),
    getProduct: build.query({
      query: (id) => `api/products/${id}`,
      providesTags: ["Products"],
    }),
    setClicks: build.query({
      query: (arg: any) => ({
        url: `api/products/${arg.id}`,
        method: "PUT",
        body: arg.product,
      }),
      providesTags: ["Products"],
    }),
    getUsers: build.query({
      query: () => "api/users",
      providesTags: ["Users"],
    }),
    getUser: build.query({
      query: (id) => `api/users/${id}`,
      providesTags: ["Users"],
    }),
    updateUser: build.query({
      query: (arg: any) => ({
        url: `api/users/${arg.id}`,
        method: "PUT",
        body: arg.user,
      }),
      providesTags: ["Users"],
    }),
    register: build.query({
      query: (user: any) => ({
        url: `api/users/register`,
        method: "POST",
        body: user,
      }),
      providesTags: ["Users"],
    }),
    login: build.query({
      query: (user) => ({
        url: `api/users/login`,
        method: "POST",
        body: user,
      }),
      providesTags: ["Users"],
    }),
    getCategories: build.query<Category[], void>({
      query: () => "api/categories",
      providesTags: ["Categories"],
    }),
    getCategory: build.query({
      query: (id) => `api/categories/${id}`,
      providesTags: ["Categories"],
    }),
    updateCategory: build.query({
      query: (arg: any) => ({
        url: `api/categories/${arg.id}`,
        method: "PUT",
        body: arg.category,
      }),
      providesTags: ["Categories"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useSetClicksQuery,
  useGetUsersQuery,
  useGetUserQuery,
  useUpdateUserQuery,
  useRegisterQuery,
  useLoginQuery,
  useGetCategoriesQuery,
  useGetCategoryQuery,
  useUpdateCategoryQuery,
} = api;
