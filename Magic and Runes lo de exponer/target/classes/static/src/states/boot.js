var MagicAndRunes = {}

MagicAndRunes.bootState = function(game) {

}

MagicAndRunes.bootState.prototype = {

    preload: function() {
        
    },

    create: function() {
        //Cargamos sistema de físicas y pasamos al preload
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.physics.arcade.gravity.y=100;
        game.state.start('preloadState');
    },

    update: function() {

    }
}