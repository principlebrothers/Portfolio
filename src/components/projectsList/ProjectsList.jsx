import './ProjectsList.scss'

function ProjectsList({id, title, active, setSelected}) {
  return (
    <li className={active?'project__list active': 'project__list'} onClick={()=> setSelected(id)}>{title}</li>
  )
}

export default ProjectsList