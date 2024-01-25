import { useState, useContext } from "react";
import UserContext from "../context/UserContext";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleLogin = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div className="main-container">
      <div>
        <div>
          <label htmlFor="username">UserName : </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
      </div>
      <div>
        <div>
          <label htmlFor="password">Password : </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
      </div>
      <div>
        <button onClick={handleLogin}>LOGIN</button>
      </div>
    </div>
  );
}

export default Login;
