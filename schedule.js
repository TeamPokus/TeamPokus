const scheduleList = document.getElementById('schedule-list');

// Sample schedule data in JSON format
const scheduleData = [
  {
    date: 'June 15',
    event: 'Tournament A',
    time: '18:00 - 20:00',
    url: 'https://www.example.com/tournamentA'
  },
  {
    date: 'June 20',
    event: 'Tournament B',
    time: '19:30 - 22:00',
    url: 'https://www.example.com/tournamentB'
  },
  {
    date: 'June 25',
    event: 'Tournament C',
    time: '15:00 - 17:30',
    url: 'https://www.example.com/tournamentC'
  }
];

// Populate the schedule list dynamically
scheduleData.forEach(item => {
  const listItem = document.createElement('li');
  const anchor = document.createElement('a');
  anchor.href = item.url;
  anchor.innerHTML = `
    <h3>${item.date}</h3>
    <p>Event: ${item.event}</p>
    <p>Time: ${item.time}</p>
  `;
  listItem.appendChild(anchor);
  scheduleList.appendChild(listItem);
});
// ...

// Add a new tournament to the scheduleData array
const newTournament = {
    date: 'June 30',
    event: 'Tournament D',
    time: '14:00 - 16:30',
    url: 'https://www.example.com/tournamentD'
  };
  
  scheduleData.push(newTournament);
  
  // Populate the schedule list dynamically
  scheduleData.forEach(item => {
    // ...
  });
  