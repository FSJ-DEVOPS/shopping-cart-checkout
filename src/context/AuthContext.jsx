import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    // Mock authentication - in real app, this would be an API call
    const isAdmin = email === 'admin@shopverse.com' && password === 'admin123';
    const isUser = email === 'user@example.com' && password === 'user123';
    
    if (isAdmin || isUser) {
      const userData = {
        id: isAdmin ? 1 : 2,
        email,
        name: isAdmin ? 'Admin User' : 'John Doe',
        isAdmin
      };
      setUser(userData);
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  const register = (email, password, name) => {
    // Mock registration - in real app, this would be an API call
    if (email && password && name) {
      const userData = {
        id: Date.now(),
        email,
        name,
        isAdmin: false
      };
      setUser(userData);
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        login,
        logout,
        register
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};