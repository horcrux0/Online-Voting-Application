

//electionresults
import React from "react";
import styles from "../styles/Home.module.css";
import LeftSideBarRunningElection from "../components/Leftsidebarrunningelection";



export default class RunningElection extends React.Component {
    state = {
        loading: true,
        result: [],
        result1: []
    };

    async componentDidMount() {
        const url = "http://localhost:3000/runningElection";
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);

        // let obj = JSON.stringify(data);
        // console.log(data[0].Record.electionName);
        this.setState({ result: data })
        //this.setState({result1:data.Record}) //[0].Record.electionName})
        // this.setState({result:data[0].Record.finalResult})

        //  console.log(data[0].Record.finalResult);

        //this.setState({ Key: data.Key[0], loading: false });
    }

    render() {


        if (!this.state.result.length) {
            return (
                <div>
                    <LeftSideBarRunningElection />
                    <div className={styles.card2}>No running elections......</div>;
                </div>
            );
        }

        return (
            <div>
                <LeftSideBarRunningElection/>
                <div>
                {this.state.result.map(r => (
                    <div className={styles.card22} key={r.Record.key}>
                        <div>Election Name: {r.Record.electionName}</div>
                        <div>Election Id:  {r.Record.electionId}</div>
                        <div>Number of Candidate:  {r.Record.candidateNumber}</div>

                    </div>


                ))

                }
            </div>
            </div>
        );

    }
}
