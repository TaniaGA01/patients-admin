<script setup lang="ts">
import { AlertI } from '../services/interfaces/form.interfaces'
defineProps<{
    alert:AlertI
}>()
</script>
<template>
    <div 
        :class="[alert.type === 'error' ? 'bg-red-500' : 'bg-green-500', 'text-white p-2 uppercase font-semibold rounded-md mb-4']">
        <span>{{ alert.message }}</span>
    </div>
</template>