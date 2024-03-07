class SceneErro extends Phaser.Scene {
    constructor() {
        super({key: "SceneErro"})
    }

    preload(){
        this.load.image('bntVoltar', 'assets/C_gameOver/bntVoltar.jpeg')
    }

    create() {
        this.cameras.main.setBackgroundColor("#ff544f");
        console.log('erro');
        this.pressBotao('bntVoltar');
    }


    
    pressBotao(image){
        let bnt = this.add.image(450, 450, image);
            bnt.setInteractive();

            bnt.on('pointerover', () => {
                bnt.setScale(1.1);
            })

            bnt.on('pointerout', () => {
                bnt.setScale(1);
            })

            bnt.on('pointerdown', () => {
                this.scene.stop('SceneErro'),
                this.scene.start('SceneQuiz');
            })
    }
}