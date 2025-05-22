type Callback = () => void;

const listeners: Record<string, Callback[]> = {};

export const eventBus = {
  on: (event: string, cb: Callback) => {
    if (!listeners[event]) listeners[event] = [];
    listeners[event].push(cb);
  },
  off: (event: string, cb: Callback) => {
    listeners[event] = (listeners[event] || []).filter(fn => fn !== cb);
  },
  emit: (event: string) => {
    (listeners[event] || []).forEach(cb => cb());
  }
};