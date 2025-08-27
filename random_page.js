function rand_jump(){
    const random=Math.floor(Math.random() * collection.length);
    window.location.href=collection[random].link
}