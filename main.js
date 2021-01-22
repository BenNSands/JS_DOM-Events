/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this" */
var ele1 = document.getElementById("node1");
ele1.innerHTML = 'I used the getElementById("node1") method to access this';

// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
var ele2 = document.getElementsByClassName("node2");
ele2[0].innerHTML = 'I used the getElementsByClassName("node2") method to access this';

// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
var ele3 = document.getElementsByTagName("h3");
ele3[0].innerHTML = 'I used the getElementsByTagName("h3") method to access all of these';
ele3[1].innerHTML = 'I used the getElementsByTagName("h3") method to access all of these';
ele3[2].innerHTML = 'I used the getElementsByTagName("h3") method to access all of these';



/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a text node using this element.createElement() and put this text inside "This node was created using the createElement() method"
// TODO: Append the created node to the parent node using the element.appendChild() method
var p = document.createElement("p");
var div = document.getElementById("parent");
var text = document.createTextNode("This node was created using the createElement() method");
p.appendChild(text);
div.appendChild(p);



// TODO: Create a text node using this element.createTextNode() and put this text inside "This node was created using the createTextNode() method"
// TODO: Insert the created text node after the parent but before the one you just created using the element.insertBefore() method

var text2 = document.createTextNode("This node was created using the createTextNode() method");
div.insertBefore(text2, p);
/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

var newP = document.createElement("p");
var newNode = document.createTextNode("New Child Node");
newP.appendChild(newNode);

var par = document.getElementById("P1");
var chi = document.getElementById("N1");
par.replaceChild(newP, chi);
par.removeChild(newP);

// TODO: Replace the "Child Node" with the "New Child Node"
// TODO: Remove the "New Child Node"

/*----------- Exercise #4: ANIMATIONS ----------- */
var posX = 0;
var posY = 150;
var box = document.getElementById("box");
var t = setInterval(move, 10);

function move(){
    if(posX < 150 && posY == 150){
        posX ++;
        box.style.left = posX+"px";
    }
    if(posX == 150 && posY > 0){
        posY--;
        box.style.bottom = posY+"px";
    }
    if(posX > 0 && posY == 0 ){
        posX--;
        box.style.left = posX+"px";
    }
    if(posX == 0 && posY < 150){
        posY++;
        box.style.bottom = posY+"px";
    }
    
}
// TODO: Write your JavaScript here to make the red box go from right to left
// BONUS - Make the red box go all the way around the perimeter of the green box */

/*----------- Exercise #5: DOM EVENTS --------------*/

function show(){
    alert("Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user")
}
// TODO: write a function called "show" which alerts the user this message -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"

