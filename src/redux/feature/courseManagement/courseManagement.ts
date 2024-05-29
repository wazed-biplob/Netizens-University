import { IQueryParam, IResponseRedux } from "../../../global";
import { baseAPI } from "../api/baseApi";

const courseManagement = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAllRegisteredSemestres: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: IQueryParam) =>
            params.append(item.name, item.value as string)
          );
        }
        return {
          url: "/semester-registrations",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["course"],
      transformResponse: (response: IResponseRedux<any>) => ({
        data: response.data,
        meta: response.meta,
      }),
    }),
    addRegisteredSemestre: builder.mutation({
      query: (data) => ({
        url: "/semester-registrations/create-semester-registration",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["course"],
    }),
    updateRegisteredSemestreStatus: builder.mutation({
      query: (args) => ({
        url: `/semester-registrations/${args?.id}`,
        method: "PATCH",
        body: args?.data,
      }),
      invalidatesTags: ["course"],
    }),
    getAllCourses: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: IQueryParam) =>
            params.append(item.name, item.value as string)
          );
        }
        return {
          url: "/courses",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["course"],
      transformResponse: (response: IResponseRedux<any>) => ({
        data: response.data,
        meta: response.meta,
      }),
    }),
    addCourse: builder.mutation({
      query: (data) => ({
        url: "/courses/create-course",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["course"],
    }),
    addFaculties: builder.mutation({
      query: (args) => ({
        url: `/courses/${args?.courseId}/assign-faculties`,
        method: "PUT",
        body: args?.data,
      }),
      invalidatesTags: ["course"],
    }),
  }),
});

export const {
  useAddRegisteredSemestreMutation,
  useGetAllRegisteredSemestresQuery,
  useUpdateRegisteredSemestreStatusMutation,
  useGetAllCoursesQuery,
  useAddCourseMutation,
  useAddFacultiesMutation,
} = courseManagement;
