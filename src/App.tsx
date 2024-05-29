import MainLayout from "./components/layout/MainLayout";
import { ProtectedRoute } from "./routes/ProtectedRoute";

const App = () => {
  return (
    <ProtectedRoute role={undefined}>
      <MainLayout />
    </ProtectedRoute>
  );
};

export default App;
