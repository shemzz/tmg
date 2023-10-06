import { useState } from 'react';
import '../styles/survey.css';
import { useNavigate, useParams } from 'react-router-dom';

export default function Survey() {
  const navigate = useNavigate();
  let { id } = useParams();
  const [activeMenu, setActiveMenu] = useState('Nuture'); // Track active menu

  const menuItems = ['Nuture', 'Transform', 'Condition', 'Control'];

  const openChapter = (id, chapterMenu, chapterTitle) => {
    navigate(`/dashboard/users/user/${id}/survey/${chapterMenu}/${chapterTitle}`);
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  const chapters = [
    { menu: 'Nuture', title: 'Chapter 01' },
    { menu: 'Nuture', title: 'Chapter 02' },
    { menu: 'Nuture', title: 'Chapter 01' },
    { menu: 'Transform', title: 'Chapter 01' },
    { menu: 'Transform', title: 'Chapter 02' },
    { menu: 'Transform', title: 'Chapter 03' },
    { menu: 'Condition', title: 'Chapter 01' },
    { menu: 'Condition', title: 'Chapter 02' },
    { menu: 'Condition', title: 'Chapter 03' },
    { menu: 'Control', title: 'Chapter 01' },
    { menu: 'Control', title: 'Chapter 02' },
    { menu: 'Control', title: 'Chapter 03' },
  ];

  const activeChapters = chapters.filter((chapter) => chapter.menu === activeMenu);

  return (
    <main className='main'>
      <div className='title'>
        <h3>
          Users <small className='small'>&lt; Safaa &gt; Survey</small>
        </h3>
      </div>
      <div className='main-container'>
        <div className='survey'>
          <div className='menu'>
            {menuItems.map((menu) => (
              <div
                key={menu}
                className={`menu-card ${menu === activeMenu ? 'active' : ''}`}
                onClick={() => handleMenuClick(menu)}
              >
                {menu}
              </div>
            ))}
          </div>

          <div className='chapters'>
            {activeChapters.map((chapter) => (
              <div key={chapter.title} className='chapter-card' onClick={()=>openChapter(id, chapter.menu, chapter.title)}>
                {chapter.title}
                <span className='arrow'>&gt;</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
