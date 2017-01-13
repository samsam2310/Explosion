// Ep Value class

EpValue = function(value){
  this.value = value;
};

EpValue.prototype.get = function(){
  return this.value;
}


EpFunction = function(mod, arr){
  this.mod = mod;
  this.arr = arr;
  // mod 0: f(x) = ax + b;
  // mod 1: f(x) = 
}

EpFunction.prototype.get = function(x){
  // return 0;
}


Position = function(x, y){
  this.x = x;
  this.y = y;
}


Status = function(ob){
  this.timeTag = ob.timeTag;

  this.position = ob.position;
  this.path = ob.path;
  this.speed = ob.speed;

  this.hp = ob.hp;
  this.maxHp = ob.maxHp;
  this.atk = ob.atk;
  this.def = ob.def;
  // this.mp = ob.mp;
  // this.maxMp = ob.mp;
}
