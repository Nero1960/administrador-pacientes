import { usePatientStore } from "../store"
import PatientDetails from "./PatientDetails"
const PatientList = () => {

    const patients = usePatientStore((state) => state.patients)

    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            {patients.length ?

                (

                    <>

                        <h2 className="text-xl font-black text-center">Listado de Pacientes</h2>
                        <p className="text-xl mt-5 mb-10 text-center">
                            Administra tus 
                            <span className="text-indigo-500 font-bold">Pacientes y Citas</span>
                        </p>

                        {patients.map(patient => (
                            <PatientDetails
                                key={patient.id}
                                patient={patient}
                            />
                        ))}
                    
                    </>
                )

                :

                (<>

                    <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">Comienza agregando pacientes <span className="text-indigo-500 font-bold">y aparecerán en este lugar</span></p>

                </>)}

        </div>
    )
}

export default PatientList