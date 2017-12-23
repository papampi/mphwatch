import React from 'react'

class PayoutEstimate extends React.Component{

    timeBeforePayout = () => {
        return this.props.getRemainingTime(
            this.props.getRemaining() / this.props.getTotalProfit()
        );
    }

    render(){
        return (
            <div className="payout" >
                <h2> Payout </h2>
                {
                    this.props.display ?
                    <div style={{borderTop: '1px solid #eee'}} >
                        <p key={`totalTimeUntilPayout`}> 
                            {"Estimated time: "}
                            { this.timeBeforePayout().days } { this.timeBeforePayout().days == 1 ? " day, " : " days, "} 
                            { this.timeBeforePayout().hours + " hours" } 
                        </p>
                        <p> Amount: ${this.props.readify(this.props.getMinPayout())}</p>
                        <p> Currency: {this.props.getPrimaryCoin() && this.props.getName(this.props.getPrimaryCoin().coin)} </p>
                    </div>
                    :
                    <p>Loading...</p>
                }
            </div>
        );
    }
}

export default PayoutEstimate;