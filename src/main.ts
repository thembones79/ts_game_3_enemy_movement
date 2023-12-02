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

class Enemy {
    x: number
    y: number
    width: number
    height: number
    constructor() {
        this.x = 10
        this.y = 50
        this.width = 100
        this.height = 100
    }
}

const enemy1 = new Enemy()

const animate = () => {
    ctx?.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    enemy1.x++
    ctx?.fillRect(enemy1.x, enemy1.y, enemy1.width, enemy1.height)
    requestAnimationFrame(animate)
}

animate()
