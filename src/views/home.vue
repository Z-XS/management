<template>
    <div>
        <headTop :crumbData="crumbData"/>
    </div>
</template>

<script>
    import headTop from '../components/headTop.vue'
    export default{
        components:{
            headTop
        },
        data() {
            return {
                crumbData: ['项目','但是'] 
            }
        },
    }
</script>