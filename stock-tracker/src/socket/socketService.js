import io from "socket.io-client";

const HOST = window.location.hostname;
const PORT = 5000;
const SERVER = `${HOST}:${PORT}`;

const createSocketService = () => {
  let socket;

  function create() {
    return socket || (socket = io(SERVER));
  }

  const createSocketSubscription = (event, fn) => {
    if (!socket) {
      throw new Error("You forgot to call `create`!");
    }

    socket.on(event, fn);
    return () => socket.off(event, fn);
  };

  return { create, createSocketSubscription };
};

export const socketService = createSocketService();
