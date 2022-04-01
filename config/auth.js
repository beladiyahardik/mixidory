export const KEY = {
  LOGIN: "LOGIN",
  USER: "USER",
  DESTROY: "DESTROY",
};

const ISSERVER = typeof window === "undefined";
export class Auth {
  static get(key) {
    if (!ISSERVER) {
      sessionStorage.getItem(key);
    }
  }

  static set(key, value) {
    sessionStorage.setItem(key, value);
  }

  static destroy(key, value) {
    sessionStorage.clear();
  }
}
