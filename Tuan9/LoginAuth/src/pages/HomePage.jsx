import { useAuth } from "../authContext";

function HomePage() {
  const { user, logout } = useAuth();

  return (
    <div className="container mt-5">
      <h2>Chào mừng, {user.name}!</h2>
      <button className="btn btn-danger" onClick={logout}>Đăng xuất</button>
    </div>
  );
}

export default HomePage;
