import React from 'react'

function ProductComponent(props) {

    // const [categs, setCategories] = React.useState([]);

    React.useEffect(() => { 
        // CategoryService.getCategories().then((response) => {
        //     setCategories(response.data)
        // })
    }, []);

    return (
        <div >
        
        </div>
    )
}

export default ProductComponent;