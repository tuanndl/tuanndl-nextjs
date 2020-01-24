import React, { Component } from 'react';
import './Pagination.css';
import PropTypes from 'prop-types';

class Pagination extends Component {
    changePage = (page) => {
        this.props.changePage(page);
    };

    render() {
        if (this.props.isLoading && this.props.total === 0) {
            return null;
        }

        if (this.props.total === 0) {
            return <div className='text-center no-data'><p>No data</p></div>;
        }

        if (this.props.total <= this.props.numberItem) {
            return null;
        }
        const max = Math.ceil(this.props.total / this.props.numberItem);
        const elmPage = [];

        // END
        let end = 1;
        if (this.props.page + 2 <= max) {
            end = this.props.page + 2;
        } else if (this.props.page + 1 <= max) {
            end = this.props.page + 1;
        } else {
            end = this.props.page;
        }

        // START
        let start = 1;
        if (end - 5 >= 0) {
            start = end - 4;
        } else if (end - 4 >= 0) {
            start = end - 3;
            if (end + 1 <= max) {
                end += 1;
            } else {
                end = max;
            }
        } else if (end - 3 >= 0) {
            start = end - 2;
            if (end + 2 <= max) {
                end += 2;
            } else {
                end = max;
            }
        } else if (end - 2 >= 0) {
            start = end - 1;
            if (end + 3 <= max) {
                end += 3;
            } else {
                end = max;
            }
        } else if (end - 1 >= 0) {
            start = end;
            if (end + 4 <= max) {
                end += 4;
            } else {
                end = max;
            }
        }
        let active = '';
        for (let i = start; i <= end; i += 1) {
            if (this.props.page !== i) {
                active = '';
            } else {
                active = 'active';
            }
            elmPage.push(<p key={i} onClick={() => this.changePage(i)} className={active}>{i}</p>);
        }

        return (
            <div className='page_account'>
                {elmPage}
                <p className='active' style={{ cursor: 'auto' }}>{this.props.page}/{max}</p>
            </div>
        );
    }
}

Pagination.propTypes = {
    total: PropTypes.number.isRequired,
    numberItem: PropTypes.number.isRequired,
    page: PropTypes.number,
    isLoading: PropTypes.bool,
    changePage: PropTypes.func,
};

export default Pagination;
