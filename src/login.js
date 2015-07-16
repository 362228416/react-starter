var React = require('react');
require('./login.less');

var Login = React.createClass({
    submit: function(e) {
        e.preventDefault();
        var uname = this.refs.username.value;
        var pwd = this.refs.password.value;
        if (uname.length < 1 || uname != pwd) {
            alert('登录失败');
            return;
        }
        $.getJSON('package.json', function(data){
            alert('欢迎登录' + data.name);
        }, 'post');
    },
    render: function() {
        return (
            <form className="login" onSubmit={this.submit}>
                <p>
                    <label>用户名：</label><input type="text" ref="username"/>
                </p>
                <p>
                    <label>密码：</label><input type="password" ref="password"/>
                </p>
                <button className="loginBtn">登录</button>
            </form>
        )
    }
})

module.exports = Login;
