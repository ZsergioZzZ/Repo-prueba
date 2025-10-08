export class Start extends Phaser.Scene {

    constructor() {
        super('Start');
    }

    preload(){

        this.load.image('fondo', 'assets/fondo.jpg');
        this.load.image('hola', 'assets/holamundo.png')

    }

    create() {


        const W = 800, H = 600;
        this.background = this.add.image(0, 0, 'fondo')
        .setOrigin(0).setDisplaySize(W, H);

        this.add.text(20, 200, 'Hola mundooo!!', { fontSize: '100px', fill: '#FFF' });
        //this.add.image(400, 300, 'hola').setDisplaySize(200,200);


    }

    update() {
    

    }
    
}

