import { Patient } from "./types";

export const searchInputFilter = (searchInput: string) => {
    return (patient: Patient) => {
        return `${patient.last_name} ${patient.first_name} ${patient.patient_id}`.includes(searchInput.trim());
    };
};

export const genderFilter = (value: string) => {
    return (patient: Patient) => {
        if (value === 'all') {
            return true;
        }
        return Boolean(patient.gender === value);
    };
};

export const ageFilter_18_30 = (patient: Patient) => patient.age >= 18 && patient.age <= 30;

export const ageFilter_31_45 = (patient: Patient) => patient.age >= 31 && patient.age <= 45;

export const ageFilter_45 = (patient: Patient) => patient.age > 45;



export const assendingSorting = (data: Patient[]) => {
    return [...data].sort((a, b) => {
        const nameA = a.last_name.toUpperCase();
        const nameB = b.last_name.toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });
}

export const dessendingSorting = (data: Patient[]) => {
    return [...data].sort((a, b) => {
        const nameA = a.last_name.toUpperCase();
        const nameB = b.last_name.toUpperCase();
        if (nameA > nameB) {
            return -1;
        }
        if (nameA < nameB) {
            return 1;
        }
        return 0;
    });
}
export const getPatientById = (patientList: Patient[], id: string = '') => {
    return patientList.filter((patient) => patient.patient_id === parseInt(id))[0]
}