import React, { useState } from 'react';
import { AgeRangeType, PatientContextProviderProps } from '../util/types';
import { PatientListContext } from './PatientListContext';

function PatientContextProvider(props: PatientContextProviderProps) {

  const [searchInput, setSearchInput] = useState('');

  const [patientGender, setPatientGender] = useState('all')
  const [sortingOrder, setSortingOrder] = useState('')
  const [ageRange, setAgeRange] = useState<AgeRangeType>('all');
  const [deletedPatient, setDeletedPatient] = useState<number | undefined>()

  const handleSearchWithString = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchedValue = e.target.value;
    setSearchInput(searchedValue);
  }

  const handleDeletedPatient = (id: number) => {
    setDeletedPatient(id)
  }
  
  const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const gender = event.target.value;
    setPatientGender(gender)
  }

  const handleSorting = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sortingOrder = e.target.value;
    setSortingOrder(sortingOrder)
  }
  const handleAgeRangeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const ageRangeFilter = e.target.value as AgeRangeType;
    setAgeRange(ageRangeFilter)
  }
  return (
    <PatientListContext.Provider value={{
      ageRange, sortingOrder, patientGender, searchInput, deletedPatient,
      handleAgeRangeChange,
      handleGenderChange,
      handleSearchWithString,
      handleSorting,
      handleDeletedPatient
    }}>
      {props.children}
    </PatientListContext.Provider>
  );
}

export default PatientContextProvider;
