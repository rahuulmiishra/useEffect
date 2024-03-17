//1. Use Derived

import { useEffect, useState } from "react"

function Product({onOpen,onClose}) {

    const [fName, setFname] = useState('');
    const [data,setData] = useState({});



    useEffect(()=> {
       submitForm();
    },[data]);

   
    function submitForm() {
        
    }

    function submit() {
        setData({fName})

    }

    return <div>
         <input type="" />
         <button onClick={submit}>Submit</button>
         <span>Count: {total}</span>
    </div>
}

export default Product;