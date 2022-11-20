// import { useContext } from "react";
// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";

// const AppContext = React.createContext();

// const AppProvider = ({ children }) => {
//   const [data, setdata] = useState();
//     const search ="Mumbai"
//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=f5fcf4ae536537e9a838b515a89ab0a9`;

//   useEffect(() => {
//     const weatherdataa = async () => {
//       try {
//         const response = await fetch(url);
//         const parseddata = await response.json();
//         setdata(parseddata);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     weatherdataa();
//   }, []);
//   return <AppContext.Provider value={data } >{children}</AppContext.Provider>;
// };
// const useGlobalContext = () => {
//   return useContext(AppContext);
// };

// export { AppContext, AppProvider, useGlobalContext };
