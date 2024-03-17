import { useEffect, useSyncExternalStore } from "react";

function Product() {


    // useEffect(()=> {
    //     window.addEventListener('resize', handeResize);

    //     return ()=> {
    //         window.removeEventListener('resize', handeResize);
    //     }
    // },[]);


   const width =   useSyncExternalStore(()=> {
        window.addEventListener('resize', handeResize);

        return ()=> {
            window.removeEventListener('resize', handeResize);
        }
    }, ()=> { return window.StylePropertyMap.widht});

    function handeResize() {

    }

    return <div></div>
}