import { DataModel } from './DataModel';
import { getSize } from './Util';

export class GraphView {
  topCanvas: HTMLCanvasElement;
  lowerCanvas: HTMLCanvasElement;
  contextContainer: CanvasRenderingContext2D;
  contextTop: CanvasRenderingContext2D;
  wrapper: HTMLElement;
  width: number;
  height: number;
  dataModel: DataModel;

  constructor(dm: DataModel) {
    dm.graphView = this;
    this.dataModel = dm;
  }

  private createLowerCanvas() {
    this.lowerCanvas = document.createElement('canvas');
    this.lowerCanvas.width = this.width;
    this.lowerCanvas.height = this.height;    
    this.lowerCanvas.style.position = 'absolute';
    this.lowerCanvas.style.padding = '0px';
    this.lowerCanvas.style.margin = '0px';
    this.lowerCanvas.style.background = 'transparent';
    this.lowerCanvas.style.display = 'block';
    this.lowerCanvas.style.top = '0px';
    this.lowerCanvas.style.left = '0px';
    this.lowerCanvas.style.height = this.height + 'px';
    this.lowerCanvas.style.width = this.width + 'px';
    this.contextContainer = this.lowerCanvas.getContext('2d');
  }

  private createTopCanvas() {
    this.topCanvas = document.createElement('canvas');
    this.topCanvas.width = this.width;
    this.topCanvas.height = this.height;
    this.topCanvas.style.position = 'absolute';
    this.topCanvas.style.padding = '0px';
    this.topCanvas.style.margin = '0px';
    this.topCanvas.style.background = 'transparent';
    this.topCanvas.style.display = 'block';
    this.topCanvas.style.top = '0px';
    this.topCanvas.style.left = '0px';
    this.topCanvas.style.height = this.height + 'px';
    this.topCanvas.style.width = this.width + 'px';
    this.contextTop = this.topCanvas.getContext('2d');
  }

  addToDOM(el: HTMLElement) {
    this.wrapper = el;
    const { width, height } = getSize(el);
    this.width = width;
    this.height = height;
    this.createLowerCanvas();
    this.createTopCanvas();
    this.wrapper.appendChild(this.lowerCanvas);
    this.wrapper.appendChild(this.topCanvas);
  }

  draw() {
    const ctx = this.contextContainer;
    this.clearContext(ctx);
    ctx.save();
    this.renderDatas(ctx);
    ctx.restore();
  }

  renderDatas(ctx: CanvasRenderingContext2D) {
    const datas = this.dataModel.getDatas();
    for (let data of datas) {
      data.render(ctx);
    }
  }

  clearContext(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, this.width, this.height);
    return this;
  }

  resize() {}
}
