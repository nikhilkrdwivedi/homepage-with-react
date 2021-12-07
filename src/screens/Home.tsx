import React from 'react'
import Overview from '../components/Overview'
import ProfileHeader from '../components/ProfileHeader'
import QuotationHeader from '../components/QuotationHeader'
import SideNavBar from '../components/SideNavBar'
import Table from '../components/Table'

export default function Home() {
    return (
        <div className="container-fluid">
      <div className="row">
        {/* side nav bar */}
        <div className="col-2 blue">
          <SideNavBar />
        </div>
        <div className="col-10 customBodyPadding">
          {/* main body */}
          <ProfileHeader />
          <QuotationHeader />
          <Overview />
          <Table />
        </div>
      </div>
    </div>
    )
}
