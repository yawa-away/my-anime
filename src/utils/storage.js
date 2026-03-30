// src/utils/storage.js

/**
 * Stores data in localStorage
 * @param {string} key - The key to store the data under
 * @param {any} value - The data to store
 */
function setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

/**
 * Retrieves data from localStorage
 * @param {string} key - The key for the data
 * @returns {any} - The retrieved data or null if not found
 */
function getItem(key) {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
}

/**
 * Removes data from localStorage
 * @param {string} key - The key for the data to remove
 */
function removeItem(key) {
    localStorage.removeItem(key);
}

export { setItem, getItem, removeItem };