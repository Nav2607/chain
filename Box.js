class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);//to gain access from the parent class
    this.image = loadImage("sprites/wood1.png");
  }
  
};

//inheritance