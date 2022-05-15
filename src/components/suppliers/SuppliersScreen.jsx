import React from "react";
import { Navbar } from "../ui/Navbar";
import { Menu } from "../ui/Menu";
import { SupplierModal } from "./SupplierModal";
import { SupplierCard } from "./SupplierCard";
import { HomeFab } from "../ui/HomeFab";
import { useSelector } from "react-redux";
// import { useSelector } from "react-redux";

export const SuppliersScreen = () => {

  const {suppliers} = useSelector(state => state.principal);

  // const {} = useSelector(state => state.)
  return (
    
    <>
      <Navbar />
      <main className="col-md-9 ms-sm-auto col-lg-12 px-md-4 b">
       
        {
          suppliers.map(supplier =>(
            <SupplierCard
            name={supplier.name}
            nit={supplier.nit}
            address={supplier.address}
          />
          ))
        }

        
      </main>
      <HomeFab />
      <Menu />

      <SupplierModal />
    </>
  );
};
