import NavTag from './Nav';
import '../styleSheets/header.css'
import rba from '../assets/RBA_LSMMA.svg'

export default function Header() {
    //this page is for the header I still need to add in the rba logo
    const handleClick = () => {
        window.open('https://www.rbaconsulting.com/', '_blank');
    };

    return (
        <>
        <div className="container">
            <h1 className='title'>Harbor Lookout</h1>
            <NavTag/>
            <img src={rba} className='rbaHeader' alt='rba logo' onClick={handleClick}/>
        </div>
        </>

        // this page will include mostly the same content as before some info a place to sign up as a member 
    )
}