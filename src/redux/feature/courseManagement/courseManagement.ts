import { baseAPI } from "../api/baseApi";

const courseManagement = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    // getAllSemestres: builder.query({
    //   query: (args) => {
    //     const params = new URLSearchParams();
    //     if (args) {
    //       args.forEach((item: IQueryParam) =>
    //         params.append(item.name, item.value as string)
    //       );
    //     }
    //     return {
    //       url: "/academic-semesters",
    //       method: "GET",
    //       params: params,
    //     };
    //   },
    //   transformResponse: (response: IResponseRedux<IAcademicSemestre[]>) => ({
    //     data: response.data,
    //     meta: response.meta,
    //   }),
    // }),
    addRegisteredSemestre: builder.mutation({
      query: (data) => ({
        url: "/semester-registrations/create-semester-registration",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useAddRegisteredSemestreMutation } = courseManagement;
