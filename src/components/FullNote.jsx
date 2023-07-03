import { useLocation } from "react-router-dom"

const FullNote = () => {
const location=useLocation();
  return (
    <div>
        <br />
        <h2>{location.state.title}</h2>
        <br />
        <p>
          {location.state.content}
        </p>
        <table>
          <tr>
            <td><button type="button" class="btn btn-secondary" name="modify">Modify</button></td>
            <td> <button type="submit" class="btn btn-danger" name="delete">Delete</button></td>
          </tr>
        </table>
    </div>
  )
}

export default FullNote