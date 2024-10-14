import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './header.css'; 

const Header = () => {
  const navigate = useNavigate(); 

  
  const handleViewMenu = () => {
    navigate('/menu'); 
  };

  return (
    <div className='body'>
      <div className='header'>
        <div className='header-content'>
          <h1>Order Your <br/>Favourite Foods</h1>
          <p>
            A paragraph is defined as “a group of 
            sentences or a single sentence that forms a unit” (Lunsford and 
            Connors 116). Length and appearance do not determine whether a 
            section in a paper is a paragraph. For instance, in some styles of 
            writing, particularly journalistic styles, a paragraph can be just 
            one sentence long. Ultimately, a paragraph is a sentence or group 
            of sentences that support one main idea. In this handout, we will 
            refer to this as the “controlling idea,” because it controls what 
            happens in the rest of the paragraph.
          </p>
          <button className='viewbuttonn' onClick={handleViewMenu}>View Menu</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
