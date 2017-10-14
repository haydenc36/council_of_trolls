var demo = demo || {};
 
demo.Bread = function (game_state, name, position, properties) {
    "use strict";
    demo.Item.call(this, game_state, name, position, properties);
    
    this.health_power = properties.health_power;
};
 
demo.Bread.prototype = Object.create(demo.Item.prototype);
demo.Bread.prototype.constructor = demo.Bread;
 
demo.Bread.prototype.use = function (target) {
    "use strict";
    demo.Item.prototype.use.call(this);
    target.stats.health += this.health_power;
};