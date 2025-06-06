import React, { Component } from 'react';

class ChildComponent extends Component {
    render() {
        console.log('props',this.props);
        let { name, age , arrJob } = this.props; 
        return (
            <div>
                {name} - {age}
                 {
                        arrJob && arrJob.length > 0 ? (
                            arrJob.map((item) => {
                                console.log('item.id:', item.id); 
                                return (
                                    <div key={item.id}>
                                        {item.title} - {item.salary}
                                    </div>
                                );
                            })
                        ) : (
                            <p>No jobs available</p>
                        )
                    }
            </div>
        );
    }
}

export default ChildComponent;