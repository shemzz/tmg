import '../styles/survey.css';
import openBook from '../assets/open-book.png';

import { CircularProgress } from '@mui/material';

export default function Progress() {
  const menuItems = [
    { menu: 'Nuture', progress: 50 },
    { menu: 'Transform', progress: 70 },
    { menu: 'Condition', progress: 50 },
    { menu: 'Control', progress: 0 }
  ];

  return (
    <main className='main'>
      <div className='title'>
        <h3>
          Users <small className='small'>&lt; Safaa &lt; Progress</small>
        </h3>
      </div>
      <div className='main-container'>
        <div className='survey'>
          <div className='menu'>
            {menuItems.map(({ menu, progress }) => (
              <div key={menu} className={`menu-card progress`}>
                <div className='title'>
                  <img src={openBook} alt="open-book" width={50} />
                  <p>{menu}</p>
                </div>
                <div className='progress-bar'>
                  <div className="progress-wrapper">
                    <CircularProgress size={50} variant="determinate" color='inherit' value={progress} />
                    <p className="progress-text">{progress}%</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
