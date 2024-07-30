import React from 'react'

const CategoryPage = ({ params }) => {
    return (
        <div>
            <h1>Recupere une categorie</h1>

            <h2>{params.category}category</h2>
        </div>
    )
}

export default CategoryPage
