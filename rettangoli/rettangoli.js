
function disegna(){
    let c = document.getElementById('lavagna');
    let ctx = c.getContext("2d"); //acquisisco il contesto
    ctx.beginPath(); //consente di avviare il disegno di un nuovo elemento

    let x = event.clientX;
    let y = event.clientY;
    let width = Math.floor(Math.random() * 400) + 50 ;
    let heigth = Math.floor(Math.random() * 400) + 50 ;
     ctx.rect(x,y, width,heigth);   // crea il rettangolo
     ctx.fillStyle= randomColor();
     ctx.fill();  //  riempe il rettangolo

}


//funzione che genera colori casuali
function randomColor() {
    let hex = '0123456789ABC'.split('');
    let color = '#';
    for (i = 0; i < 6; i++) {
        color = color + hex[Math.floor(Math.random() * 13)];
    }
    return color;
}