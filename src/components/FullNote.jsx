import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom";

const FullNote = () => {
const location=useLocation();
const navigate=useNavigate();

  const onClickEditButton=()=>{
      navigate('/edit',{state:location.state});
  }

  const onClickDeleteButton=async ()=>{
      const resp=await fetch('http://localhost:8000/delete',{
        method:'DELETE',
        headers:{
          'email':location.state.email,
          '_id':location.state._id
        }
      });
      console.log(resp.json());
      navigate("/");
  }
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
            <td><button type="button" class="btn btn-secondary" name="modify" onClick={onClickEditButton}>Modify</button></td>
            <td> <button type="submit" class="btn btn-danger" name="delete" onClick={onClickDeleteButton}>Delete</button></td>
          </tr>
        </table>
    </div>
  )
}

export default FullNote