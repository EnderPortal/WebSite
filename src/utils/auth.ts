/**
 * Puts the access token in localstorage
 * @param access_token token
 */
export function setToken(access_token: string) {
  localStorage.setItem("token", access_token);
}

/**
 * retrieve the access token from local storage
 * @returns access_token => string format
 */
export function getToken(): string | null {
  return localStorage.getItem("token");
}

/**
 * check if the user is authenticated
 * (access token in local storage)
 *
 * @returns True if is authenticated
 */
export function isAuthenticated(): boolean {
  return !!getToken();
}

/**
 * Delete access token from localstorage
 */
export function removeToken() {
  localStorage.removeItem("token");
}
