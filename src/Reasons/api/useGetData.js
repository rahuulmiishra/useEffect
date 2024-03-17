import { useState, useEffect } from "react";
// import axios from "axios";

const promiseWrapper = (promise) => {
  let status = "pending";
  let result;

  const s = promise.then(
    (value) => {
      status = "success";
      result = value;
    },
    (error) => {
      status = "error";
      result = error;
    }
  );



  return () => {
 
    switch (status) {
      case "pending":
     
        throw s;
      case "success":
     
        return result;
      case "error":
        throw result;
      default:
        throw new Error("Unknown status");
    }
  };
};

function useGetData(url) {
  const [resource, setResource] = useState('');

  useEffect(() => {
    const getData = async () => {
      const promise = fetch(url).then((response) => response.json());
 
      const y = promiseWrapper(promise);
   
      setResource(y);
    };

    getData();
  }, [url]);

  return resource;
}

export default useGetData;
