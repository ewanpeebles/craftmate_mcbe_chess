import { Vector2 } from '@minecraft/server'
import { Square } from './chess_engine/chess_js.js'
const squareToXY = (square: Square): Vector2 => {
    let location: Vector2;
    switch (square[0]) {
        case 'a':
            location.y = 0;
            break;
        case 'b':
            location.y = 1;
            break;
        case 'c':
            location.y = 2;
            break;
        case 'd':
            location.y = 3;
            break;
        case 'e':
            location.y = 4;
            break;
        case 'f':
            location.y = 5;
            break;
        case 'g':
            location.y = 6;
            break;
        case 'h':
            location.y = 7;
            break;
    }
    location.x = parseInt(square[1]); // We shouldn't get an error but this is safer

    return location;
}
export { squareToXY }