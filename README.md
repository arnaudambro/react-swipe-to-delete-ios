# react-swipe-to-delete-ios

A simple React component to reproduce the way iOS deletes an item in a list.
[Demo](https://arnaudambro.github.io/react-swipe-to-delete-ios)

![GIF Demo](./src/demo/demo.gif?raw=true "Title")


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
  deleteColor="rgba(252, 58, 48, 1.00)" // default
  deleteText="Delete" // default
  deleteComponent={<DeleteComponent/>} // not default
  disabled={false} // default
>
  {children}
</SwipeToDelete>
```

## Props

Prop | Type | Default
--- | --- | ---
**onDelete** | function | _required_
**height** | number | _required_
transitionDuration | number (ms) | 250
deleteWidth | number (px) | 75
deleteColor | string | "rgba(252, 58, 48, 1.00)"
deleteText | string | "Delete" (_deleteText or deleteComponent_)
deleteComponent | node | null (_deleteText or deleteComponent_)
disabled | bool | false


## Todo

- [ ] Tests
- [ ] Browser compatibility check
