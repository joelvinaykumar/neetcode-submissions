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
            let mid = left + Math.floor((right - left)/2)

            if(mid * mid > x) {
                right = mid - 1
            } else if (mid * mid < x) {
                res = mid
                left = mid + 1
            } else {
                return mid
            }
        }

        return res
    }
}
