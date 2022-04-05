# Test-Driven Development with Mocha and Chai

## Agenda
- [x] Manual vs Automated Testing
- [x] Test-Driven Development cycle
- [x] Assertions (`console` and NodeJS `assert`)
- [x] Modules in NodeJS; Getting Files to Share
- [x] NPM and Using External Libraries
- [x] Mocha Test Runner
- [x] Ignoring Files and/or Folders with `.gitignore`
- [x] Chai Assertion Library

## Manual vs Automatic

### Manual Testing
* Easier to set up and use
* Anyone can do it (to varying degrees depending on understanding)
* Recording results can be inconsistent, especially with multiple people
* Almost always used in some degree during development

### Automated testing
* Save money and time in the long run 
* Require time to set up
* Increased coverage
* Easily repeatable 
* Result accuracy (no human error)
* Encourages modularity (easier to use portions of code elsewhere)

## Test-Driven Development
An approach to software projects and development that places priority on writing test cases before code.
1. Write a test (or tests) that confirms the feature is working correctly
2. Write the code for the feature, ensuring it passes the test
3. Refactoring (cleaning up code, removing extras, comments, logs, etc.)

## Improving Code Quality
1. Refactoring
  * Removing extraneous comments
  * Removing extra logging
  * Consistent tabs/whitespace
  * Lots of small changes are possible to make code a little bit faster and easier to read
2. Consider object-oriented approach for modularity, or breaking repeated tasks into functions
3. Testing (manual or automated)
4. Error handling

## NPM
* `package.json`
  - automated command line interface for creating this file
  - javascript object detailing all packages necessary
  - `npm init` creates `package.json`
* `npm install package-name`
  - installs in present working directory
* `npm install --save-dev package-name`
  - development cycle only package
  - e.g. tests (end user doesn't need the tests)
* `npm install --global package-name`
  - global flag (take caution)