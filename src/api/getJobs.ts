import data from './data.json';

export interface IData {

  id: number,

  title: string,

  description: string,

  employment_type: string
}

export const getJobs = () => {
  return new Promise((resolve, reject) => resolve(data)) as Promise<Array<IData>>;
};
