class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let map = new Map()

        for(let char of s) {
            let val = map.get(char) || 0
            map.set(char, val+1)
        }

        for(let char of t) {
            // If char not found in map (or) the value of the char in map is 0, return false immediately
            if(
                !map.has(char) || map.get(char) === 0
            ) {
                return false
            }
            map.set(char, map.get(char)-1)
        }

        return map.values().every(item => item === 0)
    }
}
