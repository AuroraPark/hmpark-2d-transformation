import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTransformStore } from "../store/useTransformStore";

export default function OriginalPanel() {
  const { relativeOrigin, setRelativeOrigin } = useTransformStore();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm">
          회전 기준점 (사각형 내부 기준)
        </CardTitle>
      </CardHeader>
      <CardContent className="flex gap-4">
        <div className="space-y-1">
          <Label htmlFor="origin-x">X</Label>
          <Input
            id="origin-x"
            type="number"
            value={relativeOrigin.x}
            onChange={(e) =>
              setRelativeOrigin(parseInt(e.target.value), relativeOrigin.y)
            }
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="origin-y">Y</Label>
          <Input
            id="origin-y"
            type="number"
            value={relativeOrigin.y}
            onChange={(e) =>
              setRelativeOrigin(relativeOrigin.x, parseInt(e.target.value))
            }
          />
        </div>
      </CardContent>
    </Card>
  );
}
