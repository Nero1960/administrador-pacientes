import { Patient } from "../interface/Patient"
import PatientDetailItem from "./PatientDetailItem"
import { usePatientStore } from "../store"

interface PatientDetailsProps {
    patient: Patient
}

const PatientDetails = ({ patient }: PatientDetailsProps) => {

    const deletePatient = usePatientStore((store) => store.deletePatient );
    const getPatientById = usePatientStore((store) => store.getPatientById )
    return (
        <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">

            <PatientDetailItem
                label="ID"
                data={patient.id}
            />

            <PatientDetailItem
                label="Nombre"
                data={patient.name}
            />

            <PatientDetailItem
                label="Propietario"
                data={patient.caretaker}
            />

            <PatientDetailItem
                label="Propietario"
                data={patient.email}
            />

            <PatientDetailItem
                label="Fecha Alta"
                data={patient.date.toString()}
            />

            <PatientDetailItem
                label="Síntomas"
                data={patient.symptoms}
            />

            <div className="flex flex-col md:flex-row justify-between gap-3 mt-10">

                <button
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 duration-300 text-white uppercase font-bold rounded-lg"
                    onClick={() => getPatientById(patient.id)}
                >
                    Editar
                </button>

                <button
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 duration-300 text-white uppercase font-bold rounded-lg"
                    onClick={() => deletePatient(patient.id)}
                >
                    Eliminar
                </button>

            </div>
        </div>
    )
}

export default PatientDetails