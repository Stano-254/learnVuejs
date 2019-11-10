import Vue from "vue";
import Accordion from "./components/Accordion.vue";
new Vue({
    el: '#app',
    components: {
        Accordion,
    },
    data: {

        items: [
            {id:1,  title: 'Title 1', description: 'this is description for heading 1'},
            {id:2, title: 'Title 3', description: 'this is description for heading 3'},{title: 'Title 1', description: 'this is description for heading 1'},
            {id:3, title: 'Title 2', description: 'this is description for heading 2'},
            {id:5, title: 'Title 3', description: 'this is description for heading 3'},{title: 'Title 1', description: 'this is description for heading 1'},
            {id:6, title: 'Title 2', description: 'this is description for heading 2'},
            {id:7, title: 'Title 3', description: 'this is description for heading 3'},
        ]
    }
});