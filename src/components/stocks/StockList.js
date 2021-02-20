import { Table } from 'react-bootstrap';
import { useData } from '../../helper/DataContext';

export default function StockList() {
  const stocks = useData();

  const stocksTable = () =>
    stocks.map((stock, index) => (
      <tr key={stock.id}>
        <td>{index + 1}</td>
        <td>{stock.name}</td>
        <td>{stock.id}</td>
        <td>{stock.previousPrice}</td>
        <td>{stock.currentPrice}</td>
      </tr>
    ));

  return (
    <div>
      <h2 className="text-center mb-4">Stock List</h2>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
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
