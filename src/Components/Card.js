import React from 'react'
function Card(props){
    const classes = 'card ' + props.className; // If we dont write this line then whatever css we apply through our custom component (in ExpenseItems 27 line it will not be applied) so to use css provided in our own custom tag will be applied
    //if no className is provided where we have use this component then whatever is return in single inverted comma will be take as default
    // return <div className="card">{props.children}</div>
    return <div className={classes}>{props.children}</div>
}
export default Card