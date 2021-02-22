import { DataProvider } from '../../helper/DataContext';
import AddStock from './AddStock';
import StockList from './StockList';

export default function Stocks() {
  return (
    <div>
      <h2 className="text-center mb-4">Subscribed Stocks</h2>
      <DataProvider>
        <AddStock />
        <StockList />
      </DataProvider>
    </div>
  );
}
