class SceneGameOver extends Phaser.Scene{
    constructor(){
        super({key: "SceneGameOver"});
    };

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
                this.scene.stop('Scene00'),
                this.scene.start('Scene01');
            })
    }

    preload() {
        this.load.image('gameOver', 'assets/C_gameOver/bgGameOver.jpeg');
        this.load.image('bntVoltar', 'assets/C_gameOver/bntVoltar.jpeg');
    }

    create() {
        
        this.add.image(0,0, 'gameOver').setOrigin(0,0);
        this.pressBotao('bntVoltar')
    }
}