class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let buckets = new Array(nums.length+1).fill([])
        let freqMap = new Map()
        let res = []
        let j = 0

        for(let num of nums) {
            let val = freqMap.get(num) || 0
            freqMap.set(num, val+1)
        }

        for(let [k,v] of freqMap.entries()) {
            buckets[v] = [...buckets[v], k]
        }

        for(let i=buckets.length-1; i>=0; i--) {
            if(j<k && buckets[i].length>0) {
                res.push(...buckets[i])
                j+=buckets[i].length
            }
        }

        return res
    }
}
