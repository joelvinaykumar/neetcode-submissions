class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let res = true
        let input = s.trim().split(' ').join('').toLowerCase()
        let n = input.length
        let temp_input = ''
        for(let i=0; i< n; i++) {
            // 0-9, a-z, A-Z
            let isAlphaNumeric = (input.charCodeAt(i)>=48 && input.charCodeAt(i)<=57) || (input.charCodeAt(i)>=65 && input.charCodeAt(i)<=90) || (input.charCodeAt(i)>=96 && input.charCodeAt(i)<=122)
            if(isAlphaNumeric) temp_input += input[i]
        }
        console.log(temp_input.length)
        n = temp_input.length
        for(let i=0; i< n/2; i++) {
            if(temp_input[i] !== temp_input[n-1-i]){
                console.log(i,temp_input[i], n-1-i, temp_input[n-1-i])
                return false
            } 
        }

        return true
    }
}
