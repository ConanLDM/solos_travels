# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
5.times do |i|
    Destination.create(
        name: "Destination #{i + 1}",
        details: 'Welcome to the sunny isles off the east coast of Central America',
        instruction: 'One of the most glorious destinations on the planet, this place is near the equator and sunny with pristine beaches all year round'
    )
end