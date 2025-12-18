import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (token) setIsAuthenticated(true);
  }, []);

  const login = (email, password) => {
    // ✅ Change these to YOUR credentials
    if (
      email === "makaricollins287@gmail.com" &&
      password === "ChiKhabiaNthOny2542017"
    ) {
      localStorage.setItem("admin_token", "logged_in");
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem("admin_token");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
