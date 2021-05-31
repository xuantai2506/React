import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};
TodoForm.defaultProps = {
    onSubmit: null,
}
function TodoForm(props) {
    const [value, setValue] = useState('')
    const { onSubmit } = props;

    function handleValueChange(e) {
        setValue(e.target.value);
    }
    function handleTodoFormSubmit(e) {
        e.preventDefault();
        if (!onSubmit) return;
        const valueForm = {
            title: value,
        }
        onSubmit(valueForm);
        setValue('');
    }
    return (
        <form onSubmit={handleTodoFormSubmit}>
            <input type="text" value={value} onChange={handleValueChange} />
        </form>
    );
}

export default TodoForm;