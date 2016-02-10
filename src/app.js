const React    = require('react')
const ReactDOM = require('react-dom')

class Board extends React.Component {
  constructor(props) { super(props)
    this.state = {turn:0}
  }

  getRows (i) {
    let rowNodes = []
    for (i-=1; i >= 0; i--) {
      rowNodes[i] = <Row key={i} id={i}/>
    }
    return rowNodes
  }
  render () {

    return <div>{this.getRows(3)}</div>
  }
}

class Row extends React.Component {
  constructor(props) { super(props)
    this.state = {}
  }

  getFields (i) {
    let fieldNodes = []
    for (i-=1; i >= 0; i--) {
      fieldNodes[i] = <Field key={i} id={i} rowKey={this.props.id}/>
    }
    return fieldNodes
  }

  render () {
    return <div>{this.getFields(3)}</div>
  }
}

class Field extends React.Component {
  constructor(props) { super(props)
    this.state = {content:''}
  }

  getStyle () {
    return {
      width:'50',
      height:'50',
      border:'1px solid black',
      display:'inline-block',
      padding:'0',
      margin:'0'
    }
  }

  onClick (fieldKey, rowKey) {
    if (this.state.content === '') {
      console.log('hoi', fieldKey, rowKey)
    }
  }

  render () {
    return (
      <div
        style={this.getStyle()}
        onClick={
          this.onClick.bind(
            this
          , this.props.id
          , this.props.rowKey
          )
        }
      >
        {this.state.content}
      </div>
    )
  }
}

ReactDOM.render(
  <Board />
, document.getElementsByClassName('root')[0]
)
