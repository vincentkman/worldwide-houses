import React from 'react';
import './house.scss';

class House extends React.Component {
    constructor() {
        super();
        this.state = {
            detail: false
        };
    }

    detailHandler = () => {
        this.setState({
            detail: !this.state.detail
        });
    }


    render() {
        let { id, country, img, description } = this.props.house;
        let expandDetail = (detail) => {
            return detail === true ? <p>{description}</p> : null
        }

        return (
            <div id='home' className='house'>
                <div className='house-container'>
                    <img src={img} alt='World Houses' className='house-container-images' />
                    <span onClick={() => this.props.deleteHouse(id)} className='house-container-close-btn'>
                        <i className='fas fa-window-close' />
                    </span>
                </div>
                <div className='house-detail'>
                    <h2 className='house-detail-title'>{country}</h2>
                    <h3 className='house-detail-block'>
                        Detail
                        <span onClick={this.detailHandler}>
                            <i className='fas fa-caret-square-down' />
                        </span>
                    </h3>
                    {
                        expandDetail(this.state.detail)
                    }
                </div>
            </div>
        );
    }
}

export default House;