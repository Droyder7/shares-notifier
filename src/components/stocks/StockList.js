import { Table } from 'react-bootstrap';
import { useData } from '../../helper/DataContext';
import AddStock from './AddStock';

export default function StockList() {
  const { subStocks, unSubscribeStock } = useData();

  const stocksTable = () =>
    subStocks.map((stock, index) => (
      <tr key={stock.id}>
        <td onClick={() => unSubscribeStock(stock.id)}>{index + 1}</td>
        <td>{stock.name}</td>
        <td>{stock.id}</td>
        <td>{stock.previousPrice}</td>
        <td>{stock.currentPrice}</td>
      </tr>
    ));

  return (
    <div>
      <h2 className="text-center mb-4">Subscribed Stocks</h2>
      <AddStock />
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>🗑️</th>
            <th>Brand Name</th>
            <th>Brand ID</th>
            <th>Previous Price</th>
            <th>Current Price</th>
          </tr>
        </thead>
        <tbody>{stocksTable()}</tbody>
      </Table>
    </div>
  );
}
