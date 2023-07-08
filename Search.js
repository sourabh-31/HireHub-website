// Access the user-section element
const userSection = document.getElementById('user-section');

const users = [
    {
      name: 'John Doe',
      email: 'johndoe@example.com',
      location: 'Mumbai',
      role: 'Frontend Developer',
      skills: ['HTML', 'CSS', 'Javascript']
    },
    {
      name: 'Jane Smith',
      email: 'janesmith@example.com',
      location: 'Pune',
      role: 'Backend Developer',
      skills: ['Python', 'Java', 'SQL']
    },
    {
      name: 'Alice Johnson',
      email: 'alicejohnson@example.com',
      location: 'Hyderabad',
      role: 'UI/UX Designer',
      skills: ['Adobe Photoshop', 'Illustrator', 'Sketch']
    },
    {
      name: 'Bob Thompson',
      email: 'bobthompson@example.com',
      location: 'Banglore',
      role: 'DevOps Engineer',
      skills: ['DevOps', 'Docker', 'Kubernetes']
    },
    {
      name: 'Emily Brown',
      email: 'emilybrown@example.com',
      location: 'Kolkata',
      role: 'Software Tester',
      skills: ['Manual Testing', 'Automated Testing', 'Selenium']
    },
    {
      name: 'David Wilson',
      email: 'davidwilson@example.com',
      location: 'Mumbai',
      role: 'Frontend Developer',
      skills: ['HTML', 'CSS', 'Javascript']
    },
    {
      name: 'Sophia Anderson',
      email: 'sophiaanderson@example.com',
      location: 'Pune',
      role: 'Backend Developer',
      skills: ['Python', 'Java', 'SQL']
    },
    {
      name: 'Oliver Garcia',
      email: 'olivergarcia@example.com',
      location: 'Hyderabad',
      role: 'UI/UX Designer',
      skills: ['Adobe Photoshop', 'Illustrator', 'Sketch']
    },
    {
      name: 'Emma Martinez',
      email: 'emmamartinez@example.com',
      location: 'Banglore',
      role: 'DevOps Engineer',
      skills: ['DevOps', 'Docker', 'Kubernetes']
    },
    {
      name: 'Liam Robinson',
      email: 'liamrobinson@example.com',
      location: 'Kolkata',
      role: 'Software Tester',
      skills: ['Manual Testing', 'Automated Testing', 'Selenium']
    },
    {
      name: 'Isabella Clark',
      email: 'isabellaclark@example.com',
      location: 'Mumbai',
      role: 'Frontend Developer',
      skills: ['HTML', 'CSS', 'Javascript']
    },
    {
      name: 'Jacob Perez',
      email: 'jacobperez@example.com',
      location: 'Pune',
      role: 'Backend Developer',
      skills: ['Python', 'Java', 'SQL']
    },
    {
      name: 'Mia Lewis',
      email: 'mialewis@example.com',
      location: 'Hyderabad',
      role: 'UI/UX Designer',
      skills: ['Adobe Photoshop', 'Illustrator', 'Sketch']
    },
    {
      name: 'William Turner',
      email: 'williamturner@example.com',
      location: 'Banglore',
      role: 'DevOps Engineer',
      skills: ['DevOps', 'Docker', 'Kubernetes']
    },
    {
      name: 'Ava Hall',
      email: 'avahall@example.com',
      location: 'Kolkata',
      role: 'Software Tester',
      skills: ['Manual Testing', 'Automated Testing', 'Selenium']
    },
    {
      name: 'James Scott',
      email: 'jamesscott@example.com',
      location: 'Mumbai',
      role: 'Frontend Developer',
      skills: ['HTML', 'CSS', 'Javascript']
    },
    {
      name: 'Charlotte Adams',
      email: 'charlotteadams@example.com',
      location: 'Pune',
      role: 'Backend Developer',
      skills: ['Python', 'Java', 'SQL']
    },
    {
      name: 'Ben Hughes',
      email: 'benhughes@example.com',
      location: 'Hyderabad',
      role: 'UI/UX Designer',
      skills: ['Adobe Photoshop', 'Illustrator', 'Sketch']
    },
    {
      name: 'Sophia Collins',
      email: 'sophiacollins@example.com',
      location: 'Banglore',
      role: 'DevOps Engineer',
      skills: ['DevOps', 'Docker', 'Kubernetes']
    },
    {
      name: 'Michael Young',
      email: 'michaelyoung@example.com',
      location: 'Kolkata',
      role: 'Software Tester',
      skills: ['Manual Testing', 'Automated Testing', 'Selenium']
    }
  ];
  



// Loop through the users array and create user elements
users.forEach((user) => {
  // Create the user div element
  const userDiv = document.createElement('div');
  userDiv.classList.add('user');

  // Create the user details div element
  const userDetailsDiv = document.createElement('div');
  const userName = document.createElement('p');
  userName.textContent = user.name;
  const userEmail = document.createElement('span');
  userEmail.textContent = user.email;
  userDetailsDiv.appendChild(userName);
  userDetailsDiv.appendChild(userEmail);
  userDiv.appendChild(userDetailsDiv);

  // Create the user location div element
  const userLocationDiv = document.createElement('div');
  userLocationDiv.classList.add('user-location');
  userLocationDiv.textContent = user.location;
  userDiv.appendChild(userLocationDiv);

  // Create the user role div element
  const userRoleDiv = document.createElement('div');
  userRoleDiv.classList.add('user-role');
  userRoleDiv.textContent = user.role;
  userDiv.appendChild(userRoleDiv);

  // Create the user skills select element
  const userSkillsSelect = document.createElement('select');
  userSkillsSelect.classList.add('user-skills');

  // Create the skill options and append them to the select element
  user.skills.forEach((skill) => {
    const option = document.createElement('option');
    option.value = skill.toLowerCase();
    option.textContent = skill;
    userSkillsSelect.appendChild(option);
  });

  userDiv.appendChild(userSkillsSelect);

  // Append the user div to the user-section element
  userSection.appendChild(userDiv);
});


const l1 = document.getElementById("l1");


l1.addEventListener("click", handleL1Click);

function handleL1Click() {
    const filteredUsers = users.filter(user => user.location === "Mumbai");

    userSection.innerHTML = "";

  // Display the filtered users on the screen
  filteredUsers.forEach(user => {
    const userDiv = document.createElement('div');
  userDiv.classList.add('user');

  // Create the user details div element
  const userDetailsDiv = document.createElement('div');
  const userName = document.createElement('p');
  userName.textContent = user.name;
  const userEmail = document.createElement('span');
  userEmail.textContent = user.email;
  userDetailsDiv.appendChild(userName);
  userDetailsDiv.appendChild(userEmail);
  userDiv.appendChild(userDetailsDiv);

  // Create the user location div element
  const userLocationDiv = document.createElement('div');
  userLocationDiv.classList.add('user-location');
  userLocationDiv.textContent = user.location;
  userDiv.appendChild(userLocationDiv);

  // Create the user role div element
  const userRoleDiv = document.createElement('div');
  userRoleDiv.classList.add('user-role');
  userRoleDiv.textContent = user.role;
  userDiv.appendChild(userRoleDiv);

  // Create the user skills select element
  const userSkillsSelect = document.createElement('select');
  userSkillsSelect.classList.add('user-skills');

  // Create the skill options and append them to the select element
  user.skills.forEach((skill) => {
    const option = document.createElement('option');
    option.value = skill.toLowerCase();
    option.textContent = skill;
    userSkillsSelect.appendChild(option);
  });

  userDiv.appendChild(userSkillsSelect);

  // Append the user div to the user-section element
  userSection.appendChild(userDiv);
  });

    console.log(filteredUsers);
}