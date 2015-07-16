var React = require('react');
require('./login.less');

var Login = React.createClass({
    login: function() {
        var uname = this.refs.username.value;
        var pwd = this.refs.password.value;
        var msg = uname.length > 1 && uname === pwd ? '登录成功' : '登录失败';
        alert(msg);
    },
    render: function() {
        return (
            <form className="login">
                <p>
                    <label>用户名：</label><input type="text" ref="username"/>
                </p>
                <p>
                    <label>密码：</label><input type="password" ref="password"/>
                </p>
                <button onClick={this.login} className="loginBtn">登录</button>
            </form>
        )
    }
})

module.exports = Login;
