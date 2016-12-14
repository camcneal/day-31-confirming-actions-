import React from 'react';
import ReactDom from 'react-dom';

const Reader = React.createClass({
    getInitialState() {
        return {
            read: false,
            confirm: false
        };
    },
    render() {
      console.log(this.state.read);
        if (this.state.read === false && this.state.confirm === false)
        {
              return (
                <div className = "reader" >
                <p>{this.props.document.body}</p>
                Mark as Read <input  type = "checkbox" onChange = {this.handleCheck} />
                </div>
            );

        } else if (this.state.read === true && this.state.confirm === false) {
          return (
              <div className="modal-background">
                  <div className="modal">
                    <h3> Do you want to mark as read? </h3>
                    <button onClick={this.handleConfirm} className = "confirm"> Confirm </button>
                    <button onClick={this.handleCancel} className = "cancel"> Cancel </button>
                  </div>
                    <p>{this.props.document.body}</p>
                    <span> Mark As Read </span> <input type="checkbox" checked="true" onChange={this.handleCheck} />
                  </div>
            );
          } else if(this.state.read === true && this.state.confirm === true) {
            return (
              <div className="reader">
              <p>{this.props.document.body}</p>
              Read <input type="checkbox" disabled="true" onChange={this.handleCheck}  checked="true" />
              </div>
             );
          }
        },
        handleCheck(e){
          this.setState({
            read: true,
            confirm: false
          });

        },
        handleConfirm(e){
          this.setState({
            read: true,
            confirm: true

          });

        },
        handleCancel(e){
          this.setState({
            read: false,
            confirm: false
          })
        }

});
export default Reader;
