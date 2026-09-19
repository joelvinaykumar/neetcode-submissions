class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        let left = 0
        let right = x
        let res = 0

        while (left <= right) {
            let mid = left + parseInt((right - left)/2)
            let squared = mid * mid

            if(squared > x) {
                right = mid - 1
            } else if (squared < x) {
                res = mid
                left = mid + 1
            } else {
                return mid
            }
        }

        return res
    }
}
