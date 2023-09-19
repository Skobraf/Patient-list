import { useNavigate, useParams } from "react-router-dom"
import { Card, CardHeader, Avatar, CardContent, Typography, CardActions, Button, Modal, Box, Stack, Container } from '@mui/material';
import patients from '../mocked_data.json';
import { useContext, useState } from "react";
import { getPatientById } from "../util/helpers";
import { PatientListContext } from "../context/PatientListContext";


export const PatientDetails = () => {
    const { handleDeletedPatient } = useContext(PatientListContext)
    const [open, setOpen] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();

    const patient = getPatientById(patients, id)
    const handleClose = () => setOpen(false);
    const handleOpenDeleteModal = () => {
        setOpen(true)
    }

    const handleDelete = () => {
        handleDeletedPatient(patient.patient_id)
        setOpen(false);
        navigate(-1)
    }

    if (!Boolean(id)) return (
        <>
            <Typography>No User found with this ID</Typography>
            <Button onClick={() => navigate(-1)}>navigate back </Button >
        </>
    )

    return (
        <Container maxWidth='md'>
            <Card sx={{ marginBottom: 5 }}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" src={patient.avatar} />
                    }
                    title={`${patient.first_name} ${patient.last_name}`}
                />
                <CardContent>
                    <Typography variant="body2" color="text.primary">
                        id: {patient.patient_id}
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                        gender: {patient.gender}
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                        age: {patient.age}
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                        email: {patient.email}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={handleOpenDeleteModal} variant="contained">Delete Patient</Button>
                </CardActions>
            </Card>
            <Button variant="outlined" onClick={() => navigate(-1)}>navigate back </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Are you sure you want to delete the patient {patient.patient_id}
                    </Typography>
                    <Stack direction='row'>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button variant="contained" onClick={handleDelete}>Delete</Button>
                    </Stack>

                </Box>
            </Modal>
        </Container>

    )
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
