import "./index.css";
import Info from "./components/Info";
import MainPage from "./components/MainPage";

import { useEffect, useState } from "react";

function App() {
  let [showComponent, setShowComponent] = useState("MainPage");
  let [display, setDisplay] = useState(null);

  useEffect(() => {
    if (showComponent === "MainPage") {
      return setDisplay(<MainPage changeComponent={setShowComponent} />);
    } else if (showComponent === "Hotels") {
      return setDisplay(
        <Info
          title="HOTELS"
          description={["one", "two", "three", "four", "five"]}
          changeComponent={() => {
            setShowComponent("MainPage");
          }}
        />
      );
    } else if (showComponent === "Hotels") {
      return setDisplay(
        <Info
          title="HOTELS"
          description={["one", "two", "three", "four", "five"]}
          changeComponent={() => {
            setShowComponent("MainPage");
          }}
        />
      );
    } else if (showComponent === "Dining") {
      return setDisplay(
        <Info
          title="DINING"
          description={["one", "two", "three", "four", "five"]}
          changeComponent={() => {
            setShowComponent("MainPage");
          }}
        />
      );
    } else if (showComponent === "Museums") {
      return setDisplay(
        <Info
          title="MUSEUMS"
          description={["one", "two", "three", "four", "five"]}
          changeComponent={() => {
            setShowComponent("MainPage");
          }}
        />
      );
    } else if (showComponent === "Cafes") {
      return setDisplay(
        <Info
          title="CAFES"
          description={["one", "two", "three", "four", "five"]}
          changeComponent={() => {
            setShowComponent("MainPage");
          }}
        />
      );
    } else if (showComponent === "Bars") {
      return setDisplay(
        <Info
          title="BARS"
          description={["one", "two", "three", "four", "five"]}
          changeComponent={() => {
            setShowComponent("MainPage");
          }}
        />
      );
    }
  }, [showComponent]);

  console.log(showComponent);

  return <div className="App">{display}</div>;
}

export default App;
