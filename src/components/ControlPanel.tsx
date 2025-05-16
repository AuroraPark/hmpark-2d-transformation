import { useTransformStore } from "../store/useTransformStore";

export default function ControlPanel() {
  const { position, angle, setPosition, setAngle, setRelativeOrigin } =
    useTransformStore();

  return (
    <div className="ml-6 w-64 p-6 bg-white rounded-2xl shadow-md space-y-4 text-sm">
      <div>
        <label className="block mb-1 text-gray-600 font-medium">
          Move (X, Y)
        </label>
        <div className="flex gap-2">
          <input
            className="w-full border px-3 py-1 rounded-md"
            type="number"
            defaultValue={position.x}
            onChange={(e) => setPosition(parseInt(e.target.value), position.y)}
          />
          <input
            className="w-full border px-3 py-1 rounded-md"
            type="number"
            defaultValue={position.y}
            onChange={(e) => setPosition(position.x, parseInt(e.target.value))}
          />
        </div>
      </div>
      <div>
        <label className="block mb-1 text-gray-600 font-medium">
          Rotate (deg)
        </label>
        <input
          className="w-full border px-3 py-1 rounded-md"
          type="number"
          defaultValue={angle}
          onChange={(e) => setAngle(parseInt(e.target.value))}
        />
      </div>
      <div>
        <label className="block mb-1 text-gray-600 font-medium">
          Origin (X, Y)
        </label>
        <div className="flex gap-2">
          <input
            className="w-full border px-3 py-1 rounded-md"
            type="number"
            defaultValue={origin.x}
            onChange={(e) =>
              setRelativeOrigin(parseInt(e.target.value), origin.y)
            }
          />
          <input
            className="w-full border px-3 py-1 rounded-md"
            type="number"
            defaultValue={origin.y}
            onChange={(e) =>
              setRelativeOrigin(origin.x, parseInt(e.target.value))
            }
          />
        </div>
      </div>
    </div>
  );
}
