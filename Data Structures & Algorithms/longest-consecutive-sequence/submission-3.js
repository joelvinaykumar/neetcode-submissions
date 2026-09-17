class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums)
        let count = 0

        for(let num of nums) {
            if(!set.has(num-1)) {
                let curr = 0 
                while(set.has(num+curr)) {
                    curr++
                }
                count = Math.max(count, curr)
            }
        }

        return count

    }
}
