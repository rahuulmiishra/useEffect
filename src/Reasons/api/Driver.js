import { useEffect, useState } from "react";
import useGetData from "./useGetData";

function Driver() {


  const [val, setVal] = useState(null);

  useEffect(()=>{



    let d = '';
    
    const x = new Promise((res)=> {
        setTimeout(()=> {
          res('done')
        },3000);
    });



    x.then(()=> {
      d = "done";
    });

    setVal(()=> {
      if(!d)  {
        throw x;
      }

      return d;
    } 
      
      );
   
  },[]);




  return (
    <div>
   Hey
{/*  
      {Array.isArray(data) &&
        data?.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <hr />
            <p>{post.body}</p>
          </div>
        ))} */}
    </div>
  );
}

export default Driver;
