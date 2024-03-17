//1. Use Derived

import { useEffect, useState } from "react"

function Product({onOpen,onClose}) {

    const [isOpen, setIsOpen] = useState(false);

    // useEffect(()=> {
    //    if(isOpen) {
    //     onOpen();
    //    } else {
    //     onClose();
    //    }
    // },[isOpen]);

    function toggle() {
        const newStatus = !isOpen;
        setIsOpen(newStatus)
             if(newStatus) {
        onOpen();
       } else {
        onClose();
       }

    }

    return <div>
         <button onClick={toggle}>Close</button>
         <span>Count: {total}</span>
    </div>
}

export default Product;