const Records = (props) => {
  return (
    <div class="container"  style = {{ height:"400px", overflow : "auto"}}>
      <table class="table table-dark">
        <thead>
          <tr>
            <th>Voltage</th>
            <th>Current</th>
            <th>Distance</th>
            <th>Duration</th>
            <th>Power</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((object) => {
            return (
              
                <tr>
                  <td>{object.Voltage}</td>
                  <td>{object.Current}</td>
                  <td>{object.Distance}</td>
                  <td>{object.Duration}</td>
                  <td>{object.Power}</td>
                </tr>
              
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Records;
