# react-swipe-to-delete-ios

A simple React component to reproduce the way iOS deletes an item in a list.
[Demo](https://arnaudambro.github.io/react-swipe-to-delete-ios)


## Installation

```
yarn add react-swipe-to-delete-ios
```

## Usage

```js
import React from 'react'
import SwipeToDelete from 'react-swipe-to-delete-ios'

...

<SwipeToDelete
  onDelete={handleDelete} // required
  height={100} // required
  // optional
  transitionDuration={250} // default
  deleteWidth={75} // default
  deleteColor'rgba(252, 58, 48, 1.00)' // default
  deleteText='Delete' // default
>
  {children}
</SwipeToDelete>
```
