import React from 'react'
import {FadingDots} from "react-cssfx-loading"


function Preloader() {
    return (
       
            <div className="flex justify-center h-screen items-center transform c-bg ">
              <FadingDots color="#7450fe" width={80} height={80}  />
            </div>
    )
}

export default Preloader
