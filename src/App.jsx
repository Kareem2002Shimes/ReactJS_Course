import { createContext } from "react";
import ComponentA from "./components/ComponentA";

export const UserContext = createContext();
export const ChannelContext = createContext();
function App() {
  return (
    <div>
      <UserContext.Provider
        value={{ username: "Kareem", position: "Frontend Developer" }}
      >
        <ChannelContext.Provider value={"SAC"}>
          <ComponentA />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
