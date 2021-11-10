import {Link} from 'react-router-dom'
export default function StyledLink({children,to}){
  return <Link to={to} style={{textDecoration:'none',color:'black',fontSize:'24px',border:'2px solid grey'}}>{children}</Link>
}