import { IQueryParam, IResponseRedux, IStudent } from "../../../global";
import { baseAPI } from "../api/baseApi";

const userManagementApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAllStudents: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: IQueryParam) =>
            params.append(item.name, item.value as string)
          );
        }

        return {
          url: "/students",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: IResponseRedux<IStudent[]>) => ({
        data: response.data,
        meta: response.meta,
      }),
    }),
    addStudent: builder.mutation({
      query: (data) => ({
        url: "/users/create-student",
        method: "POST",
        body: data,
      }),
    }),
    getAllFaculties: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: IQueryParam) =>
            params.append(item.name, item.value as string)
          );
        }

        return {
          url: "/faculties",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: IResponseRedux<IStudent[]>) => ({
        data: response.data,
        meta: response.meta,
      }),
    }),
    getCourseFaculties: builder.query({
      query: (id) => ({
        url: `courses/${id}/get-faculties`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useAddStudentMutation,
  useGetAllStudentsQuery,
  useGetAllFacultiesQuery,
  useGetCourseFacultiesQuery,
} = userManagementApi;
