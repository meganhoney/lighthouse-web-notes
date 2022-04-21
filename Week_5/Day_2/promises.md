# Promises

## Agenda
- [x] Why Promises - Callback hell
- [x] Introduction to promises
- [x] Creating our own promises
- [x] Simple examples

### Callback hell
```javascript
higherOrderFunction((dataOne) => {
  callbackTwo((dataTwo) => {
    callbackThree((dataThree) => {
      // do something
    });
  });
});
```

```javascript
higherOrderFunction()
  .then(dataOne => callbackTwo(dataOne))
  .then(dataTwo => callbackThree(dataTwo))
  .then(dataThree => callbackFour(dataThree))
```