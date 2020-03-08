import React, { useState, useContext, createContext } from 'react';

const SelectFoodContext = createContext();
const GetFoodContext = createContext();

function useSelectFoodContext(){
  let context = useContext(SelectFoodContext);
  if(context==undefined){
    throw new Error('use SelectFoodContext inside FoodOrderContext')
  }
  return context;
}

function useGetFoodContext(){
  let context = useContext(GetFoodContext);
  if(context==undefined){
    throw new Error('use GetFoodContext inside FoodOrderContext');
  }
  return context;
}

function FoodOrderContext({children}){
  const [selectedFood, setSelectedFood] = useState({});
  return (
    <SelectFoodContext.Provider value={setSelectedFood}>
      <GetFoodContext.Provider value={selectedFood}>
        {children}
      </GetFoodContext.Provider>
    </SelectFoodContext.Provider>
  )
}

export {useSelectFoodContext, useGetFoodContext, FoodOrderContext};