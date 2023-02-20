import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { authInstance } from "../config/firebaseConfig";

const User = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    function getUserSession() {
      onAuthStateChanged(authInstance, (user) => {
        if (user) {
          setUser(user);
          setIsLoading(false);
        } else {
          setUser(null);
        }
      });
    }

    getUserSession();
  }, []);

  console.log(user);

  const exportedProperties = {
    user,
    isLoading,
  };

  return <User.Provider value={exportedProperties}>{children}</User.Provider>;
};

export default UserProvider;

export const useUser = () => useContext(User);
