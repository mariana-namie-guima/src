class SceneAcerto extends Phaser.Scene {
    constructor() {
        super({key: "SceneAcerto"})
    }

    create() {
        this.cameras.main.setBackgroundColor("#00ff3b");
        console.log('acerto')
        
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
                this.scene.stop('Scene00'),
                this.scene.start('Scene01');
            })
    }
}