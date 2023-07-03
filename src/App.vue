<script setup lang="ts">
import { onMounted, reactive, ref, watch } from 'vue'
import { uid } from 'uid'
import { DataI } from './services/interfaces/form.interfaces'
import { AnimalTypeI } from './services/interfaces/form.interfaces'
import Header from './components/Header.vue'
import Form from './components/Form.vue'
import Patient from './components/Patient.vue'


let animalOptions = ref<AnimalTypeI[]>([
    {id:0,text: 'Chien', value: 1},
    {id:1,text: 'Chat', value: 2},
    {id:2,text: 'Oiseau', value: 3},
    {id:3,text: 'Poisson', value: 4},
    {id:4,text: 'Rongeur', value: 5},
])

let patientData = reactive<DataI>({
    id:null,
    animalName: '',
    animalType: '',
    ownerName: '',
    email: '',
    dateArrive: '',
    symptoms: ''
})

const allPatientsData = ref<DataI[]>([])

watch( allPatientsData, () => { // watch detect state changes
  saveLocalStorage()
}, {
  deep:true // check all allPatientsData attributs changes
})

onMounted(() => {
    //persistence patient if there is a patient in allPatientsData
    const patientsStorage = localStorage.getItem('allPatientsData')
    if(patientsStorage){
      allPatientsData.value = JSON.parse(patientsStorage)
    }
});

const saveLocalStorage = () => { // patient persistance
  localStorage.setItem('allPatientsData', JSON.stringify(allPatientsData.value))
}

const createNewPatient = ():unknown => {

  if(patientData.id){
    const { id } = patientData
    const i = allPatientsData.value.findIndex(patient => patient.id === id)
    allPatientsData.value[i] = {...patientData}
  }else{
    allPatientsData.value.push({ 
    ...patientData,
    id: uid()
   })
  }
  
  const getSelect = document.querySelector('select') as HTMLSelectElement

  return [
    Object.assign( patientData, {
      id:null,
      animalName: '',
      animalType: '',
      ownerName: '',
      email: '',
      dateArrive: '',
      symptoms: ''
    }), 
    getSelect.selectedIndex = 0
  ]
}

const updatePatient = (id:string|null):void => {
  const patientToUpdate = allPatientsData.value.filter(patient => patient.id === id)[0]
  const patientType = patientToUpdate.animalType

  const optionIndex = animalOptions.value.findIndex(option => option.text === patientType)
  const getSelect = document.querySelector('select') as HTMLSelectElement

  getSelect.selectedIndex = optionIndex + 1
  Object.assign(patientData, patientToUpdate)
}

const deletePatient = (id:string|null) => {
  allPatientsData.value = allPatientsData.value.filter(patient => patient.id !== id)
  const getSelect = document.querySelector('select') as HTMLSelectElement
  return [
    Object.assign( patientData, {
      id:null,
      animalName: '',
      animalType: '',
      ownerName: '',
      email: '',
      dateArrive: '',
      symptoms: ''
    }), 
    getSelect.selectedIndex = 0
  ]
}

</script>

<template>
  <div class="mx-auto max-w-7xl px-6 lg:px-8 py-6 sm:py-8">
    <Header />
    <div class="md:flex gap-5 mt-8">
      <div class="md:w-1/2">
        <Form 
          v-model:animalName="patientData.animalName"
          v-model:animalType="patientData.animalType"
          v-model:ownerName="patientData.ownerName"
          v-model:email="patientData.email"
          v-model:date="patientData.dateArrive"
          v-model:symptoms="patientData.symptoms"
          @create-new-patient="createNewPatient"
          :animalOptions="animalOptions"
          :id="patientData.id"
        />
      </div>
      <div class="md:w-1/2 rounded mb-10 ">
        
        <div v-if="allPatientsData.length > 0">
          <div class="text-center mb-8">
            <h2 class="text-lime-500 text-2xl uppercase font-semibold">
                Gestion des patients
            </h2>
            <p class="text-lg">Modifier ou supprimer des patients</p>
          </div>
          <div class="overflow-x-scroll md:h-screen">
            <Patient
              v-for="patient in allPatientsData" :key="(patient.id as unknown as number)"
              :patient="patient"
              @update-patient="updatePatient"
              @delete-patient="deletePatient"
            />
          </div>
        </div>
        <div v-else class=" flex justify-center bg-gray-800 p-3 rounded-md">
          <p>Aucun patient existe</p>
        </div>
      </div>
  </div>
  </div>
</template>
