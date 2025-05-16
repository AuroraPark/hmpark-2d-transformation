import { useRef, useEffect } from "react";
import { useTransformStore } from "../store/useTransformStore";

export default function CanvasRenderer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { position, relativeOrigin, angle } = useTransformStore();
  const absOrigin = {
    x: position.x + relativeOrigin.x,
    y: position.y + relativeOrigin.y,
  };
  const size = 100;
  const drawAxes = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number
  ) => {
    const unit = 50;
    const centerX = width / 2;
    const centerY = height / 2;

    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;

    ctx.beginPath();
    ctx.moveTo(-centerX, 0);
    ctx.lineTo(centerX, 0);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, -centerY);
    ctx.lineTo(0, centerY);
    ctx.stroke();

    ctx.fillStyle = "black";
    ctx.font = "10px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "top";

    for (let x = -centerX; x <= centerX; x += unit) {
      if (x !== 0) {
        ctx.fillText(String(x), x, 5);
      }
    }

    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    for (let y = -centerY; y <= centerY; y += unit) {
      if (y !== 0) {
        ctx.fillText(String(-y), 5, y);
      }
    }

    ctx.restore();
  };

  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawAxes(ctx, canvas.width, canvas.height);

    ctx.save();

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.scale(1, -1);

    ctx.translate(absOrigin.x, absOrigin.y);
    ctx.rotate((angle * Math.PI) / 180);
    ctx.translate(-absOrigin.x, -absOrigin.y);

    ctx.fillStyle = "#ccc";
    ctx.strokeStyle = "black";
    ctx.fillRect(position.x, position.y, size, size);
    ctx.strokeRect(position.x, position.y, size, size);

    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(absOrigin.x, absOrigin.y, 3, 0, 2 * Math.PI);
    ctx.fill();

    ctx.restore();
  };

  useEffect(() => {
    draw();
  }, [position, angle, origin]);

  return <canvas ref={canvasRef} width={400} height={400} className="border" />;
}
