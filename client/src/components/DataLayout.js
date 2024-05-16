import React from "react";
import "./stylesDataLayout.css";
// import worker from
import workerImage from "../assests/ImageHolderWorker.png";

function DataLayout() {
  return (
    <div className="py-16"
    style={{ backgroundColor: "#060B22" }} >
      <div className=" bg-orange-600 px-4 sm:px-16 w-full min-h-10" style={{ backgroundColor: "#060B22" }}>
        <div className="flex min-h-10  gap-1">
          <div className="w-full lg:w-3/5">
            {/* //TODO: Here we will write the above two boxes */}
            <div className="flex h-1/2 gap-1">
              <div
                className="w-1/2 h-full flex items-center justify-center text-center top-left"
                style={{ backgroundColor: "#F6F6F6" }}
              >
                <div>
                  <div
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl mt-8 lg:mt-0 text-center mb-0 lg:mb-2 gradient-text-one tracking-normal lg:tracking-widest"
                    style={{
                      fontFamily: "Inter",
                      fontWeight: 800,
                    }}
                  >
                    19
                  </div>
                  <div
                    className="px-4 md:px-0 mb-8 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center gradient-text-one tracking-normal lg:tracking-widest leading-tight sm:mb-3 lg:mb-0"
                    style={{
                      fontFamily: "Inter",
                      fontWeight: 800,
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
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl mt-8 lg:mt-0 text-center mb-0 lg:mb-2 gradient-text-two tracking-normal lg:tracking-widest"
                    style={{
                      fontFamily: "Inter",
                      fontWeight: 800,
                    }}
                  >
                    500+
                  </div>
                  <div
                    className="px-4 md:px-0 mb-8 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center gradient-text-two tracking-normal lg:tracking-widest leading-tight lg:mb-0"
                    style={{
                      fontFamily: "Inter",
                      fontWeight: 800,
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
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl mt-8 lg:mt-0 text-center mb-0 lg:mb-2 gradient-text-three tracking-normal lg:tracking-widest"
                    style={{
                      fontFamily: "Inter",
                      fontWeight: 800,
                    }}
                  >
                   150+ 
                  </div>
                  <div
                    className="px-4 md:px-0 mb-8 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center gradient-text-three tracking-normal lg:tracking-widest leading-tight lg:mb-0" 
                    style={{
                      fontFamily: "Inter",
                      fontWeight: 800,
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
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl mt-8 lg:mt-0 text-center mb-0 lg:mb-2 gradient-text-four tracking-normal lg:tracking-widest"
                    style={{
                      fontFamily: "Inter",
                      fontWeight: 800,
                    }}
                  >
                    100+
                  </div>
                  <div
                    className="px-4 md:px-0  mb-8 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center gradient-text-four tracking-normal lg:tracking-widest leading-tight lg:mb-0"
                    style={{
                      fontFamily: "Inter",
                      fontWeight: 800,
                    
                    }}
                  >
                    Branches Pan-India
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="hidden md:block h-auto w-3/4 lg:w-1/2">
            <img src={workerImage} alt="Worker" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataLayout;