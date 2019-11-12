import Vue from "vue";
window.axios=require('axios');
new Vue({
    el: '#app',
     components: {

     },
    mounted:function(){
        axios.get('https://jsonplaceholder.typicode.com/todos/1/posts')
            .then(response=>this.posts=response.data)
            .catch(err=>this.posts=[{title:'no posts found'}])
            .finally(console.log('request processed'))
    },
    data: {
        posts:null
     },
});