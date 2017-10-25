class GroceryListItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      hover: false
    }
  }

  onMouseEnterHandler() {
    this.setState({
        hover: true
    });
  }

  onMouseLeaveHandler() {
    this.setState({
        hover: false
    });
  }

  render() {
    var style = {
      fontWeight: this.state.hover ? 'bold': 'normal'
    };
    return (
      <li style = {style} onMouseEnter={this.onMouseEnterHandler.bind(this)} onMouseLeave= {this.onMouseLeaveHandler.bind(this)}>{ this.props.item }</li>
    );
  }
};
var List = (props) => (

  <ul>
    {props.items.map(item => <GroceryListItem item = {item} />
      )}
  </ul>
);
var GroceryList = () => (
  
    <div>
    <List items={['Bread', 'Milk']} />
    </div>
);

// var Bread = (props) => (
//   <li>{props.item}</li>
// );

// var Milk = (props) => (
//   <li>{props.item}</li>
// );


ReactDOM.render(<GroceryList />, document.getElementById('app'));
