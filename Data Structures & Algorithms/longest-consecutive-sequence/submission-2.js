class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let res = 0
        let set = new Set()
        let min = Number.MAX_SAFE_INTEGER
        let max = 0
        for(let i=0; i<nums.length; i++) {
            set.add(nums[i])
            if(nums[i] < min) min = nums[i]
            if(nums[i] > max) max = nums[i]
        }
        set.forEach(num => {
            if(!set.has(num-1)) {
                let j = 1
                while(set.has(num+j)) {
                    j++
                }
                res = Math.max(res, j)
            }
        })

        return res
    }
}
