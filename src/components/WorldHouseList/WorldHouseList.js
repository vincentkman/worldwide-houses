import React from 'react';
import House from '../House/House';
import './worldhouselist.scss';
import { worldHouseData } from '../../worldHouseData';

class WorldHouseList extends React.Component {
    constructor() {
        super();
        this.state = {
            houses: worldHouseData
        };
    }

    deleteHouse = (id) => {
        this.setState({
            houses: this.state.houses.filter(house => house.id !== id)
        });
    }

    render() {
        return (
            <div className='worldhouselist'>
                {
                    this.state.houses.map(house => (
                        <House
                            key={house.id}
                            house={house}
                            deleteHouse={this.deleteHouse}
                        ></House>
                    ))
                }
            </div>
        );
    }
}

export default WorldHouseList;