##React_Learn

* 所有组件类都必须有自己的`render`方法
* 组件类的第一个字母必须**大写**
* 组件类只能包含**一个**顶层标签,否则报错
* 组件的属性可以在组件类的`this.props`对象上获取
* 在添加组件属性,`class`属性写成`className`,`for`属性写成`htmlFor`
		
		var HelloMessage = React.createClass({
	        render:function(){
	          return <h1 className={this.props.class}>Hello {this.props.name}</h1>;
	        }
	        });
* `this.props`对象的属性与组件的属性一一对应，但是`this.props.children`属性。表示组件的所有子节点
* `this,props.children`，如果当前组件没有子节点的时候，他就是`underfined`;如果有一个子节点,数据类型为`object`,若是多个子节点,则数据类型为`array`.
* `React`提供`React.Children`来处理`this.props.children`,可以用`React.Children.map`来便利子节点
* 组件类的`proptypes`属性,[官方文档](http://facebook.github.io/react/docs/reusable-components.html)，用来验证组件实例的属性是否符合要求

		var data = 123;

	    var MyTitle = React.createClass({
	      propTypes:{
	        title:React.PropTypes.string.isRequired //必须是字符串
	      },
	      render:function(){
	        return <h1>hello,{this.props.title}</h1>
	      }
	    });
	
	    ReactDOM.render(
	      <MyTitle title={data}></MyTitle>,
	      document.getElementById('example')
	      )
	 
* 组件(组件类的实例),组件并不是真实的DOM,而是存在于内存之中的数据结构,称为虚拟DOM(Virtual DOM),只有在插入文档之后，才会变成真实的DOM,而且都先在虚拟 DOM 上发生，然后再将实际发生变动的部分，反映在真实 DOM上.
* **获取真实的DOM**需要用到`ref`属性



			var MyComponent = React.createClass({
	        handleClick:function(){
	          console.log(this.refs);
	          this.refs.textInput.focus()
	        },
	        render:function(){
	          return (
	            <div>
	            <input ref="textInput" type="text"/>
	            <input type="button" onClick={this.handleClick} value="click me" />
	            </div>
	            )
	        },
	      });
	
	      ReactDOM.render(
	        <MyComponent></MyComponent>,
	        document.getElementById('example')
	        )
	      
* **`this.state`**

	* getInitialState 用于初始化状态,也是一个对象, 对象可以通过`this.state`来调用
	* `this.setState`用于修改状态值,并且在每次修改后会自动调用`this.render`方法,再次渲染页面
	
* `this.state`和`this.props`的**区别**
	
   前者会随用户互动而改变的特性,后者是表示那些一旦定义就不再改变的特性


* 事件里面都会有一个`event`对象
* **`组件的生命周期`**

	* 三个状态
	
		* Mounting 已插入真实的DOM
		* Updating 正在被重新渲染 
		* Unmounting 已移出真实DOM
	* 五种处理函数   `will`表示进入状态之前调用 `did`表示进入状态之后调用
	
		* componentWillMount()
		* componentDidMount()
		* componentWillUpdate(object nextProps,object nextState)
		* componentDidUpdate(object prevProps,object prevState)
		* componentWIllUnmount()
		
	* 两个特殊的处理函数
		
		* componentWillReceiveProps(object nextProps) 已加载组件收到新的参数时调用
		* shouldComponentUpdate(object nextProps,object prevProps)组件判断是否重新渲染时调用
	* 组件的`style`属性的设置方式，要写成`style={{opacity:this.state.opacity}}`
	
