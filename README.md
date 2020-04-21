# Mobile Intern Test Driven Development Tutorial
This tutorial was created to introduce incoming mobile interns to react-native development

## Getting Started

### Installing
* Install XCode -- Install from macOS App Store (optional for testing on iPhone)
* [Android Studio](https://developer.android.com/studio/)
* [Node.js v8.x](https://nodejs.org/dist/latest-v8.x/)
* NPM v6.4.1 (After installing Node.js v8.x run this command `npm install --global npm@6.4.1`)
* [Homebrew](https://brew.sh/)
* CocoaPods (Don't install with Homebrew use `sudo gem install cocoapods -v 1.6.1`)
* Watchman (After installing Homebrew run brew install watchman)
* [Reactotron](https://github.com/infinitered/reactotron/releases) (optional for debugging)
* A text editor/IDE of your choice
    * We use [Visual Studio Code](https://code.visualstudio.com/)
* ES Lint (optional. This is what we use to standardize the format of our code)
    * if you are using VSCode follow the steps in the tips section to install
### Setup
* Clone the Repo
    ```
    git clone https://github.com/QueenOfInterns/Test-Driven-Development-Project-Mobile.git
    ```
* Run these commands
    ```
    npm install
    npm run pods
    ```
* (If console shows xcrun: error: SDK "iphoneos" cannot be located, try `sudo xcode-select --switch /Applications/Xcode.app` and then run `npm run pods` again.)
* To build on simulator
    ```
    npm run ios (to run iphone)
    npm run android (to run android)
    ```
* (If console shows Could not find iPhone X simulator or similar, follow #1 answer [here](https://stackoverflow.com/questions/54504076/react-native-run-ios-returns-error-could-not-find-iphone-x-simulator).)

## Tutorial
### Overview
* You can check if your tests pass anytime by using `npm run test`
   * This will output which tests pass, which tests fail and why for the whole app
   * If you would like to only run a test for one screen, use `npm run test Screen#` where # is the number of the screen you would like to check (there should be no space between Screen and the number)
* To check your code and unlock the next tab run npm `run checkTest #` where # is the screen you would like to check (there must be a space between checkTest and the number)
   * For example: `npm run checkTest 1` will check screen 1 and unlock screen 2 if all of screen 1’s tests pass
   * This will not output the results of the tests

### Screen1

* Welcome to the first screen of the Test Driven Development App! The purpose of this first screen is to get you acquainted with the format of our app and getting started with unit testing. 
* The first test is testing a simple “Hello World” Text tag within a View element. To do this, the test uses Snapshot testing. Here is a link that can help you get familiar with Snapshot testing: https://jestjs.io/docs/en/snapshot-testing.
    * Here is the path of the Snapshot tests:  /Test-Driven-Development-Project-Mobile/src/screens/Screen1/\_\_snapshots\_\_
        * Within the src/screens/ folder, each screen has its own folder that contains each Screen and its respective test. E.g. Screen1 contains Screen1.js and Screen1.test.js.
    * __Snapshot testing__: an easy way to check on changes in a component's output. The test renders a given component when it is first run and stores the output in a file. This output gets committed next to the code. Each time the test is run after that, the component is rendered again and the new output is compared with the version that we had previously stored.
    * __Describe statements__ and __it statements__ are used as headings to describe different sections that are being tested. __Describe__ breaks your test into sections and describes what is being tested. __It__ is used to describe what this specific section of the code is being tested for. In our Hello World test example, the __describe__ lets the programmer know that the “Hello World Screen” is being tested and the __it__ is describing what we are testing for: that the screen ‘renders correctly’. 

![picture](images/Snapshot1.png)

* The image above is an example of a Snapshot that is generated from the Hello World test on the first screen. Using this Snapshot, we are able to figure out what code would we need to implement that would make our Hello World test pass. Snapshots are used to test components, so we know that we need to implement our Hello World code in a component.
    * The Snapshot shows a View tag that contains a Text tag with the string “Hello World!” in it. It also contains styling which is included in the View tag. 
        * With this information, we can see that the code that we need to develop needs to be a component that has a Text tag within a View tag, like the code below.
![picture](images/Screen1.png)

## Tips
* To install ES Lint in VSCode:
![picture](images/ESLint.png)
    * Open VSCode, go to the bottom icon (the four squares) in the menu on the top left. Search ESLint in the search box and click on ESLint. Click the green install button. You may have to enable it after it installs if it does not automatically enable.
* [Integrated terminal in VSCode](https://code.visualstudio.com/docs/editor/integrated-terminal)
    * This can be used so you don’t have to have another window open to run the npm commands
* You can use `npm i` instead of `npm install`

## Common Pitfalls
* Whenever you make a big change (like adding packages) or the build seems to be failing for no reason (specifically with the error “react native version mismatch), close the terminal with the bundler and run
    ```
    npm i
    npm run pods
    npm run ios (or npm run android)
    ```
* If your npm commands are failing and you don’t know why. Try removing package-lock.json (rm package-lock.json) then run
    ```
    npm i
    npm run pods
    ```
