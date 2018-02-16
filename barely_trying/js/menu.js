var menu = function (game) {};
var title;
var v;

menu.prototype = {

    preload: function () {

    },

    create: function () {

        v = this.game.add.image(this.game.world.centerX, this.game.world.centerY, 'background');


        title = this.game.add.image(this.game.world.centerX, 150, 'title');
        title.anchor.set(0.5);
        title.scale.setTo(2, 2);

        title = this.game.add.image(this.game.world.centerX, 300, 'btn1');
        title.anchor.set(0.5);

        title = this.game.add.image(this.game.world.centerX, 400, 'btn2');
        title.anchor.set(0.5);





        /**
        map = this.game.add.tilemap('map', 32, 32);
              map.addTilesetImage('tiles');
              layer = map.createLayer(0);
              layer.resizeWorld();
              map.setCollision([226, 251, 51]);
              **/

    }

}
