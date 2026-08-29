class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = []
        let counter = 0

        for(let i of s) {
            if(['[', '{', '('].includes(i)) stack.push(i)
            if([']', '}', ')'].includes(i)) {
                let item = stack.pop()
                if(i === ']' &&  item !== '[') {
                    return false
                }
                if(i === '}' &&  item !== '{') return false
                if(i === ')' &&  item !== '(') return false
            }
        }
        console.log({stack})
        return stack.length===0
    }
}
