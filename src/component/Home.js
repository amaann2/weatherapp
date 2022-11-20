import { useContext, useState,useEffect } from "react";
import { TbTemperatureCelsius } from "react-icons/tb";
import { FaLocationArrow } from "react-icons/fa";
import { TiWeatherWindyCloudy } from "react-icons/ti";
import {
  BsFillCloudLightningRainFill,
  BsFillCloudHaze2Fill,
  BsFillSunFill,
  BsCloudSunFill,
  BsFillCloudFog2Fill,
} from "react-icons/bs";
import { BiCloudSnow } from "react-icons/bi";
import { AiOutlineCloud } from "react-icons/ai";
import { WiSmoke } from "react-icons/wi";
import { TiWaves } from "react-icons/ti";

import { AppContext } from "../App";
const Home = () => {
  const { data } = useContext(AppContext);
  const [time,settime]=useState(null)

  const precise = (val) => {
    const newval = val.toPrecision(2);
    return newval;
  };

  useEffect(() => {
  
    const gettime = ()=>{
      const d = new Date();
      const localTime = d.getTime();
      const localOffset = d.getTimezoneOffset() * 60000;
      const utc = localTime + localOffset;
      var atlanta = utc + 1000 * data?.timezone;
      const nd = new Date(atlanta);
      const newDate = nd.toString();
      settime(newDate)
    }
gettime()

  }, [data])
  
// setInterval(gettime,6000)

  return (
    <div className="containerr">
      <h4 className="logo">
        WeatherAPP <TiWeatherWindyCloudy />{" "}
      </h4>

      <div className="box">
        {data && (
          <div className="data">
            <div className="temp">
              {precise(data?.main.temp)}
              <TbTemperatureCelsius className="icon" />
            </div>
            <div className="info">
              <div className="city">
                <FaLocationArrow />
                {data.name}
                {data.country}
              </div>
              <div className="time">
                <p>{time?.substring(4, 25)}</p>
              </div>
            </div>
            <div className="description">
              <div className="emoji">
                {(() => {
                  switch (data?.weather[0].main) {
                    case "Smoke":
                      return <WiSmoke className="icon" />;
                    case "Rain":
                      return <BsFillCloudLightningRainFill className="icon" />;
                    case "Snow":
                      return <BiCloudSnow className="icon" />;
                    case "Fog":
                      return <BsFillCloudFog2Fill className="icon" />;
                    case "Sun":
                      return <BsFillSunFill className="icon" />;
                    case "Haze":
                      return <BsFillCloudHaze2Fill className="icon" />;
                    case "Clouds":
                      return <BsCloudSunFill className="icon" />;
                    case "Clear":
                      return <AiOutlineCloud className="icon" />;
                    case "Mist":
                      return <TiWaves className="icon" />;
                    default:
                      return "#FFFFFF";
                  }
                })()}
              </div>
              <div className="type">{data?.weather[0].main}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
