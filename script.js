function onload(){
document.getElementById("plength").oninput = function() {
  document.getElementById("prange").innerHTML = "Length in pages: 0 to "+this.value;
}
parseform()
}
function parseform(){
    l=document.getElementById('plength').value;
    s=document.getElementById('search').value
    options=document.getElementsByClassName("themes");
    t=[];
    for (const obj of options){
        if (obj.checked){t.push(obj.id)}
    }
    //console.log(l,t);
    generate(filter(l,t,s));
    
}
function filter(l,t,s){
    var arr=[]
    searched_col=search(s)
    for (const obj of searched_col){
        if ((obj.length_pages<=l )&& (obj.themes.some(item => t.includes(item)))){
            arr.push(obj)
        }
    }
    console.log(arr)
    return arr
}
function generate(books){
    txt="<tr><th>Title</th><th>Artist(s)</th><th>Length</th><th>Themes</th></tr>"
    for (const obj of books){
        txt+= "<tr><td><a href='" + obj.link + "'>"+ obj.title+"</a></td><td>" + obj.author + "</td><td>" +  obj.length_pages + "</td><td>" + obj.themes + "</td>"
    }
    document.getElementById("table").innerHTML=txt
}
function search(string){
    if (string==""){
        return collection;
    }
    var arr=[]
    for (const obj of collection){
        if ((obj.title.includes(capitalize(string)))||(obj.author.includes(capitalize(string)))){
            arr.push(obj);
            continue
        }
        else {
            for (const theme of obj.themes){
                if (theme.includes(capitalize(string))){
                    arr.push(obj);
                    continue;
                }
            }
        }
        if ((obj.title.includes((string)))||(obj.author.includes((string)))){
            arr.push(obj);
        }
        else {
            for (const theme of obj.themes){
                if (theme.includes((string))){
                    arr.push(obj);
                    continue;
                }
            }
        }
    }
    return arr
}
function capitalize(word){
    return word.charAt(0).toUpperCase()
  + word.slice(1)
}

function clearfilters(){
    for (const obj of document.getElementsByClassName("themes")){
        obj.checked=false
    }
}
function checkfilters(){
    for (const obj of document.getElementsByClassName("themes")){
        obj.checked=true
    }
}
