namespace SpriteKind {
    export const Helicopter = SpriteKind.create()
    export const cloud = SpriteKind.create()
    export const landingPad = SpriteKind.create()
    export const person = SpriteKind.create()
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
sprites.onOverlap(SpriteKind.Helicopter, SpriteKind.person, function (sprite, otherSprite) {
    otherSprite.say("AHHHH YOU HIT ME")
})
sprites.onOverlap(SpriteKind.Helicopter, SpriteKind.landingPad, function (sprite, otherSprite) {
    copter.vx += -1 * sprite.vy
    copter.vy += -1 * sprite.vy
    copter.y += 2
    game.over(true)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    copter.vy += 1
})
sprites.onOverlap(SpriteKind.Helicopter, SpriteKind.cloud, function (sprite, otherSprite) {
    sprite.x += -1 * sprite.vx
    sprite.y += -1 * sprite.vy
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
cloud3.y = 40
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
    `, SpriteKind.landingPad)
landing.y = 125
let tree = sprites.create(img`
    ................................
    ...........777777777777.........
    .......7777777777777777777......
    .....7777777777777777777777.....
    ....777777777777777777777777....
    ...7777777777777777777777777....
    ...77777777777777777777777777...
    ..777777777777777777777777777...
    ..777777777777777777777777777...
    .77777777777777777777777777777..
    .77777777777777777777777777777..
    .77777777777777777777777777777..
    ..7777777777777777777777777777..
    ..7777777777777777777777777777..
    ....777777777eeeeeee7777777777..
    ......7777777eeeeeee7777777777..
    ........77777eeeeeee7777777777..
    .............eeeeeee.77777777...
    .............eeeeeee..777777....
    .............eeeeeee............
    .............eeeeeee............
    .............eeeeeee............
    .............eeeeeee............
    .............eeeeeee............
    .............eeeeeee............
    ............eeeeeeee............
    ............eeeeeeee............
    ...........eeeeeeeee............
    ...........eeeeeeeeee...........
    ..........eeeeeeeeeee...........
    ..........eeeeeeeeeee...........
    .........eeeeeeeeeeeee..........
    `, SpriteKind.cloud)
tree.setPosition(130, 75)
let otherSprite = sprites.create(img`
    . . . . f f f f f f f . . . . . 
    . f f f f d d d d d d f f . . . 
    . f d d d d f d d f d d d f . . 
    . f d d f d d d d d d f d d f . 
    . f f d f f f f f f f f d d f f 
    . . f d d d d d d d d d d d f f 
    . . f f f f f f f d d d f f f . 
    f . . . . 3 3 3 f f f f f . . . 
    f . . . 3 3 3 3 3 3 3 . . . . . 
    f f f f 3 3 3 3 3 3 3 3 f f f f 
    . . . . 3 3 3 3 3 3 3 3 . . . f 
    . . . . . 3 3 3 3 3 3 3 . . . . 
    . . . . . 3 3 3 3 3 3 3 . . . . 
    . . . . . f 3 3 3 f 3 . . . . . 
    . . f f f f . . 3 f f f f . . . 
    . . f f f f . . . f f f f . . . 
    `, SpriteKind.person)
otherSprite.setPosition(34, 96)
game.onUpdate(function () {
    copter.x += controller.dx()
    copter.y += controller.dy()
})
