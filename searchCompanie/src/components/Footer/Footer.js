

function Footer(){
    return (
        <footer className="pt-4 my-md-5 pt-md-5 border-top">
            <div className="row">
            <div className="col-12 col-md">
                <img className="mb-2" src="/docs/4.6/assets/brand/bootstrap-solid.svg" alt="" width="24" height="24"/>
                <small className="d-block mb-3 text-muted">© 2017-2021</small>
            </div>
            <div className="col-6 col-md">
                <h5>Features</h5>
                <ul className="list-unstyled text-small">
                    <li><a className="text-muted">Cool stuff</a></li>
                    <li><a className="text-muted">Random feature</a></li>
                    <li><a className="text-muted">Team feature</a></li>
                    <li><a className="text-muted">Stuff for developers</a></li>
                    <li><a className="text-muted">Another one</a></li>
                    <li><a className="text-muted">Last time</a></li>
                </ul>
            </div>
            <div className="col-6 col-md">
                <h5>Resources</h5>
                <ul className="list-unstyled text-small">
                    <li><a className="text-muted">Resource</a></li>
                    <li><a className="text-muted">Resource name</a></li>
                    <li><a className="text-muted">Another resource</a></li>
                    <li><a className="text-muted">Final resource</a></li>
                </ul>
            </div>
            <div className="col-6 col-md">
                <h5>About</h5>
                <ul className="list-unstyled text-small">
                    <li><a className="text-muted">Team</a></li>
                    <li><a className="text-muted">Locations</a></li>
                    <li><a className="text-muted">Privacy</a></li>
                    <li><a className="text-muted">Terms</a></li>
                </ul>
            </div>
            </div>
        </footer>
    )
}

export default Footer