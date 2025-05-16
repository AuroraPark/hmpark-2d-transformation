# ProtoPie Transform Task

A 2D graphics transform assignment built with React and Canvas.  
Supports moving, rotating, and adjusting the pivot point of a rectangle using UI controls.

##  Features

- Draws a 100x100 gray square with black border
- Coordinates of all 4 corners are displayed (2 decimal places)
- Move the square by specifying X/Y
- Rotate around a pivot point (default is bottom-left)
- Change pivot point relative to the square
- Red dot marks the current pivot (origin)
- Coordinate grid and axis rendered on canvas

##  Stack

- Vite + React + TypeScript
- Zustand (state management)
- Tailwind CSS
- shadcn/ui (component styling)
- HTML Canvas 2D API (`setTransform`, `rotate`, etc.)

## How to Run


npm install
npm run dev
