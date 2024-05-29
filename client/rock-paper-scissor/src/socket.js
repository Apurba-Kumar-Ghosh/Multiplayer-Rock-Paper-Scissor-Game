import React, { useContext, useEffect, useRef } from "react";
import { io } from "socket.io-client";

const URL =
  process.env.NODE_ENV === "production" ? undefined : "http://localhost:4000";

export const socketInstance = io(URL);

const SocketContext = React.createContext(undefined);

export const SocketContextProvider = ({ children }) => {
  const socket = useRef(socketInstance);

  useEffect(() => {
    console.log("socket instance changed");
  }, [socket]);

  return (
    <SocketContext.Provider value={{ socket: socket.current }}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocketContext = () => {
  const context = useContext(SocketContext);

  if (!context)
    throw new Error(
      "useSocketContext must be used within a SocketContextProvider"
    );

  return context;
};
