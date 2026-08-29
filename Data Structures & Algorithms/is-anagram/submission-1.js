class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false
     
        const charCounter = {}
        
        for(let i=0; i< s.length; i++) {
            if(charCounter[s[i]])  {
                charCounter[s[i]] += 1
            } else {
                charCounter[s[i]] = 1
            }
        }

        for(let i=0; i< t.length; i++) {
            if(charCounter[t[i]] > 0)  {
                charCounter[t[i]] -= 1
            } else {
                charCounter[t[i]] = 1
            }
        }

        console.log(Object.values(charCounter))
        
        return Object.values(charCounter).every(c => c === 0)
    }
}
