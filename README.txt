READ ME

The main functionality of this project is to display photos in a fun, interactive way.  
The album created is random for every run. The display is better with more photos. (more than 25 preferred) 
The images are randomly displayed, put into HTML templates using javascript with random effects. 
I used HTML(ejs), css and javascript for front end and Node.js for the back-end, server-side language. 

To Start: 

Compile ¡°server.js¡± (node server.js)--> localhost:8080 --> upload photos --> View Album!!! 


Server.js (dir /project)
    listens at localhost:8080 
    renders index.html when ¡°localhost:8080¡± 

    When photos are uploaded, they are saved onto the ¡°project/uploads¡± folder. 
    The uploaded photos are renamed according to their numeric order. 
    Number of photos in the directory are saved in ¡°count.txt¡± and shown in index using ejs templates. 
    The counts also displayed in the index.html 
               
    When ¡°view album¡± is clicked, linked to ¡°/display¡± which renders ¡°display.html¡±. 
    When ¡°reset album¡± is clicked, all photos in directory ¡°project/uploads¡± are deleted and count is reset to zero.
    When ¡°new album¡± is clicked from ¡°display.html¡±, ¡°display.html¡± is rendered again, randomizing the album once again.
    When ¡°back to upload¡± is clicked, ¡°index.html¡± is rendered. 

Indx.ejs (html) (dir /project/view)
    Simple input form used with minimum design. 
    Choose File: choose photos to view (jpg) 
    Upload: upload chosen photos
    View Your Album: View Album
    Reset Album: delete all updated photos 

display.ejs (html) (dir /project/view)
    mostly composed of javascript.
    Number of images are received from server.js, randomized then looped through to 7 different types of templates. 
    The photos are randomized and hover effects and layout are randomized within certain templates.
    Photo entrance and done through a css library animate.css and wow.js.
    As album is scrolled down, images appear from different positions.
    All images have hover effects which are all written using style.css. 

style.css (dir /project/public/css)
   All important functionalities including layouts, hover effects are written. 
   hover effects: tilt, rotate, morph, bounce(ball), grow, float, sink, spin... 

wow.js/ animate.css (dir /project/public/js, /project/public/css)
   entrance motion and scroll down recognition.  





