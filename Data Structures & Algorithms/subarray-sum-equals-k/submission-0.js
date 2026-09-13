class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let current_sum = 0
        let prefixSums = new Map()
        prefixSums.set(0, 1)
        let result = 0

        for(let num of nums) {
            current_sum += num
            let diff = current_sum - k
            result += prefixSums.get(diff) || 0
            prefixSums.set(current_sum, (prefixSums.get(current_sum) || 0) + 1)   
        }

        return result
    }
}
