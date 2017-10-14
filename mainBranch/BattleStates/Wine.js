//Change from health to mana

var demo = demo || {};
 
demo.Wine = function (game_state, name, position, properties) {
    "use strict";
    demo.Item.call(this, game_state, name, position, properties);
    
    this.health_power = properties.health_power;
};
 
demo.Wine.prototype = Object.create(demo.Item.prototype);
demo.Wine.prototype.constructor = demo.Wine;
 
demo.Wine.prototype.use = function (target) {
    "use strict";
    demo.Item.prototype.use.call(this);
    target.stats.health += this.health_power;
};