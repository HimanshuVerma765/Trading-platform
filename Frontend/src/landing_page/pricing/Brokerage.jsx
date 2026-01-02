import React from "react";

const Brokerage = () => {
  return (
<div className="container p-5">
  <div className="row mt-5 p-5">
    <h1 className="fs-4 mb-3">Charges for account opening</h1>

      <table className="table table-bordered mb-0">
        <thead className="table-light">
          <tr className="border-bottom">
            <th className="fw-medium py-3 px-5">
              Type of account
            </th>
            <th className="fw-medium text-end py-3 px-5">
              Charges
            </th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-bottom">
            <td className="fw-medium py-3 px-5">
              Online account
            </td>
            <td className="fw-medium text-end py-3 px-5">
              <span className="badge bg-success px-3 py-2">FREE</span>
            </td>
          </tr>

          <tr className="border-bottom">
            <td className="fw-medium py-3 px-5">
              Offline account
            </td>
            <td className="fw-medium text-end py-3 px-5">
              <span className="badge bg-success px-3 py-2">FREE</span>
            </td>
          </tr>

          <tr className="border-bottom">
            <td className="fw-medium py-3 px-5">
              NRI account (offline only)
            </td>
            <td className="fw-medium text-end py-3 px-5">
              ₹ 500
            </td>
          </tr>

          <tr>
            <td className="fw-medium py-3 px-5">
              Partnership, LLP, HUF, or Corporate accounts (offline only)
            </td>
            <td className="fw-medium text-end py-3 px-5">
              ₹ 500
            </td>
          </tr>
        </tbody>
      </table>


  </div>
</div>

  );
};

export default Brokerage;
