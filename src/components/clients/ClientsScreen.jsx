import React from "react";
import { Navbar } from "../ui/Navbar";
import { Menu } from "../ui/Menu";
import { ClientModal } from "./ClientModal";
import { ClientCard } from "./ClientCard";
import { HomeFab } from "../ui/HomeFab";
import { useSelector } from "react-redux";


export const ClientsScreen = () => {

const {clients} = useSelector(state => state.principal);
  

  return (
    <>
      <Navbar />
      <main className="col-md-9 ms-sm-auto col-lg-12 px-md-4 b">
        {/* <ClientCard name="Luis" lastName="Agamez" email="Lagamez@gmail.com" /> */}

        {
           clients.map(client => (
            <ClientCard name={client.name} key={client.name} lastName={client.lastName} email={client.email}  />
           ) )
         }

       
      </main>

     
<HomeFab/>
     

      <Menu />


      <ClientModal />
    </>
  );
};
