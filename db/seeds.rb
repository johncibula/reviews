User.destroy_all


User.create!({
  provider: "github",
  nickname: "Instructor",
  email: "admintest@gmail.com",
  uid: "8890808908908",
  repos_url: "https://api.github.com/users/rvasqz86/repos",
  admin: true
 
})
User.create!({
  provider: "github",
  nickname: "TA",
  email: "admintest@gmail.com",
  uid: "8890808908908",
  repos_url: "https://api.github.com/users/rvasqz86/repos",
  admin: true
 
})

User.create!({
  provider: "github",
  nickname: "Jon",
  email: "admintest@gmail.com",
  uid: "8890808908908",
  repos_url: "https://api.github.com/users/rvasqz86/repos",
  admin: true
 
})

User.create!({
  provider: "github",
  nickname: "James",
  email: "admintest@gmail.com",
  uid: "8890808908908",
  repos_url: "https://api.github.com/users/rvasqz86/repos",
  admin: true
 
})

User.create!({
  provider: "github",
  nickname: "Jones",
  email: "admintest@gmail.com",
  uid: "8890808908908",
  repos_url: "https://api.github.com/users/rvasqz86/repos",
  admin: true
 
})

User.create!({
  provider: "github",
  nickname: "Jamie",
  email: "admintest@gmail.com",
  uid: "8890808908908",
  repos_url: "https://api.github.com/users/rvasqz86/repos",
  admin: true
 
})

User.create!({
  provider: "github",
  nickname: "Johnathon",
  email: "admintest@gmail.com",
  uid: "8890808908908",
  repos_url: "https://api.github.com/users/rvasqz86/repos",
  admin: true
 
})

User.create!({
  provider: "github",
  nickname: "Jackie",
  email: "admintest@gmail.com",
  uid: "8890808908908",
  repos_url: "https://api.github.com/users/rvasqz86/repos",
  admin: true
 
})

User.create!({
  provider: "github",
  nickname: "Jackie",
  email: "admintest@gmail.com",
  uid: "8890808908908",
  repos_url: "https://api.github.com/users/rvasqz86/repos",
  admin: true
 
})

p "Created #{User.count} users"

Post.destroy_all