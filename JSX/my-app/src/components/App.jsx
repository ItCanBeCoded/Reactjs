import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Notes from "../notes";

function createNote(noteInfo){
    return(
        <Note 
            key={noteInfo.key}
            title={noteInfo.title}
            content={noteInfo.content}
        />
    )
}


function App(){
    return(
    <div>
       <Header />
       <dl> {Notes.map(createNote)} </dl>
       <Footer />
    </div>
    );
}

export default App;
