import { AuthProvider, useAuth } from "./authContext";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

function MainApp() {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <HomePage /> : <LoginPage />;
}

function App() {
  return (
    <AuthProvider>
      <MainApp />
    </AuthProvider>
  );
}

export default App;
