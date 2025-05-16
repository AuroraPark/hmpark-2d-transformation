import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTransformStore } from "../store/useTransformStore";

export default function MovePanel() {
  const { position, setPosition } = useTransformStore();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm">이동 (좌하단 기준)</CardTitle>
      </CardHeader>
      <CardContent className="flex gap-2">
        <div className="space-y-1">
          <Label htmlFor="x">X</Label>
          <Input
            id="x"
            type="number"
            value={position.x}
            onChange={(e) => setPosition(parseInt(e.target.value), position.y)}
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="y">Y</Label>
          <Input
            id="y"
            type="number"
            value={position.y}
            onChange={(e) => setPosition(position.x, parseInt(e.target.value))}
          />
        </div>
      </CardContent>
    </Card>
  );
}
