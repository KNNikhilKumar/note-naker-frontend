import { useNavigate } from "react-router-dom"

const NoteCard = ({note}) => {
  const navigate=useNavigate();
  const viewFullPage=(note)=>{
        navigate('/expand',{state:note});
  }
  const getDate=(metaData)=>{
    const meta=metaData;
    const split=meta.split(',');
    return split[0];
  }
  const getTime=(metaData)=>{
    const meta=metaData;
    const split=meta.split(',');
    const time=split[1].split('GMT');
    return time[0].trim();
  }
  return (
    <>
    <br />
    <div class="card">
    <div class="card-body">
      <h5 class="card-title">{note.title}</h5>
      <p class="card-text">{(note.content.length>250)?(note.content.substring(0,250)+"..."):(note.content)}</p>
      <a href="" class="btn btn-primary" onClick={()=>viewFullPage(note)}>EXPAND</a>
    </div>
    <div class="card-footer text-muted">{`${getDate(note.metaData)} \t ${getTime(note.metaData)}`}
    </div>
</div>
</>
  )
}

export default NoteCard