function ProductList({ item, deleteProduct, editProduct, edit }) {


    return (
        <div className="item">
            <h4 className="product-title">{item.title}</h4>
            <div>
                <button disabled={edit} className='btn btn-del' onClick={() => deleteProduct(item.id)}>del</button>
                <button disabled={edit} className='btn btn-edit ' onClick={() => editProduct(item.id)}>edit</button>
            </div>
        </div>
    );
}

export default ProductList;