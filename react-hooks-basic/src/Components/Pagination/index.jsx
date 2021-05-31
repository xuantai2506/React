import React from 'react';
import PropTypes from 'prop-types';

Pagination.propTypes = {
    pagination: PropTypes.object,
    onChangePage: PropTypes.func,
};

Pagination.defaultProps = {
    onChangePage: {},
}

function Pagination(props) {
    const { pagination, onChangePage } = props;
    const { _limit, _page, _totalRows } = pagination;
    const pageEnd = Math.ceil(_totalRows / _limit);

    function handleChangePage(newPage) {
        if (onChangePage) {
            onChangePage(newPage)
        }
    }

    return (
        <div>
            <button
                disabled={_page <= 1}
                onClick={() => { handleChangePage(_page - 1) }}
            >
                Prev
            </button>
            <button
                disabled={_page >= pageEnd}
                onClick={() => { handleChangePage(_page + 1) }}
            >
                next
            </button>
        </div>

    );
}

export default Pagination;