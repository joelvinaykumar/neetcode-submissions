class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let arr = []
        for(let x of nums) {
            if(arr.includes(x)) return true
            arr.push(x)
        }
        return false
    }
}
