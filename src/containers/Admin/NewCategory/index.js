import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import { ErrorMessage } from '../../../components/ErrorMessage'
import api from '../../../services/api'
import { Container, Label, Input, ButtonStyles } from './styles'

function NewCategory () {
  const { push } = useHistory()

  const schema = Yup.object().shape({
    category: Yup.string().required('Escolha o nome da categoria')
  })

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async data => {
    const productDataFormData = new FormData()

    productDataFormData.append('category', data.category.name)

    await toast.promise(api.post('categories', productDataFormData), {
      pending: 'Criando o produto',
      success: 'Criado com sucesso',
      error: 'Falha ao criar'
    })

    setTimeout(() => {
      push('/listar-produtos')
    }, 2000)
  }

  return (
        <Container>
          <form noValidate onSubmit={handleSubmit(onSubmit)}>

        <div>
         <Label>Nome</Label>
         <Input type='text' {...register('name')} />
         <ErrorMessage>{errors.name?.message}</ErrorMessage>
         </div>

         <ButtonStyles>Adicionar Categoria</ButtonStyles>
      </form>
  </Container>
  )
}

export default NewCategory
