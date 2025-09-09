import { Card, Button } from 'antd';


const products = [
  {
    name: 'MacBook Air 2018',
    description: 'The reason I am selling the machine is because it is too much power for what I need.',
    price: '30.000.000 đ',
    image: 'https://via.placeholder.com/300x200?text=MacBook+Air+2018',
  },
  {
    name: 'MacBook Pro 2019',
    description: 'The reason I am selling the machine is because it is too much power for what I need.',
    price: '30.000.000 đ',
    image: 'https://via.placeholder.com/300x200?text=MacBook+Pro+2019',
  },
];

const Cart = () => {
  return (
    <div style={{ display: 'flex', gap: '24px', padding: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
      {products.map((item, index) => (
        <Card
          key={index}
          hoverable
          style={{ width: 300 }}
          cover={<img alt={item.name} src={item.image} />}
        >
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p style={{ fontWeight: 'bold', color: '#22c55e' }}>{item.price}</p>
          <Button type="primary">Xem chi tiết</Button>
        </Card>
      ))}
    </div>
  );
};

export default Cart;