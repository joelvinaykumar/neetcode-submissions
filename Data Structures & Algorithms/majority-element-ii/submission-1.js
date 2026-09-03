class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {

        let votes_1 = 0
        let candidate_1 = 0
        let votes_2 = 0
        let candidate_2 = 0
        let res = []
        let n = nums.length

        for(const num of nums) {
            if(candidate_1 === num) {
                votes_1++
            } else if (candidate_2 === num) {
                votes_2++
            } else if (votes_1 === 0) {
                candidate_1 = num
                votes_1 = 1
            } else if (votes_2 === 0) {
                candidate_2 = num
                votes_2 = 1
            } else {
                votes_1--
                votes_2--
            }
        }
        let count_1 = 0
        let count_2 = 0
        for(const num of nums) {
            if(num === candidate_1) count_1++
            if(num === candidate_2) count_2++
        }
        if(count_1>n/3) res.push(candidate_1)
        if(count_2>n/3) res.push(candidate_2)

        return res

    }
}
