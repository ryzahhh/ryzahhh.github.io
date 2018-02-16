var boot = function (game) {

    console.log("%c Starting my awesome game ", "color:white; background:green");
    
};

boot.prototype = {

    preload: function () {

        this.game.load.image("loading", "assets/loading.png");

    },
    create: function () {

        this.game.state.start("Load");

    }
}
