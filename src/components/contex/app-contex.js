import { createContext, useState,useContext  } from 'react'

export const AppContext = createContext({
  empty : true,
});
export function useAppContext(){
  return useContext(AppContext);
}
export function AppProvider({children}){
  const [name, setname] = useState("");
  const handleName = (e) =>{
    setname(e.target.value)
  }
  const appContextValue = {
    user : name,
    setname,
    handleName
  }
  return(
    <AppContext.Provider value={appContextValue}>
        {children}
    </AppContext.Provider>

  )
}