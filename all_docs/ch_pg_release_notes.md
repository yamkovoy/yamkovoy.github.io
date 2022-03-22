---
layout: default
title: Payment Gateway Release Notes
nav_order: 3
has_children: false
parent: Bakong Release Notes
---
# Bakong 3.7.5 Release Notes
###### March ?, 2022

[## About This Release
This release brings a number of long-awaited QR code improvements and some minor quality of life features.

*Not sure if we even need this section.*
*-BY*]:*

## What’s New
### Changes to passwords policy
[BK-2123]:*
As part of a new security protocol, we are implementing the following requirements to user passwords:
- User passwords must be changed every 180 days. Ten days before the password expiration, users will receive a notification reminding them to change their password. After the password is changed, its longevity is reset back to 180 days.
- If a user doesn't change the password on time and it expires, such a user will be forced to change their password the next time they try to log in.
- A password's minimum longevity is one day. Users are not allowed to update their passwords until 24 hours have passed since the last change.
- Old passwords cannot be reused in the span of twelve consecutive password changes.

***

## Bug Fixes
[BK-2202]:*
### Backend: The way the Transaction Processing System treats unstructured XML requests has been reverted to an earlier version
[BK-2178]:*
### Backend: Fixed missing transfer information for certain TRX transactions


[## Known Bugs

*Not sure if we even need this section.*
*-BY*]:*

***

## What's Next
Bakong team is continuously working hard on implementing security and privacy improvements, user interface and availability enhancements, as well as other quality of life features.
Here is a sneak peek at just a few of the features that you may expect in the future:
- International money transfers
- High-end fraud detection system
- Account linking
- General security and stability improvements
