// import a CSS module
import classes from './main.css';
import scaleToWindow from './utils/scaleToWindow';

import { Application, Container, Graphics, Point, utils } from 'pixi.js';

class Hero {
  constructor() {
    this.initSprite();

    this.sprite.x = 50;
    this.sprite.y = 50;
    this.targetPoints = [];

    this.meta = {
      hp: 500,
      hpr: 5,
      sp: 500,
      ad: 80,
      ct: 0,
      as: 0.5,
      cdr: 0,
      arm: 0
    };
  }

  initSprite() {
    const sprite = new Graphics();
    sprite.beginFill(0x9966FF);
    sprite.drawCircle(0, 0, 32);
    sprite.endFill();

    this.sprite = sprite;
  }

  move(target) {
    const p = new Point();
    p.x = Math.floor(target.x);
    p.y = Math.floor(target.y);
    this.targetPoints = [p];
  }

  update(delta) {
    this.updatePosition(delta);
  }

  updatePosition(delta) {
    if (this.targetPoints.length === 0) {
      return;
    }
    const x = this.sprite.x;
    const y = this.sprite.y;
    const tx = this.targetPoints[0].x;
    const ty = this.targetPoints[0].y;
    const dx = tx - x;
    const dy = ty - y;
    this.sprite.rotation = Math.atan2(dy, dx);

    const step = this.meta.sp / 60;
    const len = Math.sqrt(dx * dx + dy * dy);

    if (step >= len) {
      this.sprite.x = tx;
      this.sprite.y = ty;
      this.targetPoints.shift();
      console.log('done!!');
      return;
    }

    this.sprite.x = x + step * dx / len;
    this.sprite.y = y + step * dy / len;
  }
};

export default () => {
  console.log(classes);

  let type = "WebGL";
  if(!utils.isWebGLSupported()){
    type = "canvas";
  }
  utils.sayHello(type);

  const app = new Application({width: 1920, height: 1080});
  app.view.addEventListener('contextmenu', e => {
    e.preventDefault();
  });

  //Add the canvas that Pixi automatically created for you to the HTML document
  document.body.appendChild(app.view);
  scaleToWindow(app.view);
  window.addEventListener("resize", event => {
    scaleToWindow(app.view);
  });

  //Start the game loop
  app.ticker.add(delta => {
    hero.update(delta);
  });

  const hero = new Hero();

  const map = new Graphics();
  map.beginFill(0x222222);
  map.drawRect(0, 0, 5000, 5000);
  map.endFill();
  map.interactive = true;
  map.rightdown = e => {
    console.log(e.data.global);
    hero.move(e.data.global);
    e.stopPropagation();
  };

  map.addChild(hero.sprite);
  app.stage.addChild(map);
  console.log(hero);
};