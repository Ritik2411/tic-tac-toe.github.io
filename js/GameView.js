export default class GameView{
    constructor(){
        console.log("Init GameView")
    }

    updateBoard(game){
        this.updateTurn(game)

        const winnerCombination = game.findWinningCombination()

        for(let i=0; i<game.board.length; i++){
            const tile = document.querySelector(`.board-tile[data-index='${i}']`)
            
            tile.classList.remove('tile-winner')

            let tileType = game.board[i] == 'X'?"tile-x":"tile-o"
            tile.innerHTML = `<span class="${tileType}">${game.board[i]?game.board[i]:''}</span>`

            
            if(winnerCombination && winnerCombination.includes(i)){
            tile.classList.add("tile-winner")
        }
        }

    }

    updateTurn(game){
        let playerX = document.querySelector(".player-x")
        let playerO = document.querySelector(".player-o")
        playerX.classList.remove('active')
        playerX.classList.remove('active')

        if(game.turn == "X"){
            playerX.classList.add('active')
        }
        else{
            playerO.classList.add('active')
        }
    }
}