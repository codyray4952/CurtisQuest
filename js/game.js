var game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameDiv');
game.state.add('boot', bootState);
game.state.add("load", loadState);
game.state.add("menu", menuState);
game.state.add("gate", gateState);
game.state.add("dining", diningState);
game.state.add("kitchen", kitchenState);
game.state.add("dungeon", dungeonState);
//game.state.add("battle", battleState);

game.state.start('boot');
