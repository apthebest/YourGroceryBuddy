import React from 'react'
import {links} from './links'
import {Link, useLinkClickHandler} from 'react-router-dom'
const Sidebar = () => {
  return (
    <aside className='sidebar show-sidebar'>
      <div className="sidebar-header"></div>
        {links.map((link)=>{
          const {url,text}=link;
          return <Link className='link' to={url}>{text}</Link>
        })}
    </aside>
  )
}

export default Sidebar;