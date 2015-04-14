module ApplicationHelper

	def generate_hour_selections
		@hours_selections = Array.new(24.hours / 15.minutes) do |i| 
			(Time.now.midnight + (i*15.minutes)).strftime("%k:%M")
		end
	end

	def javascript(*files)
		content_for(:page_specific_js) { javascript_include_tag(*files) }
	end

end
