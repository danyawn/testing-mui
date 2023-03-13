import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from '@mui/material'
import React from 'react'
import { Controller, useForm } from 'react-hook-form';

const FormInput = () => {

    const defaultValues = {
        name: '',
        status: ''
    }

    const {
        control,
        setValue,
        register,
        handleSubmit,
    } = useForm({ defaultValues })


    const onSubmit = async (input) => {
        const {
            name,
            status
        } = input

        console.log('isi input', input)
        alert('nama ' + name + ' dengan status ', status)

    }


    return (

        <form
            onSubmit={handleSubmit(onSubmit)}
            style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                marginTop: '20px'

            }}

        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '30px',
                    width: '80%',
                    border: 1,
                    borderColor: 'grey.300',
                    borderRadius: '8px',
                }}>
                <Controller
                    name='status'
                    control={control}
                    render={({ field: { name, value, onChange } }) => (
                        <>
                            <FormControl>
                                <FormLabel id="demostatuscontrolled-radio-buttons-group">Gender</FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-controlled-radio-buttons-group"
                                    name={name}
                                    rules={{ required: true }}
                                    value={value ? value : ''}
                                    onChange={onChange}
                                >
                                    <FormControlLabel value="Pegawai" control={<Radio />} label="Pegawai" />
                                    <FormControlLabel value="Mitra Kerja" control={<Radio />} label="Mitra Kerja" />
                                    <FormControlLabel value="Umum" control={<Radio />} label="Umum" />
                                </RadioGroup>
                            </FormControl>
                        </>
                    )}
                />

                <Controller
                    name="name"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { name, value, onChange } }) => (
                        <>
                            <label htmlFor='nama'>Input Nama</label>
                            <input
                                style={{
                                    width: '150px',
                                    paddingTop: '5px',
                                    paddingBottom: '5px',
                                    border: '2px solid',
                                    borderRadius: '5px'
                                }}
                                type='text'
                                placeholder='isi nama...'
                                name={name}
                                value={value}
                                onChange={onChange}
                            />

                        </>
                    )}
                />
                <Button
                    type='submit'
                    variant='contained'
                    sx={{
                        marginTop: '20px',
                        backgroundColor: '#3AA2BF'
                    }}>Submit</Button>
            </Box>
        </form>

    )
}

export default FormInput