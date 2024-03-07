//definindo as variaveis usadas no resto desse programa
var exclamacao;
var player;
var playernoChao; 
var teclado; 
var chao; 
var balaoTxt;
var texto;
var telaPiscando;
    
class Scene01 extends Phaser.Scene{
    constructor(){
        super({key: "Scene01"});
    };
     //imagens
    preload(){
        this.load.image('bg1', 'assets/C1/bg1.png');
        this.load.spritesheet('player', 'assets/ursofofo.png', { frameWidth: 383, frameHeight: 255 });
        this.load.image('exclamacao','assets/C1/exclamaçao.png');
        this.load.image('chao1','assets/C1/chao1.jpeg');
        this.load.image('balaoimagem', 'assets/C1/balão_escrita.png')
        this.load.spritesheet('telaPiscando', 'assets/telapiscando.png', {frameWidth: 900, frameHeight: 600})
    };
     
    create(){   
       teclado = this.input.keyboard.createCursorKeys();
       
        //adiciona o plano de fundo
        this.add.image(450,300, 'bg1');
       
        //adiciona o objeto exclamação
        exclamacao = this.physics.add.staticImage(700,290,'exclamacao').setSize(100,600).setScale(0.3);
        
        //adiciona o balão de texto
        balaoTxt = this.physics.add.staticImage(550,260,'balaoimagem').setScale(0.5).setSize(1,1).setFlip(true).setVisible(false);
    
        //criando jogador, fazendo ele colidir com as bordas e suas sprites passarem
        player = this.physics.add.sprite(200,450,'player').setSize(120,150);
        player.setCollideWorldBounds(true);
        this.anims.create({
            key: 'andar',
            frames: this.anims.generateFrameNumbers('player', { start:0, end:1 }),
            frameRate: 8,
            repeat: -1
        });       

        this.anims.create({
            key: 'piscar',
            frames: this.anims.generateFrameNumbers('telaPiscando', {start:0, end: 2}),
            frameRate: 3,
            repeat: -1,
        });
        //balão de fala do hacker
        //texto = this.add.text(460, 230, 'bom dia', {fontSize:'35px', fill:'#000000'}).setVisible(false);
        
        //colisão da exclamção e do player, leva para mudança de tela
        this.physics.add.overlap(player, exclamacao, () => {
            //exclamacao.setVisible(false);
            //balaoTxt.setVisible(true);
            //texto.setVisible(true);
            telaPiscando = this.physics.add.sprite(0,0,'telaPiscando').setOrigin(0,0);
            telaPiscando.anims.play('piscar');
        
            
            this.scene.stop('Scene01');
            this.scene.start('Scene02');
        });
        //adiciona o chão onde o player vai andar
        chao = this.physics.add.staticImage(450, 575, 'chao1');
        //indentifica que o player tocou o chão
        this.physics.add.collider(player, chao, function(){
            playernoChao = true
        });
       
    };
    
    update(){
       //movimento na horizontal
        if(teclado.left.isDown && teclado.right.isDown){
                //quando as duas teclas são pressionada, o player para
                player.setVelocityX(0);
            //anda pra esquerda
            }else if(teclado.left.isDown){        
                player.setFlip(true);     
                player.setVelocityX(-300);
                player.anims.play('andar', true);
            //anda pra direita
            }else if (teclado.right.isDown){                  
                player.setFlip(false);
                player.setVelocityX(300);
                player.anims.play('andar', true);
            }else{
                //quando nenhuma tecla eh pressionada, o player para
                player.setVelocityX(0);
                player.anims.play('andar', false);
            };
        //pular quando o botão pra cima está apertado e ele está no chão
        if(teclado.up.isDown && playernoChao == true){
            player.setVelocityY(-200);
            player.anims.play('andar', true);
            playernoChao = false;  
            }
        };
};