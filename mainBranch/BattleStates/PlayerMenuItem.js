var demo = demo || {};

demo.PlayerMenuItem = function (game_state, name, position, properties) {
    "use strict";
    demo.MenuItem.call(this, game_state, name, position, properties);
    
    this.player_unit_health = new demo.ShowStat(this.game_state, this.text + "_health", {x: this.x + 200, y: this.y}, {group: "hud", text: "", style: properties.style, prefab: this.text, stat: "health"});
};

demo.PlayerMenuItem.prototype = Object.create(demo.MenuItem.prototype);
demo.PlayerMenuItem.prototype.constructor = demo.PlayerMenuItem;

demo.PlayerMenuItem.prototype.select = function () {
    "use strict";
};