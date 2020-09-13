const app = new Vue({
    el:"#app",
    data: {
        message: 'Hello Vue!',
        list_item: [],
        list: "",
    },
    methods: {
        add_item: function(){
            if(this.item != ""){
            this.list_item.push(this.item)
            this.item="";
        }
        }
    }
})