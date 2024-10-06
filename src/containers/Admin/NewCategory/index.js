import { yupResolver } from "@hookform/resolvers/yup"
import UploadFileIcon from "@mui/icons-material/UploadFile"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import * as Yup from "yup"

import { ErrorMessage } from "../../../components/ErrorMessage"
import api from "../../../services/api"
import { Container, ButtonStyles, LabelUpload, Label, Input } from "./styles"

function NewCategory() {
  const [fileName, setFileName] = useState(null)

  const schema = Yup.object().shape({
    name: Yup.string().required("Este campo é obrigatório"),
    file: Yup.mixed()
      .test("required", "Carregue uma imagem", (value) => {
        return value?.length > 0
      })
      .test("fileSize", "Carregue uma imagem de até 2mb", (value) => {
        return value[0]?.size <= 2000000
      }),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = async (data) => {
    const categoryDataFormData = new FormData()

    categoryDataFormData.append("name", data.name)
    categoryDataFormData.append("file", data.file[0])

    await toast.promise(api.post("categories", categoryDataFormData), {
      pending: "Adicionando nova categoria...",
      success: "adicionada com sucesso",
      error: "Falha ao aidiconar categoria. Tente novamente!",
    })
  }

  return (
    <Container>
      <form id="form" noValidate onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>Nome</Label>
          <Input type="text" {...register("name")} />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </div>
        <div>
          <LabelUpload>
            {fileName || (
              <>
                <UploadFileIcon />
                Carregue uma imagem
              </>
            )}
            <input
              type="file"
              accept="image/png, image/jpeg"
              {...register("file")}
              onChange={(value) => {
                setFileName(value.target.files[0]?.name)
              }}
            />
          </LabelUpload>
          <ErrorMessage>{errors.file?.message}</ErrorMessage>
        </div>

        <ButtonStyles>Adicionar</ButtonStyles>
      </form>
    </Container>
  )
}

export default NewCategory
