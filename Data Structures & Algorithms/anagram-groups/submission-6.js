class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map()
        for(let word of strs) {
            let count = new Array(26).fill(0)
            for(let char=0;char<word.length; char++) {
                let idx = word.charCodeAt(char) - "a".charCodeAt(0)
                count[idx] = (count[idx]||0) + 1
            }
            let key = count.join('a')
            if(map.has(key)) {
                map.set(key, [...(Array.from(map.get(key)) || []), word])
            } else {
                map.set(key, [word])
            }
        }

        return Array.from(map.values())
    }
}
