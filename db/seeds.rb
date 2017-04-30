User.destroy_all


User.create!({
  name: "Adim",
  provider: "github",
  nickname: "Administrator",
  email: "admintest@gmail.com",
  uid: "123456789",
  repos_url: "https://api.github.com/users/rvasqz86/repos",
  admin: true
 
})
User.create!({
  name: "raul2",
  provider: "github",
  nickname: "rubocop",
  email: "admintestd@gmail.com",
  uid: "12345678943",
  repos_url: "https://api.github.com/users/rvasqz86/repos",
  admin: true
 
})
User.create!({
  name: "raul3",
  provider: "github",
  nickname: "rj3",
  email: "admindfatest@gmail.com",
  uid: "12542789",
  repos_url: "https://api.github.com/users/rvasqz86/repos",
  admin: true
 
})
User.create!({
  name: "raul4",
  provider: "github",
  nickname: "r4",
  email: "admintest@gmail.com",
  uid: "123456789",
  repos_url: "https://api.github.com/users/rvasqz86/repos",
  admin: true
 
})

User.create!({
  name: "raul5",
  provider: "github",
  nickname: "ru45bocop",
  email: "adminteffadagfstd@gmail.com",
  uid: "123456789435435",
  repos_url: "https://api.github.com/users/rvasqz86/repos",
  admin: true
 
})
User.create!({
  name: "raul6",
  provider: "github",
  nickname: "rtrj3",
  email: "admindfgsatratest@gmail.com",
  uid: "1254278953454375",
  repos_url: "https://api.github.com/users/rvasqz86/repos",
  admin: true
 
})
User.create!({
  name: "raul7",
  provider: "github",
  nickname: "r4",
  email: "admigfjggntest@gmail.com",
  uid: "12345678945576",
  repos_url: "https://api.github.com/users/rvasqz86/repos",
  admin: true
 
})
p "Created #{User.count} users"

Post.destroy_all

# Post.create!({ title:"hello", admin_message: "help",content: "content", sender_id: User.find_by(last_name: "Cessaro").id, recipient_id:User.find_by(last_name: "Moloney").id, rating: 4 })

# Post.create!({ title:"hello", admin_message: "help",content: "content", sender_id: User.find_by(last_name: "Vasquez").id, recipient_id:User.find_by(last_name: "Kim").id, rating: 4 })

# Post.create!({ title:"hello", admin_message: "help",content: "content", sender_id: User.find_by(last_name: "Moloney").id, recipient_id:User.find_by(last_name: "Vasquez").id, rating: 4 })

# Post.create!({ title:"hello", admin_message: "help",content: "content", sender_id: User.find_by(last_name: "Kim").id, recipient_id:User.find_by(last_name: "Cessaro").id, rating: 5 })

# Post.create!({ title:"Hello", admin_message: "Template",content: "Hello welcome to Pairing", sender_id: User.find_by(last_name: "Administrator").id, recipient_id:User.find_by(last_name: "Cessaro").id, rating: 4 })
p "Created #{Post.count} posts"

