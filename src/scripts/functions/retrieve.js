import firebase from "firebase";

const readData = () => {
  firebase
    .database()
    .ref("/clubs")
    .on("value", (snapshot) => {
      const data = snapshot.val();
      for (var i = 0; i < Object.keys(data).length; i++) {
        addRow(Object.values(data)[i].clubName, Object.values(data)[i].clubIG);
      }
    });
};

const addRow = (clubName, clubIG) => {
  const newRow = document
    .getElementsByTagName("table")[0]
    .insertRow(document.getElementsByTagName("table")[0].rows.length);
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  cell1.innerHTML = clubName;
  cell2.innerHTML = clubIG;
};

export default readData;
