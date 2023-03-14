/**
 * function to check if a given input is a valid URL
 * @param {String} input
 * @returns {Boolean}
 */
export const isValidUrl = (input) =>{
  let url
  try{
    url = new URL(input)
  } catch (_) {
    return false
  }
  return url.protocol === "http:" || url.protocol === "https:"
}