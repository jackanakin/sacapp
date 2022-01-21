import React, {
  createContext,
  useState,
  useContext,
  useEffect,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import api from "../services/api";
import { useUnAuth } from "./unauth";

interface User {
  email: string;
  name: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User | null;
  loading: boolean;
  showWelcome: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  disableShowWelcome(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const { setLocalEmail } = useUnAuth();

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [showWelcome, setShowWelcome] = useState<boolean>(false);

  async function loadUserStoragedData(): Promise<void> {
    const user = await AsyncStorage.getItem("@SacApp:user");
    const token = await AsyncStorage.getItem("@SacApp:token");

    if (user && token) {
      //@ts-ignore
      api.defaults.headers.authorization = `Bearer ${token}`;
      setUser(JSON.parse(user));
    } else {
      //@ts-ignore
      api.defaults.headers.authorization = null;
      setUser(null);
    }

    setLoading(false);
  }

  async function loadWelcomeStoragedData(): Promise<void> {
    const unauthShowWelcome = await AsyncStorage.getItem(
      "@SacApp:showWelcome"
    );

    if (!unauthShowWelcome || unauthShowWelcome === "true") {
      setShowWelcome(true);
    } else {
      setShowWelcome(false);
    }
  }

  useEffect(() => {
    loadUserStoragedData();
    loadWelcomeStoragedData();
  }, []);

  const disableShowWelcome = async () => {
    await AsyncStorage.setItem("@SacApp:showWelcome", "false");
    setShowWelcome(false);
  };

  const signIn = async ({ email, password }: SignInCredentials) => {
    const response = await api.post("signin", { email, password });
    const { token, user } = response.data as any;

    //@ts-ignore
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
    await AsyncStorage.multiSet([
      ["@SacApp:user", JSON.stringify(user)],
      ["@SacApp:token", JSON.stringify(token)],
    ]);

    setUser(user);
    setLocalEmail(email);
  };

  const signOut = async () => {
    //await auth().signOut();
    await AsyncStorage.multiRemove(["@SacApp:user"]);
    //api.defaults.headers.authorization = null;
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        showWelcome,
        user,
        loading,
        signIn,
        signOut,
        disableShowWelcome,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}

export { AuthProvider, useAuth };
