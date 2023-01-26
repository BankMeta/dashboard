import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Account from '../pages/Account'
import Transactions from '../pages/Transactions'
import Wallet from '../pages/Wallet'
import AllCoins from '../pages/AllCoins'
import StableCoins from '../pages/StableCoins'
import MyDetails from './MyDetails'
import Settings from './Settings'

const NavPage = () => {
  return (
    <>
        <section>
            <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/wallet" element={<Wallet/>}/>
                <Route path="/transactions" element={<Transactions/>}/>
                <Route path="/account" element={<Account/>}/>
                <Route path="/allcoins" element={<AllCoins/>}/>
                <Route path="/stablecoins" element={<StableCoins/>}/>
                <Route path="/mydetails" element={<MyDetails/>}/>
                <Route path="/settings" element={<Settings/>}/>
            </Routes>
        </section>
    </>
  )
}

export default NavPage