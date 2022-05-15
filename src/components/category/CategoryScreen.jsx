import React from "react";
import { Navbar } from "../ui/Navbar";
import { Menu } from "../ui/Menu";

import { CategoryModal } from "./CategoryModal";
import { CategoryCard } from "./CategoryCard";
import { HomeFab } from "../ui/HomeFab";
import { useSelector } from "react-redux";

export const CategoryScreen = () => {


 const {categorys} = useSelector(state => state.principal)
  console.log(categorys)
  return (
    <>
      <Navbar />
      <main className="col-md-9 ms-sm-auto col-lg-12 px-md-4 c">
        {/* <CategoryCard name="Cervezas" />
        <CategoryCard name="Gaseosas" /> */}

         {
           categorys.map(category => (
            <CategoryCard name={category.name} key={category.name} />
           ) )
         }
      </main>
      <Menu />

      <HomeFab />
      <CategoryModal />
    </>
  );
};
