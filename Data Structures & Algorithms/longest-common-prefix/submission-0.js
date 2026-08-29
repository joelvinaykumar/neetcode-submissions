class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let res = ""
        let minLength = Number.MAX_SAFE_INTEGER

        for(let i=0; i<strs.length; i++) {
            minLength = Math.min(minLength, strs[i].length)
        }

        for(let i=0; i< minLength; i++) {
            let count = 0
            for(let j=1;j< strs.length; j++) {
                if(strs[j][i]===strs[0][i]) count++
            }
            if(count===strs.length-1) res+=strs[0][i]
            else break
        }

        return res
    }
}
