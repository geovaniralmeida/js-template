<template>
    <VueJsonPretty :show-line="false" show-length :show-double-quotes="false" show-icon></VueJsonPretty>
</template>

<script lang="ts" setup>
    import VueJsonPretty from 'vue-json-pretty';
    import 'vue-json-pretty/lib/styles.css';
</script>