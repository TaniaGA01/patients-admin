<script setup lang="ts">
import Alert from './Alert.vue'
import { computed, reactive } from 'vue';
import { AlertI, AnimalTypeI } from '../services/interfaces/form.interfaces'

const alert = reactive<AlertI>({
    type:'',
    message:''
})

const props = defineProps<{
    id:string | null
    animalName:string
    animalType:string
    ownerName:string
    email:string
    date:string
    symptoms:string
    animalOptions:AnimalTypeI[]
}>()

const emit = defineEmits([
    "update:animalName", // 'update' comes from v-model in Form of App.vue
    "update:animal-type",
    "update:ownerName",
    "update:email",
    "update:date",
    "update:symptoms",
    "create-new-patient",

])

const save = () => {
    //form validation
    if(Object.values(props).includes('')){
        alert.message = "Merci de remplir tous le champs"
        alert.type = "error"
        return
    }
    emit('create-new-patient')
    alert.message = "Le patient a bien été créé"
    alert.type = 'success'

    setTimeout(() => {
        Object.assign(alert, {
            type:'',
            message:''
        })
    }, 2000)
}


const editing = computed(() => {
    return props.id
})


</script>
<template>
    <div class="text-center mb-8">
        <h2 class="text-lime-500 text-2xl uppercase font-semibold">
            Suivie des patients
        </h2>
        <p class="text-lg">Ajout et gestion de patients</p>
    </div>
    <div class="text-center bg-gray-800 shadow-xl rounded p-5 mb-10">
        <form @submit.prevent="save" class="text-left">
            <Alert 
            v-if="alert.message"
            :alert="alert"/>
            <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                    <label for="animalName" class="block text-sm font-semibold leading-6 text-white ml-3 uppercase mb-2">
                        Nom de l'animal
                    </label>
                    <input 
                        id="animalName" 
                        type="text" 
                        name="animalName"
                        placeholder="Nom de l'animal"
                        autocomplete="animalName" 
                        :value="animalName"
                        @input="$emit('update:animalName', $event.target?.value)"
                        class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-lime-500 sm:text-sm sm:leading-6 placeholder-gray-500" 
                    />
                </div>
                <div>
                    <label for="animal-type" class="block text-sm font-semibold leading-6 text-white ml-3 uppercase mb-2">
                        Type d'animal
                    </label>
                    <select
                        id="animal-type"
                        name="animal-type"
                        autocomplete="animal-type"
                        @input="$emit('update:animal-type', $event.target?.value)"
                        class="min-w-0 flex-auto rounded-md h-10 border-0 bg-white/30 px-3.5 py-2 text-white/80 shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6 w-full uppercase">
                        <option selected>Choissisez un type d'animal</option>
                        <option 
                            v-for="type in animalOptions" 
                            :key="type.id" 
                            :value="type.text"
                            class="text-slate-800">
                            {{ type.text }}
                        </option>
                    </select>
                </div>
                <div>
                    <label for="owner-name" class="block text-sm font-semibold leading-6 text-white ml-3 uppercase mb-2">
                        Nom du propriètaire
                    </label>
                        <input 
                            id="owner-name" 
                            type="text" 
                            name="owner-name"
                            placeholder="Nom du propriètaire"
                            autocomplete="owner-name"
                            :value="ownerName" 
                            @input="$emit('update:ownerName', $event.target?.value)"
                            class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-lime-500 sm:text-sm sm:leading-6 placeholder-gray-500" 
                        />
                </div>
                <div>
                    <label for="email" class="block text-sm font-semibold leading-6 text-white ml-3 uppercase mb-2">
                        Adresse mail
                    </label>
                    <input 
                        id="email" 
                        type="email" 
                        name="email"
                        placeholder="Adresse mail"
                        autocomplete="email"
                        :value="email"  
                        @input="$emit('update:email', $event.target?.value)"
                        class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-lime-500 sm:text-sm sm:leading-6 placeholder-gray-500" 
                    />
                </div>
                <div>
                    <label for="date-arrive" class="block text-sm font-semibold leading-6 text-white ml-3 uppercase mb-2">
                        Date d'arrivée
                    </label>
                    <input 
                        id="date-arrive" 
                        type="date" 
                        name="date-arrive"
                        autocomplete="date" 
                        :value="date" 
                        @input="$emit('update:date', $event.target?.value)"
                        class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-lime-500 sm:text-sm sm:leading-6 placeholder-gray-500" 
                    />
                </div>
                <div class="sm:col-span-2">
                    <label for="symptoms" class="block text-sm font-semibold leading-6 text-white ml-3 uppercase mb-2">
                    Symptômes
                    </label>
                    <textarea 
                        id="symptoms"
                        name="symptoms"
                        placeholder="Description des symptômes" 
                        :value="symptoms"
                        @input="$emit('update:symptoms', $event.target?.value)"
                        class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-lime-500 sm:text-sm sm:leading-6 placeholder-gray-500" 
                    />
                </div>
            </div>
            <div class="mt-5 flex justify-center">
                    <button 
                        type="submit" 
                        class="rounded-md bg-lime-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-lime-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-500">
                        {{ editing ? 'Modifier patiente' : 'Enregistrer nouveau patiente' }}
                    </button>
                </div>
        </form>
    </div>
</template>