import './index.scss';

export default function SideNavBar() {
    return (
        <div className="row align-items-center vh-100">
            <div className="col">
                <div className="text-start h5 white customHeader">Quotes</div>
                <div>
                    <ul className="navList">
                        <li><i className="bi bi-box-seam"></i>  <span className="navText">Project</span></li>
                        <li><i className="bi bi-chat-square-dots"></i>  <span className="navText">Messages</span></li>
                        <li><i className="bi bi-truck"></i>  <span className="navText">Suppliers</span></li>
                        <li><i className="bi bi-person"></i>  <span className="navText">Clients</span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
