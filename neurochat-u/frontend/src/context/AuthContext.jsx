import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { getToken, removeToken, setToken as saveToken } from '../utils/token';
import { getRoleFromToken } from '../utils/jwt';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setTokenState] = useState(() => getToken());

  const setToken = useCallback((newToken) => {
    if (newToken) {
      saveToken(newToken);
    } else {
      removeToken();
    }
    setTokenState(newToken);
  }, []);

  const logout = useCallback(() => {
    removeToken();
    setTokenState(null);
  }, []);

  const role = useMemo(() => getRoleFromToken(token), [token]);
  const isAuthenticated = Boolean(token);

  const value = useMemo(
    () => ({
      token,
      role,
      isAuthenticated,
      setToken,
      logout,
    }),
    [token, role, isAuthenticated, setToken, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
