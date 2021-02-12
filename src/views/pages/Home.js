import React from 'react'

export default class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            btn: false
        }
    }
    

    
    render() {
        return (
            <div style={styles.main}>
                <h2>Нажми на кнопку</h2>
                <button style={styles.button} onClick={() => {this.setState({btn: !this.state.btn})}}>{this.state.btn ? "ON": "OFF"}</button>
            </div>
        )
    }
}
const styles = {
    main: {
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: 'center',
    },
    button: {
        background: "white",
        color: "black",
        fontSize: "50px",
        // padding: "20px",
        borderRadius: "50%",
        width: "150px",
        height: "150px",
        outline: "none",
        transition: "1s",
        border: "none",
    }
}
