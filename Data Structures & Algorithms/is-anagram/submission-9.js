class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false
        
        let counter = new Map()

        for(let char of s) {
            let val = counter.get(char) || 0
            counter.set(char, val+1)
        }

        for(let char of t) {
            // If char not found in map (or) the value of the char in map is 0, return false immediately
            let val = counter.get(char) || 0
            if(val === 0) return false
            counter.set(char, val-1)
        }

        return true
    }
}
