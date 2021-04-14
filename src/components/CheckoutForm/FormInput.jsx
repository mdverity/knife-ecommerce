import React from 'react'
import { useFormContext, Controller } from 'react-hook-form'
import { TextField, Grid } from '@material-ui/core'

function FormInput({ name, label }) {
  const { control } = useFormContext()
  const isError = false

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        name={name}
        control={control}
        label={label}
        fullWidth
        defaultValue=''
        error={isError}
        render={({ field }) => (
          <TextField
            required
            name={name}
            color='secondary'
            label={label}
            {...field}
          />
        )}
      />
    </Grid>
  )
}

export default FormInput
