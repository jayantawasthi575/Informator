import Navbar from "./Navbar";
import './App.css'
function Home() {
    const img_urll = process.env.PUBLIC_URL + "./assests/images/thumbnail.svg"
    return (
        <>
            <Navbar />
            <main role="main">

                <section className="jumbotron text-center">
                    <div className="container">
                        <h1 className="jumbotron-heading">Album example</h1>
                        <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
                        <p>
                            <a href="#" className="btn btn-primary mt-2 mr-2">Main call to action</a>
                            <span className=""></span>
                            <a href="#" className="btn btn-secondary mt-2 mr-2">Secondary action</a>
                        </p>
                    </div>
                </section>
                <div className="album py-5 bg-light">
                    <div className="container">

                        <div className="row">
                            <div className="col-md-4">
                                <div className="card mb-4 box-shadow">
                                    <img className="card-img-top" src={img_urll} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                            </div>
                                            <small className="text-muted">9 mins</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 box-shadow">
                                    <img className="card-img-top" src={img_urll} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                            </div>
                                            <small className="text-muted">9 mins</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 box-shadow">
                                    <img className="card-img-top" src={img_urll} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                            </div>
                                            <small className="text-muted">9 mins</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 box-shadow">
                                    <img className="card-img-top" src={img_urll} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                            </div>
                                            <small className="text-muted">9 mins</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 box-shadow">
                                    <img className="card-img-top" src={img_urll} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                            </div>
                                            <small className="text-muted">9 mins</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 box-shadow">
                                    <img className="card-img-top" src={img_urll} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>

                                            </div>
                                            <small className="text-muted">9 mins</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 box-shadow">
                                    <img className="card-img-top" src={img_urll} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                            </div>
                                            <small className="text-muted">9 mins</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 box-shadow">
                                    <img className="card-img-top" src={img_urll} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                            </div>
                                            <small className="text-muted">9 mins</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 box-shadow">
                                    <img className="card-img-top" src={img_urll} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                            </div>
                                            <small className="text-muted">9 mins</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer class="text-muted">
                <div class="container">
                    <p class="float-right">
                        <a href="#">Back to top</a>
                    </p>
                    <p>Album example is &copy; Bootstrap, but please download and customize it for yourself!</p>
                    <p>New to Bootstrap? <a href="../../">Visit the homepage</a> or read our <a href="../../getting-started/">getting started guide</a>.</p>
                </div>
            </footer>
        </>
    )
}

export default Home;