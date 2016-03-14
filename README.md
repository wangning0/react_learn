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

	
