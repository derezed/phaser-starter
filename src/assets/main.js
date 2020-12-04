import Phaser from 'phaser'

const gameState = {};

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload,
        create,
        update
    }
};

function preload() {
    this.load.image('playerShip', '/assets/images/player.png');
}

function create() {
    gameState.player = this.add.sprite(420, 368, 'playerShip');
    gameState.player.setInteractive();
    gameState.cursors = this.input.keyboard.createCursorKeys();
}

function update() {
    if (gameState.cursors.right.isDown) {
        gameState.player.x += 5;
    }

    if (gameState.cursors.left.isDown) {
        gameState.player.x -= 5;
    }

    if (gameState.cursors.up.isDown) {
        gameState.player.y -= 5;
    }

    if (gameState.cursors.down.isDown) {
        gameState.player.y += 5;
    }
}

new Phaser.Game(config);