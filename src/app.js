import Vue from "vue";
import Accordion from "./components/Accordion.vue";
import List from "./components/List";
new Vue({
    el: '#app',
    components: {
        Accordion,
        List,
    },
    data: {

        items: [
            {id:1,  title: 'Title 1', description: 'this is description for heading 1'},
            {id:2, title: 'Title 3', description: 'this is description for heading 3'},            {id:5, title: 'Title 3', description: 'this is description for heading 3'},{title: 'Title 1', description: 'this is description for heading 1'},
            {id:6, title: 'Title 2', description: 'this is description for heading 2'},
            {id:7, title: 'Title 3', description: 'this is description for heading 3'},
        ]
    }
});