import './index.scss';

export default function ProfileHeader() {
    return (
        <div className="row text-end pt-3">
            <div className="col align-self-center">
                <div className="inline-flex">
                    <div className="icon"><i className="bi bi-bell"></i></div>
                    <div className="inline-flex">
                        <div className="text-center userShortName  align-self-center">NK</div>
                        <div className="text-start userInfo">
                            <div className="userName grey">Nikhil Kumar</div>
                            <div className="userEmail grey">nikhil.dwivedi@gmail.com</div>
                        </div>
                    </div>
                    <div className="icon"><i className="bi bi-chevron-down" style={{ fontSize: '1rem' }}></i></div>
                </div>
            </div>
        </div>
    )
}
