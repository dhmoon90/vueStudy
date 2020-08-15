var app = new Vue({
    el : '#app' ,
    data : {
        message : 'Hello Vue.js' ,
        dhmoon : '문동현' ,
        uid : '10' ,
        flag : true
    },
    methods : {
        clickBtn() {
            console.log("hi");
        },
        clickMessage : function() {
            alert("경고");
        }
    }
});
