tiles.setCurrentTilemap(tilemap`level1`)
let mySprite = sprites.create(assets.image`Cross`, SpriteKind.Player)
grid.snap(mySprite)
grid.moveWithButtons(mySprite)
grid.place(mySprite, tiles.getTileLocation(0, 0))
