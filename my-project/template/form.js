function Form() {
    var state = {
        email: 'email@example.com',
        password: '123456中文'
    };
    var change = function change(event) {
        console.log(event.target);
        console.log(event.target.value);
        var name = event.target.name;
        state[name] = event.target.value;
    };
    return React.createElement(
        'div',
        { style: { margin: '10% auto', width: '50%' } },
        React.createElement(
            'form',
            { action: 'submit', name: 'FormData', method: 'POST', encType: 'multipart/form-data' },
            React.createElement(
                'div',
                { className: 'form-group row' },
                React.createElement(
                    'label',
                    { htmlFor: 'staticEmail', className: 'col-sm-2 col-form-label' },
                    'Email'
                ),
                React.createElement(
                    'div',
                    { className: 'col-sm-10' },
                    React.createElement('input', { type: 'text', className: 'form-control', name: 'email', id: 'email', value: state.email, onChange: change.bind(this) })
                )
            ),
            React.createElement(
                'div',
                { className: 'form-group row' },
                React.createElement(
                    'label',
                    { htmlFor: 'inputPassword', className: 'col-sm-2 col-form-label' },
                    'Password'
                ),
                React.createElement(
                    'div',
                    { className: 'col-sm-10' },
                    React.createElement('input', { type: 'password', className: 'form-control', name: 'password', id: 'password', value: state.password, onChange: change.bind(this) })
                )
            ),
            React.createElement(
                'div',
                { className: 'form-group row' },
                React.createElement(
                    'label',
                    { htmlFor: 'inputPassword', className: 'col-sm-2 col-form-label' },
                    '\u6587\u4EF6'
                ),
                React.createElement(
                    'div',
                    { className: 'col-sm-10' },
                    React.createElement('input', { type: 'file', className: 'form-control', name: 'image', id: 'image' })
                )
            ),
            React.createElement(
                'div',
                { className: 'form-group row' },
                React.createElement(
                    'div',
                    null,
                    React.createElement('input', { type: 'submit', className: 'btn btn-primary mb-2', value: 'submit' })
                )
            )
        )
    );
}
export default Form;