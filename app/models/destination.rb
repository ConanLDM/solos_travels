class Destination < ApplicationRecord
    validates :name, presence: true
    validates :details, presence: true
    validates :instruction, presence: true
end
