type dataKey = 'id' | 'type' | 'title' | 'body';
type dataBody = string;

// type DataFormat = {
//   [key in dataKey]: string;
// };

type DataFormat = Record<dataKey, dataBody>;

type dispatchAction = {
  type: string;
  newData?: DataFormat;
  id?: string | number;
};

class Data {
  constructor(private dataArray: DataFormat[] = []) {}

  get data(): DataFormat[] {
    return this.dataArray;
  }

  private set data(updatedArray) {
    this.dataArray = updatedArray;
  }

  dispatch(action: dispatchAction) {
    switch (action.type) {
      case 'ADD':
        const addedArray = [...this.data, action.newData];
        this.data = addedArray;
        break;
      case 'REMOVE':
        const filteredArray = this.data.filter(data => data.id !== action.id);
        this.data = filteredArray;
        break;

      default:
        throw new Error('invalid action type');
    }
  }
}

const data = new Data();

export { data };
