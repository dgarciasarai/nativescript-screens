# Proof of Concept: Nativescript + Liferay Screens

_This is just a proof of concept. It's nothing official in Liferay Inc. If you want to contribute, you can open a pull request and i will review it._

## Installation

* Check your `Node.js` version with `node --version`. If you have at least v6, please go to the third step.
* If you don't have `Node.js` installed, please run `brew update` and `brew install node@6`.
* To install the Nativescript CLI run `npm install -g nativescript`.
* You can verify the installation was successful by running `tns` in your terminal. You should see something like:
  
  ```
  # NativeScript
  
  ┌─────────┬─────────────────────────────────────────────────────────────────────┐
  │ Usage   │ Synopsis                                                            │
  │ General │ $ tns <Command> [Command Parameters] [--command <Options>]          │
  │ Alias   │ $ nativescript <Command> [Command Parameters] [--command <Options>] │
  └─────────┴─────────────────────────────────────────────────────────────────────┘
  
  ```
* Clone this repo in your computer with `git clone git@github.com:dgarciasarai/nativescript-screens.git`.
* Move to the repo folder and run `tns run android` for Android and `tns run ios` for iOS.

![Nativescript in Android](/img/nativescript-android.gif)
![Nativescript in iOS](/img/nativescript-ios.gif)
