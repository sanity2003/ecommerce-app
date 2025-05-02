// import React, { createContext, useState } from "react";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
// src/contexts/AuthContext.js
// import React, { createContext, useState, useEffect } from 'react';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [token, setToken] = useState(localStorage.getItem('token'));
//   const [isLoggedIn, setIsLoggedIn] = useState(!!token);
//   const [user, setUser] = useState(null);

//   // Login function to be used in your Login component
//   const login = (token, userData) => {
//     localStorage.setItem('token', token);
//     setToken(token);
//     setUser(userData);
//     setIsLoggedIn(true);
//   };

//   // Logout function
//   const logout = () => {
//     localStorage.removeItem('token');
//     setToken(null);
//     setUser(null);
//     setIsLoggedIn(false);
//   };

//   // Provide auth context
//   return (
//     <AuthContext.Provider value={{ token, isLoggedIn, user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
