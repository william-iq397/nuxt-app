<template>
    <div>
        <NuxtLink to="/login">go to auth</NuxtLink> 
        <p> {{ pb.authStore.record ? pb.authStore.record : "user not logged in" }} </p>
    </div>
</template>
  
<script setup>
import pb from '~/pocketbase';

</script>

  