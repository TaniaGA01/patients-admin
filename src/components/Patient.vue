<script setup lang="ts">
import { PencilSquareIcon, TrashIcon } from "@heroicons/vue/20/solid";
import { DataI } from '../services/interfaces/form.interfaces'

defineProps<{
    patient:DataI
}>()

defineEmits([
    'update-patient',
    'delete-patient'
    ])
</script>
<template>
    <div class="bg-gray-800 shadow-xl rounded p-5 mb-10 text-white ">
        <div class=" flex justify-end">
            <button 
                type="button"
                class="block w-fit hover:text-blue-500 text-white font-bold uppercase rounded-lg"
                @click="$emit('update-patient', patient.id)"
            >
                <PencilSquareIcon class="h-6" />
            </button>
        </div>
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
        <hr class="my-5">
        <div class="grid md:grid-cols-2 gap-5">
            <button 
                type="button"
                class="block w-fit hover:text-red-700 text-white font-bold uppercase rounded-lg"
                @click="$emit('delete-patient', patient.id)"
            >
                <TrashIcon class="h-6" />
            </button>
        </div>
    </div>
</template>