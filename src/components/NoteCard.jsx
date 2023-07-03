import { useNavigate } from "react-router-dom"

const NoteCard = ({note}) => {
  const navigate=useNavigate();
  const viewFullPage=(note)=>{
        navigate('/expand',{state:note});
  }
  return (
    <>
    <br />
    <div class="card">
    <div class="card-body">
      <h5 class="card-title">{note.title}</h5>
      <p class="card-text">{note.content}</p>
      <a href="" class="btn btn-primary" onClick={()=>viewFullPage(note)}>EXPAND</a>
    </div>
    <div class="card-footer text-muted">
            time:
       dtime
    </div>
</div>
</>
  )
}

export default NoteCard