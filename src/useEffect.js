//1. Use Derived

import { useEffect, useState } from "react"

function Product({item}) {

    const [items, setItems] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(()=> {
        setTotal(items.length);
    },[items]);

    function add() {
        setItems([...items].push(item));

    }

    return <div>
         <button onClick={add}>Add</button>
         <span>Count: {total}</span>
    </div>
}

export default Product;