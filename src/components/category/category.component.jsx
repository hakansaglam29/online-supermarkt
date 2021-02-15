import './category.styles.scss'

const Category = ({title}) => {

    return(
        <div className='category-wrapper'>
            <div className='category-title'>
                <p>Categories</p>
                <p className='category-name'> {title} </p>
            </div>
        </div>
    )
}

export default Category