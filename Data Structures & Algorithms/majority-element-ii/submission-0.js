class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let first_elem = nums[0]
        let second_elem = nums[0]
        let first_votes = 0
        let second_votes = 0

        for(const num of nums) {
            if(num === first_elem) {
                first_votes++
            } else if(num===second_elem) {
                second_votes++
            } else if(first_votes===0) {
                first_elem = num
            } else if(second_votes===0) {
                second_elem = num
            } else {
                first_votes--
                second_votes--
            }
        }

        let first_count = 0
        let second_count = 0
        let arr = []
        for(const num of nums) {
            if(first_elem===num) first_count++
            if(second_elem===num) second_count++
        }

        if(first_count > parseInt(nums.length/3)) arr.push(first_elem)
        if(first_elem!==second_elem && second_count > parseInt(nums.length/3)) arr.push(second_elem)
        
        return arr
    }
}
