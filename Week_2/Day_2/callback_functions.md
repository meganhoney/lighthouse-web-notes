# Callbacks

## Topics to cover

- Functions as values
- Intro to anonymous functions
- Function calling vs passing (reference to a function)
- Callback functions and Higher Order functions
  - Why they exist
  - Implementing our own forEach and/or our own filter
- Arrow Functions (and their common use for callback functions)
- Nested scope and "scope chain"

## Agenda
- [x] Real World Scenario
- [x] Synchronous vs Asynchronous: What is a callback?
- [x] How NodeJS works
  - Eventloop
  - Call stack
  - Callback queue
- [] Simple Examples
- [] Useful links

### What is a callback?
A callback function is a function passed into another function as an argument
Can be immediate -> synchronous callback
Or it might happen at a later point in time -> asynchronous callback

### About Node.js
Like removing motor out of the browser & use it outside
Single-threaded & allows asynchronous tasks to be done 
