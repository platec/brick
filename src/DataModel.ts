import { Data } from './Data';
import { GraphView } from './GraphView';
import { Notifier } from './Notifier';

export class DataModel {
  private datas: Array<Data>;
  private dataMap: Map<number, Data>;
  private tagDataMap: Map<string, Data>;
  private notifier: Notifier
  graphView: GraphView;

  constructor() {
    this.datas = [];
    this.notifier = new Notifier();
  }
  size() {
    return this.datas.length;
  }
  isEmpty() {
    return this.datas.length === 0;
  }
  getDatas() {
    return this.datas;
  }
  getDataById(id: number) {
    return this.dataMap.get(id);
  }
  getDataByTag(tag: string) {
    return this.tagDataMap.get(tag);
  }
  add(data: Data, index?: number) {
    const dataId = data.getId();
    if (this.dataMap.has(dataId)) {
      throw `${dataId} already exists`;
    }
    this.dataMap.set(dataId, data);
    if (index !== undefined) {
     this.datas.splice(index, 0, data); 
    } else {
      this.datas.push(data);
    }
    const dataTag = data.getTag();
    if (dataTag !== undefined) {
      this.tagDataMap.set(dataTag, data);
    }
    const datasIndex = index !== undefined ? index : this.datas.length - 1;
    this.notifier.emit('dataAdd', {
      data,
      datasIndex
    });
  }
}
