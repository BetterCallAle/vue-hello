const {createApp} = Vue;

createApp({
    data(){
        return {
            userName: "",
            greetingsMessage: "",
            image: "",
            alt: ""
        }
    },
    methods: {
        stampGreetings: function(){
            this.greetingsMessage = `BEEEELANDIIII! Ciao, ${this.userName}!`
            this.image = "img/gabibbo.jpg"
            this.alt = "Immagine del Gabibbo"
            this.userName = ""
        }
    }
}).mount("#app");