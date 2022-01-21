import React, {
  createContext,
  useState,
  useContext,
  useEffect,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AsyncStorageUnAuthAliases } from "../global/async-storage/AsyncStorageUnAuthAliases";

interface UnAuthContextData {
  isFreshStart: boolean;
  cameFromSignIn: boolean;
  email: string | null;
  disableFreshStart(): void;
  enableFreshStart(): void;
  setLocalEmail(arg0: string): void;
}

const UnAuthContext = createContext<UnAuthContextData>({} as UnAuthContextData);

const UnAuthProvider: React.FC = ({ children }) => {
  const [isFreshStart, setFreshStart] = useState<boolean>(false);
  const [cameFromSignIn, setCameFromSignIn] = useState<boolean>(false);
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    async function loadStoragedData(): Promise<void> {
      //await AsyncStorage.clear();
      const unauthLocalEmail = await AsyncStorage.getItem(
        AsyncStorageUnAuthAliases.localEmail
      );
      setEmail(unauthLocalEmail);

      const unauthShowWelcome = await AsyncStorage.getItem(
        AsyncStorageUnAuthAliases.freshStart
      );

      if (!unauthShowWelcome || unauthShowWelcome === "true") {
        setFreshStart(true);
      } else {
        setFreshStart(false);
      }
    }

    loadStoragedData();
  }, []);

  const disableFreshStart = async () => {
    await AsyncStorage.setItem(AsyncStorageUnAuthAliases.freshStart, "false");
    setCameFromSignIn(false);
    setFreshStart(false);
  };

  const enableFreshStart = async () => {
    await AsyncStorage.setItem(AsyncStorageUnAuthAliases.freshStart, "true");
    setCameFromSignIn(true);
    setFreshStart(true);
  };

  const setLocalEmail = async (email: string) => {
    await AsyncStorage.setItem(AsyncStorageUnAuthAliases.localEmail, email);
    setEmail(email);
  };

  return (
    <UnAuthContext.Provider
      value={{
        isFreshStart,
        cameFromSignIn,
        email,
        disableFreshStart,
        setLocalEmail,
        enableFreshStart,
      }}
    >
      {children}
    </UnAuthContext.Provider>
  );
};

function useUnAuth(): UnAuthContextData {
  const context = useContext(UnAuthContext);

  if (!context) {
    throw new Error("useUnAuth must be used within an UnAuthContextData");
  }

  return context;
}

export { UnAuthProvider, useUnAuth };
