import React from 'react';
import Card from './Card';

class Chart extends Card {
    state = {
        redraw: false
    }

    componentDidMount(){
        window.addEventListener('resize', () => {
            this.setState(() => ({ redraw: true}));
        });
    }
    
    render(){}
}

export default Chart;