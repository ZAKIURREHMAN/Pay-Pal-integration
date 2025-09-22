import PayPal from "./screen/PayPal"
import SuccessPayment from "./screen/SuccessPayment"
import CancelPayment from "./screen/CancelPayment"
import {BrowserRouter,Routes,Route} from "react-router-dom"


function App() {

  return (
    <>
    <BrowserRouter>

    <Routes>
      < Route path="/" element={<PayPal/>} />
      < Route path="/success" element={<SuccessPayment/>} />
      < Route path="/cancel" element={<CancelPayment/>} />

    </Routes>
    
    </BrowserRouter>


    </>
  )
}

export default App
