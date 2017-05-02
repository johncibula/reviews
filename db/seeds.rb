User.destroy_all


User.create!({
  name: "Jon",
  provider: "github",
  nickname: "Administrator",
  email: "admintest@gmail.com",
  uid: "8890808908908",
  repos_url: "https://api.github.com/users/rvasqz86/repos",
  admin: true
 
})

p "Created #{User.count} users"

Post.destroy_all