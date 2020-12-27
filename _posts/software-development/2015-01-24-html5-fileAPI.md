---
layout: post
title:  "Process files in ClientSide"
category: "Software Development"
---
Before 1995 ( pre internet century ) HTML forms were allowing the content produced to request information from the user reading the form. These forms have proven useful in a wide variety of applications in which input from the user is necessary. However, this capability is limited because HTML forms don't provide a way to ask the user to submit files of data. Content providers who need to get files from the user have had to implement custom user applications.

Since file-upload is a feature that will benefit many applications, in 1995 [RFC-1867](https://tools.ietf.org/html/rfc1867) proposes an extension to HTML to allow information providers to express file upload requests uniformly, and a MIME compatible representation for file upload responses.

From then till 2014, HTML application was just capable of uploading files to server. In 2014 when HTML5 was published as a [Working Draft by W3C](http://www.w3.org/TR/html5/) , addition to specifying markup, it also specified several API's that can be used with JavaScript.

[HTML5 File API](http://www.w3.org/TR/FileAPI/) is one such API which enabled developers to process and interact with local files with in the browser of the user's device.

This API basically works with the usual input type="file" element or drag and drop HTML5 feature.

HTML5 file API is still under development and its not completely implemented in all browsers, please better check with this [compatibility index](http://caniuse.com/#feat=fileapi) before you plan to use it,

As per the W3C draft specification, It includes three different parts

1.  File Reader
2.  File Writer
3.  File System

File Reader API provides ways to read and process File with in the browser. It also provides ways to determine meta information of the file such as name, size, MIMEtype etc ...

Some of the major uses of File Reader API includes

1.  Size Validation in client side
2.  Restrict type of file in client side
3.  Modify the data of the file and use it for some purpose, in client side
4.  You can also get file created and modified date which could be used for some purpose, in client side

File Reader API defines various interfaces to achieve all those things listed Above, below are the most commonly used interfaces

1.  [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob)
2.  [File](https://developer.mozilla.org/en-US/docs/Web/API/File)
3.  [FileList](https://developer.mozilla.org/en-US/docs/Web/API/FileList)
4.  [FileReader](https://developer.mozilla.org/en-US/docs/Web/API/FileReader)
5.  [FileError](https://developer.mozilla.org/en-US/docs/Web/API/FileError)
6.  [FileException](#)

Its too huge to post the explanation on each of those interfaces, I have just hyperlinked the interfaces to world class Mozilla documentations, please do refer if you need more info on any of these interfaces.

Before explaining the syntax and semantics of these interfaces and its methods let me explain you the most important thing we developers should make sure, i.e to check if the browser has these File API implemented or not. you can do so with this below javascript snippet.

```js
if ( window.FileReader && window.File && window.FileList && window.Blob )
{
    //Supported
}
```

#### Lets define an example use case and simulate: -

You have a file which is selected from the user via input file type with in your form and you need to read and do some thing with it.

To simulate the use case let us create a html file with the form and an input type=file field and specify the id to that field as "sampleFile" and bind an onchange event to that when window is completely loaded as shown in the code below.

```js
function init() {
    var isSupported = ( window.FileReader && window.File && window.FileList && window.Blob )
    if (!isSupported) {
        alert("This browser doesn't support the File API");
        return;
    }
    document.getElementById("sampleFile").addEventListener("change", handleThisFile);
}
```


Now lets define the change event handler

```js
function handleThisFile(event) {

    // The javascript event object has the target content and its details
    console.log("Name of the file: " + event.target.files[0].name);
    console.log("Size of the file: " + event.target.files[0].size);
    console.log("Type of the file: " + event.target.files[0].type);

    // Create a File Reader Object
    var reader = new FileReader();
    var file = event.target.files[0];
    var type = event.target.files[0].type;

    // Add and event listener for load event on the reader
    // Handle the output of File reader API interface methods based on the type
    reader.onload = function(event) {
        var dataToProcess = evt.target.result;
        // Check for the file type
        if (type == "text/plain") 
        {
            document.getElementById('filecontents').innerHTML = dataToProcess;
        } 
        elseif(type == "image/png") 
        {
            var img = new Image();
            img.src = dataToProcess;
            document.getElementById('filecontents').appendChild(img);
        }  
        elseif(type == "audio/mpeg3")
        {
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', 'dataToProcess');
            audioElement.play();
        } 
    }

    // Call File reader API interface methods based on the file type.
    switch (expression) {
        case "text/plain":
            console.log("You have selected the Text file");
            reader.readAsText(file);
            break;
        case "image/png":
            console.log("You have selected the Text file");
            reader.readAsDataURL(file);
            break;
        case "audio/mpeg3":
            console.log("You have selected the Text file");
            reader.readAsBinaryString(file);
            break;
        default:
            console.log(" un handled file type ");
    }
    
}
// Call on load event
window.addEventListener("load", init);
```
File Writer API provides ways to create and download files with in the browser. FileWriter API is still under experimental stage only latest browsers supports this API.

FileSaver.js implements the HTML5 writer API's saveAs() FileSaver interface in browsers that do not natively support it. There is a [FileSaver.js](http://eligrey.com/demos/FileSaver.js/) demo that demonstrates saving various media types.

FileSaver.js is the solution to saving files on the client-side, and is perfect for webapps that need to generate files, or for saving sensitive information that shouldn't be sent to an external server.

The below example does a Jquery get Request for a file, and the file data is written to Blob and saved to a text file with in the browser, and that file is downloaded to end users machine.

```js
$.get('http://yourdomain.com/path_to_file/filename.ext', function(data) {
    console.log("successfully Downloaded File")
}).done(function(data) {
    var blob = new Blob([data], {
        type: 'text/plain;charset=utf-8'
    });
    var filename = "testingSaveAS"
    saveAs(blob, filename + '.txt');
});
```

To call the saveAs Method you need to include the filesaver.js file

File System API provides ways to read the server side files, from client browser, this set of API is still under experimental stage, its not yet ready for production. If you are intrested to know about this API please refer latest editors draft version of W3C which is available [here](http://dev.w3.org/2009/dap/file-system/file-dir-sys.html)

Processing files in the clients side has lot of advantages, I hope this post introduced you to some of them