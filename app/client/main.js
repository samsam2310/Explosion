// main client code


// window.performance = window.performance || {};
// performance.now = (function() {
//   return performance.now       ||
//          performance.mozNow    ||
//          performance.msNow     ||
//          performance.oNow      ||
//          performance.webkitNow ||
//          function() { return new Date().getTime(); };
// })();


var map = [];
var GST;
map.push(new EpObjects.Soldier(new EpObjects.Position(100,100)));

Session.set('fps', 0);

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
  // 'contextmenu canvas': function(e){
  //   e.preventDefault();
  //   console.log(e);
  //   console.log(e.clientX);
  //   console.log(e.clientY);
  //   map[0].position = new EpObjects.Position(e.clientX, e.clientY);
  // },
  'click button': function(e){
    startGame();
  }
});


var draw = function(ctx, draw_content){
  var t1 = new Date(), t2, fps = 0, _draw = function(){
    ctx.clearRect(0,0,Session.get('screenX'),Session.get('screenY'));
    draw_content(ctx);
    fps += 1;
    t2 = new Date();
    if(t2-t1 >= 1000){
      Session.set('fps', fps);
      fps = 0;
      t1 = t2;
    }
    window.requestAnimationFrame(_draw);
  };
  _draw();
};


var startGame = function(){
  GST = new Date();
  var canvas = document.getElementsByTagName('canvas')[0];
  var ctx = canvas.getContext('2d');
  draw(ctx, function(){
    var passTime = new Date() - GST;
    for(i in map){
      map[i].update(passTime);
      map[i].render(ctx);
    }
  });
}


window.onload = function(){
  var canvas = document.getElementsByTagName('canvas')[0];
  canvas.width  = Session.get('screenX');
  canvas.height = Session.get('screenY');
};



