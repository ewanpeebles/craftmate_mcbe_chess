import { system, world, Vector3, Dimension, BlockType } from '@minecraft/server'

import { Chess, Square } from './chess_engine/chess_js.js'

import { squareToXY } from './utils.js'

const render = (bottomLeft: Vector3, dimId: string, game: Chess) => {
    game.board().forEach(column => {
        column.forEach(square => {
            // Render the board
            const squareLoc = squareToXY(square.square); // X and Y refer to X and Z in Minecraft
            var placeLoc: Vector3 = { x: bottomLeft.x + squareLoc.x, y: bottomLeft.y, z: bottomLeft.z + squareLoc.y };
            var bType: BlockType = { id: (square.color == 'w' ? 'minecraft:birch_planks' : 'minecraft:dirt') };
            world.getDimension(dimId).setBlockType(placeLoc, bType);
        });
    });
}