import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import './Form.css'
type Data = {
  name: string
  email: string
  text: string
}
export const Form = () => {
  const schema = yup.object().shape({
    name: yup.string().required('Your Name is Required!'),
    email: yup.string().email().required(),
    text: yup.string().required(),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Data>({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: Data): void => {
    alert('Thank you ' + data.name)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type='text'
        placeholder='Name...'
        {...register('name')}
      />
      <p>{errors?.name?.message}</p>
      <input
        type='text'
        placeholder='Email...'
        {...register('email')}
      />
      <p>{errors.email?.message}</p>
      <input
        type='text'
        placeholder='Message...'
        {...register('text')}
      />
      <p>{errors.text?.message}</p>

      <input
        type='submit'
        value='SEND MESSAGE'
      />
    </form>
  )
}
