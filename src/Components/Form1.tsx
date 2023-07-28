import {z} from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FieldValues } from 'react-hook-form'
//import { BsFileEarmarkPost } from 'react-icons/bs'

const schema = z.object ({
    email: z.string().min(5 ,{message : "Please Enter valid Email id"}),
    mobileNumber: z.number({invalid_type_error:"Mobile Number should contain only Numbers"}).min(10, {message:"Please Enter Valid Mobile Number"})
})

 type FormData = z.infer<typeof schema>


const Form1 =  () => {

    const {register , handleSubmit, formState:{errors, isValid}} = useForm<FormData>({resolver:zodResolver(schema)})

    const onSubmit = (data : FieldValues) => {
        console.log(data)
    }
    return(
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
            <label htmlFor="email" className='form-label'>Email ID</label>
            <input {...register('email')} id="email" type="text" className='form-control'/>
            {errors.email && <p className='text-danger'>{errors.email.message}</p>}
        </div>
        <div className="mb-3">
            <label htmlFor="mobileNumber" className='form-label'>Mobile Number</label>
            <input {...register('mobileNumber' , {valueAsNumber:true})}id="mobileNumber" type="number" className='form-control'/>
            {errors.mobileNumber && <p className='text-danger'>{errors.mobileNumber.message}</p>}
        </div>
        <button disabled = {!isValid} type='submit' className='btn btn-primary'>submit</button>
      </form>  
    )
}

export default Form1;