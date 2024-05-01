import React from 'react'

const Dashboard = () => {
  return (
    <>
        <div className="page-content my-account__dashboard">
  <p>
    Hello <strong>alitfn58</strong> (not <strong>alitfn58?</strong>{" "}
    <a href="./login_register.html">Log out</a>)
  </p>
  <p>
    From your account dashboard you can view your{" "}
    <a className="unerline-link" href="./account_orders.html">
      recent orders
    </a>
    , manage your{" "}
    <a className="unerline-link" href="./account_edit_address.html">
      shipping and billing addresses
    </a>
    , and{" "}
    <a className="unerline-link" href="./account_edit.html">
      edit your password and account details.
    </a>
  </p>
</div>

    </>
  )
}

export default Dashboard