import NavTag from './Nav';
import '../styleSheets/header.css'
export default function Header() {

    return (
        <>
        <div className="container">
            <h1 className='title'>Harbor Lookout</h1>
            <NavTag/>
            <h2 className='rbaHeader'>Rba</h2>
        </div>
        </>

        // this page will include mostly the same content as before some info a place to sign up as a member 
    )
}