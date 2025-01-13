import React from "react";
import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import InstallmentViewLayer from "../components/InstallmentViewLayer";

const InstallmentViewPage = () => {
  return (
    <>

      {/* MasterLayout */}
      <MasterLayout>

        {/* Breadcrumb */}
        <Breadcrumb title="Installment" />

        {/* OrderListLayer */}
        <InstallmentViewLayer />

      </MasterLayout>

    </>
  );
};

export default InstallmentViewPage;
