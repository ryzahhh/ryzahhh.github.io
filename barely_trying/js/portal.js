var portal = function(game) {};


var map;
var layer;
var player;
var cursors;
var jumpTimer = 0;
var portals;
var portal;


portal.prototype = {

  create: function() {

    /**

          **  MAP SETTINGS **

    **/

    //this.game.stage.backgroundColor = 'rgb(99, 144, 147)';

    map = this.game.add.tilemap('map2', 32, 32);

    map.addTilesetImage('tiles');

    layer = map.createLayer(0);

    layer.resizeWorld();

    map.setCollision([187, 192, 172, 193, 179, 173]);

    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    this.game.physics.arcade.gravity.y = 1000;

    /**

          **  PLAYER SETTINGS **

    **/

    player = this.game.add.sprite(70, 1408, 'player');

    player.anchor.setTo(0.5, 0.5);

    player.scale.setTo(1, 1);

    cursors = this.game.input.keyboard.createCursorKeys();

    this.game.physics.enable(player, Phaser.Physics.ARCADE);

    this.game.camera.follow(player);

    player.body.collideWorldBounds = true;

    /**

          **  PORTALS SETTINGS **

    **/

    portals = this.game.add.physicsGroup();

    portal = this.game.add.sprite(1110, 450, 'portal');

    portal.anchor.setTo(0.5, 0.5);

    portal.scale.setTo(0.4, 0.4);

    portals.add(portal);

  },

  update: function() {

    this.game.physics.arcade.overlap(portals, player, this.teleport, null, this);

    this.game.physics.arcade.collide(player, layer);

    this.game.physics.arcade.collide(portals, layer);

    /**

          **  CONTROLS SETTINGS **

    **/

    player.body.velocity.x = 0;

    if (cursors.left.isDown) {

      player.body.velocity.x = -300;

    } else if (cursors.right.isDown) {

      player.body.velocity.x = 300;

    }
    if (cursors.up.isDown && player.body.onFloor() && this.game.time.now > jumpTimer) {

      player.body.velocity.y = -500;

      jumpTimer = this.game.time.now + 700;

    }

  },
  render: function() {

    this.game.debug.spriteInfo(player, 32, 32);

  }
}
