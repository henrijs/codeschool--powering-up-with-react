class Demo extends React.Component {
  render() {
    const things = ['one', 'two', 'three', 'four'];
    return(
      <section className="demo-contents">
        <h3>Demo of super simple React setup.</h3>
        <ul>
          {things.map(thing => <li>{thing}</li>)}
        </ul>
      </section>
    );
  }
}

ReactDOM.render(
<Demo />, document.getElementById('demo')
);