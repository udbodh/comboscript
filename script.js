var _ = (function () {
    "use strict";
  
    // Create the methods object
    var methods = {};
  
    //
    // Methods
    //
  
    /**
     * Get an element in the DOM
     * @param  {String} selector The selector to match against
     * @param  {Node} scope      An element to search within [optional]
     * @return {Node}            The first matching element
     */
    methods.get = function (selector, scope) {
      if (!selector) throw new Error("Please provide a selector.");
      return scope
        ? scope.querySelector(selector)
        : document.querySelector(selector);
    };
  
    /**
     * Get all matching elements in the DOM
     * @param  {String} selector The selector to match against
     * @param  {Node} scope      An element to search within [optional]
     * @return {NodeList}        The matching elements
     */
    methods.getAll = function (selector, scope) {
      if (!selector) throw new Error("Please provide a selector.");
      return scope
        ? scope.querySelectorAll(selector)
        : document.querySelectorAll(selector);
    };
  
    /**
     * Setup an event listener
     * @param  {Node}     elem        The element to attach the listener to
     * @param  {String}   event       The event to listen for
     * @param  {Function} callback    The callback to run on the event
     * @param  {Boolean}  useCapture  If true, set useCapture to true [optional]
     */
    methods.on = function (elem, event, callback, useCapture) {
      if (!elem)
        throw new Error("Please provide an element to attach the event to.");
      if (!event) throw new Error("Please provide an event to listen for.");
      if (!callback || typeof callback !== "function")
        throw new Error("Please provide a valid callback function to run");
      elem.addEventListener(event, callback, useCapture || false);
    };
/* a. Change the class name of any dom elements

    b.       Get datasets from dom elements
    
    c.       Inject new dom element
    
    d.       Make both ajax and get request
    
    e.       Get and set values from input box/checkbox/select dropdown */
    methods.changeClassName = function (selector, newClassName) {
      var element = methods.get(selector);
      element.className = newClassName;
      return element;
    };
  
    methods.getDataFromDOM = function (selector) {
      var element = methods.get(selector);
      if(element.tagName.toLowercase() === 'input' || element.tagName.toLowercase() === 'checkbox' || element.tagName.toLowercase() === 'select')
      {
        data = element.value;
      }
      else{
        data = element.textContent || element.innerText;
      }
      return data;
    };

    methods.injectElement = function (selector, newElement) {
      var element = methods.get(selector);
      element.innerHTML = newElement;
      return Promise(element);
    };

    methods.getRequest = function() {
      $.ajax({
        url: "index.html",
        context: document.body,
        success: function(){
          $(this).addClass("done");
        }
    });
    };

    methods.getRequest = function() {
      var xmlhttp = new XMLHttpRequest();

      xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
           if (xmlhttp.status == 200) {
               document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
           }
           else if (xmlhttp.status == 400) {
              alert('There was an error 400');
           }
           else {
               alert('something else other than 200 was returned');
           }
        }
    };

    xmlhttp.open("GET", "ajax_info.txt", true);
    xmlhttp.send();
    };
  
    methods.isSelectOrTextField = function() {
      var element = document.getElementById(idName);
      if(element.tagName === 'SELECT') {return true;}
      if(element.tagName === 'INPUT' && element.type === 'text') {return true;}
      return false;
   };

    // Expose the public methods
    return methods;
  })();
  
  // Get the first elements with the .test class
  var test = _.get(".test");
  console.log(test);
  // var abc = _.get(".abc");
  var names = _.changeClassName(".abc", "newName");
  console.log(names);

  // Get all elements with the .test class
  // var testes = _.getAll(".test");
  // console.log(testes);
  
  // // Listen for clicks on the DOM
  // _.on(document, "click", function (event) {
  //   console.log("clicked!", event);

  

    
 // });
  