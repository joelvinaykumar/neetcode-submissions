class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map()
        let counter = new Array(nums.length+1).fill([])
        let res = []
        let n = 0

        for(let num of nums) {
            let temp = map.get(num) || 0
            map.set(num, temp + 1)
        }
        
        for(let [key,v] of map.entries()) {
            counter[v] = [...counter[v], key]
        }
        
        for(let i=counter.length-1; i>=0; i--) {
            if(res.length === k) {
                return res
            }
            for(let c of counter[i]) {
                res.push(c)
            }
        }

        return res
    }
}
