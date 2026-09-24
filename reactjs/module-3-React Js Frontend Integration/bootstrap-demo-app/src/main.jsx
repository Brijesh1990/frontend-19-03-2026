import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import ContainerApp from './ContainerApp'
// import PupupModal from './PupupModal'
import ProgressApp from './ProgressApp'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
createRoot(document.getElementById('root')).render(
<StrictMode>
{/* <ContainerApp /> */}
{/* <PupupModal /> */}
<ProgressApp />
</StrictMode>,
)
