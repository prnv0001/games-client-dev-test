import * as PIXI from "pixi.js";

const Graphics = PIXI.Graphics;

export const CANVAS_WIDTH = window.innerWidth >= 768 ? 600 : 300;
export const CANVAS_HEIGHT = 400;

const shapes = ["Rectangle", "Ellipse", "Triangle", "Circle", "Square"];

export function getRandomShape() {
  // this function kicks out a random shape from the above array
  return `draw${shapes[Math.floor(Math.random() * shapes.length)]}`;
}
// pixi app instance
export const app = new PIXI.Application({
  width: CANVAS_WIDTH,
  height: CANVAS_HEIGHT,
  backgroundColor: 0xf0f0f0,
  antialias: true,
});
// this object contains all functions to draw different shapes
export const drawShapes = {
  // function for drawing rectangle
  drawRectangle: function (x, y, gravity) {
    const rectangle = new Graphics();
    rectangle.beginFill(0xffff00);
    rectangle.drawRect(0, 0, 150, 64);
    rectangle.endFill();
    rectangle.x = x;
    rectangle.y = y;
    app.stage.addChild(rectangle);
    app.ticker.add(() => {
      rectangle.y += gravity;
    });
    rectangle.interactive = true;
    rectangle.hitArea = new PIXI.Rectangle(0, 0, 150, 64);
    rectangle.click = function (mouseData) {
      // deletes the shape on click
      app.stage.removeChild(rectangle);
    };
  },
  // function for drawing square
  drawSquare: function (x, y, gravity) {
    const square = new Graphics();
    square.beginFill(0xff6347);
    square.drawRect(0, 0, 64, 64);
    square.endFill();
    square.x = x;
    square.y = y;
    app.stage.addChild(square);
    app.ticker.add(() => {
      square.y += gravity;
    });
    square.interactive = true;
    square.hitArea = new PIXI.Rectangle(0, 0, 64, 64);
    square.click = function (mouseData) {
      // deletes the shape on click
      app.stage.removeChild(square);
    };
  },
  // function for drawing circle
  drawCircle: function (x, y, gravity) {
    const circle = new Graphics();
    circle.beginFill(0xff00ff);
    circle.drawCircle(0, 0, 32);
    circle.endFill();
    circle.x = x;
    circle.y = y;
    app.stage.addChild(circle);
    app.ticker.add(() => {
      circle.y += gravity;
    });
    circle.interactive = true;
    circle.hitArea = new PIXI.Circle(0, 0, 32);
    circle.click = function (mouseData) {
      // deletes the shape on click
      app.stage.removeChild(circle);
    };
  },
  // function for drawing triangle
  drawTriangle: function (x, y, gravity) {
    const triangle = new Graphics();
    triangle.beginFill(0x0000ff);
    triangle.drawPolygon([-32, 64, 32, 64, 0, 0]);
    triangle.endFill();
    triangle.x = x;
    triangle.y = y;
    app.stage.addChild(triangle);
    app.ticker.add(() => {
      triangle.y += gravity;
    });
    triangle.interactive = true;
    triangle.hitArea = new PIXI.Polygon([-32, 64, 32, 64, 0, 0]);
    triangle.click = function (mouseData) {
      // deletes the shape on click
      app.stage.removeChild(triangle);
    };
  },
  // function for drawing ellipse
  drawEllipse: function (x, y, gravity) {
    const ellipse = new Graphics();
    ellipse.beginFill(0xffff00);
    ellipse.drawEllipse(0, 0, 50, 20);
    ellipse.endFill();
    ellipse.x = x;
    ellipse.y = y;
    app.stage.addChild(ellipse);
    app.ticker.add(() => {
      ellipse.y += gravity;
    });
    ellipse.interactive = true;
    ellipse.hitArea = new PIXI.Ellipse(0, 0, 50, 20);
    ellipse.click = function (mouseData) {
      // deletes the shape on click
      app.stage.removeChild(ellipse);
    };
  },
};
