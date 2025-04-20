import LoginForm from "../components/LoginForm";

function LoginPage() {
  return (
    <div className="login-page">
      <div className="overlay">
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
