class Scene00 extends Phaser.Scene {
    constructor() {
        super({key: "Scene00"});
    };

    preload() {
        this.load.image('bntComecar', 'assets/C0/bntComecar.jpeg');
        this.load.image('bg', 'assets/C0/bg00.png');
        this.load.image('bgMontanha', 'assets/C0/bg01.png');
        this.load.image('bgMaquina', 'assets/C0/bg02.png');
        this.load.image('bgSorvete', 'assets/C0/bg03.png');
    }


    create() {
        this.createParallax(4, 'bg', 0);
        this.createParallax(4, 'bgMontanha', 0.2);
        this.createParallax(4, 'bgMaquina', 0.4);
        this.createParallax(4, 'bgSorvete', 0);
        this.pressBotao('bntComecar');
        this.add.text(210, 130, 'UNILEVEL', {fill: '#000000', fontSize: '100px', setFontFamily: 'Baloo Bhai 2 ExtraBold', strokeThickness: 6})
    }

    pressBotao(image) {
        let bnt = this.add.image(450, 400, image);
        bnt.setInteractive();

        bnt.on('pointerover', () => {
            bnt.setScale(1.1)
        });

        bnt.on('pointerout', () => {
            bnt.setScale(1)
        });

        bnt.on('pointerdown', () => {
            this.scene.stop('Scene00'),
            this.scene.start('Scene01')
        })
    };

    createParallax(count, bg , scrollFactor) {
        let x = 0;
        for (let i =0; i < count; ++i) {
            const scene = this.add.image(x, 600, bg).setOrigin(0,1).setScrollFactor(scrollFactor)
            x += 900
        }
    }
};
