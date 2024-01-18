// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile14 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile15 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile13 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`0b000900090c0c0c0c0c0c0c0c0c0d09020501040a010401040109020501010a010401040109030501040a010101040109020501010a010401010409020501040a040101040109070607060806070606080b060806060706060606080b06070608060608070608`, img`
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.darkGroundCenter,sprites.castle.tilePath5,myTiles.tile11,sprites.dungeon.darkGroundNorthEast1,myTiles.tile16,sprites.dungeon.floorLight0,sprites.dungeon.floorLight1,sprites.dungeon.floorMixed,myTiles.tile13,sprites.dungeon.darkGroundEast,sprites.dungeon.stairSouth,sprites.dungeon.stairLadder,sprites.dungeon.stairWest], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile4":
            case "tile6":return tile6;
            case "BLACK":
            case "tile3":return tile3;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile1":
            case "tile7":return tile7;
            case "myTile5":
            case "tile8":return tile8;
            case "myTile6":
            case "tile9":return tile9;
            case "myTile7":
            case "tile10":return tile10;
            case "myTile11":
            case "tile14":return tile14;
            case "myTile12":
            case "tile15":return tile15;
            case "myTile8":
            case "tile11":return tile11;
            case "myTile13":
            case "tile16":return tile16;
            case "myTile10":
            case "tile13":return tile13;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
