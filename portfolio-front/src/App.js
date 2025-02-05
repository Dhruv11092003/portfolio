import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Home from "./components/Home/index";
// import AboutUs from "./components/AboutUs/index";
import AdminConsole from "./components/AdminConsole/index";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import AdminPanel from "./components/adminPanel/index";
// import Projects from "./components/Projects/index";
import LinkContext  from "./context/activeLinkContext";
import NotFound from "./components/NotFound";

function App() {
  const [checked, setChecked] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [Link,setActiveLink]=useState('/');
  const onClickChangeTheme = () => {
    setChecked((prevChecked) => !prevChecked);
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };



  const changeThemeProps = {
    main: onClickChangeTheme,
    theme: theme,
    isChecked: checked,
  };

  const changeActiveLink=(link)=>{
    setActiveLink(link)
  }

  return (
    <LinkContext.Provider value={{activeLink:Link,setLink:changeActiveLink} }>
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
