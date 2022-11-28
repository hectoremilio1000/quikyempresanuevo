import React, { createContext, useState, useEffect, useContext } from 'react';
import { DataStore } from 'aws-amplify';
// import { PRUEBACHECAR } from '../models';

const PruebasContext = createContext({});



function PruebasContextProvider() {
  return (
    <div>PruebasContext</div>
  )
}

export default PruebasContextProvider