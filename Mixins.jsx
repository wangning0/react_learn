var LoginMixin = React.createClass({
	componentWillMount:function(){
		console.log('hello!');
	}
});

var MyComponent = React.createClass({
	mixins:[LoginMixin],
	componentWillMount:function(){
		console.log('world');
	},
	render:function(){
		return (<div>React!</div>)
	}
});

ReactDOM.render(
	<MyComponent/>,
	document.getElementById('example')
	)