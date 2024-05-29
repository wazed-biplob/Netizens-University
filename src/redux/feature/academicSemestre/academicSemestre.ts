import {
  IAcademicSemestre,
  IQueryParam,
  IResponseRedux,
} from "../../../global";
import { baseAPI } from "../api/baseApi";

const academicSemestreApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemestres: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: IQueryParam) =>
            params.append(item.name, item.value as string)
          );
        }
        return {
          url: "/academic-semesters",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: IResponseRedux<IAcademicSemestre[]>) => ({
        data: response.data,
        meta: response.meta,
      }),
    }),
    addAcademicSemestres: builder.mutation({
      query: (data) => ({
        url: "/academic-semesters/create-academic-semester",
        method: "POST",
        body: data,
      }),
    }),
    getAcademicFaculties: builder.query({
      query: () => ({
        url: "/academic-faculties",
        method: "GET",
      }),
      transformResponse: (response) => ({
        data: response?.data,
        meta: response?.meta,
      }),
    }),
  }),
});

export const {
  useGetAllSemestresQuery,
  useAddAcademicSemestresMutation,
  useGetAcademicFacultiesQuery,
} = academicSemestreApi;
