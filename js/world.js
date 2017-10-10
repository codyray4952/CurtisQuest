function changeScreen(newScreen){
  game.state.start(newScreen);
}

var luna;
var circleWormLocation = "kitchen";
var circleWorm;

var spawn = "center";
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

    if (circleWormLocation == "kitchen"){
      luna = game.add.sprite(0,425,'luna');
      luna.enableBody = true;
      luna.scale.setTo(3)
      game.physics.enable(luna, Phaser.Physics.ARCADE);
      luna.body.immovable = true;
    }

    if (spawn == "right"){
      spawnx = 700;
      spawny = 500;
      spawnDir = 1;
    }
    else if (spawn == "center") {
      spawnx = 412;
      spawny = 517;
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
        this.player.body.velocity.x = -200;
        this.player.scale.x = 1;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT) || game.input.keyboard.isDown(Phaser.Keyboard.D))
    {
        this.player.body.velocity.x = 200;
        this.player.scale.x = -1;
    }
    else {
      this.player.body.velocity.x = 0;
    }
    if (game.input.keyboard.isDown(Phaser.Keyboard.UP) || game.input.keyboard.isDown(Phaser.Keyboard.W))
    {
        this.player.body.velocity.y = -200;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN) || game.input.keyboard.isDown(Phaser.Keyboard.S))
    {
        this.player.body.velocity.y = 200;
    }
    else {
      this.player.body.velocity.y = 0;
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
    this.game.physics.arcade.collide(this.player, circleWorm);
    this.game.physics.arcade.collide(walls,circleWorm);
    this.game.physics.arcade.collide(this.player,luna);
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

    if (circleWormLocation == "dining"){
      circleWorm = game.add.sprite(600,350,'circleWorm');
      game.physics.enable(circleWorm,Phaser.Physics.ARCADE);
      // circleWorm.body.velocity.setTo(200,200);
      // circleWorm.body.collideWorldBounds = true;
      circleWorm.body.bounce.setTo(0.5);
    }
  },
  update: function(){
    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT) || game.input.keyboard.isDown(Phaser.Keyboard.A))
    {
        this.player.body.velocity.x = -200;
        this.player.scale.x = 1;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT) || game.input.keyboard.isDown(Phaser.Keyboard.D))
    {
        this.player.body.velocity.x = 200;
        this.player.scale.x = -1;
    }
    else {
      this.player.body.velocity.x = 0;
    }
    if (game.input.keyboard.isDown(Phaser.Keyboard.UP) || game.input.keyboard.isDown(Phaser.Keyboard.W))
    {
        this.player.body.velocity.y = -200;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN) || game.input.keyboard.isDown(Phaser.Keyboard.S))
    {
        this.player.body.velocity.y = 200;
    }
    else {
      this.player.body.velocity.y = 0;
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
    this.game.physics.arcade.collide(this.player, circleWorm);
    this.game.physics.arcade.collide(walls,circleWorm)
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
    this.player.body.bounce.setTo(1,1)

    if (circleWormLocation == "kitchen"){
      circleWorm = game.add.sprite(600,350,'circleWorm');
      game.physics.enable(circleWorm,Phaser.Physics.ARCADE);
      // circleWorm.body.velocity.setTo(200,200);
      // circleWorm.body.collideWorldBounds = true;
      circleWorm.body.bounce.setTo(0.5);
    }
  },
  update: function(){
    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT) || game.input.keyboard.isDown(Phaser.Keyboard.A))
    {
        this.player.body.velocity.x = -200;
        this.player.scale.x = 1;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT) || game.input.keyboard.isDown(Phaser.Keyboard.D))
    {
        this.player.body.velocity.x = 200;
        this.player.scale.x = -1;
    }
    else {
      this.player.body.velocity.x = 0;
    }
    if (game.input.keyboard.isDown(Phaser.Keyboard.UP) || game.input.keyboard.isDown(Phaser.Keyboard.W))
    {
        this.player.body.velocity.y = -200;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN) || game.input.keyboard.isDown(Phaser.Keyboard.S))
    {
        this.player.body.velocity.y = 200;
    }
    else {
      this.player.body.velocity.y = 0;
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.L))
    {
      console.log(circleWorm.body.x)
      console.log(circleWorm.body.y)
    }

    if (this.player.body.x == 0){
      spawn = "topRight";
      if (circleWormLocation == "kitchen"){
        if (circleWorm.body.x < 0){
          circleWormLocation = "dining";
        }
      }
      changeScreen("dining");
    }

    this.game.physics.arcade.collide(this.player, walls);
    this.game.physics.arcade.collide(this.player, circleWorm);
    this.game.physics.arcade.collide(walls,circleWorm)
  }
}
