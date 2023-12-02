import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
      <canvas id="canvas1"></canvas>
  </div>
`

const canvas = document.getElementById('canvas1') as HTMLCanvasElement
const ctx = canvas.getContext('2d')

const CANVAS_HEIGHT = 1000
const CANVAS_WIDTH = 500

canvas.width = CANVAS_WIDTH
canvas.height = CANVAS_HEIGHT

const enemy1 = {
    x: 0,
    y: 0,
    width: 200,
    height: 200,
}

const animate = () => {
    ctx?.fillRect(0, 0, 200, 200)
}
