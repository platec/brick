import { DataModel } from './DataModel';
import { generateId } from './Util';

export class Data {
  private id: number;
  private tag: string;
  private dm: DataModel
  constructor() {
    this.id = generateId();
  }
  getId() {
    return this.id;
  }
  getTag() {
    return this.tag;
  }
  setTag(tag: string) {
    this.tag = tag;
  }
  setDataModel(dm: DataModel) {
    this.dm = dm;
  }
  getDataModel() {
    return this.dm;
  }
}
