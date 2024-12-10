import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from '../components/NavBar'
import ItemListContainer from '../components/ItemListContainer'
import ItemDetailContainer from '../components/ItemDetailContainer'
import Cart from '../components/Cart'

function AppRouter () {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />     
        <Route path="/cart" element={<Cart />} />     
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter