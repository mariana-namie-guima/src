var bnt1;
var bnt2;
var bnt3;
var bnt4;

class SceneQuiz extends Phaser.Scene {
    constructor() {
        super({key: "SceneQuiz"})
    }

    preload(){
        this.load.image('bntPergunta', 'assets/C_pergunta/bntPergunta.jpeg');
    }

    create() {
        this.cameras.main.setBackgroundColor("#000000");
        bnt1 = this.add.image(225, 400, 'bntPergunta').setInteractive();
        bnt2 = this.add.image(675, 400, 'bntPergunta').setInteractive();
        bnt3 = this.add.image(225, 525, 'bntPergunta').setInteractive();
        bnt4 = this.add.image(675, 525, 'bntPergunta').setInteractive();

        this.responder(bnt1, bnt2, bnt3, bnt4);
        this.bntAffordance(bnt1);
        this.bntAffordance(bnt2);
        this.bntAffordance(bnt3);
        this.bntAffordance(bnt4);
    }

    responder(bntCerto, bntErrado1, bntErrado2, bntErrado3) {
        bntCerto.on('pointerdown', () => {
            this.scene.stop('SceneQuiz');
            this.scene.start('SceneAcerto');
        })

        bntErrado1.on('pointerdown', () => {
            this.scene.stop('SceneQuiz');
            this.scene.start('SceneErro');
        })

        bntErrado2.on('pointerdown', () => {
            this.scene.stop('SceneQuiz');
            this.scene.start('SceneErro');
        })

        bntErrado3.on('pointerdown', () => {
            this.scene.stop('SceneQuiz');
            this.scene.start('SceneErro');
        })
    }

    bntAffordance(bnt) {
        bnt.on('pointerover', () => {
            bnt.setScale(1.05);
        })

        bnt.on('pointerout', () => {
            bnt.setScale(1);
        })
    }
}