module MessagesHelper
	def current_user
		@current_user ||= session[:user_id] ? User.find_by_id(session[:user_id]) : nil
	end
end
