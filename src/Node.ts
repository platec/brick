import { Data } from './Data';

export class Node extends Data {
  private x: number
  private y: number
  constructor() {
    super();
  }
  setPosition(x: number, y: number) {
    this.x = x;
    this.y = y;
    
  }
  getPosition() {
    return {
      x: this.x,
      y: this.y
    };
  }
  render(ctx: CanvasRenderingContext2D) {
    
  }
}
