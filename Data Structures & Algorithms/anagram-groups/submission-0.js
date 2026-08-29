class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map()
        
        for(let s of strs) {
            let temp = s.split('').sort().join('')
            let tempArr = Array.from(map.get(temp) || [])
            map.set(temp, [...tempArr, s])
        }

        return Array.from(map.values())
    }
}
