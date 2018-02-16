var level = function(game) {};


var _map;
var _layer;
var _player;
var _cursors;
var _jumpTimer = 0;
var _portals;
var _portal;
var _enemies;
var _enemy;
var background;

level.prototype = {

  create: function() {



    background = this.game.add.sprite(400, 300, 'sky');
    background.anchor.set(0.5, 0.5);
    background.width = this.game.width;
    background.height = this.game.height;
    background.fixedToCamera = true;


    /**

          **  MAP SETTINGS **

    **/

    _map = this.game.add.tilemap('map', 32, 32);

    _map.addTilesetImage('tiles');

    _layer = _map.createLayer(0);

    _layer.resizeWorld();

    _map.setCollision([4, 10, 3, 81, 3, 5]);

    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    this.game.physics.arcade.gravity.y = 1000;




    /**

          **  PLAYER SETTINGS **

    **/

    _player = this.game.add.sprite(218, 1174, 'player');

    _player.anchor.setTo(0.5, 0.5);

    _player.scale.setTo(0.4, 0.4);

    _cursors = this.game.input.keyboard.createCursorKeys();

    this.game.physics.enable(_player, Phaser.Physics.ARCADE);

    this.game.camera.follow(_player);

    _player.body.collideWorldBounds = true;

    /**

          **  PORTALS SETTINGS **

    **/

    _portals = this.game.add.physicsGroup();

    _portal = this.game.add.sprite(1732, 1174, 'portal');

    _portal.anchor.setTo(0.5, 0.5);

    _portal.scale.setTo(0.4, 0.4);

    _portals.add(_portal);

    /**

          **  enemy SETTINGS **

    **/

    _enemies = this.game.add.physicsGroup();

    for (var i = 0; i < 5; i++) {
      _enemy = this.game.add.sprite(this.game.world.randomX, this.game.world.randomY, 'enemy');

      _enemy.scale.setTo(0.3, 0.3);

      _enemies.add(_enemy);
    }
    

  },

  update: function() {

    this.game.physics.arcade.overlap(_portals, _player, this.teleport, null, this);

    this.game.physics.arcade.collide(_enemies, _layer);
    this.game.physics.arcade.overlap(_enemies, _player, this.die, null, this);

    this.game.physics.arcade.collide(_player, _layer);

    this.game.physics.arcade.collide(_portals, _layer);




    /**

          **  CONTROLS SETTINGS **

    **/

    _player.body.velocity.x = 0;

    if (_cursors.left.isDown) {

      _player.body.velocity.x = -300;

    } else if (_cursors.right.isDown) {

      _player.body.velocity.x = 300;

    }
    if (_cursors.up.isDown && _player.body.onFloor() && this.game.time.now > _jumpTimer) {

      _player.body.velocity.y = -700;

      _jumpTimer = this.game.time.now + 700;

    }

  },

  die: function() {
    this.game.state.start("Level");
  },

  teleport: function() {

    this.game.state.start("Portal");

  },

  render: function() {

    this.game.debug.spriteInfo(_player, 32, 32);

  }

}
