class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let counterMap = new Map()
        let freqArr = new Array(nums.length).fill([])
        let finalCount = 0
        let res = []
        for(let i of nums) {
            counterMap.set(i, (counterMap.get(i)||0) + 1)
        }

        for(let [key, count] of counterMap.entries()) {
            freqArr[count-1] = [...freqArr[count-1], key]
        }

        console.log(freqArr)

        for(let i=nums.length-1; i>=0; i--) {
            while(freqArr[i].length > 0) {
                if(finalCount === k) return res
                res.push(freqArr[i].pop())
                finalCount++
            }
        }

        return res
    }
}
