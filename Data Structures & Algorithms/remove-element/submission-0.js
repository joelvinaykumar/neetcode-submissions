class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let k = 0
        let left = 0
        let right = nums.length-1
        while(left <= right) {
            console.log(left, right, nums)
            if(nums[right] === val || nums[left]===nums[right]===val) {
                console.log("I was invoked")
                nums[right] = "_"
                right--
                k++
            } else if(nums[left] === val) {
                nums[left] = nums[right]
                nums[right] = "_"
                left++
                right--
                k++
            } else {
                left++
            }

        }

        return nums.length-k
    }
}
