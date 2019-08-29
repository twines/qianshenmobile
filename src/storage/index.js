export default {
  clear () {
    localStorage.clear()
  },
  setItem (key, value) {
    localStorage.setItem(key, value)
  },
  getItem (key) {
    return localStorage.getItem(key)
  },
  removeItem (key) {
    return localStorage.removeItem(key)
  }
}
