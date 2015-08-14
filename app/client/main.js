// main client code

Session.set('fps', 0);
Session.set('a', new EpObjects.Soldier(10, 10));
var e = document.documentElement,
    g = document.getElementsByTagName('body')[0],
    x = window.innerWidth || e.clientWidth || g.clientWidth,
    y = window.innerHeight|| e.clientHeight|| g.clientHeight;
Session.set('screenX', x);
Session.set('screenY', y);


Template.fps.helpers({
  fps: function () {
    return Session.get("fps");
  }
});

Template.body.events({
  'contextmenu canvas': function(e){
    e.preventDefault();
    console.log(e);
    console.log(e.clientX);
    console.log(e.clientY);
    Session.set('a', new EpObjects.Soldier(e.clientX, e.clientY));
  }
});


var draw = function(ctx, draw_content){
  var t1 = new Date(), t2, fps = 0, _draw = function(){
    ctx.clearRect(0,0,Session.get('screenX'),Session.get('screenY'));
    draw_content(ctx);
    fps += 1;
    t2 = new Date();
    if(t2-t1 >= 1000){
      var a = Session.get('a');
      Session.set('fps', fps + ' ' + a.x + ' ' + a.y);
      fps = 0;
      t1 = t2;
    }
    window.requestAnimationFrame(_draw);
  };
  _draw();
};


window.onload = function(){
  var canvas = document.getElementsByTagName('canvas')[0];
  canvas.width  = Session.get('screenX');
  canvas.height = Session.get('screenY');
  var ctx = canvas.getContext('2d');
  draw(ctx, function(ctx){
    ctx.beginPath();
    var a = Session.get('a');
    ctx.arc(a.x,a.y,5,0,Math.PI*2,true);
    ctx.fill();
  });
};



