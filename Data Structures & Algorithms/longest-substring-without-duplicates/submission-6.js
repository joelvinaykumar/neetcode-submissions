class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {

        if(s.length === 0) return 0

        let i = 0
        let j = 0
        let maxLength = 0
        let map = new Map()

        while(j<s.length) {
            if(map.has(s[j])) {
                i = Math.max(i, map.get(s[j])+1)
            }
            map.set(s[j], j)
            maxLength = Math.max(maxLength, j-i+1)
            j++
        }

        return maxLength
    }
}
