
// import NewsBord from "./NewsBord"
const Newsitem = ({ title, descripstion, src, url }) => {
    return (
        <>
        {/* this is itemcard it help to show card on the browser screen  */}
            <div className="card bg-dark text-light mb3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "345px" }}>
                <img src ={src} className="card-img-top "alt="...." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{descripstion?descripstion.slice(0.90):"the news cant we loded because of the side error"}</p>
                    <a href={url} className="btn btn-danger">Read More </a>
                </div>
            </div>

        </>
    )
}

export default Newsitem

