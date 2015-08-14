// class soldier

Soldier = function(x, y){
  Unit.call(this);
  this.x = x;
  this.y = y;
}

Soldier.prototype = new Unit();
Soldier.prototype.constructor = Soldier;
