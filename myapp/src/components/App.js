import { useState } from 'react';

function App() {
  const [items, setItems] = useState([
    { id: 1, name: 'Велосипед', price: 1000, count: 1 },
    { id: 2, name: 'Самокат', price: 700, count: 1 },
    { id: 3, name: 'Ролики', price: 1300, count: 2 },
    { id: 4, name: 'Сноуборд', price: 19000, count: 4 }
  ]);

  const AddItem = () => {
    const newItemName = prompt('Введите название товара:');
    const newItemPrice = prompt('Введите цену товара:');
    const newItem = {
      id: Date.now(),
      name: newItemName,
      price: Number(newItemPrice),
      count: 1
    };
    setItems([...items, newItem]);
  };

  const Increment = (id) => {
    const updatedItems = items.map((item) => {
      if (item.id === id && item.count < 25) {
        return { ...item, count: item.count + 1 };
      }
      return item;
    });
    setItems(updatedItems);
  };

  const Decrement = (id) => {
    const updatedItems = items.map((item) => {
      if (item.id === id && item.count > 0) {
        return { ...item, count: item.count - 1 };
      }
      return item;
    });
    setItems(updatedItems);
  };

  const RemoveItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  const DoubleClick = (id) => {
    const updatedItems = items.map((item) => {
      if (item.id === id && item.count === 0) {
        return null;
      }
      return item;
    }).filter(Boolean);
    setItems(updatedItems);
  };

  return (
    <div className='box'>
      <button onClick={AddItem}>Добавить товар</button>
      <ul>
        {items.map((item) => (
          <li key={item.id} onDoubleClick={() => DoubleClick(item.id)}>
            <div className="item-container">
              <div className="item-info">
                <h3>{item.name}</h3>
                <p>{item.price} руб. x {item.count} шт. = {item.price * item.count} руб.</p>
                <button onClick={() => Increment(item.id)}>+</button>
                <button onClick={() => Decrement(item.id)}>-</button>
                <button onClick={() => RemoveItem(item.id)}>Удалить</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;