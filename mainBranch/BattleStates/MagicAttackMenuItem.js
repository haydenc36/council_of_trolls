var demo = demo || {};

demo.MagicAttackMenuItem = function (game_state, name, position, properties) {
    "use strict";
    demo.MenuItem.call(this, game_state, name, position, properties);
    
    this.MANA_COST = 10;
};

demo.MagicAttackMenuItem.prototype = Object.create(demo.MenuItem.prototype);
demo.MagicAttackMenuItem.prototype.constructor = demo.MagicAttackMenuItem;

demo.MagicAttackMenuItem.prototype.select = function () {
    "use strict";
    // use only if the current unit has enough mana
    if (this.game_state.current_unit.stats.mana >= this.MANA_COST) {
        // disable actions menu
        this.game_state.prefabs.actions_menu.disable();
        // enable enemy units menu so the player can choose the target
        this.game_state.prefabs.enemies_menu.enable();
        // save current attack
        this.game_state.current_attack = new demo.MagicAttack(this.game_state, this.game_state.current_unit.name + "_magic_attack", {x: 0, y: 0}, {group: "attacks", mana_cost: this.MANA_COST, owner_name: this.game_state.current_unit.name});
    }
};