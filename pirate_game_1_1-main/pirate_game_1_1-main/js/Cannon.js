class Cannon{
  constructor(x , y , w , h , angle){
      this.x = x
      this.y = y
      this.w = w
      this.h = h
      this.angle = angle
      this.cannonimg = loadImage('./assets/CANON.png')
      this.base = loadImage("./assets/cannon_base.png")
  }
  display(){
    if (keyIsDown(RIGHT_ARROW) && this.angle<70  ) {
      this.angle += 1;
    }
  
    if (keyIsDown(LEFT_ARROW) && this.angle>-30 ) {
      this.angle -= 1;}
 
      push()
      translate( this.x  ,this.y )
      rotate(this.angle)
      imageMode(CENTER)
      image(this.cannonimg,0 , 0, this.w , this.h)
      pop()
      image(this.base , 70 , 20 ,200,200)
      noFill()
  }
}