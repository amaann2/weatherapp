import React from "react";
import Home from "./component/Home";
import Sidebar from "./component/Sidebar";
import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import axios from "axios";

export const AppContext = React.createContext();

const AppProvider = ({ children, data, search, submit, input, setinput }) => {
  return (
    <AppContext.Provider value={{ data, search, submit, input, setinput }}>
      {children}
    </AppContext.Provider>
  );
};
function App() {
  const [search, setsearch] = useState("Mumbai");
  const [data, setdata] = useState(null);
  const [input, setinput] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=f5fcf4ae536537e9a838b515a89ab0a9`;
  useEffect(() => {
    const weatherdataa = async () => {
      try {
        const res = await axios.get(url);
        const parseddata = await res.data;
        setdata(parseddata);
      } catch (error) {
        console.log(error);
      }
    };
    weatherdataa();
  }, [search]);

  const submitt = (e) => {
    e.preventDefault();
    setsearch(input);
  };
  const image = data?.weather[0].main;

  return (
    <AppProvider
      data={data}
      search={search}
      submit={submitt}
      input={input}
      setinput={setinput}
    >
      <div className="container">
        <div className={`home  ${image} img`}>
          <Home />
        </div>
        <div className="sidebar">
          <Sidebar />
        </div>
      </div>
    </AppProvider>
  );
}
export default App;
