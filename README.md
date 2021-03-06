# Project: My Reads App

## __Fend Nanodegree__ - Building with React

### Brief introduction

The purpose of this project is to practice React and single page applications.
The application represents a sort of personal library with 3 shelves labelled:
- Currently reading
- Want to read
- Read

Each shelf shows some books. The user can change shelf, remove a book from shelf or add a book to shelf.
To add a book to the shelf there is a button that once pressed reveals the search function of the app.
It is connected to a database of other books to browse._(note: the search terms are limited, please refer to the file called SEARCH_TERMS.md in the root of the project)_

### Required functionalities:

* The main page shows 3 shelves for books, and each book is shown on the correct shelf;
* The user can search new books and put them on a specific shelf;
* Install the React router, so visiting the link to the Search page in the URL bar of the browser will be displayed `/search`

### New skills applied from the Module:

* React;
* React router;
* JSX.

### How to run this app:

Steps needed to run this application:
* Download/clone this project's repository from github;
* To have npm installed, [go here to download](https://www.npmjs.com/);
* After npm is installed open a terminal and `cd` into the project's folder (reach the path of the project into the terminal;
* In the terminal use the command `npm install` to install it in the project;
* To start the server in the terminal use the command: `npm start`;
* If everything is correct, your browser(**) will launch the application at: `http://localhost:3000`.

(**) *Please note, your browser could be not compatible with features on this project, please be sure to get it updated and to use a modern browser*.

### Set the behavior of the server at the starting:

__If your wish is to open the application in the default browser, do not care of the following.__
As mentioned in the previous point, starting the server, the application will be automatically launched in the default browser.

If you wish to prevent this default behavior or to change the browser where the application is launched (*for example I used Chrome Canary for the development instead of my default browser*) please refer to the `.env` file in the root of the application.

Open it in the editor and choose an option.
At the moment both options are left commented (a commented string in the `.env` file is identified by the character `#`).
Leaving it unchanged, it will be followed the default behavior after the server is started.
If your wish is to use a different browser,find and insert the path to launch the browser on your system in place of the string `{INSERT_THE_PATH_HERE}`.


### License:

MIT License

Copyright (c) 2018 Cristiano Zitarosa

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
