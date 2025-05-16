import CanvasRenderer from "./components/CanvasRenderer";
import CoordinateDisplay from "./components/CoordinateDisplay";
import MovePanel from "./components/MovePanel";
import OriginalPanel from "./components/OriginalPanel";
import RotatePanel from "./components/RotatePanel";

import { useTransformStore } from "./store/useTransformStore";
import { getRotatedCorners } from "./utils/transform";

export default function App() {
  const { position, relativeOrigin, angle } = useTransformStore();

  const absOrigin = {
    x: position.x + relativeOrigin.x,
    y: position.y + relativeOrigin.y,
  };

  const corners = getRotatedCorners(position, absOrigin, angle);

  return (
    <main className="min-h-screen bg-muted p-6 flex flex-col items-center">
      <h1 className="text-2xl font-semibold mb-6">ProtoPie Transform Task</h1>

      <div className="flex gap-8">
        <div className="bg-white p-4 rounded-xl shadow border">
          <CanvasRenderer />
        </div>

        <div className="flex flex-col gap-4 w-[320px]">
          <CoordinateDisplay corners={corners} />
          <MovePanel />
          <RotatePanel />
          <OriginalPanel />
        </div>
      </div>
    </main>
  );
}
