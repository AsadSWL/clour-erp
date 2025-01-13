import React from "react";
import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import InventoryLayer from "../components/InventoryLayer";

const InventoryPage = () => {
  return (
    <>

      {/* MasterLayout */}
      <MasterLayout>

        {/* Breadcrumb */}
        <Breadcrumb title="Inventory" />

        {/* OrderListLayer */}
        <InventoryLayer />

      </MasterLayout>

    </>
  );
};

export default InventoryPage;
