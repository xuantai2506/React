import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

PostFilterForm.propTypes = {
    onSubmit: PropTypes.func,
};

PostFilterForm.defaultProps = {
    onSubmit: null,
}

function PostFilterForm(props) {
    const { onSubmit } = props;
    const [searchTerm, setSearchTerm] = useState('');
    const typeingTimeoutRef = useRef(null);

    function handChangeValue(e) {
        setSearchTerm(e.target.value);

        if (!onSubmit) return;

        if (typeingTimeoutRef.current) {
            clearTimeout(typeingTimeoutRef.current);
        }

        typeingTimeoutRef.current = setTimeout(() => {
            const formValue = {
                search: e.target.value,
            }
            onSubmit(formValue);
        }, 1000)
    }
    return (
        <form>
            <input type="text" value={searchTerm} onChange={handChangeValue} />
        </form>
    );
}

export default PostFilterForm;