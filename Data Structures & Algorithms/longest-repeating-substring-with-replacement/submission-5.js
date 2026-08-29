class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let i = 0
        let res = 0
        let map = new Map()

        for(let j=0; j<s.length; j++) {
            map.set(s[j], (map.get(s[j])||0) + 1)
            if((j-i+1) - Math.max(...Array.from(map.values())) > k) {
                map.set(s[i], map.get(s[i])-1)
                i++
            }
            res = Math.max(res, j-i+1)
        }

        return res
    }
}
