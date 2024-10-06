import { yupResolver } from "@hookform/resolvers/yup"
import React from "react"
import { useForm } from "react-hook-form"
import { Link, useHistory } from "react-router-dom"
import { toast } from "react-toastify"
import * as Yup from "yup"

import Logo from "../../assets/logo-image.svg"
import RegisterImg from "../../assets/register-image.svg"
import { Button, ErrorMessage } from "../../components"
import api from "../../services/api"
import {
  Container,
  RegisterImage,
  ContainerItems,
  Label,
  Input,
  SignInLink,
} from "./style"

export function Register() {
  const { push } = useHistory()

  const schema = Yup.object().shape({
    name: Yup.string().required("Nome obrigatório!"),
    email: Yup.string()
      .email("Digite um e-mail válido")
      .required("E-mail obrigatório!"),
    password: Yup.string()
      .required("Senha obrigatória!")
      .min(6, "A senha deve ter pelo menos 6 dígitos"),
    confirmPassword: Yup.string()
      .required("Senha obrigatória!")
      .oneOf([Yup.ref("password")], "As senhas devem ser iguais"),
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (clientData) => {
    try {
      const { status } = await api.post(
        "users",
        {
          name: clientData.name,
          email: clientData.email,
          password: clientData.password,
        },
        { validateStatus: () => true },
      )

      if (status === 201 || status === 200) {
        toast.success("Cadastro criado com sucesso")

        setTimeout(() => {
          push("/login")
        }, 1000)
      } else if (status === 409) {
        toast.error("E-mail já cadastrado")
      } else {
        throw new Error()
      }
    } catch (err) {
      toast.error("Falha no sistema! Tente novamente")
    }
  }

  return (
    <Container>
      <RegisterImage src={RegisterImg} alt="Register-image" />
      <ContainerItems>
        <img src={Logo} alt="Logo-codeburger" />
        <h1>Cadastre-se</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label error={errors.name?.message}>Nome</Label>
          <Input
            type="text"
            {...register("name")}
            error={errors.name?.message}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>

          <Label error={errors.email?.message}>Email</Label>
          <Input
            type="email"
            {...register("email")}
            error={errors.email?.message}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label error={errors.password?.message}>Senha</Label>
          <Input
            type="password"
            {...register("password")}
            error={errors.password?.message}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Label error={errors.confirmPassword?.message}>Confirmar Senha</Label>
          <Input
            type="password"
            {...register("confirmPassword")}
            error={errors.confirmPassword?.message}
          />
          <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

          <Button type="submit">Cadastrar</Button>
        </form>

        <SignInLink>
          {" "}
          Já possui conta?{" "}
          <Link style={{ color: "white" }} to="/login">
            Login
          </Link>
        </SignInLink>
      </ContainerItems>
    </Container>
  )
}
