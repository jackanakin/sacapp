import React, {
    createContext,
    useContext,
    useState,
} from "react";

import api from "../services/api";
import CustomNotification from "../ts/CustomNotification";

interface HomeContextData {
    load(): Promise<null | string>;

    customMassiveNotificationData: CustomNotification | null;
}

const HomeContext = createContext<HomeContextData>({} as HomeContextData);
const HomeProvider: React.FC = ({ children }) => {
    const [customMassiveNotificationData, setCustomMassiveNotificationData] = useState<CustomNotification | null>(null);

    const load = async (): Promise<null | string> => {
        try {
            const response = await api.get("home") as any;

            setCustomMassiveNotificationData(response.data.customNotifications as CustomNotification);
        } catch (error: any) {
            return error;
        }

        return null;
    };


    return (
        <HomeContext.Provider
            value={{
                customMassiveNotificationData, load
            }}>
            {children}
        </HomeContext.Provider>
    );
};

function useHome(): HomeContextData {
    const context = useContext(HomeContext);

    if (!context) {
        throw new Error("useHome must be used within an HomeProvider");
    }

    return context;
}

export { HomeProvider, useHome };
