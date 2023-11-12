import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const api = createApi({
    baseQuery: fetchBaseQuery({baseUrl:"https://localhost:8181"}),
    reducerPath: "adminApi",
    tagTypes: [
        "Products"
    ],
    endpoints: (build) => ({
        getProducts: build.query({
            query: ()=> "products/",
            providesTags: ["Products"]
        })
    })
})

export const {
  useGetProductsQuery  
} = api