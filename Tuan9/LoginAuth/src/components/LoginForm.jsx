import { useState } from "react";
import { useAuth } from "../authContext";
import avatar from "../assets/react.svg";

function LoginForm() {
  const { login } = useAuth();
  const [username, setUsername] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim() !== "") {
      login({ name: username });
    }
  };

  return (
    <div className="login-box shadow">
      <img src={avatar} alt="Avatar" className="avatar-img mb-3" />
      <h3 className="mb-3 text-primary">Đăng nhập</h3>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Tên người dùng"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit" className="btn btn-primary w-100">
          Đăng nhập
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
