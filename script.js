function longestCommonPrefix(strs) {
    if (!strs.length) {
        return "";
    }

    // Check if the input strings meet the constraints
    for (const str of strs) {
        if (str.length == 0 || str.length > 200) {
            throw new Error('Invalid string length: Strings must have a length between 0 and 200 characters.');
        }
        if (!/^[a-z]+$/.test(str)) {
            throw new Error('Invalid string characters: Strings must consist of only lowercase English letters.');
        }
    }

    const minLength = Math.min(...strs.map(str => str.length));
    let commonPrefix = "";

    for (let i = 0; i < minLength; i++) {
        const char = strs[0][i];
        if (strs.every(str => str[i] === char)) {
            commonPrefix += char;
        } else {
            break;
        }
    }

    return commonPrefix;
}

// Example 
const strs1 = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs1));  // Output: "fl"

const strs2 = ["dog", "racecar", "car"];
console.log(longestCommonPrefix(strs2));  // Output: ""

const strs3 = ["apple", "application", "apricot"];
console.log(longestCommonPrefix(strs3));  // Output: "app"
