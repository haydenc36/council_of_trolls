var demo = demo || {};

demo.ItemMenuItem = function (game_state, name, position, properties) {
    "use strict";
    demo.MenuItem.call(this, game_state, name, position, properties);
};

demo.ItemMenuItem.prototype = Object.create(demo.MenuItem.prototype);
demo.ItemMenuItem.prototype.constructor = demo.ItemMenuItem;

demo.ItemMenuItem.prototype.select = function () {
    "use strict";
    // disable actions menu
    this.game_state.prefabs.items_menu.disable();
    // enable player units menu so the player can choose the target
    this.game_state.prefabs.players_menu.enable();
    // save selected item
    this.game_state.current_item = this.text;
};