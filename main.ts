namespace SpriteKind {
    export const Helicopter = SpriteKind.create()
    export const cloud = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    copter.vy += -1
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    copter.vx += -1
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    copter.vx += 1
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    copter.vy += 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.x += -1 * sprite.vx
    sprite.x += -1 * sprite.vy
    sprite.vx = 0
    sprite.vy = 0
    otherSprite.y += -1
    pause(100)
    otherSprite.y += 1
})
let copter: Sprite = null
game.splash("Cloud Bump", "control pad flying")
scene.setBackgroundColor(9)
copter = sprites.create(img`
    .............ccfff..............
    ...........ccddbcf..............
    ..........ccddbbf...............
    ..........fccbbcf...............
    .....fffffccccccff.........ccc..
    ...ffbbbbbbbcbbbbcfff....ccbbc..
    ..fbbbbbbbbcbcbbbbcccff.cdbbc...
    ffbbbbbbffbbcbcbbbcccccfcdbbf...
    fbcbbb11ff1bcbbbbbcccccffbbf....
    fbbb11111111bbbbbcccccccbbcf....
    .fb11133cc11bbbbcccccccccccf....
    ..fccc31c111bbbcccccbdbffbbcf...
    ...fc13c111cbbbfcddddcc..fbbf...
    ....fccc111fbdbbccdcc.....fbbf..
    .......3ccccfcdbbcc33......fff..
    .......333333fffff333...........
    33333333333333333333333333333333
    33333333333333333333333333333333
    `, SpriteKind.Helicopter)
copter.setStayInScreen(true)
let cloud1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 1 1 1 1 1 1 1 1 1 . . . 
    . . 1 1 1 8 8 8 8 8 8 8 1 1 . . 
    . 1 1 8 8 8 8 8 1 1 1 1 1 1 1 . 
    1 8 8 8 8 8 8 8 8 8 8 8 8 8 1 1 
    1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 
    1 1 8 8 8 8 8 8 8 8 8 8 8 8 8 1 
    . 1 8 8 1 1 1 1 1 8 8 8 8 8 8 1 
    . 1 1 1 1 8 8 8 8 8 8 8 8 8 1 1 
    . . . 1 1 1 8 8 8 8 8 8 8 1 1 . 
    . . . . . . 1 1 1 8 8 8 1 . . . 
    . . . . . . . . 1 1 1 1 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.cloud)
cloud1.x = 20
cloud1.y = 30
let cloud2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 1 1 1 1 1 1 1 1 1 . . . 
    . . 1 1 1 8 8 8 8 8 8 8 1 1 . . 
    . 1 1 8 8 8 8 8 1 1 1 1 1 1 1 . 
    1 8 8 8 8 8 8 8 8 8 8 8 8 8 1 1 
    1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 
    1 1 8 8 8 8 8 8 8 8 8 8 8 8 8 1 
    . 1 8 8 1 1 1 1 1 8 8 8 8 8 8 1 
    . 1 1 1 1 8 8 8 8 8 8 8 8 8 1 1 
    . . . 1 1 1 8 8 8 8 8 8 8 1 1 . 
    . . . . . . 1 1 1 8 8 8 1 . . . 
    . . . . . . . . 1 1 1 1 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.cloud)
cloud2.x = 50
cloud2.y = 65
let cloud3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 1 1 1 1 1 1 1 1 1 . . . 
    . . 1 1 1 8 8 8 8 8 8 8 1 1 . . 
    . 1 1 8 8 8 8 8 1 1 1 1 1 1 1 . 
    1 8 8 8 8 8 8 8 8 8 8 8 8 8 1 1 
    1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 
    1 1 8 8 8 8 8 8 8 8 8 8 8 8 8 1 
    . 1 8 8 1 1 1 1 1 8 8 8 8 8 8 1 
    . 1 1 1 1 8 8 8 8 8 8 8 8 8 1 1 
    . . . 1 1 1 8 8 8 8 8 8 8 1 1 . 
    . . . . . . 1 1 1 8 8 8 1 . . . 
    . . . . . . . . 1 1 1 1 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.cloud)
cloud3.x = 100
cloud3.x = 40
let landing = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . f f f f f f f f f f f f f f . 
    . f f f f f f f f f f f f f f . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
landing.y = 125
