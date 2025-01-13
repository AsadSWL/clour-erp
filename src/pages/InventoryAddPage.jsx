import React from "react";
import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import InventoryAddLayer from "../components/InventoryAddLayer";

const InventoryAddPage = () => {
  return (
    <>

      {/* MasterLayout */}
      <MasterLayout>

        {/* Breadcrumb */}
        <Breadcrumb title="Add Inventory" />

        {/* OrderListLayer */}
        <InventoryAddLayer />

      </MasterLayout>

    </>
  );
};

export default InventoryAddPage;
