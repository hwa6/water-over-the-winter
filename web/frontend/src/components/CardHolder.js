import React from 'react';
import axios from 'axios';
import Card from './Card';
import pottedplant from '../images/pottedplant.png';
import cactus from '../images/cactus.png';
import flower from '../images/flower.png';
import palmtree from '../images/palmtree.png';

//TODO: Add margin to top of card such that it still has spacing when opened on mobile/small screens

class CardHolder extends React.Component {
  componentDidMount() {
    var data = JSON.stringify({
      collection: 'plants',
      database: 'wateroverthewinter',
      dataSource: '264FinalProject',
      projection: {
        _id: 1,
      },
    });

    var config = {
      method: 'post',
      url: 'https://data.mongodb-api.com/app/data-lbnlh/endpoint/data/beta/action/findOne',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key':
          'dl2EuUUMSkyvASl61mwtenn3dE0NTqO2kHJhUbfNzmruBwrdYISI4r0Ndt6BLmEU',
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="CardHolder">
        <Card plantID="1" plantPhoto={pottedplant}></Card>
        <Card plantID="2" plantPhoto={cactus}></Card>
        <Card plantID="3" plantPhoto={flower}></Card>
        <Card plantID="4" plantPhoto={palmtree}></Card>
      </div>
    );
  }
}
export default CardHolder;
