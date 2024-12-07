function Randsquares(){
    return <>
    <div className="squares verti">
        <div className="horiz">
            <div className="cell TealGreen c1"></div>
            <div className="cell MistyBlue c2"></div>
            <div className="cell TealGreen c1"></div>
            <div className="cell MistyBlue c3"></div>
        </div>
        <div className="horiz" style={{
            transform:"translateX(45px)"
        }}>
            <div className="cell TealGreen c4"></div>
            <div className="cell MistyBlue c1"></div>
            <div className="cell TealGreen c3"></div>
            <div className="cell MistyBlue c2"></div>
        </div>
        <div className="horiz">
            <div className="cell MistyBlue c4"></div>
            <div className="cell TealGreen c1"></div>
            <div className="cell MistyBlue c2"></div>
            <div className="cell TealGreen c4"></div>
        </div>
    </div>
    </>
}

export default Randsquares;