var menuState ={
  create: function(){
    game.add.sprite(0,0,'menu');

    var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);
    wkey.onDown.addOnce(this.start,this)
  },
  start: function(){
    game.state.start("gate");
    console.log("game started");
  }
}
