var demo = demo || {};

demo.EnemyUnit = function (game_state, name, position, properties) {
    "use strict";
    demo.Unit.call(this, game_state, name, position, properties);
    
    this.anchor.setTo(0.5);
    
    this.scale.setTo(-1, 1);
};

demo.EnemyUnit.prototype = Object.create(demo.Unit.prototype);
demo.EnemyUnit.prototype.constructor = demo.EnemyUnit;

demo.EnemyUnit.prototype.act = function () {
    "use strict";
    var target_index, target, damage;
    // randomly choose target
    target_index = this.game_state.rnd.between(0, this.game_state.groups.players.countLiving() - 1);
    target = this.game_state.groups.players.children[target_index];
    
    this.attack(target);
};

demo.EnemyUnit.prototype.kill = function () {
    "use strict";
    var menu_item_index, menu_item;
    Phaser.Sprite.prototype.kill.call(this);
    // remove from the menu
    menu_item_index = this.game_state.prefabs.enemies_menu.find_item_index(this.name);
    menu_item = this.game_state.prefabs.enemies_menu.remove_item(menu_item_index);
    menu_item.kill();
};