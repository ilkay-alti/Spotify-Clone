import React, { useState } from "react";
import { Range, getTrackBackground } from "react-range";

import PlayerControl from "./Footer/PlayerControl";
const STEP = 0.1;
const MIN = 0;
const MAX = 100;
const [values, setValues] = useState([50]);

const Footer = () => {
  return (
    <div className="h-[80px] bg-footer border-t border-white border-opacity-5">
      <div className=" flex justify-between items-center h-full">
        <div className="min-w-[180px] w-[30%]">ilk</div>
        <div className="flex flex-col items-center">
          <PlayerControl />
          <Range
            values={values}
            step={STEP}
            min={MIN}
            max={MAX}
            // onChange={(values) => this.setState({ values })}
            renderTrack={({ props, children }) => (
              <div
                onMouseDown={props.onMouseDown}
                onTouchStart={props.onTouchStart}
                style={{
                  ...props.style,
                  height: "36px",
                  display: "flex",
                  width: "100%",
                }}
              >
                <div
                  ref={props.ref}
                  style={{
                    height: "5px",
                    width: "100%",
                    borderRadius: "4px",
                    background: getTrackBackground({
                      values: values,
                      colors: ["#548BF4", "#ccc"],
                      min: MIN,
                      max: MAX,
                    }),
                    alignSelf: "center",
                  }}
                >
                  {children}
                </div>
              </div>
            )}
            renderThumb={({ props, isDragged }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: "42px",
                  width: "42px",
                  borderRadius: "4px",
                  backgroundColor: "#FFF",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "0px 2px 6px #AAA",
                }}
              >
                <div
                  style={{
                    height: "16px",
                    width: "5px",
                    backgroundColor: isDragged ? "#548BF4" : "#CCC",
                  }}
                />
              </div>
            )}
          />
        </div>
        <div className="min-w-[180px] w-[30%] flex justify-end">son</div>
      </div>
    </div>
  );
};

export default Footer;
