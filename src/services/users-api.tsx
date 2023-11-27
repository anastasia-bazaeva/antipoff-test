import { FetchArgs, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
    reducerPath: 'api',
    tagTypes: ['User'],
    baseQuery: fetchBaseQuery({ baseUrl: "https://reqres.in/api"}),
    endpoints: (build) => ({
        getAll: build.query({
            query: () => "/users",
        }),
    })
});
export const { useGetAllQuery } = userApi;