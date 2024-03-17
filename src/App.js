import "./App.css";

import React, {
  useState,
  useEffect,
  Suspense,
  useSyncExternalStore,
  useLayoutEffect,
} from "react";
import Driver from "./Reasons/api/Driver";
import useGetData from "./Reasons/api/useGetData";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Incrase{" "}
      </button>

      <Suspense fallback="Loading Data...">
         <Child />
      </Suspense>

  
    </div>
  );
}

function Child() {

  console.log(1);
 
  const data = useGetData("https://api.coindesk.com/v1/bpi/currentprice.json");

 
  console.log("2");

  return <div> {console.log(3)} I am Child with {JSON.stringify(data)}</div>
}

export default App;
