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

const numberOfEnemies = 100
const enemies: Enemy[] = []

const gameFrame = 0

const enemyImage = new Image()
enemyImage.src = 'assets/enemy1.png'

class Enemy {
    x: number
    y: number
    width: number
    spriteHeight: number
    spriteWidth: number
    height: number
    speed: number
    frame: number
    constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.speed = Math.random() * 4 - 2
        this.spriteWidth = 293
        this.spriteHeight = 155
        this.width = this.spriteWidth * 0.4
        this.height = this.spriteHeight * 0.4
        this.frame = 0
    }
    update() {
        this.x += this.speed
        this.y += this.speed
        if (gameFrame % 2 === 0)
            this.frame > 4 ? (this.frame = 0) : this.frame++
    }
    draw() {
        ctx?.strokeRect(this.x, this.y, this.width, this.height)
        ctx?.drawImage(
            enemyImage,
            this.frame * this.spriteWidth,
            0,
            this.spriteWidth,
            this.spriteHeight,
            this.x,
            this.y,
            this.width,
            this.height
        )
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
