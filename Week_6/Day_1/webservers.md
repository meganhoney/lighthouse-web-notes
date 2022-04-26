# Web Servers 101

- [X] Review: HTTP
- [X] What is a client?
- [X] What is a server?
- [X] Making Requests
- [ ] Creating your own Server-side HTTP Application in NodeJS (Node JS' `http` Module)
- [ ] Using Express
- [ ] Middleware

## TCP Review

* Detailed header (20 bytes)
* Requires formal/congoing connection (connection-oriented)
* Corrupted packets are reported to the server; corrections are sent to the client
* Packets arrive in order

## HTTP Review

* Application-based layer (built as additional layer on top of TCP)
* Request-response communication style
* Made up of a URL (path to resource) and a method (verb)
* Status codes are included in responses to let us know if it is a success or error
* Both requests and responses contain headers with information

## What is a client?

Any program capable of sending an HTTP request and parsing a valid HTTP response. Common examples include:
* Web browsers (Edge, Safari, Chrome, Firefox, Opera, etc.)
* Postman (and other API development software)
* cURL (in our terminal)
* Web applications (as well as desktop and mobile apps) reach out to servers for information acting as a client

## What is a server?

Any program or system capable of interpreting HTTP requests and sending a response.

* Web Server: any software that accepts HTTP/HTTPS requests and can return a response
* Appliication Server: a server that hosts an application
* Load Balancer: server that diverts request traffic among a variety of select response servers

Stacks are a list of technologies that make up a project:

1. Linux (CentOS, Ubuntu)
2. Apache / nginx
3. MariaDB
4. PHP / Perl

This breaks down into the following common components:

1. Operating System
2. Web Server Software (capable of interpreting requests and sending responses)
3. (OPTIONAL) DBMS - Database Management System
4. (OPTIONAL) Scripting Language / Program

We'll end up using something like...

1. Ubuntu / Windows 10 / MacOS
2. Apache / Application Server
3. PostgreSQL
4. Node.js / Ruby