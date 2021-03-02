declare namespace brick {
  export const Data: typeof import('./Data').Data;
  export type Data = import('./Data').Data;
}

type Position = {
  x: number;
  y: number;
};

type Anchor = {
  x: number;
  y: number;  
}

type DataRect = {
  x: number;
  y: number;
  height: number;
  width: number;  
}

interface DataOptions {
  left: number;
  top: number;
  width: number;
  height: number;
}
