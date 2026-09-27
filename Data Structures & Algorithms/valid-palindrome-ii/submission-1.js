class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        let left = 0
        let right = s.length - 1

        while(left < right) {
            if(s[left] !== s[right]) {
                let left_substr = s.substring(left+1, right+1)
                let right_substr = s.substring(left, right)

                return (
                    left_substr===left_substr.split('').reverse().join('') ||
                    right_substr===right_substr.split('').reverse().join('')
                )
            }
            left++
            right--
        }

        return true
    }
}
