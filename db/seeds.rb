User.destroy_all

User.create!({
  first_name: "Adim",
  last_name: "Administrator",
  email: "admintest@gmail.com",
  admin: true,
  password: "administrator"
})
User.create!({
  first_name: "Mike",
  last_name: "Cessaro",
  email: "mctest@gmail.com",
  admin: false,
  password: "mctestpw"
})

User.create!({
  first_name: "Brian",
  last_name: "Moloney",
  email: "bmtest@gmail.com",
  admin: false,
  password: "bmtestpw"
})

User.create!({
  first_name: "Jin",
  last_name: "Kim",
  email: "jktest@gmail.com",
  admin: false,
  password: "jktestpw"
})

User.create!({
  first_name: "Raul",
  last_name: "Vasquez",
  email: "rvtest@gmail.com",
  admin: false,
  password: "rvtestpw"
})

User.create!({
  first_name: "Matt",
  last_name: "Ahern",
  email: "matest@gmail.com",
  admin: false,
  password: "matestpw"
})

User.create!({
  first_name: "Dan",
  last_name: "Kweon-Lee",
  email: "dktest@gmail.com",
  admin: false,
  password: "dktestpw"
})

p "Created #{User.count} users"

Post.destroy_all

Post.create!({ title:"hello", admin_message: "help",content: "content", sender_id: User.find_by(last_name: "Cessaro").id, recipient_id:User.find_by(last_name: "Moloney").id, rating: 4 })

Post.create!({ title:"hello", admin_message: "help",content: "content", sender_id: User.find_by(last_name: "Vasquez").id, recipient_id:User.find_by(last_name: "Kim").id, rating: 4 })

Post.create!({ title:"hello", admin_message: "help",content: "content", sender_id: User.find_by(last_name: "Moloney").id, recipient_id:User.find_by(last_name: "Vasquez").id, rating: 4 })

Post.create!({ title:"hello", admin_message: "help",content: "content", sender_id: User.find_by(last_name: "Kim").id, recipient_id:User.find_by(last_name: "Cessaro").id, rating: 5 })

Post.create!({ title:"Hello", admin_message: "Template",content: "Hello welcome to Pairing", sender_id: User.find_by(last_name: "Administrator").id, recipient_id:User.find_by(last_name: "Cessaro").id, rating: 4 })
p "Created #{Post.count} posts"

