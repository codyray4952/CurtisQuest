var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

var level = "gate";
var area;
var area2;

function changeScreen(newLevel, oldLevel, side){
  level = newLevel;
  area.destroy();
  if (oldLevel == "dining")
  {
    area2.destroy();
    area3.destroy();
  }
  area = walls.create(0,0,level);
  area.body.immovable = true;
  if (side == "right")
  {
    player.body.y = 500;
    player.body.x = 700;
  }
  else if (side == "left")
  {
    player.body.y = 500;
    player.body.x = 40;
  }
  else if (side == "g2d")
  {
    player.body.y = 240;
    player.body.x = 112;
  }
  else if (side == "k2d")
  {
    player.body.y = 112;
    player.body.x = 596;
  }
}

function screenManage()
{
  if (player.body.x == 736 && level == "gate")
  {
    changeScreen("dining","gate", "g2d");
    area2 = walls.create(408,408, "diningTable");
    area2.body.immovable = true;
    area3 = walls.create(0,219,'diningCouch');
    area3.body.immovable = true;
  }

  if (player.body.y == 0 && level == "dining")
  {
    changeScreen("kitchen","dining", "left");
  }

  if (player.body.x == 0 && level == "dining")
  {
    changeScreen("gate","dining", "right");
  }

  if (player.body.x == 0 && level == "kitchen")
  {
    changeScreen("dining","kitchen", "k2d");
    area2 = walls.create(408,408, "diningTable");
    area2.body.immovable = true;
    area3 = walls.create(0,219,'diningCouch');
    area3.body.immovable = true;
  }
}

function preload() {
  game.load.image('dining','assets/backgrounds/diningBg.png')
  game.load.image('diningCouch','assets/backgrounds/diningCouch.png')
  game.load.image('diningTable','assets/backgrounds/diningTable.png')
  game.load.image('floor','assets/backgrounds/floor.png');
  game.load.image('gate','assets/backgrounds/gateBg.png');
  game.load.image('kitchen','assets/backgrounds/kitchenBg.png');
  game.load.image('curtis','assets/characters/curtis.png');
}

function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE);
  game.add.sprite(0,0,'floor');
  walls = game.add.group();
  walls.enableBody = true;
  area = walls.create(0,0, level);
  area.body.immovable = true;

  player = game.add.sprite(100,500, 'curtis');
  player.anchor.setTo(0.5,1);
  game.physics.arcade.enable(player);
  player.body.collideWorldBounds = true;
}

function update() {
  if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
  {
      player.body.x -= 4;
  }
  else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
  {
      player.body.x += 4;
  }

  if (game.input.keyboard.isDown(Phaser.Keyboard.UP))
  {
      player.body.y -= 4;
  }
  else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN))
  {
      player.body.y += 4;
  }
  var hitWalls = this.game.physics.arcade.collide(player, walls);

  screenManage()

  if (game.input.keyboard.isDown(Phaser.Keyboard.L))
  {
    console.log(player.body.x)
    console.log(player.body.y)
  }
}
