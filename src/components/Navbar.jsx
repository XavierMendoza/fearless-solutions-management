import { useRef, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import Brand from './Brand'
import { businessInfo, navigation } from '../data/businessInfo'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const toggle = useRef(null)
  function onKeyDown(event) {
    if (event.key === 'Escape' && open) {
      setOpen(false)
      toggle.current?.focus()
    }
  }
  return <header className="site-header" onKeyDown={onKeyDown}>
    <div className="container nav-bar">
      <Brand />
      <button className="menu-toggle" ref={toggle} aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'}>
        {open ? <X /> : <Menu />}
      </button>
      <nav id="main-nav" className={open ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
        {navigation.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="button button-small" href="#contact" onClick={() => setOpen(false)}>{businessInfo.cta.quote}<ArrowUpRight size={16} /></a>
      </nav>
    </div>
  </header>
}
