import Vue from "vue";
new Vue({
    el:'#app',
    data: {
        title : 'vue js seem fun',
        items:[
            {title:'Title 1',description:'this is description for heading 1'}            {text:'item2',checked:true},
            {title:'Title 2',description:'this is description for heading 2'}            {text:'item2',checked:true},
            {title:'Title 3',description:'this is description for heading 3'}            {text:'item2',checked:true},
            {text:'item3',checked:false},

            ],
        price:10

    },
    computed: {
        tax:function(){
            return parseFloat(this.price*0.09)
        } ,
        total:function(){
            return parseFloat(this.price) + this.tax
        },

    },
    methods:{
        moneyFormat:function (price) {
            return '$' + price
        }
    }

});
