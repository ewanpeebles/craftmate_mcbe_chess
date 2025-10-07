import { system, world, Vector3, Dimension } from '@minecraft/server'
// Local module imports
import { craftmateMainMenu } from './ui.js'
// Chess.js - https://github.com/jhlywa/chess.js
import { Chess } from './chess_engine/chess_js.js'

// Physical board from a starting position
interface Board {
    dimension: Dimension,
    bottomLeft: Vector3
}

var board: Board;
var chess: Chess = null;

world.afterEvents.itemUse.subscribe(async data => {
    if (data.itemStack.typeId == 'cm:chess_menu') {
        const results = await craftmateMainMenu.show(data.source);
        if (!results.canceled) {
            if (results.selection == 0) {
                chess = new Chess();
                board.dimension = data.source.dimension;
                board.bottomLeft = data.source.location;
                // Do Chess loop stuff here or start a game or whatever
            }
        }
    }
})

world.afterEvents.playerBreakBlock.subscribe(e => {
    world.sendMessage(chess.ascii() ?? 'No chess game started')
})