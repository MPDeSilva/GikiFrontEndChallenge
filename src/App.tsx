import React from "react";
import "./App.css";
import Button from "./components/Button/Button";
import StatBlock from "./components/StatBlock/StatBlock";
import Badge from "./components/Badge/Badge";
import NavBar from "./components/NavBar/NavBar";
import Container from "./components/Container/Container";

function App() {
  return (
    <Container>
      <NavBar />
      <div className="flex flex-col mx-auto h-full w-full justify-center items-center px-4 py-20">
        <div className="flex flex-col mx-auto h-full w-full justify-center items-center md:my-20 my-10">
          <div className="relative flex flex-col mx-auto items-center">
            {/* Leave just to show how you could potentially fix the assets in place */}
            {/* <div className="relative flex items-center justify-center">
            <img
              src={require("./assets/purple_cloud.png")}
              alt="purple cloud"
              className="relative top-0 bottom-0"
            />
            <img
              src={leafOne}
              alt="leaf one"
              height={10}
              width={200}
              className="absolute -bottom-10 left-40 rotate-180"
            />
            <img
              src={leafTwo}
              alt="leaf two"
              height={10}
              width={300}
              className="absolute bottom-12 left-10 rotate-180"
            />
            <img
              src={leafOne}
              alt="leaf one"
              height={10}
              width={200}
              className="absolute top-2 right-36"
            />
            <img
              src={leafTwo}
              alt="leaf two"
              height={10}
              width={300}
              className="absolute top-28 right-0"
            />
            <img
              src={require("./assets/white_cloud.png")}
              alt="white cloud"
              className=" absolute top-0 bottom-0"
            />
            <img
              src={butterfly}
              alt="butterfly"
              height={10}
              width={200}
              className=" absolute top-20 bottom-0 left-20"
            />
          </div> */}
            <img
              src={require("./assets/GikiAssets.webp")}
              alt="Giki Badge"
              height={600}
              width={650}
            />
            <div className="absolute top-1/4 flex flex-col w-full mx-auto justify-center items-center md:space-y-4 space-y-2">
              <StatBlock
                size="large"
                heading={"Your footprint"}
                amount={"7,565"}
                unit={"kg"}
                subHeading={"of carbon emissions"}
              />
              <Button label="Take a step" />
            </div>
          </div>
        </div>
        <div className="flex flex-row mx-auto justify-center items-cente space-x-4">
          <StatBlock
            size="small"
            heading={"End of year target"}
            amount={"5,855"}
            unit={"kg"}
            subHeading={"of carbon emissions"}
          />
          <StatBlock
            size="small"
            heading={"Left to cut this year"}
            amount={"409"}
            unit={"kg"}
            subHeading={"of carbon emissions"}
          />
        </div>
        <Badge text={"Your 2030 target is 2,500 kg"} />
      </div>
    </Container>
  );
}

export default App;
