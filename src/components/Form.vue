<script setup lang="ts">
import { ref } from 'vue';
interface animal{
    id:number;
    text:string;
    value:number|null;
}
const animalOptions = ref<animal[]>([
    {id:0,text: 'Choissisez un type d\'animal', value: null},
    {id:1,text: 'Chien', value: 1},
    {id:2,text: 'Chat', value: 2},
    {id:3,text: 'Oiseau', value: 3},
    {id:4,text: 'Poisson', value: 4},
    {id:5,text: 'Rongeur', value: 4},
  ])
</script>
<template>
    <div class="md:flex mt-8">
        <div class="md:w-1/2 text-center bg-gray-800 shadow-xl rounded p-5 mb-10">
            <div class="text-center mb-8">
                <h2 class="text-lime-500 text-2xl uppercase font-semibold">
                    Suivie des patients
                </h2>
                <p class="text-lg">Ajout et gestion de patients</p>
            </div>
            <form class="text-left">
                <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <label for="animal" class="block text-sm font-semibold leading-6 text-white ml-3 uppercase mb-2">
                            Nom de l'animal
                        </label>
                        <input 
                            id="animal" 
                            type="text" 
                            name="animal"
                            placeholder="Nom de l'animal"
                            autocomplete="animal" 
                            class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-lime-500 sm:text-sm sm:leading-6 placeholder-gray-500" 
                        />
                    </div>
                    <div>
                        <label for="animal-type" class="block text-sm font-semibold leading-6 text-white ml-3 uppercase mb-2">
                            Type d'animal
                        </label>
                        <select
                            id="anymal-type"
                            name="anymal-type"
                            autocomplete="anymal-type"
                            class="min-w-0 flex-auto rounded-md h-10 border-0 bg-white/30 px-3.5 py-2 text-white/80 shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6 w-full uppercase">
                            <option v-for="animal in animalOptions" :key="animal.id" :value="animal" class="text-slate-800">
                                {{ animal.text }}
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
                            class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-lime-500 sm:text-sm sm:leading-6 placeholder-gray-500" 
                        />
                    </div>
                </div>
                <div class="mt-5 flex justify-center">
                        <button type="submit" class="rounded-md bg-lime-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-lime-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-500">Enregistrer</button>
                    </div>
            </form>
        </div>
    </div>
</template>