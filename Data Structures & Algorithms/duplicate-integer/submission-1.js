class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let hashset = new Set()

        for(let num of nums) {
            if(hashset.has(num)) {
                return true    
            } else {
                hashset.add(num)
            }
        }

        console.log(hashset)

        return false
    }
}
