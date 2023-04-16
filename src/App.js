
import './App.css';

import React, { useState } from 'react';
import Profile from './components/profileComponents';
import Search from './components/searchComponents';
import "./index.css";

function App() {
  const allUsers = [
    {
      id: '60d0fe4f5311236168a109f5',
      title: 'ms',
      firstName: 'Charlotte',
      lastName: 'Legrand',
      picture: 'https://randomuser.me/api/portraits/med/women/77.jpg',
    },
    {
      id: '60d0fe4f5311236168a109f6',
      title: 'miss',
      firstName: 'Madison',
      lastName: 'Ambrose',
      picture: 'https://randomuser.me/api/portraits/med/women/15.jpg',
    },
    {
      id: '60d0fe4f5311236168a109fa',
      title: 'ms',
      firstName: 'Ann',
      lastName: 'Mason',
      picture: 'https://randomuser.me/api/portraits/med/women/18.jpg',
    },
    {
      id: '60d0fe4f5311236168a109fb',
      title: 'mr',
      firstName: 'Sohan',
      lastName: 'Pierre',
      picture: 'https://randomuser.me/api/portraits/med/men/77.jpg',
    },
    {
      id: '60d0fe4f5311236168a109fc',
      title: 'mr',
      firstName: 'Gonzaga',
      lastName: 'Ribeiro',
      picture: 'https://randomuser.me/api/portraits/med/men/10.jpg',
    },
    {
      id: '60d0fe4f5311236168a109ff',
      title: 'mrs',
      firstName: 'Josefina',
      lastName: 'Calvo',
      picture: 'https://randomuser.me/api/portraits/med/women/3.jpg',
    },
    {
      id: '60d0fe4f5311236168a10a00',
      title: 'mrs',
      firstName: 'Els',
      lastName: 'Ijsseldijk',
      picture: 'https://randomuser.me/api/portraits/med/women/75.jpg',
    },
    {
      id: '60d0fe4f5311236168a10a01',
      title: 'mr',
      firstName: 'Jesus',
      lastName: 'Riley',
      picture: 'https://randomuser.me/api/portraits/med/men/45.jpg',
    },
    {
      id: '60d0fe4f5311236168a10a03',
      title: 'mr',
      firstName: 'Andri',
      lastName: 'Leclerc',
      picture: 'https://randomuser.me/api/portraits/med/men/57.jpg',
    },
    {
      id: '60d0fe4f5311236168a10a04',
      title: 'mr',
      firstName: 'Konsta',
      lastName: 'Manninen',
      picture: 'https://randomuser.me/api/portraits/med/men/24.jpg',
    },
  ];

  let searchResult = [];

  const [state, setState] = useState(allUsers);

  const filterUsers = (name) => {
    searchResult = allUsers.filter((item) =>
      (item.firstName + item.lastName).toLowerCase().includes(name)
    );
    setState(searchResult);
  };

  return (
    <div>
      <Search filterCallback={(e) => filterUsers(e.target.value)} />

      <div className="profile-container">
      {state.map((item) => (
        <Profile
          firstName={item.firstName}
          lastName={item.lastName}
          title={item.title}
          id={item.id}
          picture={item.picture}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
