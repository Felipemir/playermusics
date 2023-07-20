
const Footer = ({
    stop,
    previous,
    pause,
    next,
    play,
    estaTocando,
    onPlayPause,
    onNext,
    onPrevious,
}) => {


    const handleNextClick = () => {
        onNext();
    };

    const handlePreviousClick =  () => {
        onPrevious();
    };

    return (
    <div>
        <footer>
        <div className="footer_principal">
            <img className="imagens_footer" src={stop} alt="" />
            <img
            className="imagens_footer"
            src={previous}
            alt=""
            onClick={handlePreviousClick}
            />
            <img
            className="imagens_footer"
            src={estaTocando ? pause : play}
            alt=""
            onClick={onPlayPause}
            />
            <img className="imagens_footer" src={next} alt="" onClick={handleNextClick} />
        </div>
        </footer>
    </div>
    );
};

export default Footer;