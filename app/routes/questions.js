import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return [
      {
        id: 1,
        title: "What does a doctype do?",
        body: "The <DOCTYPE> declaration tells the browser what version of (X)HTML is being used so it will know how to display the page. The declaration may also provide a link to a text file (i.e., the loose DTD) which the browser uses to obtain further information. It's similar to having a tune-up done on your car. In order to perform it correctly, the mechanic must know the make, model, and year of the car. He must also know how many cylinders the engine has and its horsepower.  Once he knows this, he can move forward and properly tune the engine.",
        answerLink: "http://www.htmlgoodies.com/primers/html/article.php/3701321/Using-the-DOCTYPE-Tag.htm",
        type: "html",
        source: "github",
        sourceLink: "https://github.com/h5bp/Front-end-Developer-Interview-Questions"
      },
      {
        id: 2,
        title: "What's the difference between standards mode and quirks mode?",
        body: "In an effort to contend with Web pages written for older browsers, the newer browser versions " +
        "(Mozilla-based browsers, Netscape 7, Windows Internet Explorer 6, Mac Internet Explorer 5, Opera 7, and Safari) have two types of presentation modes: standard and quirks. " +
        "Using the standard mode, the browser tries to follow W3C recommendations. " +
        "When the browser goes into quirks mode, it's trying to emulate an older version of the browser. This could cause the browser to ignore your page's style sheets and render the page unusable (Mozilla and Safari also have a third mode: almost standards modes, which mainly pertains to the vertical sizing of tables).",
        answerLink: "http://www.htmlgoodies.com/primers/html/article.php/3701321/Using-the-DOCTYPE-Tag.htm",
        type: "html",
        source: "github"
      },
      {
        id: 3,
        title: "What are the limitations when serving XHTML pages?",
        body: "Perhaps the biggest issue is the poor browser support XHTML currently enjoys. Internet Explorer and a number of other user agents cannot parse XHTML as XML. Thus, it is not the extensible language it was promised to be. There are many other issues." +"http://www.webdevout.net/articles/beware-of-xhtml",
        answerLink: "http://www.skilledup.com/articles/html-html5-interview-questions-answers/",
        type: "html",
        source: "github"
      },
      {
        id: 4,
        title: "Are there any problems with serving pages as application/xhtml+xml?",
        body: "",
        type: "html",
        source: "github"
      },{
        id: 5,
        title: "How do you serve a page with content in multiple languages?",
        body: "and here the rest",
        type: "html",
        source: "github"
      },
      {
        id: 6,
        title: "What kind of things must you be wary of when design or developing for multilingual sites?",
        body: "The first thing to get right when working with multiple languages on a website is making sure the language is identified in the code of the page; The 'lang' attribute can be used with almost every HTML element, making it very easy to change languages within a page." +
        "If you are creating a multi-lingual website which caters for languages written from right-to -left rather than left-to-right, you will need to make sure the direction of text is specified correctly in the code of the page."+
        "A character encoding is essentially a key to decipher an encrypted collection of letters and symbols used in a writing system." +
        "The length of words varies from language to language. The design of the website should cater for different length words used through the site. ",
        answerLink:"http://www.nomensa.com/blog/2010/7-tips-and-techniques-for-multi-lingual-website-accessibility",
        type: "html",
        source: "github"
      },{
        id: 7,
        title: "What are data- attributes good for?",
        body: "",
        type: "html",
        source: "github"
      },
      {
        id: 8,
        title: "Consider HTML5 as an open web platform. What are the building blocks of HTML5?",
        body: "and more text",
        type: "html",
        source: "github"
      },{
        id: 9,
        title: "Describe the difference between a cookie, sessionStorage and localStorage.",
        body: "and here the rest",
        type: "html",
        source: "github"
      },
      {
        id: 10,
        title: "Describe the difference between <script>, <script async> and <script defer>.",
        body: "and more text",
        type: "html",
        source: "github"
      },{
        id: 11,
        title: "Why is it generally a good idea to position CSS <link>s between <head></head> and JS <script>s just before </body>? Do you know any exceptions?",
        body: "and here the rest",
        type: "html",
        source: "github"
      },{
        id: 12,
        title: "What is the difference between classes and ID's in CSS?",
        body: "and here the rest",
        type: "css",
        source: "github"
      },{
        id: 13,
        title: "What's the difference between 'resetting' and 'normalizing' CSS? Which would you choose, and why?",
        body: "and here the rest",
        type: "css",
        source: "github"
      },{
        id: 14,
        title: "Describe Floats and how they work.",
        body: "and here the rest",
        type: "css",
        source: "github"
      },{
        id: 15,
        title: "Describe z-index and how stacking context is formed.",
        body: "and here the rest",
        type: "css",
        source: "github"
      },{
        id: 16,
        title: "What are the various clearing techniques and which is appropriate for what context?",
        body: "and here the rest",
        type: "css",
        source: "github"
      },{
        id: 17,
        title: "Explain CSS sprites, and how you would implement them on a page or site.",
        body: "and here the rest",
        type: "css",
        source: "github"
      },{
        id: 18,
        title: "What are your favourite image replacement techniques and which do you use when?",
        body: "and here the rest",
        type: "css",
        source: "github"
      },{
        id: 19,
        title: "How would you approach fixing browser-specific styling issues?",
        body: "and here the rest",
        type: "css",
        source: "github"
      },
      {
        id: 20,
        title: "How do you serve your pages for feature-constrained browsers? \n What techniques/processes do you use?",
        body: "and here the rest",
        type: "css",
        source: "github"
      },
      {
        id: 21,
        title: "What are the different ways to visually hide content (and make it available only for screen readers)?",
        body: "and here the rest",
        type: "css",
        source: "github"
      },
      {
        id: 22,
        title: "Have you ever used a grid system, and if so, what do you prefer?",
        body: "and here the rest",
        type: "css",
        source: "github"
      },
      {
        id: 23,
        title: 'Have you used or implemented media queries or mobile specific layouts/CSS?',
        body: "and here the rest",
        type: "css",
        source: "github"
      },
      {
        id: 24,
        title: "Any familiarity with styling SVG?",
        body: "and here the rest",
        type: "css",
        source: "github"
      },
      {
        id: 25,
        title: "How do you optimize your webpages for print?",
        body: "and here the rest",
        type: "css",
        source: "github"
      },
      {
        id: 26,
        title: "What are some of the 'gotchas' for writing efficient CSS?",
        body: "and here the rest",
        type: "css",
        source: "github"
      },
      {
        id: 27,
        title: 'What are the advantages/disadvantages of using CSS preprocessors?  \n Describe what you like and dislike about the CSS preprocessors you have used.',
        body: "and here the rest",
        type: "css",
        source: "github"
      },
      {
        id: 28,
        title: "How would you implement a web design comp that uses non-standard fonts? ",
        body: "and here the rest",
        type: "css",
        source: "github"
      },
      {
        id: 29,
        title: "Explain how a browser determines what elements match a CSS selector. ",
        body: "and here the rest",
        type: "css",
        source: "github"
      },
      {
        id: 30,
        title: "Explain your understanding of the box model and how you would tell the browser in CSS to render your layout in different box models. ",
        body: "and here the rest",
        type: "css",
        source: "github"
      },
      {
        id: 31,
        title: "What does * { box-sizing: border-box; } do? What are its advantages?",
        body: "and here the rest",
        type: "css",
        source: "github"
      },
      {
        id: 32,
        title: "List as many values for the display property that you can remember.",
        body: "and here the rest",
        type: "css",
        source: "github"
      },
      {
        id: 33,
        title: "What's the difference between inline and inline-block?",
        body: "and here the rest",
        type: "css",
        source: "github"
      },
      {
        id: 34,
        title: "What's the difference between a relative, fixed, absolute and statically positioned element?",
        body: "and here the rest",
        type: "css",
        source: "github"
      },
      {
        id: 35,
        title: "The 'C' in CSS stands for Cascading. How is priority determined in assigning styles (a few examples)? How can you use this system to your advantage? ",
        body: "and here the rest",
        type: "css",
        source: "github"
      },
      {
        id: 36,
        title: " ",
        body: "and here the rest",
        type: "css",
        source: "github"
      },
      {
        id: 37,
        title: " What existing CSS frameworks have you used locally, or in production? How would you change/improve them?",
        body: "and here the rest",
        type: "css",
        source: "github"
      },
      {
        id: 38,
        title: " Have you played around with the new CSS Flexbox or Grid specs?",
        body: "and here the rest",
        type: "css",
        source: "github"
      },
      {
        id: 39,
        title: "How is responsive design different from adaptive design? ",
        body: "and here the rest",
        type: "css",
        source: "github"
      },
      {
        id: 40,
        title: "Have you ever worked with retina graphics? If so, when and what techniques did you use? ",
        body: "and here the rest",
        type: "css",
        source: "github"
      }, {
        id: 41,
        title: "Is there any reason you'd want to use translate() instead of absolute positioning, or vice-versa? And why?",
        body: "and here the rest",
        type: "css",
        source: "github"
      },
      {
        id: 42,
        title: "Explain event delegation ",
        body: "and here the rest",
        type: "javascript",
        source: "github"
      },{
        id: 43,
        title: "Explain how this works in JavaScript ",
        body: "and here the rest",
        type: "javascript",
        source: "github"
      },{
        id: 44,
        title: "Explain how prototypal inheritance works ",
        body: "and here the rest",
        type: "javascript",
        source: "github"
      },{
        id: 45,
        title: "How do you go about testing your JavaScript?",
        body: "and here the rest",
        type: "javascript",
        source: "github"
      },{
        id: 46,
        title: "AMD vs. CommonJS? ",
        body: "and here the rest",
        type: "javascript",
        source: "github"
      },{
        id: 47,
        title: "Explain why the following doesn't work as an IIFE\: function foo(){ }()\; \n What needs to be changed to properly make it an IIFE?",
        body: "and here the rest",
        type: "javascript",
        source: "github"
      },{
        id: 48,
        title: "What's the difference between a variable that is: null, undefined or undeclared? How would you go about checking for any of these states? ",
        body: "and here the rest",
        type: "javascript",
        source: "github"
      },{
        id: 49,
        title: "What is a closure, and how/why would you use one?",
        body: "and here the rest",
        type: "javascript",
        source: "github"
      },{
        id: 50,
        title: "What's a typical use case for anonymous functions? ",
        body: "and here the rest",
        type: "javascript",
        source: "github"
      },{
        id: 51,
        title: "How do you organize your code? (module pattern, classical inheritance?) ",
        body: "and here the rest",
        type: "javascript",
        source: "github"
      },
      {
        id: 52,
        title: "What's the difference between host objects and native objects? ",
        body: "and here the rest",
        type: "javascript",
        source: "github"
      },{
        id: 51,
        title: "Difference between: function Person(){}, var person = Person(), and var person = new Person()? ",
        body: "and here the rest",
        type: "javascript",
        source: "github"
      },{
        id: 52,
        title: "What's the difference between .call and .apply? ",
        body: "and here the rest",
        type: "javascript",
        source: "github"
      },{
        id: 53,
        title: "Explain Function.prototype.bind. ",
        body: "and here the rest",
        type: "javascript",
        source: "github"
      },{
        id: 54,
        title: "When do you optimize your code? ",
        body: "and here the rest",
        type: "javascript",
        source: "github"
      },{
        id: 55,
        title: "When would you use document.write()? ",
        body: "and here the rest",
        type: "javascript",
        source: "github"
      },{
        id: 56,
        title: "What's the difference between feature detection, feature inference, and using the UA string? ",
        body: "and here the rest",
        type: "javascript",
        source: "github"
      },{
        id: 57,
        title: "Explain AJAX in as much detail as possible. ",
        body: "and here the rest",
        type: "javascript",
        source: "github"
      },{
        id: 58,
        title: "Explain how JSONP works (and how it's not really AJAX). ",
        body: "and here the rest",
        type: "javascript",
        source: "github"
      },
      {
        id: 59,
        title: "Have you ever used JavaScript templating? If so, what libraries have you used? ",
        body: "and here the rest",
        type: "javascript",
        source: "github"
      },{
        id: 60,
        title: "Explain 'hoisting'. ",
        body: "and here the rest",
        type: "javascript",
        source: "github"
      },{
        id: 61,
        title: "Describe event bubbling. ",
        body: "and here the rest",
        type: "javascript",
        source: "github"
      },{
        id: 62,
        title: "What's the difference between an 'attribute' and a 'property'? ",
        body: "and here the rest",
        type: "javascript",
        source: "github"
      },{
        id: 63,
        title: "Why is extending built in JavaScript objects not a good idea? ",
        body: "and here the rest",
        type: "javascript",
        source: "github"
      },{
        id: 64,
        title: "Difference between document load event and document ready event? ",
        body: "and here the rest",
        type: "javascript",
        source: "github"
      },{
        id: 65,
        title: "What is the difference between == and ===? ",
        body: "and here the rest",
        type: "javascript",
        source: "github"
      },{
        id: 66,
        title: "Explain the same-origin policy with regards to JavaScript. ",
        body: "and here the rest",
        type: "javascript",
        source: "github"
      },{
        id: 67,
        title: " Make this work: duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5] ",
        body: "and here the rest",
        type: "javascript",
        source: "github"
      },
      {
        id: 68,
        title: "Why is it called a Ternary expression, what does the word 'Ternary' indicate? ",
        body: "and here the rest",
        type: "javascript",
        source: "github"
      },{
        id: 69,
        title: "What is 'use strict';? what are the advantages and disadvantages to using it? ",
        body: "Strict Mode is a new feature in ECMAScript 5 that allows you to place a program, or a function, in a 'strict' operating context. This strict context prevents certain actions from being taken and throws more exceptions.",
        answerLink:'http://stackoverflow.com/questions/1335851/what-does-use-strict-do-in-javascript-and-what-is-the-reasoning-behind-it',
        type: "javascript",
        source: "github"
      },{
        id: 70,
        title: "Create a for loop that iterates up to 100 while outputting 'fizz' at multiples of 3, 'buzz' at multiples of 5 and 'fizzbuzz' at multiples of 3 and 5 ",
        body: "and here the rest",
        type: "javascript",
        source: "github"
      },{
        id: 71,
        title: "Why is it, in general, a good idea to leave the global scope of a website as-is and never touch it? ",
        body: "and here the rest",
        type: "javascript",
        source: "github"
      },{
        id: 72,
        title: "Why would you use something like the load event? Does this event have disadvantages? Do you know any alternatives, and why would you use those? ",
        body: "and here the rest",
        type: "javascript",
        source: "github"
      },{
        id: 73,
        title: "Explain what a single page app is and how to make one SEO-friendly. ",
        body: "A single-page application (SPA), is a web application or web site that fits on a single web page with the goal of providing a more fluid user experience akin to a desktop application. In an SPA, either all necessary code – HTML, JavaScript, and CSS – is retrieved with a single page load."
        + " http://www.awwwards.com/seo-tricks-for-one-page-websites.html"+
        "i) Paginate Your Page, ii)Organize Your CSS for Spiders, iii)Seek Authority, iv)Multiple H1 Tags, v)Don’t Neglect Readability, vi) Keep it Fresh ",
        answerLink: "http://en.wikipedia.org/wiki/Single-page_application",
        type: "javascript",
        source: "github"
      },

    ];
  }
});
