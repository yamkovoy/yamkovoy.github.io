---
layout: default
title: Android Release Notes
nav_order: 1
has_children: false
parent: Bakong Release Notes
---
# Bakong 3.7.5 Release Notes
###### March ?, 2022

## About this release
This release brings a number of long-awaited QR code improvements and some minor quality of life features.

## What’s New
### Transaction status tracking
It is now possible to track the current status of your deposit or wallet-to-wallet transactions in real time.

### New precautionary notifications
When attempting to send money to unverified Bakong users, you will be warned of the daily limit for money transfers to such individuals. However, if the intended receiver of your money transfer is blocked, you wouldn't be able to proceed with the transfer, and a corresponding warning message will appear on your screen.

### Successful transactions via Corporate QR codes are non-repeatable
In the past, if you scanned a QR code to tranfer money, you were able to resend money to the same vendor through the `<Transaction details>` screen without scanning the QR code again. This resulted in specific verification data missing from the transaction details. From now on, for security reasons, you would need to rescan the QR code.

### Ability to send money to a non-existent account is restricted
In the past, you might have tried to tranfer money to a specific account only to be greeted with the «Account not found» error message. Accidentally pressing the `<Continue>` button resulted in money being withdrawn nonetheless. We removed the ability to proceed with such a payment, so your money is safely secured from accidents like this one.
All of the money lost this way were urgently returned to their owners.

### Corporate QR codes with locked currency
If you have set up a corporate QR code for incoming payments, the customer can no longer change the currency of the money tranfer.

### Corporate QR codes with unspecified amount
If you're running a business and would like to set up a single corporate QR code for a variety of incoming payments, you can now do so and allow the sender to specify the amount paid themselves. There's no need to set up multiple QR codes for different services or products anymore, just inform the customer of the final price, they will do the rest.

### Banks are sorted in alphabetical order
The list of banks to send your deposit to is now neatly sorted in alphabetical order.

### Highlighting registered users
Remember how you couldn't tell if a person on your `<Contact>` list were a registered Bakong user? You can now turn on a filter which highlights your contacts with a registered account.

## Bug Fixes
### When attempted to exchange currencies, the Confirmation button was inactive
This made you unable to spend your hard-earned money on buying foreign currencies. This is no more. Feel free to spend as much as you like on a currency of your choice.

## Known Bugs

*Not sure if we even need this section at this point*

## What's Next
Bakong team is continuously working hard on implementing security and privacy improvements, user interface and availability enhancements, as well as other quality of life features.
Here is a sneak peek at just a few of the features that you may expect in the future:
- International money transfers
- High-end fraud detection system
- Account linking
- General security and stability improvements
