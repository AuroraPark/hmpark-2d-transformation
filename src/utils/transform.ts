// getRotatedCorners.ts
export function getRotatedCorners(
  position: { x: number; y: number },
  origin: { x: number; y: number },
  angle: number
) {
  const size = 100;
  const rad = (angle * Math.PI) / 180;

  const corners = [
    { x: position.x, y: position.y + size },
    { x: position.x + size, y: position.y + size },
    { x: position.x + size, y: position.y },
    { x: position.x, y: position.y },
  ];

  return corners.map(({ x, y }) => {
    const dx = x - origin.x;
    const dy = y - origin.y;
    const rx = origin.x + dx * Math.cos(rad) - dy * Math.sin(rad);
    const ry = origin.y + dx * Math.sin(rad) + dy * Math.cos(rad);
    return {
      x: +rx.toFixed(2),
      y: +ry.toFixed(2),
    };
  });
}
