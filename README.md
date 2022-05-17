# react-swipe-to-delete-ios

A simple React component to reproduce the way iOS deletes an item in a list.
[Demo](https://arnaudambro.github.io/react-swipe-to-delete-ios)

![GIF Demo](./demo.gif?raw=true "Title")

Config very much insipred by [this post](https://dev.to/alexeagleson/how-to-create-and-publish-a-react-component-library-2oe)

## Installation

```
npm i --save react-swipe-to-delete-ios
```

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
  // optional
  height={50} // default
  transitionDuration={250} // default
  deleteWidth={75} // default
  deleteColor="rgba(252, 58, 48, 1.00)" // default
  deleteText="Delete" // default
  deleteComponent={<DeleteComponent/>} // not default
  disabled={false} // default
  rtl={false} // default
>
  {children}
</SwipeToDelete>
```

## Props

| Prop               | Type        | Default                                    |
| ------------------ | ----------- | ------------------------------------------ |
| **onDelete**       | function    | _required_                                 |
| height             | number      | 50                                         |
| transitionDuration | number (ms) | 250                                        |
| deleteWidth        | number (px) | 75                                         |
| deleteColor        | string      | "rgba(252, 58, 48, 1.00)"                  |
| deleteText         | string      | "Delete" (_deleteText or deleteComponent_) |
| deleteComponent    | node        | null (_deleteText or deleteComponent_)     |
| disabled           | bool        | false                                      |
| rtl                | bool        | false                                      |

## Changelog

- v2: rewrite the whole lobrary: remove `styled-components`, rewrite in Hooks, `height` is now optional.
