//event are something similar to the announcement, so in javascript event are specific actions performed by the user
//the entire concept is broken down into 3 words
//event: the action performed
//event target: where the event was performed
//event listener: what action has the event triggered
//to add event listiner
element.addEventListener(event, callbackFunction, options);
//to remove event listener we use removeEventlistener
element.removeEventListener(event, callbackFunction, options);
//the callback function must be same as that of addevent listener 
//hence it is alway preffered to declare the function outside
//there are 3 phasses for an event to take place
//capturing phase: going from the HTML DOM to the targeted element
//target phase in the pahse we are present at the target, we cann't explicitly add event for the target phase
//bubbling phase: the phase where we go from the target back to the root
//usually the event takes place during bubbling phase
//to make the event perform during capturing phase we need to do this
document.addEventListener('event', callbbackFunction, true);
//event object plays a crucial role as it helps in event handeling and allows us t access information aboout event triggered
//event object is an inbuilt object in javascript 
//is used for building dynamic webpage
element.addEventListener(event,function(event){})
console.log(event.type);
console.log(event.target);
console.log(event.clientX);
//so on
//preventDefault is used to prevent the default behaviour of the element
link.addEventListener('click', function(event) {
      event.preventDefault();
      console.log('Default behavior prevented');
    });