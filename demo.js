//var items=document.getElementsByClassName("list-group-item");
//items[2].style.backgroundColor='green';
//for(var i=0;i<items.length;i++)
//{
   // items[i].style.fontWeight='bold';
//}
// in get elements by class name all the elements with the same class name are selected irrespective of the same element.
//GETELEMENTSBYTAGNAME this method is also a selector but it gives the elements based on their name but not class
var items=document.getElementsByTagName("li");
items[2].style.backgroundColor='green';
for(var i=0;i<items.length;i++)
{
    items[i].style.fontWeight='bold';
}