import { Server } from "socket.io";
import express from "express";

const app = express();
const port = 3000;

app.use(express.json())

app.listen(port , ()=>{
    console.log(`Server corriendo en el puerto ${port}`);
})

class Item{
    constructor(x, y, r, g, b){
      this.x = x;
      this.y = y;
      this.r = r;
      this.g = g;
      this.b = b;
    }
    show(){
      fill(this.r, this.g, this.b);
      ellipse(this.x, this.y, 20, 20);
    }
  }

function setup() {
    createCanvas(400, 400);
  }
  
function draw() {
    background(220);
}
