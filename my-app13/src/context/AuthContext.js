import React, { createContext, useState } from "react";

/**
 * Simple mock auth. For demo only.
 * Username/password are hardcoded: user / password
 */
export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("mock_user");
    return stored ? JSON.parse(stored) : null;
  });

  const login = (username, password) => {
    // very basic mock login:
    if (username === "user" && password === "password") {
      const u = { username: "user" };
      setUser(u);
      localStorage.setItem("mock_user", JSON.stringify(u));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("mock_user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
