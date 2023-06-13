'use client';

import { PropsWithChildren, createContext, useContext, useState } from "react";

export type AnimationContext = {
    isFirstMount: boolean,
    setIsFirstMount: (b: boolean) => void;
}
const PageAnimationContext = createContext<AnimationContext>({
    isFirstMount: false,
    setIsFirstMount: () => {}
});

export const AnimationContextProvider = (props: PropsWithChildren) => {
    const [isFirstMount, setIsFirstMount] = useState(true);
    return (
        <PageAnimationContext.Provider value={{isFirstMount, setIsFirstMount}}>
            {props.children}
        </PageAnimationContext.Provider>
    )
}

export const useAnimationContext = () => useContext(PageAnimationContext);
