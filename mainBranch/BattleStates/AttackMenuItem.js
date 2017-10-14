var demo = demo || {};

demo.AttackMenuItem = function (game_state, name, position, properties) {
    "use strict";
    demo.MenuItem.call(this, game_state, name, position, properties);
};

demo.AttackMenuItem.prototype = Object.create(demo.MenuItem.prototype);
demo.AttackMenuItem.prototype.constructor = demo.AttackMenuItem;

demo.AttackMenuItem.prototype.select = function () {
    "use strict";
    // disable actions menu
    this.game_state.prefabs.actions_menu.disable();
    // enable enemy units menu so the player can choose the target
    this.game_state.prefabs.enemies_menu.enable();
    // save current attack
    this.game_state.current_attack = new demo.PhysicalAttack(this.game_state, this.game_state.current_unit.name + "_attack", {x: 0, y: 0}, {group: "attacks", owner_name: this.game_state.current_unit.name});
};