import React from 'react';
import MyButton from './components/MyButton';
import ProductCard from './components/ProductCard';

export default function App() {
  return (
    <div>
      <h1>Hello Appsdasd</h1>
      <MyButton
        content={'login'}
        bgColor={'red'}
        color={'white'}
        onClick={() => {
          console.info('Login clicked !');
        }}
      />
      <MyButton
        content={'register'}
        bgColor={'blue'}
        color={'white'}
        onClick={() => {
          console.info('Register clicked !');
        }}
      />
      <MyButton
        content={'logout'}
        bgColor={'green'}
        color={'white'}
        onClick={() => {
          console.info('Logout clicked !');
        }}
      />
      <MyButton
        content={'home'}
        bgColor={'red'}
        color={'white'}
        onClick={() => {
          console.info('Home clicked !');
        }}
      />

      <ProductCard
        image={
          'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=200'
        }
        name={'Tas Kulit Buaya'}
        price={'500.000'}
      />

      <ProductCard
        image={
          'https://images.pexels.com/photos/11135667/pexels-photo-11135667.jpeg?auto=compress&cs=tinysrgb&w=200'
        }
        name={'Sepatu Baru'}
        price={'700.000'}
      />

    </div>
  );
}
