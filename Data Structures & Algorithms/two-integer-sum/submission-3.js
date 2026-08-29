class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map()
        for(let i=0;i< nums.length; i++) {
            let c = target - nums[i]

            if(map.has(c)) {
                return [map.get(c), i]
            } else {
                map.set(nums[i], i)
            }
        }
        
        return []
    }
}
