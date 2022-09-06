import { DataFormat, dispatchAction } from '../../types/Data';

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
