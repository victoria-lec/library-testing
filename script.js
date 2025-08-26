function onload(){
document.getElementById("plength").oninput = function() {
  document.getElementById("prange").innerHTML = "Length in pages: 0 to "+this.value;
}
document.getElementById("tlength").oninput = function() {
  document.getElementById("trange").innerHTML = "Length in minutes: 0 to "+this.value;
}
parseform()
}
function parseform(){
    l=document.getElementById('plength').value;
    options=document.getElementsByClassName("themes");
    t=[];
    for (const obj of options){
        if (obj.checked){t.push(obj.id)}
    }
    console.log(l,t);
    generate(filter(l,t));
    
}
function filter(l,t){
    arr=[]
    for (const obj of collection){
        if ((obj.length_pages<=l )&& (obj.themes.some(item => t.includes(item)))){
            arr.push(obj)
        }
    }
    console.log(arr)
    return arr
}
function generate(books){
    txt="<tr><th>Title</th><th>Length</th><th>Themes</th></tr>"
    for (const obj of books){
        txt+= "<tr><td><a href='" + obj.link + "'>"+ obj.title+"</td><td>" + obj.length_pages + "</td><td>" + obj.themes + "</td>"
    }
    document.getElementById("table").innerHTML=txt
}