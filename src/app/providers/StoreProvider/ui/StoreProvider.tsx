import { StateSchema } from "../config/StateSchema";
import { createReduxStore } from "../config/store";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: StateSchema;
}

export const StoreProvider: React.FC<StoreProviderProps> = (props) => {
    const { children, initialState } = props;

    const store = createReduxStore(initialState);

    return <Provider store={store}>{children}</Provider>;
};
