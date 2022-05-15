import React from "react";
import { HomeFab } from "../ui/HomeFab";
import { Menu } from "../ui/Menu";
import { Navbar } from "../ui/Navbar";
import { ProductCard } from "./ProductCard";
import { ProductModal } from "./ProductModal";

export const ProductsScreen = () => {
  return (
    <>
      <Navbar />
      <main className="col-md-9 ms-sm-auto col-lg-12 px-md-4 b a">
        <ProductCard
          name={"Cerveza Aguila"}
          category={"Cerveza"}
          amount={"500"}
          description={"Description: Cerveze Pequeña Aguila light"}
          priceBuy={2000}
          priceSale={4500}
        />
      </main>

      <Menu />
      <HomeFab />
      <ProductModal />
    </>
  );
};
