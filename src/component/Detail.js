import React, { useContext } from "react";
import { AppContext } from "../App";
import { BsWind, BsSunriseFill, BsFillSunsetFill } from "react-icons/bs";
import { WiHumidity } from "react-icons/wi";
import { GiPressureCooker } from "react-icons/gi";
import { TbTemperatureMinus, TbTemperaturePlus } from "react-icons/tb";
const Detail = () => {
  const { data } = useContext(AppContext);

  const d = new Date();
  const localTime = d.getTime();
  const localOffset = d.getTimezoneOffset() * 60000;
  const utc = localTime + localOffset;
  var sunrise = utc + 1000 * data?.sys.sunrise;
  var sunset = utc + 1000 * data?.sys.sunset;
  const rise = new Date(sunrise);
  const set = new Date(sunset);
  const riseDate = rise.toString();
  const setDate = set.toString();

  return (
    <div>
      <h3 className="heading center">Weather Details</h3>
      <div className="detail">
        <div className="left">
          <p>
            Min Temp <TbTemperatureMinus className="icon" />
          </p>
          <p>
            Max Temp <TbTemperaturePlus className="icon" />
          </p>
          <p>
            wind speed <BsWind className="icon" />
          </p>
          <p>
            Humidity <WiHumidity className="icon" />
          </p>
          <p>
            Pressure
            <GiPressureCooker className="icon" />
          </p>
          <p>
            Sunrise <BsSunriseFill className="icon" />
          </p>
          <p>
            Sunset <BsFillSunsetFill className="icon" />
          </p>
        </div>
        <div className="right">
          {data && (
            <>
              <p>{data?.main.temp_min}</p>
              <p>{data?.main.temp_max}</p>
              <p>{data?.wind.speed}</p>
              <p>{data?.main.humidity}</p>
              <p>{data?.main.pressure}</p>
              <p>{riseDate.substring(16, 21)}</p>
              <p>{setDate.substring(16, 21)}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Detail;
