import { DataModel } from './DataModel';
import { getSize } from './Util';

export class GraphView {
  private editCanvas: HTMLCanvasElement;
  private editContext: CanvasRenderingContext2D;
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;

  wrapper: HTMLElement;
  width: number;
  height: number;
  dataModel: DataModel;

  constructor(dm: DataModel) {
    dm.graphView = this;
    this.dataModel = dm;
  }

  private createCanvas() {
    this.canvas = document.createElement('canvas');
    this.canvas.width = this.width;
    this.canvas.height = this.height;    
    this.canvas.style.position = 'absolute';
    this.canvas.style.padding = '0px';
    this.canvas.style.margin = '0px';
    this.canvas.style.background = 'transparent';
    this.canvas.style.display = 'block';
    this.canvas.style.top = '0px';
    this.canvas.style.left = '0px';
    this.canvas.style.height = this.height + 'px';
    this.canvas.style.width = this.width + 'px';
    this.context = this.canvas.getContext('2d');
    this.wrapper.appendChild(this.canvas);
  }

  private createEditCanvas() {
    this.editCanvas = document.createElement('canvas');
    this.editCanvas.width = this.width;
    this.editCanvas.height = this.height;
    this.editCanvas.style.position = 'absolute';
    this.editCanvas.style.padding = '0px';
    this.editCanvas.style.margin = '0px';
    this.editCanvas.style.background = 'transparent';
    this.editCanvas.style.display = 'block';
    this.editCanvas.style.top = '0px';
    this.editCanvas.style.left = '0px';
    this.editCanvas.style.height = this.height + 'px';
    this.editCanvas.style.width = this.width + 'px';
    this.editContext = this.editCanvas.getContext('2d');
    this.wrapper.appendChild(this.editCanvas);
  }

  addToDOM(el: HTMLElement) {
    this.wrapper = el;
    const { width, height } = getSize(el);
    this.width = width;
    this.height = height;
    this.createCanvas();
  }

  setEditable(editable: boolean) {
    if (editable) {
      this.createEditCanvas();
    } else {
      // TODO 删除editCanvas，移除绑定的事件
    }
  }

  private renderDatas(ctx: CanvasRenderingContext2D) {
    const datas = this.dataModel.getDatas();
    for (let data of datas) {
      // data.render(ctx);
    }
  }

  private clearContext(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, this.width, this.height);
    return this;
  }

  resize() {}
}
