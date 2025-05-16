import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function CoordinateDisplay({
  corners,
}: {
  corners: { x: number; y: number }[];
}) {
  const labels = ["left, top", "right, top", "right, bottom", "left, bottom"];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm">점의 좌표</CardTitle>
      </CardHeader>
      <CardContent className="text-xs font-mono whitespace-pre">
        {corners.map((pt, idx) => (
          <div key={idx}>
            {idx + 1}. {labels[idx]}: {pt.x} / {pt.y}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
