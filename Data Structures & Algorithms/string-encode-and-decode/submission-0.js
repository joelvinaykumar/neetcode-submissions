class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.map(str => {
            return str.length+'#'+str
        }).join('')
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = []
        let num = ''
        let i = 0
        while(i<str.length) {
            console.log(num, str[i])
            if(str[i] === "#") {
                i++
                let text_length = i+parseInt(num)
                let word = ''
                console.log({text_length})
                for(let j=i; j<text_length; j++, i++) {
                    word += str[j]
                }
                    console.log({i})
                res.push(word)
                num = ''
            } else {
                num += str[i]
                i++
            }
        }
        return res
    }
}
