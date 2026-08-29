class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        /*
            Using boyer moore voting algorithm
            - Since majority candidate has > n/2 votes, it is bound to win the election
            - Increment count when candidate matches
            - Decrement count when candidate mismatches
            - If the count is 0 and the candidate mismatches, update the candidate
        */
        let candidate = null
        let votes = 0
        
        for(const num of nums) {
            if(votes===0 && candidate !== num) {
                candidate = num
            }

            if(candidate === num) {
                votes += 1
            } else {
                votes -= 1
            }
        }

        return candidate

    }
}
