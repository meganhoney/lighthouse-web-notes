# Web Servers 101

- [X] Review: HTTP
- [X] What is a client?
- [ ] What is a server?
- [ ] Making Requests
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
