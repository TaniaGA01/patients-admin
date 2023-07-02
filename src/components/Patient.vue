<script setup lang="ts">
import { DataI } from '../services/interfaces/form.interfaces'

defineProps<{
    patient:DataI
}>()

defineEmits(['update-patient'])
</script>
<template>
    <div class="bg-gray-800 shadow-xl rounded p-5 mb-10 text-white ">
        <p class="font-bold mb-3 uppercase text-gray-500">ID :
            <span class="font-normal normal-case text-white">
                {{ patient.id }}
            </span>
        </p>

        <p class="font-bold mb-3 uppercase text-gray-500">Nom de l'animal :
            <span class="font-normal normal-case text-white">
            {{ patient.animalName }}
            </span>
        </p>

        <p class="font-bold mb-3 uppercase text-gray-500">
            Type d'animal : 
            <span class="font-normal normal-case text-white">
            {{ patient.animalType }}
            </span>
        </p>

        <p class="font-bold mb-3 uppercase text-gray-500">
            Nom du propriètaire : 
            <span class="font-normal normal-case text-white">
            {{ patient.ownerName }}
            </span>
        </p>

        <p class="font-bold mb-3 uppercase text-gray-500">
            Email :
            <span class="font-normal normal-case text-white">
            {{ patient.email }}
            </span>
        </p>

        <p class="font-bold mb-3 uppercase text-gray-500">
            Date d'arrivé :
            <span class="font-normal normal-case text-white">
            {{ patient.dateArrive }}
            </span>
        </p>
        <p class="font-bold mb-3 uppercase text-gray-500">
            Symptômes :
            <span class="font-normal normal-case text-white">
            {{ patient.symptoms }}
            </span>
        </p>

        <div class="grid md:grid-cols-2 gap-5 mt-10 ">
            <button 
                type="button"
                class="block w-full py-2 px-10 bg-lime-600 hover:bg-lime-700 text-white font-bold uppercase rounded-lg"
                @click="$emit('update-patient', patient.id)"
            >
                Modifier
            </button>

            <button 
                type="button"
                class="block w-full py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
            >Supprimer</button>
        </div>
    </div>
</template>