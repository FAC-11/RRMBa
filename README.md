# RRMBa

## **WHY**


How many times you would have wished you knew the status of the tube line you were going to take? Maybe if you had known you were going to feel that frustrated  you would have changed your route!

We felt it was useful to display the information about the status of the tubes lines as well as illustrating how you would feel after taking them.


## **WHAT**


In our website, when clicking on the tube line that you will be using, the information regarding the status of the line will be displayed as well as an image indicating you how you would feel after using it.


## **HOW**


### Software Architecture
--------

![We begin](https://lh3.googleusercontent.com/BleNvryzz9TvjTDF7nELH4h2owbDsPKS_mkgwfpOFGy75otJ181WpRZzgaAyte1vafl0c8Wf1KAg=s0 "first draft")

![We change our mind](https://lh3.googleusercontent.com/hS4XCcf8Qf0c2PE3wd7kZkctBExSyoT1R0UlkWZOU0ZzODiA-Yx6RgyHeSHkEW_HGIZcIRpvtYTk=s0 "second draft")

![Let's talk about our file structure..](https://lh3.googleusercontent.com/-5PIzZfxeK4-8vssXVKR7De5GxAxGOs7KOBXkH51g9FIFjlHK4Yb2rQ1vzxYsNC3gtp2EHdY-sJ8=s0 "path and code")

![Almost there](https://lh3.googleusercontent.com/UPdZ6r1Ohd41D8MNXud7kCDu1iDx-fLhsjYetJOGjwOn5V4QKlwGjSbATjG4L4fNMN_0jEKBZk-1=s0 "getting complicated")

![First pseudo code](https://lh3.googleusercontent.com/wRRskwny8b-07G26EshtU8MbfHk3G2wTwz_tzlWehtDBYeovQezudUdb1RjVFUxihOP_fndprX5W=s0 "IMG_20170712_140516.jpg")

![Much clearer!](https://lh3.googleusercontent.com/uBeSfrLS3sLmecVJEMi7SjhTLcQPTdP2j4YzaMhM0HZ_Urm5qkpL6YGXLG_2XJ310pd3qPKk-ptz=s0 "IMG_20170712_142703.jpg")

![Ta Da!](https://lh3.googleusercontent.com/MNNWOZiLr5kfVddNgiFjcE1u1Lg3-vIZHDhV3R0OWqoPvUASNPLf-BNLCO70KOvdGV9pJKdIERbI=s0 "IMG_20170712_142708.jpg")



### File Structure
--------
We decided to divide our code in 4 folders:

* HTML
* CSS
* Logic - where our pure functions (logic.js), tests (logic.test.js) and Dom.js will be  written.
* Resources
* ReadMe

There was a initial discussion about creating another file inside logic called API.js where our not-pure functions will be written. That would allow us to have 100 % test coverage and have all the pure functions together. However, to make the code more readable, we decided not to take this approach.

### Logic
--------
Once the pseudocode was ready to be implemented, each pair started writing tests for a couple of functions. Once the test failed (you all know how TDD works ;) ), we started writing the code for our pure and not to so pure (ex. apicall) functions.

As a consequence of our not pure functions, once we got the data from the server, the tests do not longer pass.

A great function that helped our code being clearer and work better was the waterfall function, which passes an array of functions as first argument, and an array of urls as a second one which will run in series.

### DOM
--------
Almost all the magic happened in our logic file. However, we needed two main things to make it work:
- Our event listener which will get the data that the user has selected.
- And our render function which will get the data obtained by the functions in our logic file.


### CSS
--------

We did not go crazy with the css, some cool details could be:

- Tube lines' style so they matched the underground colors: For this, we created radio buttons in our form in order to style them properly later on in our stylesheet.


Ahh..and we used the London Tube font! =)

## **Do you want to run this project in your own computer?**

In your terminal, you should run the following commands:

* _git clone https://github.com/FAC-11/RRMBa.git _    
* _npm i_  
* if you want to run the tests, run _npm test_ or _tape_ ....

## **Learning**

[Styling Radio buttons](http://code.stephenmorley.org/html-and-css/styling-checkboxes-and-radio-buttons/)

[Waterfall functions](https://www.npmjs.com/package/async-waterfall)

[XML HttpRequest](https://www.w3schools.com/xml/xml_http.asp)
