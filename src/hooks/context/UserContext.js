import { createContext } from "react";

const UserContext = createContext({email:'dummyEmail@dummyServer.com',password:'dummyPassword'});
UserContext.displayName="UserContext";
export default UserContext;