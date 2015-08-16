// BaseUnit

BaseUnit = function(){
  BaseObject.call(this);
  // this.status = new Statue({});
}

BaseUnit.prototype = new BaseObject();
BaseUnit.prototype.constructor = BaseUnit;

BaseUnit.prototype.atked = function(atk){
  // this unit be atked;
}

// BaseUnit.prototype.move = function(){
  // this unit moving;
// }
