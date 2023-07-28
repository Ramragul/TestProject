import  React from "react";
import {z} from  'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import {categories} from '../App'

interface Props {
    onSubmit : (data:FormData) => void

}

const schema = z.object({
    description: z.string().min(1 , {message: "Description should not be empty"}),
    amount: z.number({invalid_type_error : "Enter a valid Number"}).min(1),
    category: z.string().min(1, {message:"Category should not be empty"})
})

type FormData = z.infer<typeof schema>

const ExpenseForm = ({onSubmit} : Props) => {

    const {register,handleSubmit,formState:{errors},reset } = useForm<FormData>({resolver:zodResolver(schema)});

    const onFormSubmit = (data:FormData) =>{

        onSubmit(data)
        reset();

    }

 
    return(
        <>
        <form onSubmit={handleSubmit(onFormSubmit)}>
            <div className="mb-3">
                <label htmlFor="description" className='form-label'>Description</label>
                <input {...register("description")} id = "description" type="text" className="form-control" />
                {errors.description && <p className="text-danger">{errors.description.message}</p> }
            </div>
            <div className="mb-3">
                <label htmlFor="amount" className='form-label'>Amount</label>
                <input {...register("amount" , {valueAsNumber : true})} id = "amount" type="number" className="form-control" />
                {errors.amount && <p className="text-danger">{errors.amount.message}</p> }
            </div>
            <div className="mb-3">
                <label htmlFor="category" className="form-label">Category</label>
                <select {...register("category")}className="form-control" id="category"> 
                <option value=""></option>
                    {categories.map( (categoryType)=>{
                        return <option key={categoryType}>{categoryType}</option>
                    }) 
                    }

                </select>
                {errors.category && <p className="text-danger">{errors.category.message}</p> }
            </div>
           
            <button className="btn btn-primary" type="submit">Submit</button>
           
        </form>
        
        </>
    )
   
 
}

export default ExpenseForm;