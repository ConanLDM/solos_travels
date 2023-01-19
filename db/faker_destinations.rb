require 'faker'

Destination.destroy_all

10.times do
  Destination.create(
    name: Faker::Address.country,
    details: Faker::Lorem.paragraph,
    instruction: Faker::Lorem.sentence
  )
end