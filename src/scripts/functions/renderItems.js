import React from "react";
import firebase from "firebase";
import Item from "../../components/item";
import { Row } from "react-bootstrap";

class RenderItems extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          clubName: "",
          clubIG: "",
        },
      ],
    };
  }
  getData() {
    const data = [];
    return firebase
      .database()
      .ref("/clubs")
      .on("value", (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          const allData = childSnapshot.val();
          const completeData = {
            clubName: allData.clubName,
            clubIG: allData.clubIG,
          };
          data.push(completeData);
        });
        this.setState({ data });
      });
  }

  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <Row className="justify-content-around">
        {this.state.data.map((club, index) => {
          return (
            <Item key={index} clubName={club.clubName} clubIG={club.clubIG} />
          );
        })}
      </Row>
    );
  }
}
export default RenderItems;
