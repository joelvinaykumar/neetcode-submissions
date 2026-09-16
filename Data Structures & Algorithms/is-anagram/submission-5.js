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
            if(map.has(char)) {
                map.set(char, map.get(char)-1)
            } else {
                let val = map.get(char) || 0
                map.set(char, val+1)
            }
        }

        return map.values().every(item => item === 0)
    }
}
