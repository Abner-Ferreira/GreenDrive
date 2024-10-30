import { useState, useEffect, createContext, useContext } from "react";

// Previously: declare global interface for window.utag
// In JavaScript, we can't declare types, but you should ensure that utag exists on window

// Utag interface equivalent in comments
// Utag has link and view functions accepting an object
const EmptyUtag = { link: () => undefined, view: () => undefined };

const UtagContext = createContext(EmptyUtag);

export const useUtag = () => useContext(UtagContext);

export const UtagProvider = ({ children }) => {
  // This implementation silently drops events because the EmptyUtag object does nothing
  const [utag, setUtag] = useState(EmptyUtag);

  // Poll for the utag object on the window over a period of 10 seconds
  useEffect(() => {
    if (window.utag) {
      setUtag(window.utag);
      return;
    }
    let i = 0;
    const interval = setInterval(() => {
      if (window.utag) {
        setUtag(window.utag);
        clearInterval(interval);
        return;
      }
      i = i + 1;
      if (i > 50) {
        clearInterval(interval);
      }
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return <UtagContext.Provider value={utag}>{children}</UtagContext.Provider>;
};
