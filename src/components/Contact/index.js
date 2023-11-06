import React from 'react'

import { Container, Topic, P, Info, ContainerItems, Form, Input, Button } from './styles'

export function Contact () {
  return (
        <Container>
          <ContainerItems>
          <Info>
          <Topic>Endereço:</Topic>
          <P>Rua Professor Souza Moreira, 20, Rua A casa 7</P>
          </Info>

          <Info>
            <Topic>Número de Contato:</Topic>
            <P>+55 (21) 965036374</P>
          </Info>

          <Info>
            <Topic>Email:</Topic>
            <P>renanjrr679@gmail.com</P>
          </Info>

          <Info>
            <Topic>Horário de Funcionamento:</Topic>
            <P>18:00 - 00:00</P>
            <P>Não abrimos domingo</P>
          </Info>
          </ContainerItems>

          <Form action="https://formsubmit.co/renanjrr679@gmail.com" method="POST">
            <input type="hidden" name="_captcha" value="false"/>
            <input type="hidden" name="_next" value="https://screen-thanks.netlify.app/"/>
            <Input type='name' name='name' placeholder='Digite seu nome' required/>
            <Input type='email' name='email'placeholder='Digite seu Email' required/>

            <textarea name='message' placeholder='Digite sua mensagem...' required></textarea>

            <Button type='submit'>Enviar Mensagem</Button>
          </Form>
        </Container>
  )
}
