import React from 'react'
import { HomeFab } from '../ui/HomeFab'
import { Menu } from '../ui/Menu'
import { Navbar } from '../ui/Navbar'
import { SalesCard } from './SalesCard'

export const SalesScreen = () => {
  return (
    <>
      <Navbar />
      <main className="col-md-9 ms-sm-auto col-lg-11 px-md-4 b sales">


        <SalesCard name={'Cerveza Aguila'} clientName={'Juan Gonzales'} sellerName={'Luis Agamez'} amount={80} date={'21 oct 2022 10:45 am'} description={'Venta de 80 Cervezas Aguila Ligth'} />

        <SalesCard name={'Cerveza Aguila'} clientName={'Juan Gonzales'} sellerName={'Luis Agamez'} amount={80} date={'21 oct 2022 10:45 am'} description={'Venta de 80 Cervezas Aguila Ligth'} />

        <SalesCard name={'Cerveza Aguila'} clientName={'Juan Gonzales'} sellerName={'Luis Agamez'} amount={80} date={'21 oct 2022 10:45 am'} description={'Venta de 80 Cervezas Aguila Ligth'} />

      </main>

      <button className="add sale">
        <i className="fa fa-plus" aria-hidden="true"></i>
      </button>

      <Menu />

      <HomeFab/>
    </>
  )
}
