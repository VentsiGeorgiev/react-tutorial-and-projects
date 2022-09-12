import { useEffect, useState } from 'react';
import Alert from './components/Alert';
import ProductList from './components/ProductList';


const getLocalStorage = () => {
  let listProducts = localStorage.getItem('products');
  if (listProducts) {
    return JSON.parse(localStorage.getItem('products'));
  } else {
    return [];
  }
};

function App() {
  const [product, setProduct] = useState('');
  const [products, setProducts] = useState(getLocalStorage());
  const [alert, setAlert] = useState({
    msg: '',
    type: '',
    show: false
  });
  const [edit, setEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  const { msg, type, show } = alert;

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (product.trim() === '') {
      setAlert({
        show: true,
        msg: 'Please add a product',
        type: 'danger',
      });
    } else if (edit && product) {
      setProducts(
        products.map((item) => {
          if (item.id === editId) {
            return { ...item, title: product };
          }
          return item;
        })
      );
      setAlert({
        show: true,
        msg: 'Succesfully edit product',
        type: 'edit',
      });
      setProduct('');
      setEditId(null);
      setEdit(false);
    } else {
      addProduct(product);
      setAlert({
        show: true,
        msg: 'Product added to the list',
        type: 'success',
      });
    }

  };

  // # Add a product
  const addProduct = (product) => {
    const newProduct = {
      id: new Date().valueOf(),
      title: product,
    };
    setProducts((prevState) => (
      [...prevState, newProduct]
    ));
    setProduct('');

  };

  // # Delete product
  const deleteProduct = (id) => {
    setProducts((prevState) => (
      prevState.filter((p) => p.id !== id)
    ));
    setAlert({
      show: true,
      msg: 'Product has been deleted',
      type: 'danger',
    });
  };

  // # Edit
  const editProduct = (id) => {
    const specificItem = products.find((item) => item.id === id);
    setEdit(true);
    setEditId(id);
    setProduct(specificItem.title);
  };

  // # Clear all 
  const clearAll = () => {
    window.confirm('Want to delete?');;
    setProducts([]);
  };

  // # Save to localStorage
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);


  return (
    <section className="section">

      <section className="wrapper">
        <h2 className='title'>Grocery List</h2>

        {show && <Alert msg={msg} type={type} setAlert={setAlert} />}

        <form className='product-form' onSubmit={onSubmitHandler}>
          <input
            type="text"
            name="product"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            className={`${edit ? 'input input-edit' : 'input input-add'}`}
            placeholder='eggs...'
          />
          <button className={`btn ${edit ? 'btn-edit' : 'btn-add'}`}
          >
            {edit ? 'Edit' : 'Add'}
          </button>
        </form>

        <section className="product">
          {products.map((item) => (
            <ProductList
              key={item.id}
              item={item}
              deleteProduct={deleteProduct}
              editProduct={editProduct}
              setEdit={setEdit}
              edit={edit}
            />
          ))}
        </section>

        <div className='clear'>
          <button

            onClick={clearAll}
            className='btn btn-clear'
          >
            Clear List
          </button>
        </div>


      </section>

    </section>
  );
}

export default App;
