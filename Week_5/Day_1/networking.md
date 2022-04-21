# Networking with TCP and HTTP

## Agenda
- [x] Networking and Protocols
- [x] TCP
- [x] HTTP Fundamentals
- [x] TCP Demo via NodeJS


## HTTP Request Essentials

* The pate that a request typically goes through in most home of office settings:
  * Browser -> Computer -> Router -> ISP -> (Cloud / Internet Nodes) -> Web Server
  * Make a request, receive a response
* HTTP port is :80
* Anatomy of web address (url/uri)
  * e.g. http://google.com/search
  * http - protocol - type of request
  * google - domain
  * com - top-level domain
  * /search?q=Javascript+MDN - resource
    * ?q=Javascript+MDN - query parameters
      * q - key
      * Javascript+MDN - value
      * & - tells us there is a new key-value pair
  * :80 - port

## Client-Server Model
  * Two ends to our communication:
    * Client
    * Server

## Internet Protocol

* Unique identifiers for devices in a network
* IP Address has two standard formats:
  * IPv4: 192.168.0.1
  * IPv6: 2001:db8:3333:4444:5555:6666:7777:8888

## Ports

There are 65,356 ports available on most computers. 0 to 1023 are called the well-known, or system, ports.

* 20 FTP data transfer
* 21 FTP Commands
* 22 SSH
* 25 SMTP
* 53 DNS
* 80 HTTP
* 110 POP3
* 194 IRC
* 443 HTTPS
* 5432 Postgres

## Transport Layers

We're breaking up data transfer into packets.

## User Datagram Protocol (UDP)

* Small header size (8 bytes)
* Connectionless communication (there is no maintenance of connection over time)
* No error recovery (if something corrupt is sent or missed, it is discarded)
* Typically used for low-latency data; stuff that just needs to send
  * Twitch stream
  * Online radio

## Transmission Control Protocol (TCP)

* Larger transmission size (up to 20 bytes)
* Requires ongoing connection; must complete a 3-way handshake confirming sender and receipient 
* Packets are sent / arrive in order
* Corrupt or missing packets are reported to the server so that they may be resent correctly
* Great for guaranteed communication
  * File downloands
  * Web pages

## Hypertext Transfer Protocol (HTTP)

* Application-based layer
* Request-response communication (server waits for a request; sends response)
* HTTP is stateless
* HTTP requests contain a route (resources and verb)

### HTTP Methods

These are officially supported in all HTTP as methods/verbs:
* GET (/ or has query parameters, the request is usually a GET method request)
* POST includes additional data in the request headers

These are supported by some options, but often spoofed:
* PUT/PATCH
* DELETE

These map really well to CRUD operations
* CREATE: POST
* READ: GET
* UPDATE: PUT/PATCH
* DELETE: DELETE

## Paths
Paths are an address representing a resource (data, or a file.) Think `/users/`, `/dinosaurs/`, or a more "specific" path like `user/3`, `/dinosaur/tyrannosaurus` or `/images/porsche.jpg`

## HTTP Status Codes

Status code ranges:
* 100-199 represent information
* 200-299 represent a success
* 300-399 represent a redirection
* 400-499 represent client errors
* 500-599 represent server errors

Common errors include:
* 102: Processing
* 200: OK
* 301: Permanent Redirect
* 302: Temporary Redirect
* 400: Bad Request
* 404: Resource not Found
* 418: I'm a Teapot
* 500: Internal Server Error
* 503: Service Unavailable

## Building a Basic TCP App in NodeJS