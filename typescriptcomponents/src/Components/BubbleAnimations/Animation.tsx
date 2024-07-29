import React, { useEffect, useRef } from "react";
// import "./Animation.css";
import { useStyles } from "./AnimationCSS";

class Point {
  x: number;
  y: number;
  magnitude: number;
  computed: number;
  force: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.magnitude = x * x + y * y;
    this.computed = 0;
    this.force = 0;
  }

  add(p: Point) {
    return new Point(this.x + p.x, this.y + p.y);
  }
}

class Ball {
  vel: Point;
  pos: Point;
  size: number;
  width: number;
  height: number;

  constructor(parent: LavaLamp) {
    const min = 0.1;
    const max = 0.001;
    this.vel = new Point(
      (Math.random() > 0.5 ? 1 : -1) * (0.2 + Math.random() * 0.25),
      (Math.random() > 0.5 ? 1 : -1) * (0.2 + Math.random())
    );
    this.pos = new Point(
      parent.width * 0.2 + Math.random() * parent.width * 0.6,
      parent.height * 0.2 + Math.random() * parent.height * 0.6
    );
    this.size =
      parent.wh / 15 + (Math.random() * (max - min) + min) * (parent.wh / 15);
    this.width = parent.width;
    this.height = parent.height;
  }

  move() {
    if (this.pos.x >= this.width - this.size) {
      if (this.vel.x > 0) this.vel.x = -this.vel.x;
      this.pos.x = this.width - this.size;
    } else if (this.pos.x <= this.size) {
      if (this.vel.x < 0) this.vel.x = -this.vel.x;
      this.pos.x = this.size;
    }

    if (this.pos.y >= this.height - this.size) {
      if (this.vel.y > 0) this.vel.y = -this.vel.y;
      this.pos.y = this.height - this.size;
    } else if (this.pos.y <= this.size) {
      if (this.vel.y < 0) this.vel.y = -this.vel.y;
      this.pos.y = this.size;
    }

    this.pos = this.pos.add(this.vel);
  }
}

class LavaLamp {
  step: number;
  width: number;
  height: number;
  wh: number;
  sx: number;
  sy: number;
  paint: boolean;
  metaFill: CanvasGradient;
  plx: number[];
  ply: number[];
  mscases: number[];
  ix: number[];
  grid: Point[];
  balls: Ball[];
  iter: number;
  sign: number;

  constructor(
    width: number,
    height: number,
    numBalls: number,
    c0: string,
    c1: string,
    c2: string,
    c3: string,
    ctx: CanvasRenderingContext2D
  ) {
    this.step = 5;
    this.width = width;
    this.height = height;
    this.wh = Math.min(width, height);
    this.sx = Math.floor(this.width / this.step);
    this.sy = Math.floor(this.height / this.step);
    this.paint = false;
    this.metaFill = createRadialGradient(
      width,
      height,
      width,
      c0,
      c1,
      c2,
      c3,
      ctx
    );
    this.plx = [0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0];
    this.ply = [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1];
    this.mscases = [0, 3, 0, 3, 1, 3, 0, 3, 2, 2, 0, 2, 1, 1, 0];
    this.ix = [1, 0, -1, 0, 0, 1, 0, -1, -1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1];
    this.grid = [];
    this.balls = [];
    this.iter = 0;
    this.sign = 1;

    for (let i = 0; i < (this.sx + 2) * (this.sy + 2); i++) {
      this.grid[i] = new Point(
        (i % (this.sx + 2)) * this.step,
        Math.floor(i / (this.sx + 2)) * this.step
      );
    }

    for (let k = 0; k < numBalls; k++) {
      this.balls[k] = new Ball(this);
    }
  }

  computeForce(x: number, y: number, idx?: number) {
    let force;
    const id = idx || x + y * (this.sx + 2);

    if (x === 0 || y === 0 || x === this.sx || y === this.sy) {
      force = 0.6 * this.sign;
    } else {
      force = 0;
      const cell = this.grid[id];
      let i = 0;
      let ball: Ball;
      while ((ball = this.balls[i++])) {
        force +=
          (ball.size * ball.size) /
          (-2 * cell.x * ball.pos.x -
            2 * cell.y * ball.pos.y +
            ball.pos.magnitude +
            cell.magnitude);
      }
      force *= this.sign;
    }
    this.grid[id].force = force;
    return force;
  }

  marchingSquares(
    next: [number, number, boolean | number],
    ctx: CanvasRenderingContext2D
  ): [number, number, boolean | number] | false {
    const x = next[0];
    const y = next[1];
    const pdir = next[2];
    const id = x + y * (this.sx + 2);
    if (this.grid[id].computed === this.iter) {
      return false;
    }
    let dir;
    let mscase = 0;

    for (let i = 0; i < 4; i++) {
      const idn = x + this.ix[i + 12] + (y + this.ix[i + 16]) * (this.sx + 2);
      let force = this.grid[idn].force;
      if (
        (force > 0 && this.sign < 0) ||
        (force < 0 && this.sign > 0) ||
        !force
      ) {
        force = this.computeForce(
          x + this.ix[i + 12],
          y + this.ix[i + 16],
          idn
        );
      }
      if (Math.abs(force) > 1) mscase += Math.pow(2, i);
    }
    if (mscase === 15) {
      return [x, y - 1, false];
    } else {
      if (mscase === 5) dir = pdir === 2 ? 3 : 1;
      else if (mscase === 10) dir = pdir === 3 ? 0 : 2;
      else {
        dir = this.mscases[mscase];
        this.grid[id].computed = this.iter;
      }

      const ix =
        this.step /
        (Math.abs(
          Math.abs(
            this.grid[
              x +
                this.plx[4 * dir + 2] +
                (y + this.ply[4 * dir + 2]) * (this.sx + 2)
            ].force
          ) - 1
        ) /
          Math.abs(
            Math.abs(
              this.grid[
                x +
                  this.plx[4 * dir + 3] +
                  (y + this.ply[4 * dir + 3]) * (this.sx + 2)
              ].force
            ) - 1
          ) +
          1);
      ctx.lineTo(
        this.grid[
          x + this.plx[4 * dir] + (y + this.ply[4 * dir]) * (this.sx + 2)
        ].x +
          this.ix[dir] * ix,
        this.grid[
          x +
            this.plx[4 * dir + 1] +
            (y + this.ply[4 * dir + 1]) * (this.sx + 2)
        ].y +
          this.ix[dir + 4] * ix
      );
      this.paint = true;

      return [x + this.ix[dir + 4], y + this.ix[dir + 8], dir];
    }
  }

  renderMetaballs(ctx: CanvasRenderingContext2D) {
    let i = 0;
    let ball;
    while ((ball = this.balls[i++])) ball.move();

    this.iter++;
    this.sign = -this.sign;
    this.paint = false;
    ctx.fillStyle = this.metaFill;
    ctx.beginPath();

    i = 0;

    while ((ball = this.balls[i++])) {
      let next: [number, number, boolean | number] | false = [
        Math.round(ball.pos.x / this.step),
        Math.round(ball.pos.y / this.step),
        false,
      ];

      do {
        next = this.marchingSquares(next, ctx);
      } while (next);

      if (this.paint) {
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        this.paint = false;
      }
    }
  }
}

const createRadialGradient = (
  w: number,
  h: number,
  r: number,
  c0: string,
  c1: string,
  c2: string,
  c3: string,
  ctx: CanvasRenderingContext2D
) => {
  const gradient = ctx.createRadialGradient(w / 1, h / 1, 0, w / 1, h / 1, r);
  gradient.addColorStop(0.25, c0);
  gradient.addColorStop(0.5, c1);
  gradient.addColorStop(0.75, c2);
  gradient.addColorStop(1, c3);
  return gradient;
};

interface ZBubbleAnimationsProps {
  className?: string;
}

const ZBubbleAnimations: React.FC<ZBubbleAnimationsProps> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const lavaRef = useRef<LavaLamp | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const resizeCanvas = () => {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight + 20; 
          canvas.style.top = '-20px'; 
          lavaRef.current = new LavaLamp(
            canvas.width,
            canvas.height,
            20,
            "#33CC99",
            "#97E295",
            "#97E295",
            "#33CC99",
            ctx
          );
        };
        const render = () => {
          if (ctx && lavaRef.current) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            lavaRef.current.renderMetaballs(ctx);
          }
          requestAnimationFrame(render);
        };

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();
        render();

        return () => {
          window.removeEventListener("resize", resizeCanvas);
        };
      }
    }
  }, []);
  const classes = useStyles();
  return (
    <div className={` ${className} ${classes.wrap}`}>
      <canvas ref={canvasRef} className={classes.canvas} />
    </div>
  );
};

export default ZBubbleAnimations;
