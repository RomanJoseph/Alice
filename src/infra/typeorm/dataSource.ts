import { DataSource, DataSourceOptions } from 'typeorm';
import { typeormConfig } from './typeormConfig';

const dataSource = new DataSource(typeormConfig as DataSourceOptions);
export default dataSource;

export const databaseProvider = [
  {
    provide: 'DataSource',
    useFactory: async () => {
      const dataSource = new DataSource(typeormConfig as DataSourceOptions);

      return dataSource.initialize();
    },
  },
];
