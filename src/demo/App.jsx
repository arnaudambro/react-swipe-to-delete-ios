
import React from 'react'
import { GlobalStyle, Container, Item, Dot } from './styles'
import SwipeToDelete from '../lib'

const itemHeight = 50;

const color = () => Math.ceil(Math.random() * 250);

class App extends React.Component {
  state = {
    items: [
      {
        content: 'Item 1',
        color: `rgba(${color()}, ${color()}, ${color()}, 1)`
      },
      {
        content: 'Item 2',
        color: `rgba(${color()}, ${color()}, ${color()}, 1)`
      },
      {
        content: 'Item 3',
        color: `rgba(${color()}, ${color()}, ${color()}, 1)`
      },
      {
        content: 'Item 4',
        color: `rgba(${color()}, ${color()}, ${color()}, 1)`
      },
      {
        content: 'Item 5',
        color: `rgba(${color()}, ${color()}, ${color()}, 1)`
      },
      {
        content: 'Item 6',
        color: `rgba(${color()}, ${color()}, ${color()}, 1)`
      },
      {
        content: 'Item 7',
        color: `rgba(${color()}, ${color()}, ${color()}, 1)`
      },
      {
        content: 'Item 8',
        color: `rgba(${color()}, ${color()}, ${color()}, 1)`
      },
      {
        content: 'Item 9',
        color: `rgba(${color()}, ${color()}, ${color()}, 1)`
      },
      {
        content: 'Item 10',
        color: `rgba(${color()}, ${color()}, ${color()}, 1)`
      },
      {
        content: 'Item 11',
        color: `rgba(${color()}, ${color()}, ${color()}, 1)`
      },
      {
        content: 'Item 12',
        color: `rgba(${color()}, ${color()}, ${color()}, 1)`
      },
      {
        content: 'Item 13',
        color: `rgba(${color()}, ${color()}, ${color()}, 1)`
      },
      {
        content: 'Item 14',
        color: `rgba(${color()}, ${color()}, ${color()}, 1)`
      },
    ]
  }

  handleDelete = itemToDelete => this.setState(({ items }) => ({ items: items.filter(item => item !== itemToDelete) }))

  render() {
    return(
      <Container>
        <GlobalStyle />
        {this.state.items.map(item => (
          <SwipeToDelete key={item.content} height={itemHeight} onDelete={() => this.handleDelete(item)}>
            <Item itemHeight={itemHeight}>
              <Dot
                itemHeight={itemHeight}
                color={item.color}
              />
              <span>{item.content}</span>
            </Item>
          </SwipeToDelete>
        ))}
      </Container>
    )
  }
}

export default App;
