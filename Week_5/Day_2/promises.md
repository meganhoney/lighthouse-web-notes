# Promises

## Agenda
- [] Why Promises - Callback hell
- [] Introduction to promises
- [] Creating our own promises
- [] Simple examples

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