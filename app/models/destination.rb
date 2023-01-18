class Destination < ActiveRecord::Base
    validates :name, presence: true
    validates :details, presence: true
    validates :instruction, presence: true
end
