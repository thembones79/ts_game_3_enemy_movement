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

const numberOfEnemies = 300
const enemies: Enemy[] = []

let gameFrame = 0

class Enemy {
    x: number
    y: number
    width: number
    spriteHeight: number
    spriteWidth: number
    height: number
    speed: number
    flapSpeed: number
    frame: number
    angle: number
    curve: number
    angleSpeed: number
    image: HTMLImageElement

    constructor() {
        this.image = new Image()
        this.image.src = 'assets/enemy2.png'
        this.speed = Math.random() * 4 + 1
        this.flapSpeed = Math.floor(Math.random() * 3 + 1)
        this.spriteWidth = 266
        this.spriteHeight = 188
        this.width = this.spriteWidth * 0.4
        this.height = this.spriteHeight * 0.4
        this.x = Math.random() * (canvas.width - this.width)
        this.y = Math.random() * (canvas.height - this.height)
        this.frame = 0
        this.angle = Math.random() * 2
        this.angleSpeed = Math.random() * 0.2
        this.curve = Math.random() * 7
    }
    update() {
        this.x -= this.speed
        this.y += this.curve * Math.sin(this.angle)
        this.angle += this.angleSpeed
        if (this.x + this.width < 0) this.x = canvas.width
        if (gameFrame % this.flapSpeed === 0) {
            this.frame > 4 ? (this.frame = 0) : this.frame++
        }
    }
    draw() {
        ctx?.drawImage(
            this.image,
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
    gameFrame++
    requestAnimationFrame(animate)
}

animate()

// class Enemy1 {
//     x: number
//     y: number
//     width: number
//     spriteHeight: number
//     spriteWidth: number
//     height: number
//     // speed: number
//     flapSpeed: number
//     frame: number
//     image: HTMLImageElement
//
//     constructor() {
//         this.image = new Image()
//         this.image.src = 'assets/enemy1.png'
//         // this.speed = Math.random() * 4 - 2
//         this.flapSpeed = Math.floor(Math.random() * 3 + 1)
//         this.spriteWidth = 293
//         this.spriteHeight = 155
//         this.width = this.spriteWidth * 0.4
//         this.height = this.spriteHeight * 0.4
//         this.x = Math.random() * (canvas.width - this.width)
//         this.y = Math.random() * (canvas.height - this.height)
//         this.frame = 0
//     }
//     update() {
//         this.x += Math.random() * 6 - 3
//         this.y += Math.random() * 9 - 5
//         if (gameFrame % this.flapSpeed === 0) {
//             this.frame > 4 ? (this.frame = 0) : this.frame++
//         }
//     }
//     draw() {
//         ctx?.drawImage(
//             this.image,
//             this.frame * this.spriteWidth,
//             0,
//             this.spriteWidth,
//             this.spriteHeight,
//             this.x,
//             this.y,
//             this.width,
//             this.height
//         )
//     }
//     animate() {
//         this.update()
//         this.draw()
//     }
// }
//
// for (let i = 0; i < numberOfEnemies; i++) {
//     enemies.push(new Enemy1())
// }
//
