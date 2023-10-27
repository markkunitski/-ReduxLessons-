import React from 'react'
import cl from './RecipeItem.module.css'
import { useSelector } from 'react-redux'
import { favoritesSlice } from '../../fovourite/favourity.slice'
import { store } from '../../store/store'

function RecipeItem({ recipe }) {
    const { favorites } = useSelector(state => state)
    console.log(favorites);
    return (<div className={cl.item}>
        <h3>{recipe.name}</h3>
        <button>to favorite</button>
    </div>
    )
}

export default RecipeItem