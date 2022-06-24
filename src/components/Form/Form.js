import React from 'react'
import { Button } from '@magicsoup.io/stock'
import { Input, Label, P } from '../../styled'

import { navigate } from '@reach/router'

export default ({ handleSubmit, handleUpdate }) => {

  return (
    <form
      method='post'
      onSubmit={() => {
        handleSubmit(event)
        navigate(`/app/profile`)
      }}
    >
      <P>
        Por favor logue com o seu usuário e senha<strong>demo</strong>.
      </P>
      <Label>
        Usuário
        <Input
          type='text'
          name='username'
          placeholder='Enter username'
          onChange={handleUpdate}
        />
      </Label>
      <Label>
        Senha
        <Input
          type='password'
          name='password'
          placeholder='Enter password'
          onChange={handleUpdate}
        />
      </Label>
      <Button 
        as='input' 
        variant='primary' 
        type='submit' 
        value='Log In' 
        my={3} />
    </form>
  )
}