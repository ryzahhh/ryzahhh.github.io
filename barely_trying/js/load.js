var load = function(game) {};


load.prototype = {
  preload: function() {

    this.game.load.image('player', 'assets/player.png');
    this.game.load.image("sky", "assets/bg.png");
    this.game.load.image('portal', 'assets/portal.png');

    this.game.load.image('title', 'assets/title.png');
    this.game.load.image('btn1', 'assets/play_btn.png');
    this.game.load.image('btn2', 'assets/info_btn.png');
    this.game.load.image('enemy', 'assets/enemy.png');

    this.game.load.image('tiles', 'assets/tileset.png');
    this.game.load.tilemap('map', 'assets/level1.csv', null, Phaser.Tilemap.CSV);
    this.game.load.tilemap('map2', 'assets/world2.csv', null, Phaser.Tilemap.CSV);


  },
  create: function() {


    this.game.stage.backgroundColor = '#377580';

    this.game.add.sprite(0, 0, 'loading');

    this.game.state.start("Level");
  }

}
