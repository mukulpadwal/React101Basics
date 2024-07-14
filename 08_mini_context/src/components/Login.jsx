import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUserData } = useContext(UserContext);

  const handleLogin = (e) => {
    e.preventDefault();
    setUserData({ username, password });
  };

  return (
    <div className="flex flex-col">
      <input
        type="text"
        id="username"
        className="border"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        id="password"
        className="border"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="border" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;
