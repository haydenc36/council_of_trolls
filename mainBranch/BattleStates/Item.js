var demo = demo || {};

demo.Item = function (game_state, name, position, properties) {
    "use strict";
    demo.Prefab.call(this, game_state, name, position, properties);
};

demo.Item.prototype = Object.create(demo.Prefab.prototype);
demo.Item.prototype.constructor = demo.Item;

demo.Item.prototype.use = function () {
    "use strict";
    // by default the item is destroyed
    this.kill();
};

demo.Item.prototype.kill = function () {
    "use strict";
    Phaser.Sprite.prototype.kill.call(this);
    var menu_item_index, menu_item;
    // remove item from the menu
    menu_item_index = this.game_state.prefabs.items_menu.find_item_index(this.name);
    menu_item = this.game_state.prefabs.items_menu.remove_item(menu_item_index);
    menu_item.kill();
};