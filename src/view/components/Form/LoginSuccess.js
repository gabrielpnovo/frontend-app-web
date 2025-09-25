import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginSuccess = ({ onLogin }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      localStorage.setItem("jwt", token); 
      onLogin(token);                     
      navigate("/");                     
    } else {
      navigate("/dashboard");
    }
  }, [navigate, onLogin]);

  return <p>Processando login...</p>;
};

export default LoginSuccess;
