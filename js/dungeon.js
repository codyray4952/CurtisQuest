var dungeonRooms = [
  ["start","b2","e2","b1","e3"],
  ["b1","c4","d","c3","empty"],
  ["b4","c2","b3","e4","empty"],
  ["empty","b4","a1","end","empty"]
];

function dungeonRight(){
  spawn = "left";
  dungeonx += 1;
  changeScreen("dungeon");
}

function dungeonLeft(){
  spawn = "right";
  dungeonx -= 1;
  changeScreen("dungeon");
}

function dungeonDown(){
  spawn = "top";
  dungeony += 1;
  changeScreen("dungeon");
}

function dungeonUp(){
  spawn = "bottom";
  dungeony -= 1;
  changeScreen("dungeon");
}

dungeonx = 0;
dungeony = 0;

var dungeonState = {
  create: function(){
    game.add.sprite(0,0,"dungeonBg")

    dungeonCurrent = dungeonRooms[dungeony][dungeonx]

    if (dungeonCurrent == "start"){
      walls = game.add.group();
      walls.enableBody = true;
      area = walls.create(0,0,"dungeonWall");
      area.body.immovable = true;
      area2 = walls.create(0,600,"dungeonWall");
      area2.scale.y = -1;
      area2.body.immovable = true;
    }
    else if (dungeonCurrent == "a1"){
      walls = game.add.group();
      walls.enableBody = true;
      area = walls.create(0,0,"dungeonWall");
      area.body.immovable = true;
      area = walls.create(0,600,"dungeonWall");
      area.scale.y = -1;
      area.body.immovable = true;
    }
    else if (dungeonCurrent == "b1"){
      walls = game.add.group();
      walls.enableBody = true;
      area = walls.create(0,0,"dungeonWall");
      area.body.immovable = true;
      area = walls.create(0,0,"dungeonWallVert");
      area.body.immovable = true;
      area = walls.create(641,471,"dungeonCorner");
      area.body.immovable = true;
    }
    else if (dungeonCurrent == "b2"){
      walls = game.add.group();
      walls.enableBody = true;
      area = walls.create(800,0,"dungeonWallVert");
      area.scale.x = -1;
      area.body.immovable = true;
      area = walls.create(0,0,"dungeonWall");
      area.body.immovable = true;
      area = walls.create(159,471,"dungeonCorner");
      area.scale.x = -1;
      area.body.immovable = true;
    }
    else if (dungeonCurrent == "b3"){
      walls = game.add.group();
      walls.enableBody = true;
      area = walls.create(800,0,"dungeonWallVert");
      area.scale.x = -1;
      area.body.immovable = true;
      area = walls.create(0,600,"dungeonWall");
      area.scale.y = -1;
      area.body.immovable = true;
      area = walls.create(159,129,"dungeonCorner");
      area.scale.x = -1;
      area.scale.y = -1;
      area.body.immovable = true;
    }
    else if (dungeonCurrent == "b4"){
      walls = game.add.group();
      walls.enableBody = true;
      area = walls.create(0,0,"dungeonWallVert");
      area.body.immovable = true;
      area = walls.create(0,600,"dungeonWall");
      area.scale.y = -1;
      area.body.immovable = true;
      area = walls.create(641,129,"dungeonCorner");
      area.scale.y = -1;
      area.body.immovable = true;
    }
    else if (dungeonCurrent == "c2"){
      walls = game.add.group();
      walls.enableBody = true;
      area = walls.create(0,0,"dungeonWall");
      area.body.immovable = true;
      area = walls.create(641,471,"dungeonCorner");
      area.body.immovable = true;
      area = walls.create(159,471,"dungeonCorner");
      area.scale.x = -1;
      area.body.immovable = true;
    }
    else if (dungeonCurrent == "c3"){
      walls = game.add.group();
      walls.enableBody = true;
      area = walls.create(800,0,"dungeonWallVert");
      area.scale.x = -1;
      area.body.immovable = true;
      area = walls.create(159,471,"dungeonCorner");
      area.scale.x = -1;
      area.body.immovable = true;
      area = walls.create(159,129,"dungeonCorner");
      area.scale.x = -1;
      area.scale.y = -1;
      area.body.immovable = true;
    }
    else if (dungeonCurrent == "c4"){
      walls = game.add.group();
      walls.enableBody = true;
      area = walls.create(0,600,"dungeonWall");
      area.scale.y = -1;
      area.body.immovable = true;
      area = walls.create(641,129,"dungeonCorner");
      area.scale.y = -1;
      area.body.immovable = true;
      area = walls.create(159,129,"dungeonCorner");
      area.scale.x = -1;
      area.scale.y = -1;
      area.body.immovable = true;
    }
    else if (dungeonCurrent == "d"){
      walls = game.add.group();
      walls.enableBody = true;
      area = walls.create(641,471,"dungeonCorner");
      area.body.immovable = true;
      area = walls.create(159,471,"dungeonCorner");
      area.scale.x = -1;
      area.body.immovable = true;
      area = walls.create(159,129,"dungeonCorner");
      area.scale.x = -1;
      area.scale.y = -1;
      area.body.immovable = true;
      area = walls.create(641,129,"dungeonCorner");
      area.scale.y = -1;
      area.body.immovable = true;
    }
    else if (dungeonCurrent == "e2"){
      walls = game.add.group();
      walls.enableBody = true;
      area = walls.create(0,0,"dungeonWallVert");
      area.body.immovable = true;
      area = walls.create(800,0,"dungeonWallVert");
      area.scale.x = -1;
      area.body.immovable = true;
      area = walls.create(0,0,"dungeonWall");
      area.body.immovable = true;
    }
    else if (dungeonCurrent == "e3"){
      walls = game.add.group();
      walls.enableBody = true;
      area = walls.create(0,0,"dungeonWall");
      area.body.immovable = true;
      area = walls.create(0,600,"dungeonWall");
      area.scale.y = -1;
      area.body.immovable = true;
      area = walls.create(800,0,"dungeonWallVert");
      area.scale.x = -1;
      area.body.immovable = true;
    }
    else if (dungeonCurrent == "e4"){
      walls = game.add.group();
      walls.enableBody = true;
      area = walls.create(0,0,"dungeonWallVert");
      area.body.immovable = true;
      area = walls.create(800,0,"dungeonWallVert");
      area.scale.x = -1;
      area.body.immovable = true;
      area = walls.create(0,600,"dungeonWall");
      area.scale.y = -1;
      area.body.immovable = true;
    }
    else if (dungeonCurrent == "end"){
      walls = game.add.group();
      walls.enableBody = true;
      area = walls.create(0,0,"dungeonWall");
      area.body.immovable = true;
      area = walls.create(0,600,"dungeonWall");
      area.scale.y = -1;
      area.body.immovable = true;
    }

    if (spawn == "left"){
      spawnx = 40;
      spawny = 300;
      spawnDir = -1;
    }
    else if (spawn == "right"){
      spawnx = 700;
      spawny = 300;
      spawnDir = 1;
    }
    else if (spawn == "top"){
      spawnx = 400;
      spawny = 80;
    }
    else if (spawn == "bottom"){
      spawnx = 400;
      spawny = 500;
    }
    this.player = game.add.sprite(spawnx,spawny,'curtis');
    this.player.anchor.setTo(.5,1);
    this.player.scale.x = spawnDir;
    game.physics.enable(this.player, Phaser.Physics.ARCADE);
    this.player.body.collideWorldBounds = true;
  },
  update: function(){
    if (dungeonCurrent == "start"){
      if (this.player.body.x == 0){
        spawn = "bottomLeft";
        changeScreen("dining");
      }
      else if (this.player.body.x == 736){
        dungeonRight()
      }
    }

    else if (dungeonCurrent == "a1"){
      if (this.player.body.x == 0){
        dungeonLeft();
      }
      else if (this.player.body.x == 736){
        dungeonRight()
      }
    }

    else if (dungeonCurrent == "b1"){
      if (this.player.body.x == 736){
        dungeonRight()
      }
      else if (this.player.body.y == 542){
        dungeonDown();
      }
    }
    else if (dungeonCurrent == "b2"){
      if (this.player.body.x == 0){
        dungeonLeft();
      }
      else if (this.player.body.y == 542){
        dungeonDown();
      }
    }
    else if (dungeonCurrent == "b3"){
      if (this.player.body.x == 0){
        dungeonLeft();
      }
      else if (this.player.body.y == 0){
        dungeonUp();
      }
    }
    else if (dungeonCurrent == "b4"){
      if (this.player.body.y == 0){
        dungeonUp();
      }
      else if (this.player.body.x == 736){
        dungeonRight();
      }
    }
    else if (dungeonCurrent == "c2"){
      if (this.player.body.x == 0){
        dungeonLeft();
      }
      else if (this.player.body.x == 736){
        dungeonRight();
      }
      else if (this.player.body.y == 542){
        dungeonDown();
      }
    }
    else if (dungeonCurrent == "c3"){
      if (this.player.body.x == 0){
        dungeonLeft();
      }
      else if (this.player.body.y == 0){
        dungeonUp();
      }
      else if (this.player.body.y == 542){
        dungeonDown();
      }
    }
    else if (dungeonCurrent == "c4"){
      if (this.player.body.x == 0){
        dungeonLeft();
      }
      else if (this.player.body.x == 736){
        dungeonRight();
      }
      else if (this.player.body.y == 0){
        dungeonUp();
      }
    }
    else if (dungeonCurrent == "d"){
      if (this.player.body.x == 0){
        dungeonLeft();
      }
      else if (this.player.body.x == 736){
        dungeonRight();
      }
      else if (this.player.body.y == 0){
        dungeonUp();
      }
      else if (this.player.body.y == 542){
        dungeonDown();
      }
    }
    else if (dungeonCurrent == "e2"){
      if (this.player.body.y == 542){
        dungeonDown();
      }
    }
    else if (dungeonCurrent == "e3"){
      if (this.player.body.x == 0){
        dungeonLeft();
      }
    }
    else if (dungeonCurrent == "e4"){
      if (this.player.body.y == 0){
        dungeonUp();
      }
    }
    else if (dungeonCurrent == "end"){
      if (this.player.body.x == 0){
        dungeonLeft();
      }
      else if (this.player.body.x == 736){
        spawn = "bottomLeft";
        changeScreen("dining");
      }
    }

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
      console.log(dungeonRooms[dungeony][dungeonx]);
      //console.log(this.player.body.y);
    }

    this.game.physics.arcade.collide(this.player, walls);
  }
}

var dungeonzyState = {

}
