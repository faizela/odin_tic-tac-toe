const gameBoard = (function () {
    let gameboard = 
    ['_', '_', '_',
    '_', '_', '_',
    '_', '_', '_',
    ]
    return {gameboard}
    
})()

function Player (name, mark)  {
 return {name, mark}
}




const player1 = Player('feisal', 'X')
const player2 = Player('adnan', 'O')




 const gameController = (function () {
    console.log(player1, player2,gameboard)
    // let gamerules = {row1_win : [p1.mark || p2.mark === gameboard(0)
    //     &&  p1.mark || p2.mark === gameboard(1) 
    //     &&  p1.mark || p2.mark === gameboard(2)                 
    //   ]}
    // return {gamerules}
}) ()

let game1 = gameController
console.log(game1)




// console.log(player1, player2)
// console.log(gameBoard.gameboard[0], gameBoard.gameboard[1], gameBoard.gameboard[2]) 