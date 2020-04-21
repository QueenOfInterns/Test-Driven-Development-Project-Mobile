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

## Tips
* To install ES Lint in VSCode:
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
