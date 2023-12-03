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

const numberOfEnemies = 100
const enemies: Enemy[] = []

canvas.width = CANVAS_WIDTH
canvas.height = CANVAS_HEIGHT

class Enemy {
    x: number
    y: number
    width: number
    height: number
    constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.width = 100
        this.height = 100
    }
    update() {
        this.x++
        this.y++
    }
    draw() {
        ctx?.fillRect(this.x, this.y, this.width, this.height)
    }
    animate() {
        this.update()
        this.draw()
    }
}

for (let i = 0; i < numberOfEnemies; i++) {
    enemies.push(new Enemy())
}

const animate = () => {
    ctx?.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    enemies.forEach((enemy) => enemy.animate())
    requestAnimationFrame(animate)
}

animate()
