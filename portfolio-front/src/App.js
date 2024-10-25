import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Home from "./components/Home/index";
import AboutUs from "./components/AboutUs/index";
import AdminConsole from "./components/AdminConsole/index";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import AdminPanel from "./components/adminPanel/index";

function App() {
  const [checked, setChecked] = useState(false);
  const [theme, setTheme] = useState("light");

  const onClickChangeTheme = () => {
    setChecked((prevChecked) => !prevChecked);
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const changeThemeProps = {
    main: onClickChangeTheme,
    theme: theme,
    isChecked: checked,
  };

  return (
    <Routes>
      <Route path="/" element={<Home changeTheme={changeThemeProps} />} />
      <Route path="/AboutMe" element={<AboutUs changeTheme={changeThemeProps} />} />
      <Route path="/AdminConsole" element={<AdminConsole changeTheme={changeThemeProps} />} />
      <Route 
        path="/AdminPanel" 
        element={
          <ProtectedRoute>
            <AdminPanel changeTheme={changeThemeProps} />
          </ProtectedRoute>
        } 
      />
    </Routes>
  );
}

export default App;
