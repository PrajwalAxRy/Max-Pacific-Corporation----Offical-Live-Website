import React from "react";
import "./stylesDataLayout.css";
// import worker from
import workerImage from "../assests/ImageHolderWorker.png";

function DataLayout() {
  return (
    <div className="pb-16"
    style={{ backgroundColor: "#060B22" }} >
      <div className=" bg-orange-600 pt-16 px-16 w-full min-h-10" style={{ backgroundColor: "#060B22" }}>
        <div className="flex min-h-10  gap-1">
          <div style={{ width: "60%" }}>
            {/* //TODO: Here we will write the above two boxes */}
            <div className="flex h-1/2 gap-1">
              <div
                className="w-1/2 h-full flex items-center justify-center text-center top-left"
                style={{ backgroundColor: "#F6F6F6" }}
              >
                <div>
                  <div
                    className="text-7xl text-center mb-2 gradient-text-one"
                    style={{
                      fontFamily: "Inter",
                      fontWeight: 800,
                      letterSpacing: "12.95px",
                    }}
                  >
                    19
                  </div>
                  <div
                    className="text-4xl text-center gradient-text-one"
                    style={{
                      fontFamily: "Inter",
                      fontWeight: 800,
                      letterSpacing: "3.95px",
                    }}
                  >
                    Years of Experience
                  </div>
                </div>
              </div>

              <div
                className="w-1/2 h-full top-right flex items-center justify-center text-center top-right"
                style={{ backgroundColor: "#F6F6F6" }}
              >
                <div>
                  <div
                    className="text-7xl text-center mb-2 gradient-text-two"
                    style={{
                      fontFamily: "Inter",
                      fontWeight: 800,
                      letterSpacing: "12.95px",
                    }}
                  >
                    500+
                  </div>
                  <div
                    className="text-4xl text-center gradient-text-two"
                    style={{
                      fontFamily: "Inter",
                      fontWeight: 800,
                      letterSpacing: "3.95px",
                    }}
                  >
                    Employees
                  </div>
                </div>
              </div>
            </div>

            <div className="flex h-1/2 gap-1 mt-1">
              <div
                className="w-1/2 h-full flex items-center justify-center text-center bottom-left"
                style={{ backgroundColor: "#F6F6F6" }}
              >
                <div>
                  <div
                    className="text-7xl text-center mb-2 gradient-text-three"
                    style={{
                      fontFamily: "Inter",
                      fontWeight: 800,
                      letterSpacing: "12.95px",
                    }}
                  >
                   150+ 
                  </div>
                  <div
                    className="text-4xl text-center gradient-text-three"
                    style={{
                      fontFamily: "Inter",
                      fontWeight: 800,
                      letterSpacing: "3.95px",
                    }}
                  >
                    In-Service Trucks
                  </div>
                </div>
              </div>

              <div
                className="w-1/2 h-full top-right flex items-center justify-center text-center bottom-right"
                style={{ backgroundColor: "#F6F6F6" }}
              >
                <div>
                  <div
                    className="text-7xl text-center mb-2 gradient-text-four"
                    style={{
                      fontFamily: "Inter",
                      fontWeight: 800,
                      letterSpacing: "12.95px",
                    }}
                  >
                    100+
                  </div>
                  <div
                    className="text-4xl text-center gradient-text-four"
                    style={{
                      fontFamily: "Inter",
                      fontWeight: 800,
                      letterSpacing: "3.95px",
                    }}
                  >
                    Branches <br /> Pan-India
                  </div>
                </div>
              </div>
            </div>


            {/* //TODO: Here we will have the box below with a quote */}
            {/* <div
              className="w-full h-1/2 mt-1 custom-border-radius items-center justify-center text-center flex px-10   "
              style={{ backgroundColor: "#060B22" }}
            >
              <div>
                <div
                  className="text-4xl text-center italic gradient-text-three"
                  style={{ fontFamily: "Troochi", fontWeight: 600 }}
                >
                  {" "}
                  “ We Keep India Moving ”{" "}
                </div>
                <div
                  className="text-3xl text-center gradient-text-three mt-2"
                  style={{ fontFamily: "Inter", fontWeight: 600 }}
                >
                  Max Speed. Max Efficiency. Max Pacific.
                </div>
              </div>
            </div> */}
          </div>

          <div style={{ width: "50%" }}>
            <img src={workerImage} alt="IdkMantfyougonnado" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataLayout;














