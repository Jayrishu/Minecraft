var canvas = new fabric.Canvas("myCanvas");
block_height = 60;
block_width = 60;
block_x = 10
block_y = 10
player_x = 10;
player_y = 10;
var player_img = "";
var block_img = "";
function add_player(){
    fabric.Image.fromURL("player.png", function(Img){
       player_img = Img;
       player_img.scaleToWidth(150);
       player_img.scaleToHeight(150);
       player_img.set({
           top:player_y,left:player_x

       });
       canvas.add(player_img);

    })
}
function add_block(getImage){
    fabric.Image.fromURL(getImage, function(Img){
       block_img = Img;
       block_img.scaleToWidth(block_width);
       block_img.scaleToHeight(block_height);
       block_img.set({
           top:block_y,left:block_x

       });
       canvas.add(block_img);
       
    })
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == "80" && e.shiftKey == true){
        console.log("shift+p");
        block_height = block_height + 10;
        block_width = block_width + 10;
        document.getElementById("width").innerHTML = block_width;
        document.getElementById("height").innerHTML = block_height;
    }
    if (keyPressed == "77" && e.shiftKey == true){
        console.log("shift+m");
        block_height = block_height - 10;
        block_width = block_width - 10;
        document.getElementById("width").innerHTML = block_width;
        document.getElementById("height").innerHTML = block_height;
    }
    if (keyPressed == "84"){
        add_block("trunk.jpg");
        console.log("t");
    }
    if (keyPressed == "67"){
        add_block("cloud.jpg");
        console.log("c");
    }
    if (keyPressed == "68"){
        add_block("dark_green.png");
        console.log("d");
    }
    if (keyPressed == "71"){
        add_block("ground.png");
        console.log("g");
    }
    if (keyPressed == "76"){
        add_block("light_green.png");
        console.log("l");
    }
    if (keyPressed == "82"){
        add_block("roof.jpg");
        console.log("r");
    }
    if (keyPressed == "85"){
        add_block("unique.png");
        console.log("u");
    }
    if (keyPressed == "87"){
        add_block("wall.jpg");
        console.log("w");
    }
    if (keyPressed == "89"){
        add_block("yellow_wall.png");
        console.log("y");
    }
    if (keyPressed == "37"){
        left();
        console.log("left")
    }
    if (keyPressed == "38"){
        up();
        console.log("up")
    }
    if (keyPressed == "39"){
        right();
        console.log("right")
    }
    if (keyPressed == "40"){
        down();
        console.log("down")
    }
    }
    function up(){
        if(player_y >= 0){
            player_y = player_y - block_height;
            console.log(block_height);
            console.log(player_x +"," + player_y);
            canvas.remove(player_img);
            add_player();

        }  
}
function down(){
    if(player_y <= 450){
        player_y = player_y + block_height;
        console.log(block_height);
        console.log(player_x +"," + player_y);
        canvas.remove(player_img);
        add_player();

    }  
}
function left(){
    if(player_x >= 0){
        player_x = player_x - block_height;
        console.log(block_height);
        console.log(player_x +"," + player_y);
        canvas.remove(player_img);
        add_player();

    }  
}
function right(){
    if(player_x <= 850){
        player_x = player_x + block_height;
        console.log(block_height);
        console.log(player_x +"," + player_y);
        canvas.remove(player_img);
        add_player();

    }  
}
