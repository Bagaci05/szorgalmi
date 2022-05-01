let items = []
function additem() {
  let item = document.getElementById("itemtoadd").value
  items.push(item)
  showdelbuttons()
}
function alertall(){
 let text = "Items: "
 for(let i = 0; i < items.length; i++){
   text += items[i] + ", "
 }  
 alert(text)
}
function deleteItem(i){
  items.splice(i, 1)
  showdelbuttons()
}
function showdelbuttons(){
    let buttons = "";
    for(let i = 0; i < items.length; i++){
      buttons += `<button onclick='deleteItem(${i})'>Delete ${items[i]}</button>`
    }
    document.getElementById("buttons").innerHTML = buttons;
}