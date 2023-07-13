
function Header({logo,perfil}) {
  return (
    <div id="header">
     <img src={logo} alt="" />
     <img className="foto-perfil"  src={perfil} alt="minha foto"/>
     <span className="bem-vindo">bem vindo, felipe.</span>
    </div>
  )
}

export default Header