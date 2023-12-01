import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
    reducerPath: 'api',
    tagTypes: ['User'],
    baseQuery: fetchBaseQuery({ baseUrl: "https://reqres.in/api",
    prepareHeaders: (headers) => {
        const token = sessionStorage.getItem('auth_token');
        if (token) {
          headers.set('authorization', `Bearer ${token}`);
        }
        return headers;
        }
    }),
    endpoints: (build) => ({
        register: build.mutation({
            query: (credentials) => ({
                url: 'register',
                method: 'POST',
                body: credentials,
              }),
        }),
        getAll: build.query({
            query: () => "/users",
        }),
        getOneById: build.query({
            query: (id) => `/users/${id}`,
        }),
    })
});
export const { useGetAllQuery,useGetOneByIdQuery, useRegisterMutation } = userApi;