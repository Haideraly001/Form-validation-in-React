import { useEffect, useState } from "react"
import InputProfiles from "./input"

const Profile = () => {
  const [user, setUser] = useState([])

  const userData = async () => {
    const resp = await fetch("http://localhost:8000/api/v1/form")
    const result = await resp.json()
    console.log(result.data);
    setUser(result.data)
  }

  useEffect(() => {
    userData()
  }, [])

  return (
    <div className="userShow">
      <h1>Haider</h1>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
          </tr>
        </thead>
        {user.map((el) => (
          <tbody>
            <tr key={el.id}>
              <td>{el.name}</td>
              <td>{el.email}</td>
              <td>{el.phone}</td>
              <td>{el.address}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>

  );
}

export default Profile;
