class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let map = new Map()
        
        for(const num of nums) {
            map[num] = (map[num] || 0) + 1
        }

        for(const [item, count] of Object.entries(map)) {
            if(count > parseInt(nums.length)/2) return item
        }

    }
}
