# Google Meet Account Switcher - Chrome Extension <!-- omit in toc -->

Quickly switch between multiple accounts in Google Meet. <br/>
Using google's `Switch Account` feature in google meet takes us to a new page where we select another account and then we are redirected to google meet. This extension lets us switch our account with just 2 clicks and 1 page refresh.

- [Setup](#setup)
- [Installation](#installation)
- [Demo](#demo)

## Setup

1. Download the zip from [here](https://github.com/arindamlahiri/google-meet-account-switcher/raw/main/google-meet-account-switcher.zip) and extract it
2. All the account details are in `accounts.js`. You can edit the details in this file.
3. `displayName` : This is the name by which your account will show up in the extension.
4. `authuser`: In most google apps, google uses a system of numbering our accounts. `0` being the number for the default account in chrome, then `1`,`2` and so on for each account added. For the accounts you want to switch between, you need to know this number. To find out, just go to [https://meet.google.com](https://meet.google.com). In the top right, whichever account shows up that is your default account (numbered `0`). Then click on your display picture and switch to another account. Now in the address bar you would have something like `?authuser=x`. x is the number we need.
5. Repeat step 4 for all the accounts you want to switch between. You can add or remove accounts in `accounts.js`. Make sure to follow the same format.

Here's how my `accounts.js` file looks like(Note: I don't use my default account for google meet, hence no `authuser:0` for me) : <br/>
![accounts.js](./example.PNG)

## Installation

1. In chrome, go to `chrome://extensions/`
2. [Top right] Turn on developer mode
3. [Top left] Click on `Load unpacked` and choose the extracted folder
4. Make sure to pin this extension if it does not show up in extensions tray.
5. Go to any google meet link and use the extension.

## Demo
