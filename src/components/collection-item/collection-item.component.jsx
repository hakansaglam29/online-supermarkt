import './collection-item.styles.scss';

const CollectionItem = ({ e }) => {

    const { imageUrl, name, price, unit } = e;

    return (

        <div className='item-container'>
            <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className='name'>
                <p>{name}</p>
            </div>
            <div className='price'>
                <p>{price} €</p>
            </div>
            <div className='unit'>
                <p> {unit}</p>
            </div>
            <button>
                Add
            </button>
        </div>
    )
}

export default CollectionItem;

