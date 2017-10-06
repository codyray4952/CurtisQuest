var loadState = {
  preload: function(){
    var loadingLabel = game.add.text(80,150,'Loading...',{font:'30px Courier',fill: '#ffffff'});

    game.load.image('menu','/assets/backgrounds/menu.png');

    game.load.image('floor','/assets/backgrounds/floor.png');

    game.load.image('gate','/assets/backgrounds/gateBg.png');

    game.load.image('dining','/assets/backgrounds/diningBg.png');
    game.load.image('diningCouch','/assets/backgrounds/diningCouch.png');
    game.load.image('diningTable','/assets/backgrounds/diningTable.png');

    game.load.image('kitchen','/assets/backgrounds/kitchenBg.png');

    game.load.image('dungeonBg','/assets/backgrounds/dungeonBg.png');
    game.load.image('dungeonWall','/assets/backgrounds/dungeonBarrier.png');
    game.load.image('dungeonWallVert','/assets/backgrounds/dungeonBarrierVert.png');
    game.load.image('dungeonCorner','/assets/backgrounds/dungeonCorner.png');

    game.load.image('curtis','/assets/characters/curtis.png');

  },
  create: function(){
    game.state.start('menu');
  }
}
