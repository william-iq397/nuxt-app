<template>
    <div v-if="visible" class="modal-container">
        <div class="modal-content">
            <h2 class="modal-title">Confirm Purchase</h2>
            <p>Are you sure you want to buy this item?</p>
            <div class="modal-buttons">
                <button @click="confirm()" class="confirm-button">Confirm</button>
                <button @click="close()" class="cancel-button">Cancel</button>
            </div>
        </div>
    </div>
</template>
  
<script setup>
const { visible, confirm, close } = defineProps(['visible', 'confirm', 'close']);

</script>
  
<style>
/* Styles for the modal */
.modal-container {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    /* Semi-transparent background */
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.modal-title {
    font-size: 24px;
    margin-bottom: 10px;
}

.modal-buttons {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
}

.modal-buttons button {
    padding: 8px 16px;
    margin-left: 8px;
    border-radius: 4px;
    cursor: pointer;
}

.modal-buttons button:first-child {
    margin-left: 0;
}

.modal-buttons .confirm-button {
    background-color: #48bb78;
    color: white;
}

.modal-buttons .cancel-button {
    background-color: #f56565;
    color: white;
}
</style>
  