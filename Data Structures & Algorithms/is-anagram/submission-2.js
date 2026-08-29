class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false

        const map = new Map()

        for(let char of s) {
            map.set(char, (map.get(char)||0) +1)
        }

        for(let char of t) {
            map.set(char, (map.get(char)||0)-1)
        }

        for(let value of map.values()) {
            if(value > 0) return false
        }

        return true
    }
}
