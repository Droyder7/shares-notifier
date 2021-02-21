import { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { useData } from '../../helper/DataContext';

export default function AddStock() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { otherStocks, subscribeStock } = useData();
  const optionRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();

    if (optionRef.current.value == '')
      return setError('Please Select a Stock to subscribe');

    setError('');
    setLoading(true);

    await subscribeStock(optionRef.current.value).catch((e) =>
      setError(`Error on Subscribing ${e?.message}`)
    );

    setLoading(false);
  }

  return (
    <div>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form className="input-group mb-3" onSubmit={handleSubmit} inline>
        <Form.Control
          as="select"
          className="my-1 mr-sm-2"
          id="formSelect"
          ref={optionRef}
          custom
        >
          <option value="">Choose Stock..</option>
          {otherStocks.map((stock) => (
            <option key={stock.id} value={stock.id}>
              {stock.name}
            </option>
          ))}
        </Form.Control>
        <Button disabled={loading} type="submit" className="my-1">
          Subscribe
        </Button>
      </Form>
    </div>
  );
}
