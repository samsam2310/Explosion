// class soldier

Soldier = function(position){
  BaseUnit.call(this);
  this.position = position;
  this.status = new Status({
    hp: 100,
    maxHp: 100,
    atk: 80,
    def: 10,
    speed: 350,
  });
}

Soldier.prototype = new BaseUnit();
Soldier.prototype.constructor = Soldier;

Soldier.prototype.render = function(ctx){
  ctx.beginPath();
  ctx.fillStyle = "green";
  ctx.strokeStyle = "blue"
  ctx.arc(this.position.x,this.position.y,5,0,Math.PI*2,true);
  ctx.fill();
  ctx.stroke();
}
