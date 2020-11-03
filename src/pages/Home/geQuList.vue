<template>
   <div>
       <div class="box1">
           {{a}}11111 
       </div>
   </div>
</template>

<script>

props:['a']
export default {
    data(){
        return{
         xiangQingList:[],
         a:''
        }
    },
    methods: {
          
    },
    mounted() {
     this.xiangQing()
     
    },
}
</script>

<style scoped>

</style>