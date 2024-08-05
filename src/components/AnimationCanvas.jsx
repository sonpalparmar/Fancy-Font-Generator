import { useEffect, useRef } from "react";

const AnimationCanvas = () => {
  const canvasRef = useRef(null);
  let canvas, ctx, w, h;
  let moon,
    stars = [],
    meteors = [];

  useEffect(() => {
    const init = () => {
      canvas = canvasRef.current;
      ctx = canvas.getContext("2d");
      resizeCanvas();
      moon = new Moon();
      createStars();
      createMeteors();
      animationLoop();
    };

    const resizeCanvas = () => {
      const header = document.querySelector(".header-cont");
      w = canvas.width = header.offsetWidth;
      h = canvas.height = header.offsetHeight;
    };

    const animationLoop = () => {
      ctx.clearRect(0, 0, w, h);
      drawScene();
      requestAnimationFrame(animationLoop);
    };

    const drawScene = () => {
      moon.draw();
      stars.forEach((star) => {
        star.update();
        star.draw();
      });
      meteors.forEach((meteor) => {
        meteor.update();
        meteor.draw();
      });
    };

    const createStars = () => {
      for (let a = 0; a < w * h * 0.0003; a++) {
        stars.push(new Star());
      }
    };

    const createMeteors = () => {
      for (let b = 0; b < 2; b++) {
        meteors.push(new Meteor());
      }
    };

    class Moon {
      draw() {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.shadowColor = "rgba(254, 247, 144, .7)";
        ctx.shadowBlur = 70;
        ctx.fillStyle = "rgba(254, 247, 144, 1)";
        ctx.fill();
        ctx.closePath();
        ctx.restore();
      }
    }

    class Star {
      constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.size = Math.random() + 0.5;
        this.blinkChance = 0.005;
        this.alpha = 1;
        this.alphaChange = 0;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
        ctx.fill();
        ctx.closePath();
      }
      update() {
        if (this.alphaChange === 0 && Math.random() < this.blinkChance) {
          this.alphaChange = -1;
        } else if (this.alphaChange !== 0) {
          this.alpha += this.alphaChange * 0.05;
          if (this.alpha <= 0) {
            this.alphaChange = 1;
          } else if (this.alpha >= 1) {
            this.alphaChange = 0;
          }
        }
      }
    }

    class Meteor {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * w + 300;
        this.y = -100;
        this.size = Math.random() * 0.5 + 0.5;
        this.speed = (Math.random() + 0.5) * 8;
      }
      draw() {
        ctx.save();
        ctx.strokeStyle = "rgba(255, 255, 255, .1)";
        ctx.lineCap = "round";
        ctx.shadowColor = "rgba(255, 255, 255, 1)";
        ctx.shadowBlur = 10;
        for (let i = 0; i < 10; i++) {
          ctx.beginPath();
          ctx.moveTo(this.x, this.y);
          ctx.lineWidth = this.size;
          ctx.lineTo(this.x + 10 * (i + 1), this.y - 10 * (i + 1));
          ctx.stroke();
          ctx.closePath();
        }
        ctx.restore();
      }
      update() {
        this.x -= this.speed;
        this.y += this.speed;
        if (this.y >= h + 100) {
          this.reset();
        }
      }
    }

    init();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="canvas"
      style={{ position: "absolute", top: 0, left: 0 }}
    />
  );
};

export default AnimationCanvas;
