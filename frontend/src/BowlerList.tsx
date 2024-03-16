import { useEffect, useState } from 'react';
import { Bowler } from './types/Bowler';

function BowlerList() {
  const [bowlerData, setBowlerData] = useState<Bowler[]>([]);

  useEffect(() => {
    //only fetch data if needed. return empty array otherwise
    const fetchBowlerData = async () => {
      const rsp = await fetch('http://localhost:5090/BowlerInfo');
      const f = await rsp.json();
      setBowlerData(f);
    };
    fetchBowlerData();
  }, []);

  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Team</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {bowlerData.map((f) => (
            <tr key={f.bowlerID}>
              <td>{f.bowlerName}</td>
              <td>{f.teamName}</td>
              <td>{f.address}</td>
              <td>{f.city}</td>
              <td>{f.state}</td>
              <td>{f.zip}</td>
              <td>{f.phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default BowlerList;
