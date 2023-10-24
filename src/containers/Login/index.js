import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import LoginImg from '../../assets/login-image.svg'
import Logo from '../../assets/logo-image.svg'
import { Button, ErrorMessage } from '../../components'
import { useUser } from '../../hooks/UserContext'
import api from '../../services/api'
import { Container, LoginImage, ContainerItems, Label, Input, SignInLink } from './style'

export function Login () {
  const history = useHistory()

  const { putUserData } = useUser()

  const schema = Yup.object().shape({
    email: Yup.string().email('Digite um e-mail válido').required('E-mail obrigatório!'),
    password: Yup.string().required('Senha obrigatória!').min(6, 'A senha deve ter pelo menos 6 dígitos')
  })
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async (clientData) => {
    const { data } = await toast.promise(
      api.post('sessions', {
        email: clientData.email,
        password: clientData.password
      }),
      {
        pending: 'Verificando seus dados...',
        success: 'Seja bem vindo(a)',
        error: 'Verifique seu e-mail e senha!'
      }

    )

    putUserData(data)

    setTimeout(() => {
      if (data.admin) {
        history.push('/pedidos')
      } else {
        history.push('/')
      }
    }, 1000)
  }

  return (
    <Container>
     <LoginImage src={LoginImg} alt='Login-image'/>
     <ContainerItems>

      <img src={Logo} alt='Logo-codeburger'/>
      <h1>Login</h1>

      <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Label>Email</Label>
      <Input type='email' {...register('email')} error={errors.email?.message}/>
      <ErrorMessage>{errors.email?.message}</ErrorMessage>

      <Label>Senha</Label>
      <Input type='password' {...register('password')} error={errors.password?.message}/>
      <ErrorMessage>{errors.password?.message}</ErrorMessage>

      <Button type="submit" style={{ marginTop: '12%', marginBottom: '7%' }} >Sign in</Button>
      </form>

      <SignInLink> Não possui conta? <Link style={{ color: 'white' }} to='/cadastro'>Sign up</Link></SignInLink>

     </ContainerItems>
    </Container>
  )
}
