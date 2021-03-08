import React from "react";
import CopyrightIcon from '@material-ui/icons/Copyright';

const date = new Date();
const year = date.getFullYear();

function Footer(){
    return(
        <div>
            <footer>
            <p className="footer">Copyright ⓒ {year}</p>
            </footer>
        </div>
            
    );
}

export default Footer;