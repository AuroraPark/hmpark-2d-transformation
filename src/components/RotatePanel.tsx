import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTransformStore } from "../store/useTransformStore";

export default function RotatePanel() {
  const { angle, setAngle } = useTransformStore();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm">회전 각도 (deg)</CardTitle>
      </CardHeader>
      <CardContent>
        <Label htmlFor="angle" className="mb-1 block">
          각도
        </Label>
        <Input
          id="angle"
          type="number"
          value={angle}
          onChange={(e) => setAngle(parseInt(e.target.value))}
        />
      </CardContent>
    </Card>
  );
}
