/**
* Creates URL slug from the input string
*
 * Example :
* for input string "hello world", the return value is "hello-world"
*
* @param {String} input
 * @returns {String}
* */
export const slugify = (input) => {
  return input.trim().toLowerCase().replace(/["'`]/g,"")
    .split(/[^\w\/]/g)
    .filter(e=>e!=="")
    .map((e,i,arr)=> (e.at(-1)==="/" || i===arr.length-1 || arr[i+1] === "/")?e:e+"-").join("")
}