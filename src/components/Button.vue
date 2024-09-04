<script setup lang="ts">
</script>
<template>
    <button class="button"><slot/></button>
</template>

<style lang="css">
.button {
    padding: 4px 10px 4px 10px;
    border-radius: 6px;
    background: #fbcdcd;
    color:brown;
    border: 1px solid brown
}
.button:hover {
    background: #c49898;
}
</style>