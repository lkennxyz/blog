---
templateKey: blog-post
title: My VS Code setup
date: 2019-03-01T11:55:18.947Z
description: >-
  I've tried a few different IDEs and text editors, but lately I've been all in
  on VS Code.
tags:
  - vscode
  - javascript
---
After spending most of my time developing Javascript in vim inside a shell, I decided maybe the additional features provided by a more graphical text editor would be worth a try, and after a short jaunt into the world of emacs and spacemacs, I decided that the juggernaut that VS Code has become in the world of Javascript might be worth a go.
![](/img/blur-business-close-up-270557.jpg)


Having spent a lot of time as a C# dev, I was hesitant to use anything with the Visual Studio name, as I find time and time again that it is a bloated resource hog. However, after spending some time in VS Code, I ended up loving it once I had installed a bunch of extensions.

So without further ado, here is a list of my favourite extensions that I use and love.

* [Auto Close Tag - Jun Han](https://github.com/formulahendry/vscode-auto-close-tag):
  Anyone who has written any HTML has probably forgotten to close a `<div>`  more than a few times, especially wen you are nesting a few. Auto Close Tag helps make that problem history.
* [Bracket Pair Coloriser - CoenraadS](https://github.com/CoenraadS/Bracket-Pair-Colorizer-2):
  One of the first things I noticed when I moved away from C# to Javascript were how many levels of brackets and braces there were, and to start with I often lost track. This extension makes it easy to see the pairs, so you can quickly see if you are missing one.
* [EditorConfig for VS Code - EditorConfig](https://github.com/editorconfig/editorconfig-vscode): 
  If you’re like me and sometimes find yourself developing between different machines, keeping consistent about things like indentation can be a pain when one editor wants to use tabs and another 2 spaces. EditorConfig and the VS code extension simplify this for you.
* [ESLint - Microsoft]([https://github.com/Microsoft/vscode-eslint):
  ESLint is the Linter of choice for most Javascript devs, and this extension lint on the fly and highlights problems for you. Can’t ask for much more than that really can you?
* [Indenticator - SirTori](https://github.com/SirTori/indenticator):
  Indentation makes your code much easier to read, but if you use ESLint you’ve probably had it shout at you more than once, expecting another couple of spaces for a certain line. Indenticator makes it so much easier to graphically see your indent levels, and I honestly don’t know how I managed without it.
* [Indent Rainbow](https://github.com/oderwat/vscode-indent-rainbow):
  Colours your indent levels making them easier to see, works great with indenticator.
* [Monokai Pro - Monokai](https://www.monokai.pro): 
  There are tons of dark themes for VS Code out there, but this one is seriously beautiful, definitely worth a look.
* [Vetur - Pine Wu](https://github.com/vuejs/vetur): 
  If you use VS Code to write Vue apps, you need this extension. It provides syntax highlighting for Vue files, which could contain a HTML template, a Javascript script and some styling in CSS, having all of them highlighted nicely by one extension is just too good.
* [Vim - Vscodevim](https://github.com/VSCodeVim/Vim):
  After spending so much time in Vim, I struggle to write anything without Vim keybindings, and sometimes find myself trying to `:wq` out of a web page or shell. This extension adds Vim keybindings to VS Code, so I can `dd` as many blocks as I like.
