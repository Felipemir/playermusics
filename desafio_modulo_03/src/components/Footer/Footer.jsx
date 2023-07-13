
const Footer = ({ stop, previous, pause, next }) => {

   
   
    return (
        <div>
            <footer>
                <div className="footer_principal">

                    <img className="imagens_footer" src={stop} alt="" />
                    <img className="imagens_footer" src={previous} alt=""/>
                    <img className="imagens_footer" src={pause} alt="" />
                    <img className="imagens_footer" src={next} alt="" />
                </div>
            </footer>
        </div>
    )
}

export default Footer