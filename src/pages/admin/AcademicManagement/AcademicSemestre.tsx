import { useGetAllSemestresQuery } from "../../../redux/feature/academicSemestre/academicSemestre";

const AcademicSemestre = () => {
  const { data } = useGetAllSemestresQuery(undefined);
  console.log(data);
  return <div>Academic Semestre</div>;
};

export default AcademicSemestre;
