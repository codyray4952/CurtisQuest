function changeScreen(newScreen){
  console.log("switch screen");
  game.state.start(newScreen);
}

var spawn = "left";

var spawnx;
var spawny;
var spawnDir;

var gateState = {
  create: function(){
    this.keyboard = game.input.keyboard;

    game.add.sprite(0,0,'floor');

    walls = game.add.group();
    walls.enableBody = true;
    area = walls.create(0,0,"gate");
    area.body.immovable = true;

    if (spawn == "left"){
      spawnx = 40;
      spawny = 500;
      spawnDir = -1;
    }
    if (spawn == "right"){
      spawnx = 700;
      spawny = 500;
      spawnDir = 1
    }

    this.player = game.add.sprite(spawnx,spawny,'curtis');
    this.player.anchor.setTo(.5,1);
    this.player.scale.x = spawnDir;
    game.physics.enable(this.player, Phaser.Physics.ARCADE);
    this.player.body.collideWorldBounds = true;
  },
  update: function(){
    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT) || game.input.keyboard.isDown(Phaser.Keyboard.A))
    {
        this.player.body.x -= 4;
        this.player.scale.x = 1;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT) || game.input.keyboard.isDown(Phaser.Keyboard.D))
    {
        this.player.body.x += 4;
        this.player.scale.x = -1;
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.UP) || game.input.keyboard.isDown(Phaser.Keyboard.W))
    {
        this.player.body.y -= 4;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN) || game.input.keyboard.isDown(Phaser.Keyboard.S))
    {
        this.player.body.y += 4;
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.L))
    {
      console.log(this.player.body.x)
      console.log(this.player.body.y)
    }

    if (this.player.body.x == 736){
      spawn = "topLeft"
      changeScreen("dining")
    }

    this.game.physics.arcade.collide(this.player, walls);
  }
}

var diningState = {
  create: function(){
    this.keyboard = game.input.keyboard;

    game.add.sprite(0,0,'floor');

    walls = game.add.group();
    walls.enableBody = true;
    area = walls.create(0,0,"dining");
    area.body.immovable = true;
    area = walls.create(408,408, "diningTable");
    area.body.immovable = true;
    area = walls.create(0,245,'diningCouch');
    area.body.immovable = true;

    if (spawn == "bottomLeft"){
      spawnx = 168;
      spawny = 506;
      spawnDir = -1;
    }

    if (spawn == "topLeft"){
      spawnx = 112;
      spawny = 240;
      spawnDir = -1;
    }
    else if (spawn == "topRight"){
      spawnx = 596;
      spawny = 112;
      spawnDir = 1;
    }

    this.player = game.add.sprite(spawnx,spawny,'curtis');
    this.player.anchor.setTo(.5,1);
    this.player.scale.x = spawnDir;
    game.physics.enable(this.player, Phaser.Physics.ARCADE);
    this.player.body.collideWorldBounds = true;
  },
  update: function(){
    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT) || game.input.keyboard.isDown(Phaser.Keyboard.A))
    {
        this.player.body.x -= 4;
        this.player.scale.x = 1;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT) || game.input.keyboard.isDown(Phaser.Keyboard.D))
    {
        this.player.body.x += 4;
        this.player.scale.x = -1;
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.UP) || game.input.keyboard.isDown(Phaser.Keyboard.W))
    {
        this.player.body.y -= 4;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN) || game.input.keyboard.isDown(Phaser.Keyboard.S))
    {
        this.player.body.y += 4;
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.L))
    {
      console.log(this.player.body.x);
      console.log(this.player.body.y);
    }

    if (this.player.body.x == 0){
      spawn = "right";
      changeScreen("gate");
    }
    if (this.player.body.y == 0){
      spawn = "left";
      changeScreen("kitchen");
    }
    if (this.player.body.x == 111 && this.player.body.y > 500){
      spawn = "left";
      changeScreen("dungeon")
    }

    this.game.physics.arcade.collide(this.player, walls);
  }
}

var kitchenState = {
  create: function(){
    game.add.sprite(0,0,'floor');
    walls = game.add.group();
    walls.enableBody = true;
    area = walls.create(0,0,"kitchen");
    area.body.immovable = true;
    if (spawn == "left"){
      spawnx = 40;
      spawny = 500;
      spawnDir = -1;
    }
    this.player = game.add.sprite(spawnx,spawny,'curtis');
    this.player.anchor.setTo(.5,1);
    this.player.scale.x = spawnDir;
    game.physics.enable(this.player, Phaser.Physics.ARCADE);
    this.player.body.collideWorldBounds = true;

  },
  update: function(){
    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT) || game.input.keyboard.isDown(Phaser.Keyboard.A))
    {
        this.player.body.x -= 4;
        this.player.scale.x = 1;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT) || game.input.keyboard.isDown(Phaser.Keyboard.D))
    {
        this.player.body.x += 4;
        this.player.scale.x = -1;
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.UP) || game.input.keyboard.isDown(Phaser.Keyboard.W))
    {
        this.player.body.y -= 4;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN) || game.input.keyboard.isDown(Phaser.Keyboard.S))
    {
        this.player.body.y += 4;
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.L))
    {
      console.log(this.player.body.x)
      console.log(this.player.body.y)
    }

    if (this.player.body.x == 0){
      spawn = "topRight"
      changeScreen("dining")
    }

    this.game.physics.arcade.collide(this.player, walls);
  }
}
