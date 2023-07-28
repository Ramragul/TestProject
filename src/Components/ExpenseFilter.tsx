//import React from 'react'
import {categories} from '../App'

interface Props {
    onSelectCategory : (category:string) => void
}

const ExpenseFilter = ({onSelectCategory}: Props) => {
    return(
        <>
            <select  className="form-select mb-3" onChange={(event)=>onSelectCategory(event.target.value)}>
            <option value="">All Categories</option>
            {categories.map((categoryType) => {return <option value={categoryType}>{categoryType}</option>})}
            </select>
        </>
    )
}

export default ExpenseFilter;