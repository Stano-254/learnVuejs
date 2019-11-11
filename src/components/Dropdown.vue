<template>
    <div>
    <label for="dropdown">Item</label><select name="dropdown" id="dropdown" v-model="selectedOption"  v-on:change="optionChanged">
   <option value="null"disabled>please select an option</option>
   <option value="option 1">option 1</option>
   <option value="option 2">option 2</option>
   <option value="option 3">option 3</option>
   <option value="option 4">option 4</option>
    </select>
    </div>
</template>

<script>
    export default {
        name: "Dropdown",
        data:function(){
            return {
                selectedOption : null,
            }
        },
        methods:{
            optionChanged:function (value) {
                // alert(value.toString());
              this.$emit('update:option',this.selectedOption)


            }
        }
    }
</script>

<style scoped>

</style>