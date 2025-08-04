    // dom methods and properites

      //here getElementById is HTML DOM method/action(that can be used to access element) and innerHTML is property(that can changed or set)

      document.getElementById("demo").innerHTML = "Hello World!";
      //basically getElementByTagName returns html collection of all img tags in dom so have to specify first element  ,

      document.getElementsByTagName("img")[0].src =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtDZ3-Yw3bgKq-QSpxuvlERsUfa77gz2JJcw&s";
      //the value to function is in "alt" ohter wise js will consider alt a varaible
      document
        .getElementsByTagName("img")[0]
        .setAttribute("alt", "flower image");
      //properties values must be in double quotes otherwise are considered as variables
      document.getElementById("demo").style.color = "blueviolet";

      p_element = document.createElement("p");
      p_element.innerHTML = "Hello World 2";
      // wrong document.appendChild(p_element); because dom is webpage while need to append in a dom object/tag/element
      p_element.style.color = "blue";
      p_element.setAttribute("class", "intro");
      document.body.appendChild(p_element);

      //adding event handlers
      const changeColor = () => {
        document.getElementById("demo").style.color = "red";
      };
      document.getElementById("demo").onclick = changeColor;
      //will change text of heading
      function changeText(id) {
        id.innerHTML = "Ooops!";
      }
      //return html collection of all elements with same class name
      const x = document.getElementsByClassName("intro");
      console.log(x);
      //to get all html elements that matches a specified css selector (id, class, attribute..)

      console.log(document.querySelectorAll(".intro"));

      //dom animation
      function myMove() {
        let id = null;
        const elem = document.getElementById("animate");
        let pos = 0;
        clearInterval(id);
        id = setInterval(frame, 5);
        function frame() {
          if (pos == 350) {
            clearInterval(id);
          } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
          }
        }
      }

      //The onload and onunload events are triggered when the user enters or leaves the page.

      //   handling mouse events
      function mDown(obj) {
        obj.style.backgroundColor = "#1ec5e5";
        obj.innerHTML = "Release Me";
      }

      function mUp(obj) {
        obj.style.backgroundColor = "#D94A38";
        obj.innerHTML = "Thank You";
      }

      //addeventlistener
      document.getElementById("myBtn").addEventListener("click", displayDate);

      function displayDate() {
        document.getElementById("date").innerHTML = Date();
      }

      //event bubbling : event goes from child to ancestors, by default behaviour
      //event capturing: event goes from parent to child, not by default

      // dom navigation

      document.getElementById("id02").innerHTML =
        document.getElementById("id01").innerHTML;

      // The nodeValue property specifies the value of a node.

      // nodeValue for element nodes is null

      //dom nodes

      const para = document.createElement("p");
      const node = document.createTextNode("This is new.");
      para.appendChild(node);

      const element = document.getElementById("div1");
      element.appendChild(para);
       const child = document.getElementById("p1");
      element.replaceChild(para, child);
//       An element can only exist once in the DOM.
// When you use replaceChild(para, child), the browser removes it from the bottom and moves it to where child was.
//    

// DOM elements are objects, not just text or HTML. When you move an element, you’re not copying it — you’re physically relocating it in the DOM.

//copying content (innerHTML) 
//moving DOM elements (like with appendChild() or replaceChild()).
