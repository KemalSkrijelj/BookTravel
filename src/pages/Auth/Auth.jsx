import "./Auth.css";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";

export default function Auth() {
  const [tabName, setTabName] = useState("login");

  const handleChange = (event, newValue) => {
    setTabName(newValue);
  };
  return (
    <div className="auth">
      <TabContext value={tabName}>
        <Box sx={{ backgroundColor: "lightred" }}>
          <TabList onChange={handleChange} >
            <Tab label="login" value="login" color="primary" />
            <Tab label="register" value="register" />
          </TabList>
        </Box>
        <TabPanel value="login">
          <Login />
        </TabPanel>
        <TabPanel value="register">
          <SignUp setTabName={setTabName} />
        </TabPanel>
      </TabContext>
    </div>
  );
}