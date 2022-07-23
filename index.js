function newImage(src, position, left, bottom){
    let thing = document.createElement('img');
    thing.src = src;
    thing.style.position = position;
    thing.style.left = left;
    thing.style.bottom = bottom;
    document.body.append(thing);

    return thing;
}

function newItem(src, position, left, bottom) {
    let img = newImage(src, position, left, bottom);

    img.addEventListener('dblclick', function(){
        img.remove()})
}
let horizon = window.innerHeight / 1.75
let heightOfSky = window.innerHeight-horizon
let heightOfGrass = horizon

tile('assets/sky.png', 0, horizon, window.innerWidth/100, heightOfSky/100)
tile('assets/grass.png', 0, 0, window.innerWidth/100, heightOfGrass/100)


newImage('assets/green-character.gif', 'fixed', '100px', '100px');
newImage('assets/pine-tree.png', 'fixed', '450px', '200px');
newImage('assets/tree.png', 'fixed', '200px', '300px');
newImage('assets/pillar.png', 'fixed', '350px', '100px');
newImage('assets/crate.png', 'fixed', '150px', '200px');
newImage('assets/well.png', 'fixed', '500px', '425px');

newItem('assets/sheild.png', 'fixed', '165px', '185px');
newItem('assets/staff.png', 'fixed', '600px', '100px');
newItem('assets/sword.png', 'fixed', '500px', '405px');

// the spelling for sheild.png is wrong in the activity page 


