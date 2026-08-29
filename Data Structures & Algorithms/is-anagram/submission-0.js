class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const mapA = {}
        const mapB = {}

        if(s.length !== t.length) return false

        const sNew = s.split('').sort().join('')
        const tNew = t.split('').sort().join('')
        
        return sNew === tNew
    }
}
