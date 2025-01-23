<template>
    <div class="spinner-loader">
        <div class="spinner-circle"></div>
    </div>
</template>

<style scoped>
.spinner-loader {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Adjust as needed */
}

.spinner-circle {
    width: 40px;
    height: 40px;
    border: 4px solid #e0e0e0; /* Base color */
    border-top: 4px solid #3498db; /* Accent color */
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
