const iter = Array(7).keys()
const arr = Array.from(iter)
arr.reduce((acc, number) => {
    const result = acc +'#'
    console.log(result);
    return result
}, '')
