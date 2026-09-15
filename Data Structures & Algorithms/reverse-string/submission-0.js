class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        let i = 0
        let n = s.length

        while(i < parseInt(n/2)) {
            [s[i], s[n-i-1]] = [s[n-i-1], s[i]]
            i++
        }
    }
}
