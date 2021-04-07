function initVue(){
    new Vue({
    el:'#app',
    data:{
        'text': 'Alter Carousel Vue',
        'img': ['img/cabin.png', 'img/cake.png', 'img/game.png', 'img/circus.png'],
        'activeImg': 0,
        'clock': ''
    },
    methods:{
        nextImg: function(){
            this.activeImg++;
            if (this.activeImg == this.img.length){
                this.activeImg = 0;
            }
        },
        prevImg: function(){
            this.activeImg--;
            if (this.activeImg < 0){
                this.activeImg = this.img.length -1;
            }
        }
    }
    })
}


function init() {
    initVue();
}
$(init)