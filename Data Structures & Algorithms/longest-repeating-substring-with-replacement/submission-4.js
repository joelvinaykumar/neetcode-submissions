class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let i = 0
        let j = 0
        let maxFreq = 0
        let res = 0
        let map = new Map()
        let len = 0

        while(j<s.length) {
            len = j-i+1
            map.set(s[j], (map.get(s[j])||0) + 1)
            maxFreq = Math.max(...Array.from(map.values()))
            if((j-i+1) - maxFreq > k) {
                map.set(s[i], map.get(s[i])-1)
                i++
            }
            res = Math.max(res, j-i+1)
            j++
        }

        return res
    }
}
