import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const [username, setUsername] = useState("user");
  const [password, setPassword] = useState("password");
  const [error, setError] = useState("");
  const { login } = React.useContext(AuthContext);
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    const ok = login(username, password);
    if (ok) {
      navigate("/watchlist");
    } else {
      setError("Invalid credentials. Use user / password for demo.");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-gray-800 p-6 rounded">
      <h1 className="text-2xl mb-4">Mock Login</h1>
      <form onSubmit={submit} className="space-y-4">
        <input value={username} onChange={(e) => setUsername(e.target.value)} className="w-full px-3 py-2 rounded text-gray-900" />
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="w-full px-3 py-2 rounded text-gray-900" />
        {error && <div className="text-red-400">{error}</div>}
        <div className="flex justify-between">
          <button type="submit" className="px-4 py-2 bg-accent rounded text-white">Login</button>
          <button type="button" onClick={() => { setUsername("user"); setPassword("password"); }} className="px-4 py-2 bg-gray-700 rounded text-white">
            Fill demo creds
          </button>
        </div>
      </form>
    </div>
  );
}
