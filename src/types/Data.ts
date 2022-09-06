type dataKey = 'id' | 'type' | 'title' | 'body';
type dataBody = string;

// type DataFormat = {
//   [key in dataKey]: string;
// };

type DataFormat = Omit<Record<dataKey, dataBody>, 'body'> & {
  body: string | string[];
};

type dispatchAction = {
  type: string;
  newData?: DataFormat;
  id?: string | number;
};

export { DataFormat, dispatchAction };
