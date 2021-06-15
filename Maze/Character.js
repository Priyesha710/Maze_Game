class CharacterForm {
    constructor() {
        this.button1 = createButton("c1");
        this.button2 = createButton("c2");
        this.button3 = createButton("c3");
        this.button4 = createButton("c4");
    }

    display() {

        this.button1.position(250, 300);
        this.button1.mousePressed(() => {
            this.button1.hide();
            this.button2.hide();
            this.button3.hide();
            this.button4.hide();
            gameState = 2;
            playerObj.character = "ch1";
        });

        this.button2.position(300, 300);
        this.button2.mousePressed(() => {
            gameState = 2;
            playerObj.character = "ch2";
            this.button1.hide();
            this.button2.hide();
            this.button3.hide();
            this.button4.hide();
        });

        this.button3.position(350, 300);
        this.button3.mousePressed(() => {
            gameState = 2;
            playerObj.character = "ch3";
            this.button1.hide();
            this.button2.hide();
            this.button3.hide();
            this.button4.hide();
        });

        this.button4.position(400, 300);
        this.button4.mousePressed(() => {
            gameState = 2;
            playerObj.character = "ch4";
            this.button1.hide();
            this.button2.hide();
            this.button3.hide();
            this.button4.hide();
        });
    }

    hide() {
        console.log("hidden");
        this.button1.hide();
        this.button2.hide();
        this.button3.hide();
        this.button4.hide();
    }
}