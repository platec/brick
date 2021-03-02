import { Point } from './Point';

export class Data {
  private position: Position;
  private width = 0;
  private height = 0;
  private rotation = 0;
  private style: any;
  private scaleX = 1;
  private scaleY = 1;
  private anchor: Anchor;
  constructor(options: DataOptions) {}

  render(ctx: CanvasRenderingContext2D) {
    // ctx.save();
    // ctx.beginPath();
    // ctx.rect(this.position.x, this.position.y, this.width, this.height);
    // ctx.fill();
    // ctx.restore();
  }

  setPosition(x: number, y: number) {
    this.position.x = x;
    this.position.y = y;
  }

  getPosition() {
    return this.position;
  }

  setWidth(width: number) {
    this.width = width;
  }

  getWidth() {
    return this.width;
  }

  setHeight(height: number) {
    this.height = height;
  }

  getHeight() {
    return this.height;
  }

  getRect() {
    return {
      x: this.position.x,
      y: this.position.y,
      width: this.width,
      height: this.height,
    };
  }

  setStyle(key: string, value: any) {
    this.style[key] = value;
  }

  getStyle(key: string) {
    return this.style[key];
  }

  set(key: 'height' | 'width', value: any) {
    this[key] = value;
  }
}
