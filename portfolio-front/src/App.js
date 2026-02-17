import { Routes, Route } from "react-router-dom";
import React, { useMemo, useState } from "react";
import Home from "./components/Home";
import AdminConsole from "./components/AdminConsole";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import AdminPanel from "./components/adminPanel";
import LinkContext from "./context/activeLinkContext";
import NotFound from "./components/NotFound";
import { useTheme } from "./context/themeContext";

function App() {
  const { theme, toggleTheme } = useTheme();
  const [activeLink, setActiveLink] = useState("/");

  const changeThemeProps = useMemo(
    () => ({
      main: toggleTheme,
      theme,
      isChecked: theme === "light",
    }),
    [theme, toggleTheme]
  );

  return (
    <LinkContext.Provider value={{ activeLink, setLink: setActiveLink }}>
      <Routes>
        <Route path="/" element={<Home changeTheme={changeThemeProps} />} />
        <Route path="/AdminConsole" element={<AdminConsole changeTheme={changeThemeProps} />} />
        <Route
          path="/AdminPanel"
          element={
            <ProtectedRoute>
              <AdminPanel changeTheme={changeThemeProps} />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound theme={theme} />} />
      </Routes>
    </LinkContext.Provider>
  );
}

export default App;
