import { Card, CardActions, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Patient } from "../util/types";

export const PatientCard = ({ patient }: { patient: Patient }) => {

    return (
        <Card sx={{
            height: 115,
            marginBottom: 5
        }}>
            <CardContent>
                <Typography variant="body2" color="text.primary">
                    id: {patient.last_name}
                </Typography>
                <Typography variant="body2" color="text.primary">
                    name: {patient.last_name} {patient.first_name}
                </Typography>
            </CardContent>
            <CardActions>
                <Link to={`/patient/${patient.patient_id}`}>Patient details</Link>
            </CardActions>
        </Card>
    )
}