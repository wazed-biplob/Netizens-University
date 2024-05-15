import { baseAPI } from "../api/baseApi";

const academicSemestreApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemestres: builder.query({
      query: () => ({
        url: "/academic-semesters",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllSemestresQuery } = academicSemestreApi;
