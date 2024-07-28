//dom stands for document object model
//it is used to access elements of a HTML document using javascript
//there are multiple ways to access
let ele1=document.getElementById("idname");
let ele2=document.getElementsByClassName("classname");//returns an array consisting of all elements in the class
let ele3=document.getElementsByTagName("tagname");//returns an array of all the elements of that tag
//another way to access elements is by using query selector
let ele4=document.querySelector("#idname");//we use just query selector for id name as id is a unique idenctification
//ususally ther are more than one element having same class name and same tag.So, we use queryselectorall
let ele5=document.querySelectorAll(".classname");
let ele6=document.querySelectorAll("tag name");//returns an array
//for modifying HTML elements using DOM
//there are mainly 4 operation or property to modify elements of HTML:innerHTML,outterHTML,innerText,Textcontent
let ele7=ele6.innerHTML;//the 1st step involves extracting that content using any of the above and then use innerHTML to allocate the content inside that specific element \
//now ele7 consists of entire element.
// to modify content we can just do ele7="new content"
let ele8=ele5.innerText;//this property shows the content present inside without any tags and tags having the attribute hiden wont be displayed
//modifying content is similar to innerHTML
let ele9=ele4.outerHTML;//outerHTML property is used to get the entire lement including the parent tags.
//modifying this involves changing the entire element 
//TextContent is the most used and similar to inner text this ignores the HTML tags but doesn't igoner elements with hidden property
let ele10=ele3.textContent;//extracts all text content
//now that we have seen how to access and modify elements in the document, let us try to create and position the elemnt
let ele11=document.createElement('tag name');//used to create an element and the tag name is should be specified
//to add content into the newly created element we use text content
//while using create element property, keep in mind that the elemnt is not yet kept in the document 
//to place the newly created element we use appendchild property which inserts the element at the end of the parent
parentNode.appendChild(ele11);
//as append element doesn't allow us to position the created element, we use the insertadjacentelement
targetelement.insertAdjacentElement(position,element_to_be_inserted);//position are of four types beforebegin,afterbegin,beforeend,afterend
//for Manipulation of CSS using java script
//the style method allows us to modify and change one property at a time
// Accessing an element
const element = document.getElementById("myElement");
// Setting a style property
element.style.property = "value";
// Getting a style property
const propertyValue = element.style.property;
//the cssText method allows us to modify many properties at once 
// Accessing an element
const element = document.getElementById("myElement");
// Setting cssText property
element.style.cssText = "property1: value1; property2: value2;";
// Getting cssText property
const currentStyles = element.style.cssText;
//set attribute is used to add a new attribute to the element
element.setAttribute(attributeName, attributeValue);
//to obtain the value of an attribute we use getAttribute
var attributeValue = element.getAttribute(attributeName);