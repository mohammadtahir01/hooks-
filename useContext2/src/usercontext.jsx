import { useState, createContext } from "react";
const MyContext = createContext();
const Usercontext = ({ children }) => {
  const [name, setName] = useState("Shivani");
  return (
    <>
      <MyContext.Provider value={{ name }}>
        {children}
      </MyContext.Provider>
    </>
  );
};
export default Usercontext;
export { MyContext };
