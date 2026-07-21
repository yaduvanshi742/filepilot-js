const target = new EventTarget();

export const Events = {
  on(type, handler) {
    target.addEventListener(type, handler);
    return () => target.removeEventListener(type, handler);
  },

  emit(type, detail = {}) {
    target.dispatchEvent(new CustomEvent(type, { detail }));
  }
};
