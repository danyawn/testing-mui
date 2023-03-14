import { Box, Button, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from '@mui/material'
import React from 'react'
import { Controller, useForm } from 'react-hook-form';

const FormInput = () => {

    const defaultValues = {
        name: '',
        status: '',
        age: ''
    }

    const {
        control,
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
                    gap: '20px'
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
                            <FormLabel htmlFor='nama'>Input Nama</FormLabel>
                            <TextField name={name} value={value} onChange={onChange} placeholder="Masukkan nama" />

                        </>
                    )}
                />

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Controller
                        name='age'
                        control={control}
                        render={({ field: { name, value, onChange } }) => (
                            <>
                                <Select
                                    name={name}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={value}
                                    label="Age"
                                    onChange={onChange}
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </>
                        )}
                    />
                </FormControl>
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