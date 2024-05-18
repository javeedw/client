import React from 'react';
import { Typography, List, Card } from 'antd';

const { Title } = Typography;

const products = [
  { id: 1, name: 'Product 1' },
  { id: 2, name: 'Product 2' },
];

const Products = () => {
  return (
    <div>
      <Title>Products Page</Title>
      <List
        grid={{ gutter: 16, column: 2 }}
        dataSource={products}
        renderItem={item => (
          <List.Item>
            <Card title={item.name}>Product details...</Card>
          </List.Item>
        )}
      />
    </div>
  );
}

export default Products;
