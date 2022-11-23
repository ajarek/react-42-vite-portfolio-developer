import './CardProject.css'
export type Props = {
  path: string
  src: string
  title: string
  technology: string
  id: number
}

const CardProject = ({ path, src, title, technology, id }: Props) => {
  return (
    <div
      className='card-project'
      key={id}
    >
      <a
        href={path}
        target='_blanc'
      >
        <img
          src={src}
          alt={title}
        />
      </a>
      <h2>{title}</h2>
      <p>{technology}</p>
    </div>
  )
}

export default CardProject
