// Declare the player variable at the top of the file
let player;

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game-container', // Set the parent container
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

function preload() {
    // Load your tilemap JSON and tileset image
    this.load.tilemapTiledJSON('tilemap', 'src/tilemap.json');
    this.load.image('tileset', 'src/tileset.png');

    // Load your character sprite
    this.load.image('character', 'src/character.png');
}

function create() {
    // Create the tilemap and add the tileset image
    const map = this.make.tilemap({ key: 'tilemap' });
    const tileset = map.addTilesetImage('tileset', 'tileset');

    // Create the layers (assuming you have a layer named "Ground" in Tiled)
    const groundLayer = map.createLayer('Ground', tileset, 0, 0);

    // Set up collisions for the ground layer
    groundLayer.setCollisionByProperty({ collides: true });

    // Create the character object
    player = this.physics.add.sprite(100, 100, 'character');

    // Enable collisions between the character and the ground layer
    this.physics.add.collider(player, groundLayer);
}

function update() {
    // Handle game updates, such as player movement and collisions
}
