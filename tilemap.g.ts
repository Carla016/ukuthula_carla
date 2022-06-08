// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010000000100000000000000000000010100000001000101010100010101000101000000010000000000000100000001010000000100030101000001000101010100000001000000000000010001000100000100010000000000000100010000000001000101010100010101000100020100010001000100000100010001000001010100010101000001010100010001010000000100000000000001000100010100000101000001010000010000000101000000010000000000000100000001010001010100010101010001010100010100000000000000000000010000000101010101010101010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . 2 . . . . . . . . . . 2 
2 . . . 2 . 2 2 2 2 . 2 2 2 . 2 
2 . . . 2 . . . . . . 2 . . . 2 
2 . . . 2 . . 2 2 . . 2 . 2 2 2 
2 . . . 2 . . . . . . 2 . 2 . 2 
. . 2 . 2 . . . . . . 2 . 2 . . 
. . 2 . 2 2 2 2 . 2 2 2 . 2 . . 
2 . 2 . 2 . 2 . . 2 . 2 . 2 . . 
2 2 2 . 2 2 2 . . 2 2 2 . 2 . 2 
2 . . . 2 . . . . . . 2 . 2 . 2 
2 . . 2 2 . . 2 2 . . 2 . . . 2 
2 . . . 2 . . . . . . 2 . . . 2 
2 . 2 2 2 . 2 2 2 2 . 2 2 2 . 2 
2 . . . . . . . . . . 2 . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.builtin.brick,sprites.dungeon.chestOpen,sprites.dungeon.collectibleRedCrystal], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
