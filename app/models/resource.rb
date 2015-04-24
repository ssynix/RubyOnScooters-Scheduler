class Resource < ActiveRecord::Base
	attr_accessible :name, :description, :numberOf, :storage_location, :max_reserve_time
	
	has_and_belongs_to_many :events

	validates :name, :presence => true, :uniqueness => true, on: :create

	def self.search(q)
		Resource.all do |res|
			res.events.where("start_date = ? and ((start <= ? and ending <= ?) or (start >= ? and ending >= ?))",q[:start_date],q[:ending],q[:ending],q[:start],q[:start])
		end
	end
end
