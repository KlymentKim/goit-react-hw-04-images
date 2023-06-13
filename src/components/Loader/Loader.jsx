import { FallingLines } from "react-loader-spinner"
import { LoaderWrap } from "./Loader.styled"
// import React, { useState, useEffect } from "react";



export const Loader = () => {
    // const useEff = useEffect(() => {
    //     const timer = setTimeout(() => {
          
    //     }, 500);
    //     return () => clearTimeout(timer);
    //   }, []);

    return (
    <LoaderWrap>
      <FallingLines
        color="#4fa94d"
        width="100"
        visible={true}
        ariaLabel='falling-lines-loading'
/>
   </LoaderWrap>
    )

}