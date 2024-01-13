const {
    VITE_BRAND
} = import.meta.env;

export const env = {
    brand: VITE_BRAND
};

/**
 * @type {import('../../public/placeholders.json')}
 */
let placeholders = {};
export {
    placeholders
};
/**
 *
 * @param {*} p
 */
export function setPlaceholders(p) {
    placeholders = p;
}

/**
 *
 * @param {string} str
 * @returns
 */
export function usePlaceholders(str) {
    let s = str;
    for (let p in placeholders)
        s = s.replace(`%${p}%`, placeholders[p]);

    return s;
}