# [Developer Conference 2016](http://www.devconmru.org/)
=========================

The website for the Developers Conference 2016 in Mauritius is based on a 
combination of different, modern frameworks:

* [AngularJS](http://angularjs.org)
* [RequireJS](http://requirejs.org)
* [HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate)
* [Bootstrap](https://github.com/twbs/bootstrap)

## Part of content is delivered "remotely"
Part of the actual content being displayed on the website is pulled remotely 
from cloud infrastructures like Google Spreadsheets. The data transfer is done
in JSON, and could be used for other platforms like smartphone apps, too.

## Using Google Docs for management of lists
The decision to use Google Docs, here Sheets in particular, was easy.

1. It eliminates any kind of security issues regarding the implementation 
of an administrative back-end for the website.
1. Sheets on Google Docs can be edited online. Anytime, anywhere
1. Google Docs can be shared with other users for common updates and changes
1. With the integrated Revision History in Google Docs it is possible to keep 
track of changes made by any editor, and content can be reverted
1. Data will be handled as lists anyway.
Currently, we have the sessions, speakers and sponsors online
1. Using Google Docs as back-end is for free. :smile:
1. It's a cool experiment...

## Working with multiple frameworks
Well, the idea isn't new actually and I "borrowed" some infrastructure from 
an existing (closed) project to have a head start into this one.
Particularly, the folder structure below the app is based on RequireJS. This 
actually keeps the app feature development tight and feature-based rather
than separated by file-types as you might be used to. RequireJS keeps the 
front-end web dvelopment complete clean and takes care of versions, dependencies 
and loading of additional JavaScript files used on the website.

AngularJS and some extensions are used to provide 2-way data binding on the
front-end part but also simplify implementation when talking to remote
sources via CRUD operations.

The famous Html5Boilerplate has been created using the initializr website
and includes Twitter's Bootstrap frontend framework for the grid layout 
and to provide seasoned web developers with known CSS directives and formatting
structures. There are so many interesting designs available and just to
keep things simple I went down this road.

# Community-driven development
The Developers Conference in Mauritius has been initiated by the [Mauritius Software Craftsmanship Community](http://meetup.com/MauritiusSoftwareCraftsmanshipCommunity)
and is driven by the voluntarily effort and contribution of its members. We
like to promote the use of open source, and what could be better than giving
public access to the source code of this website?

There are so many talented people in Mauritius, and contributing to this project
is surely a way to show others about their skills.

To contribute to this project, you'll need to do a few things first:

1. Fork the project on GitHub
1. Clone it to your computer
1. Setup a virtual host or website in your local web server
1. Fire up your favourite text editor or IDE
1. Start tweaking and enhancing the website
1. Browse the index.html in your virtual host

Pull requests are more than welcome.
