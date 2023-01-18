class CreateDestinations < ActiveRecord::Migration[7.0]
  def change
    create_table :destinations do |t|
      t.string :name, null: false
      t.text :details, null: false
      t.text :instruction, null: false
      t.string :image, default: '/home/conan/solos_travels/app/assets/images/Man Sitting Down.jpg'
      t.timestamps
    end
  end
end
