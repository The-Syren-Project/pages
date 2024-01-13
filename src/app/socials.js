/**
 * @type {import('../../public/socials.json')}
 */
let socials = null;

/**
 *
 */
export async function loadSocials() {
    const response = await fetch('/socials.json');

    socials = await response.json();
}

export {
    socials
};