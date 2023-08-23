var users = [
    {
      id: 1,
      username: 'mit',
      name: 'ford',
      position: 'King'
    },
    {
      id: 2,
      username: 'zero',
      name: 'sir',
      position: 'Former-Shichibukai'
    },
    {
      id: 3,
      username: 'luffy',
      name: 'Monkey D. Luffy',
      position: 'Captain'
    },
    {
      id: 4,
      username: 'kuzan',
      name: 'Aokiji',
      position: 'Former Marine Admiral'
    },
    {
      id: 5,
      username: 'shanks',
      name: "'Red-Haired' Shanks",
      position: 'The 4 Emperors'
    }
  ]
  
  exports.findAll = function () {
    return users
  }
  
  exports.findById = function (id) {
    for (var i = 0; i < users.length; i++) {
      if (users[i].id == id) return users[i]
    }
  }
  
  exports.save = function (user) {
    users.push(user)
  }
  