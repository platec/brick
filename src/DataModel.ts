import { Data } from './Data';
import { GraphView } from './GraphView';

export class DataModel {
  private dataList: Array<Data>;
  graphView: GraphView;
  constructor() {
    this.dataList = [];
  }

  add(data: Data) {
    this.dataList.push(data);
    this.graphView.draw();
  }

  getDatas() {
    return this.dataList;
  }
}
