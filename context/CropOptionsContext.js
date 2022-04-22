import React, {createContext, useEffect, useState} from 'react';
import { getAllCropOptions } from '../api/cropOptions';
export const CropOptionsContext = createContext();

export function CropOptionProvider(props) {
  const [cropOptions, setCropOptions] = useState([]);

  useEffect(() => {
        const cropOptionDataPromise = getAllCropOptions().then(data=>setCropOptions(data));
   }, [])
  
  return (
    <CropOptionsContext.Provider 
      value={{cropOptions}}>
      {props.children}
    </CropOptionsContext.Provider>
  );
}