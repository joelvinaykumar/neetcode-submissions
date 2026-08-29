class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = []
        let operators = ["+", "-", "*", "/"]

        if(tokens.length === 2) return

        for(let i=0; i<tokens.length; i++) {
            if(operators.includes(tokens[i])) {
                let curr = parseInt(stack.pop())
                let last = parseInt(stack.pop())
                // console.log("I'm popped ", curr, last, stack)
                switch (tokens[i]) {
                    case "+":
                        stack.push(last+curr)
                        break
                    case "-":
                        stack.push(last-curr)
                        break
                    case "*":
                        stack.push(last*curr)
                        break
                    case "/":
                        stack.push(parseInt(last/curr))
                        break
                    default:
                        continue
                }
                // console.log(stack)
            } else {
                // console.log("I'm pushed ",tokens[i])
                stack.push(tokens[i])
            }
        }

        return stack.pop()
    }
}
