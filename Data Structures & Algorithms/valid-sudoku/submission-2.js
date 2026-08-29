class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let n = board.length
        let res = true
        let columns = new Set()

        for(let i=0; i<n; i++) {
            let row = new Set()
            let column = new Set()
            let square = new Set()
            for(let j=0; j<n; j++) {
                if(!row.has(board[i][j])) {
                    row.add(board[i][j])
                } else if (board[i][j] !== ".") {
                    res = false
                }
                if(!column.has(board[j][i])) {
                    column.add(board[j][i])
                } else if (board[j][i] !== ".") {
                    res = false
                }

                let x = parseInt(i/3)*3 + parseInt(j/3)
                let y = (i*3 + parseInt(j%3))%9
                
                if(x%3===0 && y%3===0) square = new Set()

                if(!square.has(board[x][y])) {
                    square.add(board[x][y])
                } else if (board[x][y] !== ".") {
                    res = false
                }
            }
        }

        return res
    }
}
