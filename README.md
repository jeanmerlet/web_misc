Title: etch_a_sketch

Project idea: http://www.theodinproject.com/web-development-101/javascript-and-jquery

HTML preview: https://rawgit.com/jeanmerlet/etch_a_sketch/master/index.html

My solution is entirely in javascript, so if you are looking for help with your jQuery, my code may not be of any use to you.

Note that due to event handlers being single-threaded, fast mouse movements at high block numbers (noticeable at 100+ to a side) will not all be rendered unless you move your mouse slowly.

A possible fix involves approximating mouse movement via straight lines after execution of the last block coloration, but this is beyond the scope of this project (for now?).
